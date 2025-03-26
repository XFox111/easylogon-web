import { makeStyles, tokens } from "@fluentui/react-components";

export const useStyles = makeStyles({
	root:
	{
		margin: `${tokens.spacingVerticalXL} ${tokens.spacingHorizontalXXXL}`,

		animationName: "fadeIn",
		animationDuration: tokens.durationSlow,
	},
	header:
	{
		display: "flex",
		flexFlow: "column",
		alignItems: "flex-start",
		marginBottom: tokens.spacingVerticalXL,
	},
	headerTitle:
	{
		margin: 0
	},
	titleContainer:
	{
		display: "flex",
		flexFlow: "column",
		userSelect: "text"
	},
	lastUpdated:
	{
		display: "flex",
		alignItems: "center",
		gap: tokens.spacingHorizontalSNudge
	},
	lastUpdatedSkeleton:
	{
		width: "160px"
	},
	article:
	{
		display: "flex",
		flexFlow: "column",
		userSelect: "text",

		animationName: "fadeIn",
		animationDuration: tokens.durationNormal,
		animationTimingFunction: tokens.curveEasyEaseMax,

		gap: tokens.spacingVerticalM,
	},
});
