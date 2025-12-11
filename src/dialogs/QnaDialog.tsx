import * as fui from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";
import { ReactElement } from "react";
import { useLocation } from "react-router";

export default function QnaDialog(): ReactElement
{
	const location = useLocation();
	const cls = useStyles();

	return (
		<fui.Dialog open={ location.hash === "#qna" } onOpenChange={ () => document.location.replace("#") }>
			<fui.DialogSurface>
				<fui.DialogBody>
					<fui.DialogTitle as="h1"
						action={
							<fui.DialogTrigger action="close">
								<fui.Button appearance="subtle" aria-label="close" icon={ <Dismiss24Regular /> } />
							</fui.DialogTrigger>
						}
					>
						Q&amp;A
					</fui.DialogTitle>

					<fui.DialogContent className={ cls.content }>

						<div className={ cls.section }>
							<fui.Subtitle2 as="h2">How does it work?</fui.Subtitle2>
							<fui.Text as="p">
								When you open this site, it generates a QR code with a unique session ID and an encryption key.
								Once you scan the QR code with EasyLogon mobile app, it will encrypt your login information and send it to this device.
								After that, it can be decrypted and used to log you in.
							</fui.Text>
						</div>

						<div className={ cls.section }>
							<fui.Subtitle2 as="h2">Is my data sent directly to this device?</fui.Subtitle2>
							<fui.Text as="p">
								Almost. First the data is sent to a relay server, which then forwards it here.
								This approach was chosen to avoid networking issues that can happen on some networks
								when using peer-to-peer protocols. <b>The relay server doesn't store your data,
									nor it has any capability to decrypt it.</b>
							</fui.Text>
						</div>

						<div className={ cls.section }>
							<fui.Subtitle2 as="h2">How is my data secured?</fui.Subtitle2>
							<fui.Text as="p">
								Your data is end-to-end encrypted using AES-256 algorithm (which was, by the
								way, <fui.Link href="https://en.wikipedia.org/wiki/Advanced_Encryption_Standard#Security" target="_blank">
									approved by the NSA for encrypting top secret information</fui.Link>).
								While the encryption key is symmetric (meaning it can be used for both encryption and decryption),
								since the key is never sent through the network, it can be only intercepted using spyware,
								or by someone who is standing right behind you.
							</fui.Text>
						</div>

						<div className={ cls.section }>
							<fui.Subtitle2 as="h2">What about mobile app?</fui.Subtitle2>
							<fui.Text as="p">
								Your credentials in EasyLogon mobile app are stored in a secure storage, using the
								means provided by the operating system. The specific implementation depends on the platform.
								See <fui.Link href="https://learn.microsoft.com/en-us/dotnet/maui/platform-integration/storage/secure-storage#platform-differences" target="_blank">this article</fui.Link> for
								more information.
							</fui.Text>
						</div>

						<div className={ cls.section }>
							<fui.Subtitle2 as="h2">How do I know if you are telling the truth?</fui.Subtitle2>
							<fui.Text as="p">
								<fui.Link href="http://at.xfox111.net/easylogon-src" target="_blank">We have released souce code for each component of this service on GitHub</fui.Link>,
								so every aspect of the system, and every future change can be viewed and verified by anyone.
								This is a non-commercial project, so we don't collect or sell any of your data either.
							</fui.Text>
						</div>

					</fui.DialogContent>
				</fui.DialogBody>
			</fui.DialogSurface>
		</fui.Dialog>
	);
}

const useStyles = fui.makeStyles({
	content:
	{
		display: "flex",
		flexFlow: "column",
		gap: fui.tokens.spacingVerticalL,
		userSelect: "text"
	},
	section:
	{
		display: "flex",
		flexFlow: "column",
		gap: fui.tokens.spacingVerticalS,
	}
});
