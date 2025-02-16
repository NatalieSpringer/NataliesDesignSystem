import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet((theme) => ({
	badge: {
		position: "absolute",
		right: -10,
		top: -10
	},
	container: {
		alignItems: "center",
		backgroundColor: theme.card.background,
		borderRadius: 16,
		flexDirection: "row",
		gap: "2%",
		paddingHorizontal: 20,
		paddingVertical: 15,
		width: "100%",
		variants: {
			selected: {
				true: {
					backgroundColor: theme.card.background,
					borderColor: theme.card.background,
					borderWidth: 1
				},
				false: {
					backgroundColor: "transparent",
					borderColor: theme.option.border,
					borderWidth: 1
				}
			}
		}
	},
	radioButton: {
		width: "8%"
	},
	text: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "90%"
	},
	textContainer: {
		gap: 5
	}
}));

export { stylesheet };
