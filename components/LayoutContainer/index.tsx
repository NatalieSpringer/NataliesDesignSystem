import React from "react";
import { SafeAreaView } from "react-native";
import { LayoutContainerProps } from "./types";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import Animated, { FadeInUp } from "react-native-reanimated";

export const LayoutContainer = ({
	children,
	isScroll
}: LayoutContainerProps) => {
	const { styles } = useStyles(stylesheet);

	return (
		<SafeAreaView>
			{isScroll ? (
				<Animated.ScrollView
					entering={FadeInUp}
					style={styles.container}
				>
					{children}
				</Animated.ScrollView>
			) : (
				<Animated.View entering={FadeInUp} style={styles.container}>
					{children}
				</Animated.View>
			)}
		</SafeAreaView>
	);
};
