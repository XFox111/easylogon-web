import { Button, FluentProvider, makeStyles, mergeClasses } from "@fluentui/react-components";
import { BrandVariants, Theme, createDarkTheme, createLightTheme } from "@fluentui/react-components";
import { ReactElement } from "react";
import { useTheme } from "../utils/useTheme";
import Bmc from "../assets/Bmc.svg";

export default function BmcButton(): ReactElement
{
	const bmcTheme = useTheme(bmcLightTheme, bmcDarkTheme);
	const cls = useStyles();

	return (
		<FluentProvider theme={ bmcTheme } className={ mergeClasses(cls.root) } >
			<Button appearance="primary" icon={ <Bmc /> }
				as="a" href="https://buymeacoffee.com/xfox111" target="_blank"
			>
				Buy me a coffee
			</Button>
		</FluentProvider>
	);
}

const useStyles = makeStyles({
	root: {
		backgroundColor: "transparent",
	}
});

const bmcBrandRamp: BrandVariants =
{
	"10": "#050201",
	"20": "#20140C",
	"30": "#372014",
	"40": "#492918",
	"50": "#5C321D",
	"60": "#6F3C21",
	"70": "#834525",
	"80": "#984F2A",
	"90": "#AD5A2E",
	"100": "#C36433",
	"110": "#D96E37",
	"120": "#EF793C",
	"130": "#FF884A",
	"140": "#FFA170",
	"150": "#FFB792",
	"160": "#FFCCB3"
};

const bmcLightTheme: Theme =
{
	...createLightTheme(bmcBrandRamp),
	colorBrandBackground: bmcBrandRamp[110],
};

const bmcDarkTheme: Theme =
{
	...createDarkTheme(bmcBrandRamp),
	colorBrandBackground: bmcBrandRamp[120],
	colorBrandForeground1: bmcBrandRamp[110],
	colorBrandForeground2: bmcBrandRamp[120]
};
