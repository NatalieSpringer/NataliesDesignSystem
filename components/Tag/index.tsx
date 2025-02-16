import React from "react";
import { TouchableOpacity } from "react-native";
import { TagProps } from "./types";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import { Text } from "../Text";

export const Tag = ({ onPress, text, variant }: TagProps) => {
	const { styles } = useStyles(stylesheet, {
		variant
	});

	const foregroundColor = styles.container.textColor;

	return (
		<TouchableOpacity
			accessible
			accessibilityLabel={text}
			accessibilityRole={!!onPress ? "button" : "image"}
			disabled={!onPress}
			onPress={onPress}
			style={styles.container}
		>
			<Text color={foregroundColor} size="xs" weight="bold">
				{text}
			</Text>
		</TouchableOpacity>
	);
};
