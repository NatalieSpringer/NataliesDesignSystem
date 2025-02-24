import React from "react";
import { Keyboard, SafeAreaView, TouchableWithoutFeedback } from "react-native";
import { LayoutContainerProps } from "./types";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import Animated, { FadeInUp } from "react-native-reanimated";

export const LayoutContainer = ({
	children,
	hasPaddingHorizontal = true,
	hasPaddingTop = true,
	isScroll
}: LayoutContainerProps) => {
	const { styles } = useStyles(stylesheet);

	const appliedStyle = [
		styles.container,
		hasPaddingTop && styles.paddingTop,
		hasPaddingHorizontal && styles.paddingHorizontal
	];

	return (
		<SafeAreaView style={styles.safeArea}>
			{isScroll ? (
				<Animated.ScrollView
					keyboardShouldPersistTaps="handled"
					entering={FadeInUp}
					style={appliedStyle}
				>
					{children}
				</Animated.ScrollView>
			) : (
				<TouchableWithoutFeedback
					onPress={Keyboard.dismiss}
					accessible={false}
				>
					<Animated.View entering={FadeInUp} style={appliedStyle}>
						{children}
					</Animated.View>
				</TouchableWithoutFeedback>
			)}
		</SafeAreaView>
	);
};
