import { ReactElement } from "react";

export default function MetaTitle(props: { title?: string }): ReactElement
{
	return (
		<title>{ props.title ? `${props.title} - EasyLogon` : "EasyLogon" }</title>
	);
}
