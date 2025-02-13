export default ({ config }) => ({
	...config,
	name: "NDS",
	slug: "natalie-design-system",
	version: "1.0.0",
	orientation: "portrait",
	icon: "./assets/icon.png",
	newArchEnabled: true,
	userInterfaceStyle: "automatic",
	splash: {
		image: "./assets/splash.png",
		resizeMode: "contain",
		backgroundColor: "#ffffff"
	},
	updates: {
		fallbackToCacheTimeout: 0
	},
	assetBundlePatterns: ["**/*"],
	ios: {
		bundleIdentifier: "com.natalie.designsystem",
		supportsTablet: true
	},
	android: {
		adaptiveIcon: {
			foregroundImage: "./assets/adaptive-icon.png",
			backgroundColor: "#FFFFFF"
		},
		package: "com.natalie.designsystem"
	},
	web: {
		favicon: "./assets/favicon.png"
	},
	plugins: [
		[
			"expo-font",
			{
				fonts: [
					"./assets/fonts/SF-Pro-Text-Black.otf",
					"./assets/fonts/SF-Pro-Text-BlackItalic.otf",
					"./assets/fonts/SF-Pro-Text-Bold.otf",
					"./assets/fonts/SF-Pro-Text-BoldItalic.otf",
					"./assets/fonts/SF-Pro-Text-Heavy.otf",
					"./assets/fonts/SF-Pro-Text-HeavyItalic.otf",
					"./assets/fonts/SF-Pro-Text-Light.otf",
					"./assets/fonts/SF-Pro-Text-LightItalic.otf",
					"./assets/fonts/SF-Pro-Text-Medium.otf",
					"./assets/fonts/SF-Pro-Text-MediumItalic.otf",
					"./assets/fonts/SF-Pro-Text-Regular.otf",
					"./assets/fonts/SF-Pro-Text-RegularItalic.otf",
					"./assets/fonts/SF-Pro-Text-Semibold.otf",
					"./assets/fonts/SF-Pro-Text-SemiboldItalic.otf",
					"./assets/fonts/SF-Pro-Text-Thin.otf",
					"./assets/fonts/SF-Pro-Text-ThinItalic.otf",
					"./assets/fonts/SF-Pro-Text-Ultralight.otf",
					"./assets/fonts/SF-Pro-Text-UltralightItalic.otf"
				]
			}
		]
	]
});
