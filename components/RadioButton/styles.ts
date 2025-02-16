import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet((theme) => ({
	container: {
		aspectRatio: 1,
		borderRadius: 64,
		borderColor: theme.radioButton.border,
		justifyContent: "center",
		variants: {
			selected: {
				true: {
					backgroundColor: theme.system.blue,
					borderWidth: 0
				},
				false: {
					backgroundColor: "transparent",
					borderWidth: 1
				}
			},
			size: {
				s: {
					width: 16
				},
				m: {
					width: 24
				},
				l: {
					width: 32
				}
			}
		}
	},
	innerCircle: {
		alignSelf: "center",
		aspectRatio: 1,
		backgroundColor: "white",
		borderRadius: 24,
		variants: {
			size: {
				s: {
					width: 6
				},
				m: {
					width: 10
				},
				l: {
					width: 12
				}
			}
		}
	}
}));

export { stylesheet };
