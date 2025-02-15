import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet((theme) => ({
	button: {
		marginTop: 20,
		width: "50%"
	},
	container: {
		backgroundColor: "#EAF2FF",
		borderRadius: 16,
		padding: 20
	}
}));

export { stylesheet };
