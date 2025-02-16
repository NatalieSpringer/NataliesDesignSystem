import React from "react";
import { TouchableOpacity, View } from "react-native";
import { RadioButtonProps } from "./types";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";

export const RadioButton = ({ onPress, selected, size }: RadioButtonProps) => {
	const { styles } = useStyles(stylesheet, { selected, size });

	return (
		<TouchableOpacity
			accessible
			accessibilityRole="button"
			disabled={!onPress}
			onPress={(): void => onPress?.(!selected)}
			style={styles.container}
		>
			{!!selected && <View style={styles.innerCircle} />}
		</TouchableOpacity>
	);
};
