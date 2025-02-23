import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet((theme) => ({
	container: {
		paddingTop: 25,
		paddingHorizontal: 24,
		paddingBottom: 90,
		height: "100%"
	},
	safeArea: {
		backgroundColor: theme.general.background,
		flex: 1
	}
}));

export { stylesheet };
