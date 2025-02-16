import React from "react";
import { SafeAreaView } from "react-native";
import { LayoutContainerProps } from "./types";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import Animated, { FadeInUp } from "react-native-reanimated";

export const LayoutContainer = ({ children }: LayoutContainerProps) => {
	const { styles } = useStyles(stylesheet);

	return (
		<SafeAreaView>
			<Animated.ScrollView entering={FadeInUp} style={styles.container}>
				{children}
			</Animated.ScrollView>
		</SafeAreaView>
	);
};
