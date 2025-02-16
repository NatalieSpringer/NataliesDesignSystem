import React from "react";
import { TouchableOpacity, View } from "react-native";
import { CardHorizontalProps } from "./types";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import { Text } from "../Text";
import { Icon } from "../Icon";

export const CardHorizontal = ({
	description,
	onPress,
	title
}: CardHorizontalProps) => {
	const { styles, theme } = useStyles(stylesheet);

	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<View style={styles.textContainer}>
				<Text size="s" weight="bold">
					{title}
				</Text>
				<Text size="xs">{description}</Text>
			</View>
			<Icon color={theme.card.icon} name="chevronRight" size={16} />
		</TouchableOpacity>
	);
};
