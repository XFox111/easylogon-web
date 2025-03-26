import { useState, useEffect, useCallback } from "react";
import { Theme, webDarkTheme, webLightTheme } from "@fluentui/react-components";

const media = window.matchMedia("(prefers-color-scheme: dark)");

export function useTheme(lightTheme?: Theme, darkTheme?: Theme): Theme
{
	const getTheme = useCallback(
		(isDark: boolean) =>
			isDark ? (darkTheme ?? webDarkTheme) : (lightTheme ?? webLightTheme),
		[darkTheme, lightTheme]
	);

	const [theme, setTheme] = useState<Theme>(getTheme(media.matches));

	useEffect(() =>
	{
		const updateTheme = (args: MediaQueryListEvent) => setTheme(getTheme(args.matches));
		media.addEventListener("change", updateTheme);
		return () => media.removeEventListener("change", updateTheme);
	}, [getTheme]);

	return theme;
}
