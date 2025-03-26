import * as fui from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";
import { ReactElement } from "react";
import useNavigation from "../utils/useNavigation";
import BmcButton from "../components/BmcButton";
import { useLocation } from "react-router";
import Package from "../../package.json";

export default function AboutDialog(): ReactElement
{
	const location = useLocation();
	const { hrefProps } = useNavigation();
	const cls = useStyles();

	return (
		<fui.Dialog open={ location.hash === "#about" } onOpenChange={ () => document.location.replace("#") }>
			<fui.DialogSurface>
				<fui.DialogBody>
					<fui.DialogTitle as="h1"
						action={
							<fui.DialogTrigger action="close">
								<fui.Button appearance="subtle" aria-label="close" icon={ <Dismiss24Regular /> } />
							</fui.DialogTrigger>
						}
					>
						About
					</fui.DialogTitle>

					<fui.DialogContent className={ cls.content }>
						<fui.Text as="p">
							<fui.Subtitle1>EasyLogon</fui.Subtitle1><br aria-hidden />
							<fui.Caption1>Version { Package.version } (commit: { import.meta.env.VITE_COMMIT })</fui.Caption1><br aria-hidden />
							<fui.Link { ...hrefProps("/privacy") }>Privacy policy</fui.Link>
						</fui.Text>


						<fui.Text as="p">
							<fui.Subtitle2>Have any ideas?</fui.Subtitle2><br aria-hidden />

							Let me know via email at <fui.Link href="mailto:feedback@xfox111.net" target="_blank">feedback@xfox111.net</fui.Link>,
							or open an issue on <fui.Link href="https://github.com/xfox111/easylogon-web/issues" target="_blank">the project's GitHub page</fui.Link>

						</fui.Text>

						<fui.Text as="p">
							<fui.Subtitle2>Like the project?</fui.Subtitle2><br aria-hidden />
							Support me with a donation. Even small amount is a big deal!
						</fui.Text>
						<BmcButton />

						<fui.Text as="p">
							<fui.Link href="https://github.com/xfox111/easylogon-web" target="_blank">Source code</fui.Link><br aria-hidden />
							<fui.Link href="https://xfox111.net" target="_blank">My website</fui.Link><br aria-hidden />
							<fui.Link href="https://bsky.app/profile/xfox111.net" target="_blank">Follow me on Bluesky</fui.Link>
						</fui.Text>

						<fui.Text as="p">©{ new Date().getFullYear() } Eugene Fox. All rights reserved</fui.Text>
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
		gap: fui.tokens.spacingVerticalM
	},
	versionText:
	{
		userSelect: "text"
	}
});
