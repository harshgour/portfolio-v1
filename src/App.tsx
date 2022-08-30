import React from "react";
import ThemeButton from "./organisms/ThemeButton/ThemeButton";
import Main from "./template/Main";
import Left from "./template/Left";
import Right from "./template/Right";
import Layout from "./template";
import cn from "classnames";

const LightTheme = {
	type: "light",
	backgroundPrimary: "#ffffff",
	backgroundSecondary: "#DFDFDD",
	fontPrimary: "#000000",
	fontSecondary: "#5A5A58",
};

const DarkTheme = {
	type: "dark",
	backgroundPrimary: "#151515",
	backgroundSecondary: "#202022",
	fontPrimary: "#ffffff",
	fontSecondary: "#A5A5A7",
};

export const themes = {
	light: LightTheme,
	dark: DarkTheme,
};

type Theme = {
	type: string;
	backgroundPrimary: string;
	backgroundSecondary: string;
	fontPrimary: string;
	fontSecondary: string;
};

function App() {
	const [theme, setTheme] = React.useState<Theme>(themes["dark"]);
	const toggleTheme = () => {
		console.log("theme");
		if (theme.type === "light") setTheme(themes["dark"]);
		else setTheme(themes["light"]);
	};
	React.useEffect(() => {
		setTheme(
			(themes as any)[
				localStorage.getItem("theme") ||
					(window.matchMedia("(prefers-color-scheme:light)").matches
						? "light"
						: "dark")
			],
		);
	}, []);

	React.useEffect(() => {
		localStorage.setItem("theme", theme.type);
	}, [theme]);

	return (
		<div
			className={cn({
				App: true,
				dark: theme.type === "dark",
				light: theme.type === "light",
			})}
			style={{
				backgroundColor: theme.backgroundPrimary,
				color: theme.fontPrimary,
			}}>
			<ThemeButton theme={theme} toggleTheme={toggleTheme} />
			<Layout theme={theme} toggleTheme={toggleTheme} />
		</div>
	);
}

export default App;
