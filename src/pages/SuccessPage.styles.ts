import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const useStyles = makeStyles({
	root:
	{
		display: "flex",
		flexFlow: "column",
		alignSelf: "center",
		justifySelf: "center",
		alignItems: "center",
		gap: tokens.spacingVerticalL,
		padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalL}`,

		animationName: "slideLeftIn",
		animationDuration: tokens.durationFast,
		animationTimingFunction: tokens.curveEasyEaseMax
	},
	header:
	{
		display: "flex",
		flexFlow: "column",
		alignItems: "center",
		color: tokens.colorStatusSuccessForeground1
	},
	section:
	{
		display: "flex",
		flexFlow: "column",
		width: "100%",
		maxWidth: "288px",
		gap: tokens.spacingVerticalMNudge
	},
	copyButton:
	{
		width: "100%",
		justifyContent: "flex-start",
		fontWeight: 400,
		whiteSpace: "pre-wrap",
		textAlign: "left",

		transitionProperty: "color, border-color",
		transitionDuration: tokens.durationFaster
	},
	dataText:
	{
		textOverflow: "ellipsis",
		overflow: "hidden",
		whiteSpace: "nowrap",
	},
	revealButton:
	{
		width: "20px",
		height: "20px",
		fontSize: "20px"
	},
	freeText:
	{
		textOverflow: "ellipsis",
		overflow: "hidden",
		whiteSpace: "pre",
		maxHeight: "60px"
	},
	copiedStyle:
	{
		color: tokens.colorStatusSuccessForeground1 + " !important",
		...shorthands.borderColor(tokens.colorStatusSuccessBorder1 + " !important")
	},
	copiedIcon:
	{
		animationName: "scaleUpFade",
		animationDuration: tokens.durationFast,
		animationTimingFunction: tokens.curveEasyEaseMax,
	}
});
