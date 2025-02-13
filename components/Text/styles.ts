import { Platform } from "react-native";
import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet((theme) => ({
	text: {
		color: theme.typography.text,
		fontFamily: Platform.select({
			ios: "SFProText-Regular",
			android: "Roboto"
		}),
		variants: {
			size: {
				xxs: {
					fontSize: 12
				},
				xs: {
					fontSize: 14
				},
				s: {
					fontSize: 16
				},
				m: {
					fontSize: 18
				},
				l: {
					fontSize: 22
				},
				xl: {
					fontSize: 26
				},
				xxl: {
					fontSize: 32
				},
				xxxl: {
					fontSize: 42
				}
			},
			weight: {
				bold: {
					fontWeight: "bold"
				}
			}
		}
	}
}));

export { stylesheet };
