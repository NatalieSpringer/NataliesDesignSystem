import { UnistylesRuntime } from "react-native-unistyles";

export const mockAppTheme = (theme: "light" | "dark") => {
	// @ts-ignore
	jest.spyOn(UnistylesRuntime, "themeName", "get").mockReturnValueOnce(theme);
};
