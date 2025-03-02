import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet((theme) => ({
	container: ({ color, disabled }: { color?: string; disabled: boolean }) => {
		const colorToUse = color || theme.system.blue;
		return {
			alignItems: "center",
			borderRadius: 12,
			justifyContent: "center",
			minHeight: 40,
			opacity: disabled ? 0.9 : 1,
			variants: {
				variant: {
					primary: {
						backgroundColor: disabled
							? theme.system.gray
							: colorToUse,
						textColor: "white"
					},
					secondary: {
						backgroundColor: "transparent",
						borderWidth: 2,
						borderColor: disabled ? theme.system.gray : colorToUse,
						textColor: disabled ? theme.system.gray : colorToUse
					},
					tertiary: {
						backgroundColor: "transparent",
						textColor: disabled ? theme.system.gray : colorToUse
					}
				}
			}
		};
	},
	text: {
		color: "white"
	}
}));

export { stylesheet };
