import React from "react";
import { View } from "react-native";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";

export const Divider = () => {
	const { styles } = useStyles(stylesheet);

	return <View style={styles.container} />;
};
