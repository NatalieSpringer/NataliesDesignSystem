import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet((theme) => ({
	image: {
		position: "absolute"
	},
	container: {
		alignItems: "center",
		aspectRatio: 16 / 9,
		backgroundColor: theme.avatar.background,
		borderRadius: 10,
		justifyContent: "center",
		variants: {
			size: {
				s: {
					width: 130,
					size: 25
				},
				m: {
					width: 160,
					size: 30
				},
				l: {
					width: 190,
					size: 35
				}
			}
		}
	}
}));

export { stylesheet };
