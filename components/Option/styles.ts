import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet((theme) => ({
	badge: {
		position: "absolute",
		right: -10,
		top: -10,
	},
	container: {
		alignItems: "center",
		backgroundColor: theme.card.background,
		borderRadius: 16,
		flexDirection: "row",
		gap: "2%",
		padding: 20,
		width: "100%",
		variants: {
			selected: {
				true: {
					backgroundColor: theme.card.background,
				},
				false: {
					backgroundColor: "transparent",
					borderColor: "#D4D6DD",
					borderWidth: 1,
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
		width: "90%",
	},
	textContainer: {
		gap: 5,
	}
}));

export { stylesheet };
