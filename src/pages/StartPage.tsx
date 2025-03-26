import * as fui from "@fluentui/react-components";
import * as ic from "@fluentui/react-icons";
import { ReactElement } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useStyles } from "./StartPage.styles";
import { QRCodeSVG } from "qrcode.react";
import MetaTitle from "../utils/MetaTitle";
import useConnection from "../utils/useConnection";
import StandWithUkraine from "../assets/StandWithUkraine.svg";
import AboutDialog from "../dialogs/AboutDialog";
import DownloadDialog from "../dialogs/DownloadDialog";
import QnaDialog from "../dialogs/QnaDialog";

export default function StartPage(): ReactElement
{
	const navigate = useNavigate();
	const [status, url] = useConnection(
		data => navigate("/success", { state: data }),
		() => navigate("/error", { state: true })
	);

	const cls = useStyles();

	const AboutIcon: ic.FluentIcon = ic.bundleIcon(ic.InfoFilled, ic.InfoRegular);
	const QnaIcon: ic.FluentIcon = ic.bundleIcon(ic.LockClosedFilled, ic.LockClosedRegular);
	// const DevIcon: ic.FluentIcon = ic.bundleIcon(ic.CodeFilled, ic.CodeRegular);

	return (
		<main className={ cls.root }>
			{ status === "failed" &&
				<fui.MessageBar intent="error" className={ cls.errorBar }>
					<fui.MessageBarBody className={ cls.errorBar_body }>
						<fui.MessageBarTitle>Cannot establish connection to the server.</fui.MessageBarTitle>
						Please check your internet connection and refresh the page
					</fui.MessageBarBody>
					<fui.MessageBarActions>
						<fui.Button onClick={ () => window.location.reload() }>Refresh</fui.Button>
					</fui.MessageBarActions>
				</fui.MessageBar>
			}

			<article className={ cls.content }>
				<header className={ cls.header }>
					<fui.Title2 align="center" as="h1">EasyLogon</fui.Title2>
					<fui.Text align="center">Sign in on any device with a few clicks</fui.Text>
				</header>

				<div className={ cls.qrRoot }
					aria-busy={ status === "connecting" || status === "reconnecting" }
					aria-errormessage={ status === "failed" ? "Cannot establish connection to the server. Please check your internet connection and refresh the page" : "" }
					aria-disabled={ status !== "connected" } aria-label="QR code"
				>
					<QRCodeSVG
						value={ url.href }
						size={ 288 }
						fgColor={ fui.tokens.colorNeutralForeground1 }
						bgColor="transparent"
						marginSize={ 4 } />

					<div className={ fui.mergeClasses(cls.loaderRoot, status === "connected" && cls.loaderRoot_hidden) }>
						{ status === "failed" ?
							<ic.ErrorCircleRegular fontSize={ 48 } color={ fui.tokens.colorStatusDangerBackground3 } />
							:
							<fui.Spinner size="huge" />
						}
						{ status === "reconnecting" &&
							<fui.MessageBar intent="warning">
								<fui.MessageBarBody>
									<fui.MessageBarTitle>Reconnecting...</fui.MessageBarTitle>
								</fui.MessageBarBody>
							</fui.MessageBar>
						}
					</div>
				</div>

				<fui.Text as="p">
					1. Open <fui.Link href="#download">EasyLogon app</fui.Link> on your phone<br aria-hidden />
					2. Scan the QR code<br aria-hidden />
					3. Select an account to send<br aria-hidden />
					4. Copy and paste your info on a login page
				</fui.Text>

				<fui.Button appearance="subtle" as="a" href="https://u24.gov.ua" target="_blank"
					icon={ { className: cls.u24_icon, children: <StandWithUkraine /> } }
				>
					#StandWithUkraine
				</fui.Button>

			</article>
			<footer className={ cls.footer }>
				<fui.Button as="a" href="#qna" size="small" appearance="subtle" icon={ <QnaIcon /> }>
					Is this secure?
				</fui.Button>
				<fui.Button as="a" href="#about" size="small" appearance="subtle" icon={ <AboutIcon /> }>
					About
				</fui.Button>
				{/* <fui.Button appearance="subtle" size="small" icon={ <DevIcon /> }>
					Add QR code authentication on my site
				</fui.Button> */}
			</footer>

			<Outlet />
			<MetaTitle />

			{ import.meta.env.DEV &&
				<fui.Text style={ { position: "fixed", top: 64, left: 10, userSelect: "text" } }>
					Status: { status }; URL: { url.href }<br />
					<fui.Button onClick={ () => navigator.clipboard.writeText(url.href) }>Write URI to clipboard</fui.Button><br />
					<fui.Link onClick={ () => navigate("/success", { state: { login: "login", password: "password" } }) }>/success (login + password)</fui.Link><br />
					<fui.Link onClick={ () => navigate("/success", { state: { login: "login".repeat(10), password: "password".repeat(10), freetext: "The quick brown fox jumps over the lazy dog.".repeat(10) } }) }>/success (overflow test)</fui.Link><br />
					<fui.Link onClick={ () => navigate("/success", { state: { freetext: "The quick brown fox jumps over the lazy dog.".repeat(2) } }) }>/success (freetext)</fui.Link><br />
					<fui.Link onClick={ () => navigate("/error", { state: true }) }>/error</fui.Link>
				</fui.Text>
			}

			<AboutDialog />
			<QnaDialog />
			<DownloadDialog />
		</main >
	);
}
