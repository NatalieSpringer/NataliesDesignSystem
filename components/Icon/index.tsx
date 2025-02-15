// This file is a fallback for using MaterialIcons on Android and web.

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SymbolWeight } from "expo-symbols";
import React from "react";
import { OpaqueColorValue, StyleProp, ViewStyle } from "react-native";
import { IconType } from "./types";

export const androidMapping = {
	checkmark: "check-circle",
	chevronDown: "keyboard-arrow-down",
	chevronLeft: "chevron-left",
	chevronRight: "chevron-right",
	chevronUp: "keyboard-arrow-up",
	exclamationmark: "error",
	image: "photo",
	info: "info",
	line: "filter-list",
	person: "person",
	search: "search",
	minus: "remove",
	plus: "add",
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
	color: string | OpaqueColorValue;
	style?: StyleProp<ViewStyle>;
	weight?: SymbolWeight;
}) {
	return (
		<MaterialIcons
			color={color}
			size={size}
			name={androidMapping[name]}
			style={style}
		/>
	);
}
