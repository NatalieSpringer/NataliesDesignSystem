import { Platform } from "react-native";
import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet((theme) => ({
	container: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "flex-start",
		width: "100%"
	},
	textInput: {
		color: theme.typography.text,
		fontFamily: Platform.select({
			ios: "SFProText-Regular",
			android: "Roboto"
		}),
		height: "100%",
		marginLeft: 10,
		fontWeight: "500",
		width: "90%"
	},
	search: {
		alignItems: "center",
		backgroundColor: theme.search.background,
		borderRadius: 100,
		flexDirection: "row",
		height: "100%",
		padding: 10,
		width: "100%"
	}
}));

export { stylesheet };
