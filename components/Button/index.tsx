import React from "react";
import { TouchableOpacity } from "react-native";
import { ButtonProps } from "./types";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import { Text } from "../Text";

export const Button = ({
	disabled = false,
	onPress,
	text,
	variant
}: ButtonProps) => {
	const { styles } = useStyles(stylesheet, {
		variant
	});

	const containerStyle = styles.container(disabled);
	const { textColor } = containerStyle;

	return (
		<TouchableOpacity
			accessible
			accessibilityLabel={text}
			accessibilityRole="button"
			disabled={disabled}
			onPress={onPress}
			style={containerStyle}
		>
			<Text color={textColor} size="s" weight="bold">
				{text}
			</Text>
		</TouchableOpacity>
	);
};
