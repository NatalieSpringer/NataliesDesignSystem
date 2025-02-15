import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet((theme) => ({
	container: {
		alignItems: "center",
		aspectRatio: 1,
		backgroundColor: theme.avatar.background,
		justifyContent: "center",
		variants: {
			size: {
				s: {
					width: 40,
					borderRadius: 20,
					size: 25
				},
				m: {
					width: 50,
					borderRadius: 25,
					size: 30
				},
				l: {
					width: 60,
					borderRadius: 30,
					size: 35
				}
			}
		}
	}
}));

export { stylesheet };
