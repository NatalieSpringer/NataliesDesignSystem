import React from "react";
import { View } from "react-native";
import { BadgeProps } from "./types";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import { Text } from "../Text";
import { Icon } from "../Icon";

export const Badge = ({ name, text, variant }: BadgeProps) => {
	const { styles, theme } = useStyles(stylesheet, {
		variant
	});

	const foregroundColor = styles.container.textColor;

	return (
		<View style={styles.container}>
			{!!text && (
				<Text color={foregroundColor} size="s" weight="bold">{text}</Text>
			)}
			{!!name && (
				<Icon color={foregroundColor} name={name} size={15} weight="bold" />
			)}
		</View>
	);
};
