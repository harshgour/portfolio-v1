import React from "react";

type Props = {
	href: string;
	target: string;
	children: React.ReactNode;
};

const Link = (props: Props) => {
	return (
		<a
			href={props.href || "/"}
			target={props.target || "_blank"}
			className='flex justify-start items-center mr-11 mb-4 no-underline'>
			{props.children}
		</a>
	);
};

export default Link;
