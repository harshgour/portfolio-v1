import React from "react";

type Props = {
	children: React.ReactNode;
};

const Right = (props: Props) => {
	return (
		<div className='right flex flex-initial md:flex-1 flex-col'>
			{props.children}
		</div>
	);
};

export default Right;
