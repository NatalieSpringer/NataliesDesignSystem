import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet((theme) => ({
	button: {
		marginTop: 20,
		width: "50%"
	},
	container: {
		backgroundColor: theme.card.background,
		borderRadius: 16,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 20
	},
	textContainer: {
		width: "80%"
	}
}));

export { stylesheet };
