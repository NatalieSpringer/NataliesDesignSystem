import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet((theme) => ({
	container: {
		alignItems: "center",
		aspectRatio: 1,
		borderRadius: 12,
		justifyContent: "center",
		width: 24,
		variants: {
			variant: {
				primary: {
					backgroundColor: theme.system.blue,
					textColor: "white"
				},
				secondary: {
					backgroundColor: theme.badge.background,
					textColor: theme.system.blue
				}
			}
		}
	}
}));

export { stylesheet };
