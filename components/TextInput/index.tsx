import React from "react";
import { TextInput as TextInputRN } from "react-native";
import { TextInputProps } from "./types";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";

export const TextInput = ({
	keyboardType,
	numberOfLines,
	maxLength,
	multiline = false,
	onChangeText,
	placeholder,
	secureTextEntry,
	value
}: TextInputProps) => {
	const { styles } = useStyles(stylesheet, {
		multiline
	});

	return (
		<TextInputRN
			accessible
			keyboardType={keyboardType}
			numberOfLines={numberOfLines}
			maxLength={maxLength}
			multiline={multiline}
			onChangeText={onChangeText}
			placeholder={placeholder}
			secureTextEntry={secureTextEntry}
			style={styles.container}
			testID="TextInput"
			value={value}
		/>
	);
};
