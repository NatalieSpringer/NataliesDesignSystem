import React from "react";
import { Keyboard, SafeAreaView, TouchableWithoutFeedback } from "react-native";
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
		<SafeAreaView style={styles.safeArea}>
			{isScroll ? (
				<Animated.ScrollView
					keyboardShouldPersistTaps="handled"
					entering={FadeInUp}
					style={styles.container}
				>
					{children}
				</Animated.ScrollView>
			) : (
				<TouchableWithoutFeedback
					onPress={Keyboard.dismiss}
					accessible={false}
				>
					<Animated.View entering={FadeInUp} style={styles.container}>
						{children}
					</Animated.View>
				</TouchableWithoutFeedback>
			)}
		</SafeAreaView>
	);
};
