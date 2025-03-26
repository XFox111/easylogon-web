import { ReactElement } from "react";
import { Helmet } from "react-helmet";

export default function MetaTitle(props: { title?: string }): ReactElement
{
	return (
		<Helmet>
			<title>{ props.title ? `${props.title} - EasyLogon` : "EasyLogon" }</title>
		</Helmet>
	);
}
