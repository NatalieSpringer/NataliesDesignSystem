import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet((theme) => ({
	container: {
		width: "100%"
	},
	buttonContainer: {
		variants: {
			variant: {
				primary: {
					flexDirection: "row",
					gap: 8,
					justifyContent: "space-evenly"
				},
				secondary: {
					gap: 8
				}
			}
		}
	},
	primaryButton: {
		width: "50%"
	},
	secondaryButton: {
		gap: 8
	}
}));

export { stylesheet };
