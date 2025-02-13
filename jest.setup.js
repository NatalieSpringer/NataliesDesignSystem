import { jest } from "@jest/globals";
import "./theme";

jest.mock("react-native/Libraries/EventEmitter/NativeEventEmitter");

jest.mock("react-native-unistyles", () => {
	const unistyles = jest.requireActual("react-native-unistyles");
	return {
		...unistyles
	};
});
