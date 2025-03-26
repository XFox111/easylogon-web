import { Button, LargeTitle, makeStyles, Text, Title3, tokens } from "@fluentui/react-components";
import { ArrowCounterclockwiseRegular, ErrorCircleRegular } from "@fluentui/react-icons";
import { ReactElement } from "react";
import useNavigation from "../utils/useNavigation";
import { useLocation } from "react-router-dom";
import MetaTitle from "../utils/MetaTitle";

export default function ErrorPage(): ReactElement
{
	const { hrefProps } = useNavigation();
	const location = useLocation();
	const cls = useStyles();

	if (!location.state)
	{
		document.location.replace("/");
		return <></>;
	}

	return (
		<main className={ cls.root }>
			<header className={ cls.header }>
				<LargeTitle>
					<ErrorCircleRegular />
				</LargeTitle>
				<Title3 as="h1" align="center">Something went wrong</Title3>
			</header>

			<Text as="p" align="center">
				We received your data but were unable to decrypt it.
			</Text>

			<Button
				as="a" { ...hrefProps("/", { replace: true }) }
				appearance="transparent" icon={ <ArrowCounterclockwiseRegular /> }
			>
				Try again
			</Button>

			<MetaTitle title="Something went wrong" />
		</main>
	);
}

const useStyles = makeStyles({
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
		color: tokens.colorStatusDangerForeground1
	}
});
