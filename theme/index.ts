import { UnistylesRegistry } from "react-native-unistyles";

const darkTheme = {
	general: {
		background: "#111111"
	},
	avatar: {
		background: "#2F3036",
		icon: "#B3DAFF"
	},
	badge: {
		background: "#B3DAFF"
	},
	banner: {
		background: "#2F3036"
	},
	card: {
		background: "#2F3036",
		icon: "#8F9098"
	},
	divider: {
		background: "#2F3036"
	},
	image: {
		background: "#EAF2FF",
		icon: "#B3DAFF"
	},
	segmentedControl: {
		background: "#2F3036",
		textNotSelected: "#8F9098"
	},
	slider: {
		background: "#E8E9F1"
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
		gray: "rgba(152, 152, 157, 1)"
	},
	tag: {
		background: "#B3DAFF"
	},
	textInput: {
		placeholder: "#8F9098"
	},
	typography: {
		text: "white"
	}
};

const lightTheme = {
	general: {
		background: "white"
	},
	avatar: {
		background: "#EAF2FF",
		icon: "#B3DAFF"
	},
	badge: {
		background: "#B3DAFF"
	},
	banner: {
		background: "#EAF2FF"
	},
	card: {
		background: "#F8F9FE",
		icon: "#71727A"
	},
	divider: {
		background: "#E8E9F1"
	},
	image: {
		background: "#EAF2FF",
		icon: "#B3DAFF"
	},
	segmentedControl: {
		background: "#F8F9FE",
		textNotSelected: "#71727A"
	},
	slider: {
		background: "#E8E9F1"
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
		gray: "rgba(142, 142, 147, 1)"
	},
	tag: {
		background: "#B3DAFF"
	},
	textInput: {
		placeholder: "#8F9098"
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
