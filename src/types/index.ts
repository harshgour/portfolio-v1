export type Theme = {
	type: string;
	backgroundPrimary: string;
	backgroundSecondary: string;
	fontPrimary: string;
	fontSecondary: string;
};

export type ThemeProviderProps = {
	theme: Theme;
	toggleTheme: () => void;
};
