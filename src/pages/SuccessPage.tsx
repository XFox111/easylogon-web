import { Button, LargeTitle, mergeClasses, SplitButton, Title3 } from "@fluentui/react-components";
import * as ic from "@fluentui/react-icons";
import { ReactElement, useMemo, useState } from "react";
import useNavigation from "../utils/useNavigation";
import { useStyles } from "./SuccessPage.styles";
import CtaPopover from "../components/CtaPopover";
import useTimeout from "../utils/useTimeout";
import { UserData } from "../utils/useConnection";
import { useLocation } from "react-router-dom";
import MetaTitle from "../utils/MetaTitle";

export default function SuccessPage(): ReactElement
{
	const { hrefProps } = useNavigation();
	const location = useLocation();
	const data: UserData = location.state as UserData ?? document.location.replace("/");

	const cls = useStyles();

	const [showText, setShowText] = useState<boolean>(false);
	const revealIcon = useMemo(
		() => showText ?
			<ic.EyeRegular className={ cls.copiedIcon } /> :
			<ic.EyeOffRegular className={ cls.copiedIcon } />,
		[showText, cls]);

	const [loginCopy, triggerLoginCopy] = useTimeout(3000);
	const [otherCopy, triggerOtherCopy] = useTimeout(3000);

	const handleCopy = async (text: string, animationTrigger: () => void) =>
	{
		await navigator.clipboard.writeText(text);
		animationTrigger();
	};

	return (
		<>
			<main className={ cls.root }>
				<header className={ cls.header }>
					<LargeTitle>
						<ic.CheckmarkCircleRegular />
					</LargeTitle>
					<Title3 as="h1" align="center">Account information received!</Title3>
				</header>

				<section className={ cls.section }>
					{ data.login &&
						<Button
							aria-label="Copy login to the clipboard"
							className={ mergeClasses(cls.copyButton, loginCopy && cls.copiedStyle) }
							onClick={ () => handleCopy(data.login!, triggerLoginCopy) }
							icon={ loginCopy ? <ic.CheckmarkRegular className={ cls.copiedIcon } /> : <ic.PersonRegular /> }
						>
							<span className={ cls.dataText }>{ data.login }</span>
						</Button>
					}

					{ data.password &&
						<SplitButton
							aria-label="Copy password to the clipboard"
							primaryActionButton={ {
								className: mergeClasses(cls.copyButton, otherCopy && cls.copiedStyle),
								onClick: () => handleCopy(data.password!, triggerOtherCopy),
							} }
							icon={ otherCopy ? <ic.CheckmarkRegular className={ cls.copiedIcon } /> : <ic.KeyRegular /> }
							menuButton={ { "aria-hidden": true, "aria-label": "Reveal text. Not supported by the Narrator", onClick: () => setShowText(!showText), appearance: showText ? "primary" : "secondary" } }
							menuIcon={ { className: cls.revealButton, children: revealIcon } }
						>
							<span className={ cls.dataText }>{ showText ? data.password : "••••••••••••••" }</span>
						</SplitButton>
					}

					{ data.freetext &&
						<SplitButton
							aria-label="Copy text to the clipboard"
							primaryActionButton={ {
								className: mergeClasses(cls.copyButton, otherCopy && cls.copiedStyle),
								onClick: () => handleCopy(data.freetext!, triggerOtherCopy),
							} }
							icon={ otherCopy ? <ic.CheckmarkRegular className={ cls.copiedIcon } /> : <ic.TextboxAlignMiddleLeftRegular /> }
							menuButton={ { "aria-hidden": true, "aria-label": "Reveal text. Not supported by the Narrator", onClick: () => setShowText(!showText), appearance: showText ? "primary" : "secondary" } }
							menuIcon={ { className: cls.revealButton, children: revealIcon } }
						>
							<span className={ cls.freeText }>
								{ showText ?
									data.freetext :
									data.freetext.split("\n").map(i => "•".repeat(i.length)).join("\n")
								}
							</span>
						</SplitButton>
					}
				</section>

				<Button
					as="a" { ...hrefProps("/", { replace: true }) }
					appearance="transparent" icon={ <ic.ChevronLeftRegular /> }
				>
					Back
				</Button>

			</main>

			<CtaPopover />
			<MetaTitle title="Credentials received" />
		</>
	);
}
