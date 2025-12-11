import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { useEffect, useMemo, useState } from "react";
import CryptoJS from "crypto-js";

export default function useConnection(onSuccess: (data: UserData) => void, onError: () => void): [ConnectionState, URL]
{
	const [state, setState] = useState<ConnectionState>("connecting");
	const [connectionId, setConnectionId] = useState<string>(null!);
	const key: CryptoJS.lib.WordArray = useMemo(() => CryptoJS.lib.WordArray.random(256 / 8), []);

	useEffect(() =>
	{
		const connection: HubConnection = new HubConnectionBuilder()
			.withAutomaticReconnect()
			.withUrl(import.meta.env.VITE_SIGNALR_URL)
			.configureLogging(import.meta.env.DEV ? LogLevel.Debug : LogLevel.Error)
			.build();

		connection.onreconnecting(() => setState("reconnecting"));
		connection.onreconnected(() => setState("connected"));
		connection.on("OnMessage", encryptedData =>
		{
			const userData = decryptMessage<UserData>(encryptedData, key);

			if (!userData || !(userData.login || userData.password || userData.freetext))
				onError();
			else
				onSuccess(userData);
		});

		connection.start()
			.then(() =>
			{
				setConnectionId(connection.connectionId!);
				setState("connected");
			})
			.catch(() => setState("failed"));

		return () =>
		{
			connection.stop();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return [state, buildConnectionString(connectionId, key)];
}

function decryptMessage<T>(message: string, key: CryptoJS.lib.WordArray): T | undefined
{
	try
	{
		console.log(message, CryptoJS.enc.Base64.stringify(key));
		const raw: string = CryptoJS.AES.decrypt(message, key,
			{
				mode: CryptoJS.mode.ECB,
				padding: CryptoJS.pad.Pkcs7
			})
			.toString(CryptoJS.enc.Utf8);

		return JSON.parse(raw) as T;
	}
	catch (error)
	{
		console.error("Error decrypting message:", error);
		return undefined;
	}
}

function buildConnectionString(connectionId: string, key: CryptoJS.lib.WordArray): URL
{
	const url: URL = new URL(`elp://auth/${connectionId}`);
	url.searchParams.append("key", key?.toString(CryptoJS.enc.Base64));
	url.searchParams.append("via", import.meta.env.VITE_ENDPOINT_URL);

	if (document.referrer && new URL(document.referrer).host !== document.location.host)
		url.searchParams.append("res", new URL(document.referrer).host);

	return url;
}

export type ConnectionState = "connecting" | "reconnecting" | "connected" | "failed";

export type UserData =
	{
		login?: string;
		password?: string;
		freetext?: string;
	};
