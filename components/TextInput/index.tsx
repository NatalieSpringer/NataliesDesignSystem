import React from "react";
import { TextInput as TextInputRN } from "react-native";
import { TextInputProps } from "./types";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";

export const TextInput = ({
	keyboardType,
	onChangeText,
	value
}: TextInputProps) => {
	const { styles } = useStyles(stylesheet);

	return (
		<TextInputRN
			accessible
			keyboardType={keyboardType}
			onChangeText={onChangeText}
			style={styles.container}
			testID="TextInput"
			value={value}
		/>
	);
};
