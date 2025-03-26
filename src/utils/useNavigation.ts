import { AnchorHTMLAttributes } from "react";
import { NavigateFunction, NavigateOptions, useNavigate } from "react-router-dom";

export default function useNavigation()
{
	const navigate: NavigateFunction = useNavigate();

	const hrefProps = (href: string, options?: NavigateOptions): Partial<AnchorHTMLAttributes<HTMLAnchorElement>> => ({
		href,
		onClick: (e) =>
		{
			e.preventDefault();
			navigate(href, options);
		}
	});

	return { hrefProps, navigate };
}
