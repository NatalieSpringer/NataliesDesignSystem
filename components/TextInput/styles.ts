import { Platform } from "react-native";
import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet((theme) => ({
	container: {
		borderRadius: 10,
		borderWidth: 1,
		borderColor: theme.typography.text,
		color: theme.typography.text,
		padding: 10,
		fontFamily: Platform.select({
			ios: "SFProText-Regular",
			android: "Roboto"
		}),
		width: "100%",
		textAlignVertical: "top",
		variants: {
			multiline: {
				false: {
					height: 48
				},
				true: {
					height: 100
				}
			}
		}
	}
}));

export { stylesheet };
