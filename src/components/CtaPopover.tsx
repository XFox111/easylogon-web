import { Popover, PopoverSurface, Subtitle1, Button, Text, makeStyles, tokens } from "@fluentui/react-components";
import { PersonFeedbackRegular } from "@fluentui/react-icons";
import { ReactElement, useEffect, useState } from "react";
import BmcButton from "./BmcButton";

export default function CtaPopover(): ReactElement
{
	const [ctaOpen, setCtaOpen] = useState<boolean>(false);
	const cls = useStyles();

	useEffect(() =>
	{
		// We have to open it manually, otherwise it struggles to find the target anchor
		setCtaOpen(true);
	}, []);

	return (
		<>
			<div className={ cls.popoverTarget } id="popoverTarget" />

			<Popover open={ ctaOpen } unstable_disableAutoFocus appearance="brand"
				positioning={ {
					align: "top",
					position: "before",
					offset: { mainAxis: 24, crossAxis: -12 },
					target: document.getElementById("popoverTarget")
				} }
			>
				<PopoverSurface tabIndex={ -1 } className={ cls.popoverSurface }>

					<Text as="p">
						<Subtitle1>Did you like the service?</Subtitle1><br aria-hidden />
						Help us improve by submitting an idea, or supporting with a donation
					</Text>

					<div className={ cls.popoverActions }>
						<Button as="a" href="mailto:feedback@xfox111.net" target="_blank"
							appearance="primary" icon={ <PersonFeedbackRegular /> }
						>
							Leave feedback
						</Button>
						<BmcButton />
					</div>

				</PopoverSurface>
			</Popover>
		</>
	);
}

const useStyles = makeStyles({
	popoverTarget:
	{
		position: "fixed",
		bottom: 0,
		right: 0
	},
	popoverSurface:
	{
		display: "flex",
		flexFlow: "column",
		gap: tokens.spacingVerticalM,
		marginRight: tokens.spacingHorizontalXXXL + " !important"
	},
	popoverActions:
	{
		display: "flex",
		justifyContent: "flex-end",
		gap: tokens.spacingHorizontalS
	}
});
