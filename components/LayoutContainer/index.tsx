import React from "react";
import { View } from "react-native";
import { LayoutContainerProps } from "./types";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";

export const LayoutContainer = ({ children }: LayoutContainerProps) => {
	const { styles } = useStyles(stylesheet);

	return <View style={styles.container}>{children}</View>;
};
