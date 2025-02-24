import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet((theme) => ({
	container: {
		height: "100%"
	},
	paddingTop: {
		paddingTop: 24
	},
	paddingHorizontal: {
		paddingHorizontal: 24
	},
	safeArea: {
		backgroundColor: theme.general.background,
		flex: 1
	}
}));

export { stylesheet };
