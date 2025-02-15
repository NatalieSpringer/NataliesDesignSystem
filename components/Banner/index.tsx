import React from "react";
import { View } from "react-native";
import { BannerProps } from "./types";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import { Text } from "../Text";
import { Button } from "../Button";

export const Banner = ({ description, onPress, title }: BannerProps) => {
	const { styles } = useStyles(stylesheet);

	return (
		<View style={styles.container}>
			<Text color="black" size="s" weight="bold">
				{title}
			</Text>
			<Text color="black" size="xs">
				{description}
			</Text>
			<View style={styles.button}>
				<Button onPress={onPress} text="Button" variant="primary" />
			</View>
		</View>
	);
};
