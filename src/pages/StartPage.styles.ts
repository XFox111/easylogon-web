import { makeStyles, tokens } from "@fluentui/react-components";

export const useStyles = makeStyles({
	root:
	{
		display: "grid",
		gridTemplateRows: "auto 1fr auto"
	},
	content:
	{
		width: "100%",
		maxWidth: "320px",
		boxSizing: "border-box",
		alignSelf: "center",
		justifySelf: "center",
		gridRow: 2,

		display: "flex",
		flexFlow: "column",
		alignItems: "center",

		padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalL}`,
		gap: tokens.spacingVerticalXL,

		animationName: "slideLeftIn",
		animationDuration: tokens.durationFast,
		animationTimingFunction: tokens.curveEasyEaseMax,
	},
	header:
	{
		display: "flex",
		flexFlow: "column",
		gap: tokens.spacingVerticalMNudge
	},
	errorBar:
	{
		margin: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalL}`,

		animationName: "fadeIn",
		animationDuration: tokens.durationSlower
	},
	errorBar_body:
	{
		whiteSpace: "normal",
		margin: `${tokens.spacingVerticalSNudge} ${tokens.spacingHorizontalNone}`
	},
	qrRoot:
	{
		position: "relative"
	},
	loaderRoot:
	{
		position: "absolute",
		top: "0",
		right: "0",
		width: "100%",
		height: "100%",
		display: "flex",
		flexFlow: "column",
		gap: tokens.spacingVerticalM,
		alignItems: "center",
		justifyContent: "center",
		backdropFilter: "blur(8px)",

		transitionProperty: "opacity",
		transitionTimingFunction: tokens.curveEasyEaseMax,
		transitionDuration: tokens.durationNormal
	},
	loaderRoot_hidden:
	{
		opacity: "0",
		pointerEvents: "none"
	},
	u24_icon:
	{
		height: "unset",
		width: "unset",
		marginRight: tokens.spacingHorizontalMNudge
	},
	footer:
	{
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
		margin: "12px",
		gap: "4px",
		gridRow: 3
	}
});
