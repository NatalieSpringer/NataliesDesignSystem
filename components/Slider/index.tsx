import React from "react";
import { AccessibilityActionEvent } from "react-native";
import { SliderProps } from "./types";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import SliderRN from "@react-native-community/slider";

export const Slider = ({
	maximumValue,
	minimumValue,
	onSlidingComplete,
	setValue,
	step,
	value
}: SliderProps) => {
	const { styles, theme } = useStyles(stylesheet);

	return (
		<SliderRN
			accessible
			accessibilityValue={{
				max: maximumValue ?? 1,
				min: minimumValue ?? 0,
				now: value
			}}
			accessibilityRole="adjustable"
			onAccessibilityAction={(event: AccessibilityActionEvent) => {
				switch (event.nativeEvent.actionName) {
					case "increment":
						setValue(Math.min(value + step, maximumValue ?? 1));
						break;
					case "decrement":
						setValue(Math.max(value - step, minimumValue ?? 0));
						break;
					default:
						break;
				}
			}}
			style={styles.container}
			minimumValue={0}
			maximumValue={1}
			minimumTrackTintColor={theme.system.blue}
			maximumTrackTintColor={theme.slider.background}
			onSlidingComplete={(value): void => {
				setValue(value);
				onSlidingComplete?.(value);
			}}
			step={step}
			value={value}
		/>
	);
};
