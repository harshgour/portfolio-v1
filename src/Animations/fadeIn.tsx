import React, { FC } from "react";
import { useIsVisible } from "../Hooks/useIsVisible";

export type From = "top" | "bottom" | "left" | "right";

export function getFromPosition(from: From) {
	switch (from) {
		case "bottom":
			return "top";
		case "top":
			return "bottom";
		case "left":
			return "right";
		case "right":
			return "left";
	}
}

type Props = {
	children: React.ReactNode;
	from: From;
	positionOffset: number;
	triggerOffset: number;
	delayInMilliseconds?: number;
	durationInMilliseconds?: number;
};

const defaultProps = {
	delayInMilliseconds: 0,
	durationInMilliseconds: 1200,
};

export const FadeIn: FC<Props> = (props) => {
	const {
		from,
		triggerOffset,
		positionOffset,
		delayInMilliseconds,
		durationInMilliseconds,
	} = {
		...defaultProps,
		...props,
	};

	const [isVisible, isVisibleRef] = useIsVisible<HTMLDivElement>({
		offset: triggerOffset,
	});

	const fromPosition = getFromPosition(from);

	return (
		<div
			style={{
				position: "relative",
				[fromPosition]: isVisible ? 0 : positionOffset,
				opacity: isVisible ? 1 : 0,
				transition: `${fromPosition} ${durationInMilliseconds}ms, opacity ${durationInMilliseconds}ms`,
				transitionDelay: `${delayInMilliseconds}ms`,
			}}
			ref={isVisibleRef}>
			{props.children}
		</div>
	);
};
