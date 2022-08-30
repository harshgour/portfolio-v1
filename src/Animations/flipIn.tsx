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
	positionOffset?: number;
	triggerOffset?: number;
	delayInMilliseconds?: number;
	durationInMilliseconds?: number;
};

const defaultProps = {
	delayInMilliseconds: 0,
	durationInMilliseconds: 1200,
};

export const FlipIn: FC<Props> = (props) => {
	const { triggerOffset } = {
		...defaultProps,
		...props,
	};

	const [isVisible, isVisibleRef] = useIsVisible<HTMLDivElement>({
		offset: triggerOffset,
	});

	return (
		<div
			style={{
				position: "relative",
				opacity: isVisible ? 1 : 0,
				animation: isVisible ? "flipInX 1.5s forwards" : "",
			}}
			ref={isVisibleRef}>
			{props.children}
		</div>
	);
};
