import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "./index.scss";
import { ThemeProviderProps } from "../../types";

const ThemeButton = (props: ThemeProviderProps) => {
	return (
		<span
			className='theme-button cursor-pointer'
			onClick={props.toggleTheme}
			aria-label='Toggle theme'>
			{props.theme.type === "dark" && (
				<FaMoon
					className='icon fixed top-0 border-0 right-0 z-10'
					color='#F4E34F'
					size={24}
				/>
			)}
			{props.theme.type === "light" && (
				<FaSun
					className='icon fixed top-0 border-0 right-0 z-10'
					color='#F79B08'
					size={24}
				/>
			)}

			<svg
				width='80'
				height='80'
				aria-hidden='true'
				className='corner fixed top-0 border-0 right-0 transition-all hover:opacity-80'
				style={{ fill: `${props.theme.backgroundSecondary}` }}>
				<polyline points='0,0 80,80 80,0 ' />
			</svg>
		</span>
	);
};

export default ThemeButton;
