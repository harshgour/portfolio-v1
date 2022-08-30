import React from "react";

type Props = {
	children: React.ReactNode;
};

const Left = (props: Props) => {
	return (
		<div className='left flex flex-initial md:flex-1 flex-col'>
			{props.children}
		</div>
	);
};

export default Left;
