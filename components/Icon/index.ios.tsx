import { SymbolView, SymbolWeight } from "expo-symbols";
import { StyleProp, ViewStyle } from "react-native";
import { IconType } from "./types";

const iOSMapping = {
	checkmark: "checkmark.circle.fill",
	check: "checkmark",
	chevronDown: "chevron.down",
	chevronLeft: "chevron.left",
	chevronRight: "chevron.right",
	chevronUp: "chevron.up",
	exclamationmark: "exclamationmark.circle.fill",
	image: "photo",
	info: "info.circle.fill",
	line: "line.3.horizontal.decrease",
	person: "person.fill",
	search: "magnifyingglass",
	star: "star.fill",
	minus: "minus",
	plus: "plus",
	close: "xmark"
} as Partial<Record<IconType, import("expo-symbols").SymbolViewProps["name"]>>;

export function Icon({
	name,
	size = 24,
	color,
	style,
	weight = "regular"
}: {
	name: IconType;
	size?: number;
	color: string;
	style?: StyleProp<ViewStyle>;
	weight?: SymbolWeight;
}) {
	return (
		<SymbolView
			weight={weight}
			tintColor={color}
			resizeMode="scaleAspectFit"
			//@ts-ignore
			name={iOSMapping[name]}
			style={[
				{
					width: size,
					height: size
				},
				style
			]}
		/>
	);
}
