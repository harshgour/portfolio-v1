import React from "react";

type Props = {
	children: React.ReactNode;
};

const Main = (props: Props) => {
	return (
		<div className='flex flex-col max-w-5xl mx-auto min-h-screen px-4  sm:flex-row'>
			{props.children}
		</div>
	);
};

export default Main;
