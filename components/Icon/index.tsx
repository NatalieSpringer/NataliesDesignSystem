// This file is a fallback for using MaterialIcons on Android and web.

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SymbolWeight } from "expo-symbols";
import React from "react";
import { OpaqueColorValue, StyleProp, ViewStyle } from "react-native";
import { IconType } from "./types";
import { useStyles } from "react-native-unistyles";

export const androidMapping = {
	checkmark: "check-circle",
	check: "check",
	chevronDown: "keyboard-arrow-down",
	chevronLeft: "chevron-left",
	chevronRight: "chevron-right",
	chevronUp: "keyboard-arrow-up",
	exclamationmark: "error",
	history: "history",
	image: "photo",
	info: "info",
	line: "filter-list",
	person: "person",
	question: "question-answer",
	search: "search",
	settings: "settings",
	share: "ios-share",
	minus: "remove",
	plus: "add",
	star: "star",
	close: "close"
} as Partial<
	Record<IconType, React.ComponentProps<typeof MaterialIcons>["name"]>
>;

/**
 * An icon component that uses native SFSymbols on iOS, and MaterialIcons on Android and web. This ensures a consistent look across platforms, and optimal resource usage.
 *
 * Icon `name`s are based on SFSymbols and require manual mapping to MaterialIcons.
 */
export function Icon({
	name,
	size = 24,
	color,
	style
}: {
	name: IconType;
	size?: number;
	color?: string | OpaqueColorValue;
	style?: StyleProp<ViewStyle>;
	weight?: SymbolWeight;
}) {
	const { theme } = useStyles();
	return (
		<MaterialIcons
			color={color ?? theme.system.blue}
			size={size}
			name={androidMapping[name]}
			style={style}
		/>
	);
}
