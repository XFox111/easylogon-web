import { Button, Link, MessageBar, MessageBarBody, Skeleton, SkeletonItem, Subtitle1, Text, Title2 } from "@fluentui/react-components";
import { ReactElement, useEffect, useState } from "react";
import useNavigation from "../utils/useNavigation";
import { ChevronLeftRegular } from "@fluentui/react-icons";
import MetaTitle from "../utils/MetaTitle";
import ReactMarkdown, { Components } from "react-markdown";
import { useStyles } from "./PrivacyPage.styles";
import { PrivacyPageSkeleton } from "./PrivacyPage.skeleton";

const PrivacyPolicyUrl: string = "https://raw.githubusercontent.com/XFox111/easylogon-web/refs/heads/main/PRIVACY.md";

export default function PrivacyPage(): ReactElement
{
	const { hrefProps } = useNavigation();
	const cls = useStyles();

	const [policy, setPolicy] = useState<string | null | false>(null);

	useEffect(() =>
	{
		fetch(PrivacyPolicyUrl)
			.then(res => res.text())
			.then(setPolicy)
			.catch(() => setPolicy(false));
	}, []);

	return (
		<main className={ cls.root }>
			<header className={ cls.header }>
				<Button as="a" { ...hrefProps("/") } appearance="subtle" icon={ <ChevronLeftRegular /> }>
					Back
				</Button>

				<div className={ cls.titleContainer }>
					<Title2 as="h1" className={ cls.headerTitle }>Privacy policy</Title2>
					{ policy !== false &&
						<div className={ cls.lastUpdated }>
							<Text>
								Last updated: { policy ? new Date(parseInt(policy.split("\n---\n")[0]) * 1000).toDateString() : "" }
							</Text>
							{ policy === null &&
								<Skeleton className={ cls.lastUpdatedSkeleton }>
									<SkeletonItem />
								</Skeleton>
							}
						</div>
					}
				</div>
			</header>

			{ policy === null ?
				<PrivacyPageSkeleton />
				:
				<article className={ cls.article }>
					{ policy ?
						<ReactMarkdown components={ customMarkdownComponents }>
							{ policy.split("\n---\n")[1] }
						</ReactMarkdown>
						:
						<MessageBar intent="error" layout="multiline">
							<MessageBarBody>
								We couldn't fetch privacy policy. Try again later, or view it
								on <Link href={ PrivacyPolicyUrl } target="_blank">GitHub</Link>.
							</MessageBarBody>
						</MessageBar>
					}
					<Text as="p">
						©{ new Date().getFullYear() } <Link href="https://xfox111.net" target="_blank">Eugene Fox</Link>.
						All rights reserved
					</Text>
				</article>
			}

			<MetaTitle title="Privacy policy" />
		</main>
	);
}

const customMarkdownComponents: Components =
{
	a: (props) =>
		<Link target="_blank" href={ props.href }>{ props.children }</Link>,
	h2: (props) =>
		<Subtitle1 as="h2">{ props.children }</Subtitle1>
};
