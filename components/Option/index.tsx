import React from "react";
import { TouchableOpacity, View } from "react-native";
import { OptionProps } from "./types";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import { Text } from "../Text";
import { RadioButton } from "../RadioButton";
import { Badge } from "../Badge";

export const Option = ({
	leftSubtitle,
	leftTitle,
	onPress,
	rightSubtitle,
	rightTitle,
	selected = false,
}: OptionProps) => {
	const { styles, theme } = useStyles(stylesheet, {
		selected
	});

	return (
		<TouchableOpacity
			accessible
			accessibilityLabel={`${leftTitle} ${leftSubtitle} ${rightTitle} ${rightSubtitle}`}
			accessibilityRole="button"
			onPress={(): void => { onPress(!selected)}}
			style={styles.container}
		>
			<View style={styles.radioButton}>
				<RadioButton selected={selected} size="m" />
			</View>
			<View style={styles.text}>
				<View style={styles.textContainer}>
					<Text size="s" weight="bold">
						{leftTitle}
					</Text>
					{!!leftSubtitle && (<Text color={theme.system.blue} size="xxs">{leftSubtitle}</Text>)}
				</View>
				<View style={styles.textContainer}>
					<Text align="right" size="s" weight="bold">
						{rightTitle}
					</Text>
					{!!rightSubtitle && (<Text align="right" size="xxs">{rightSubtitle}</Text>)}
				</View>
			</View>
			<View style={styles.badge}>
				<Badge name="star" variant="primary" />
			</View>
		</TouchableOpacity>
	);
};
