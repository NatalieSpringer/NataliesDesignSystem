import { UnistylesRegistry } from "react-native-unistyles";

const darkTheme = {
	general: {
		background: "111111"
	},
	system: {
		red: "rgba(255, 69, 58, 1)",
		orange: "rgba(255, 159, 10, 1)",
		yellow: "rgba(255, 214, 10, 1)",
		green: "rgba(48, 209, 88, 1)",
		mint: "rgba(99, 230, 226, 1)",
		teal: "rgba(64, 200, 224, 1)",
		cyan: "rgba(100, 210, 255, 1)",
		blue: "rgba(10, 132, 255, 1)",
		indigo: "rgba(94, 92, 230, 1)",
		purple: "rgba(191, 90, 242, 1)",
		pink: "rgba(255, 55, 95, 1)",
		gray: "rgba(152, 152, 157, 1)",
	},
	typography: {
		text: "white"
	}
};

const lightTheme = {
	general: {
		background: "white"
	},
	system: {
		red: "rgba(255, 59, 48, 1)",
		orange: "rgba(255, 149, 0, 1)",
		yellow: "rgba(255, 204, 0, 1)",
		green: "rgba(52, 199, 89, 1)",
		mint: "rgba(0, 199, 190, 1)",
		teal: "rgba(48, 176, 199, 1)",
		cyan: "rgba(50, 173, 230, 1)",
		blue: "rgba(0, 122, 255, 1)",
		indigo: "rgba(88, 86, 214, 1)",
		purple: "rgba(175, 82, 222, 1)",
		pink: "rgba(255, 45, 85, 1)",
		gray: "rgba(142, 142, 147, 1)",
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
