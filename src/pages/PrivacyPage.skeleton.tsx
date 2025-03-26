import { makeStyles, Skeleton, SkeletonItem, tokens } from "@fluentui/react-components";

export function PrivacyPageSkeleton()
{
	const cls = useStyles();

	return (
		<Skeleton className={ cls.contentSkeleton }>
			<SkeletonItem size={ 24 } className={ cls.skeletonHeader } />
			<div className={ cls.skeletonSection }>
				<SkeletonItem />
				<SkeletonItem />
				<SkeletonItem />
				<SkeletonItem />
				<SkeletonItem />
				<SkeletonItem />
			</div>
			<SkeletonItem size={ 24 } className={ cls.skeletonHeader } />
			<div className={ cls.skeletonSection }>
				<SkeletonItem />
				<SkeletonItem />
				<SkeletonItem />
				<SkeletonItem />
				<SkeletonItem />
				<SkeletonItem />
				<SkeletonItem />
				<SkeletonItem />
				<SkeletonItem />
			</div>
			<SkeletonItem size={ 24 } className={ cls.skeletonHeader } />
			<div className={ cls.skeletonSection }>
				<SkeletonItem />
				<SkeletonItem />
			</div>
		</Skeleton>
	);
}

const useStyles = makeStyles({
	contentSkeleton:
	{
		display: "flex",
		flexFlow: "column"
	},
	skeletonHeader:
	{
		maxWidth: "240px"
	},
	skeletonSection:
	{
		display: "flex",
		flexFlow: "column",
		margin: "14px 0",
		marginLeft: "40px",
		gap: tokens.spacingVerticalSNudge
	}
});
