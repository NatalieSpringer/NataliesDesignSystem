import type { Config } from "jest";

const config: Config = {
	collectCoverage: true,
	preset: "jest-expo",
	setupFiles: ["<rootDir>/jest.setup.js"],
	setupFilesAfterEnv: ["<rootDir>/jestSetupAfterEnv.ts"],
	transformIgnorePatterns: [
		"node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg)"
	],
	verbose: true
};

export default config;
