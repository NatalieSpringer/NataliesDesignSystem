import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet((theme) => ({
	container: {
		backgroundColor: theme.divider.background,
		height: 2,
		width: "100%"
	}
}));

export { stylesheet };
