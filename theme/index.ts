import { UnistylesRegistry } from "react-native-unistyles";

const darkTheme = {
	general: {
		background: "111111"
	},
	typography: {
		text: "white"
	}
};

const lightTheme = {
	general: {
		background: "white"
	},
	typography: {
		text: "black"
	}
};

type AppThemes = {
	dark: typeof darkTheme;
	light: typeof lightTheme;
};

declare module "react-native-unistyles" {
	export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addThemes({
	light: lightTheme,
	dark: darkTheme
}).addConfig({
	adaptiveThemes: true
});

export { AppThemes, lightTheme, darkTheme };
