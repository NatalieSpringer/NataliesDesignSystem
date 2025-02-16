import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet((theme) => ({
	container: {
		alignItems: "center",
		alignSelf: "flex-start",
		borderRadius: 12,
		justifyContent: "center",
		paddingHorizontal: 8,
		height: 24,
		variants: {
			variant: {
				primary: {
					backgroundColor: theme.system.blue,
					textColor: "white"
				},
				secondary: {
					backgroundColor: "#B3DAFF",
					textColor: theme.system.blue
				}
			}
		}
	}
}));

export { stylesheet };
