import * as fui from "@fluentui/react-components";
import { ReactElement } from "react";
import { QRCodeSVG } from "qrcode.react";
import { useLocation } from "react-router";

const GooglePlayLink: string = "http://at.xfox111.net/easylogon-android";

export default function DownloadDialog(): ReactElement
{
	const location = useLocation();
	const cls = useStyles();

	return (
		<fui.Dialog open={ location.hash === "#download" } onOpenChange={ () => document.location.replace("#") }>
			<fui.DialogSurface className={ cls.surface }>
				<fui.DialogBody className={ cls.body }>
					<fui.DialogTitle as="h1">Download EasyLogon app on your phone</fui.DialogTitle>

					<fui.DialogContent className={ cls.content }>

						<fui.Text as="p">
							Our mobile app allows you to store all your passwords in one place,
							and send them to other devices via QR code
						</fui.Text>

						<QRCodeSVG
							aria-label="Google Play QR code"
							value={ GooglePlayLink }
							size={ 250 }
							fgColor={ fui.tokens.colorNeutralForeground1 }
							bgColor="transparent" />

						<fui.Caption1 as="p">
							The app is currently available only for Android devices
						</fui.Caption1>

					</fui.DialogContent>

					<fui.DialogActions>

						<fui.DialogTrigger disableButtonEnhancement>
							<fui.Button appearance="subtle">Close</fui.Button>
						</fui.DialogTrigger>

						<fui.Button appearance="primary" as="a" target="_blank" href={ GooglePlayLink }>
							Google Play
						</fui.Button>

					</fui.DialogActions>

				</fui.DialogBody>
			</fui.DialogSurface>
		</fui.Dialog>
	);
}

const useStyles = fui.makeStyles({
	surface:
	{
		maxWidth: "300px"
	},
	body:
	{
		gridTemplateColumns: "unset"
	},
	content:
	{
		display: "flex",
		flexFlow: "column",
		gap: fui.tokens.spacingVerticalM
	}
});
