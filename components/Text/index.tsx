import React from "react";
import { Text as TextRN } from "react-native";
import { TextProps } from "./types";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";

export const Text = ({ children, size, weight }: TextProps) => {
	const { styles } = useStyles(stylesheet, {
		size,
		weight
	});

	const lineHeight = styles.text.fontSize * 1.5;

	return <TextRN style={[styles.text, { lineHeight }]}>{children}</TextRN>;
};
