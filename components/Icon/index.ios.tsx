import { SymbolView, SymbolWeight } from "expo-symbols";
import { StyleProp, ViewStyle } from "react-native";
import { IconType } from "./types";
import { useStyles } from "react-native-unistyles";

const iOSMapping = {
	checkmark: "checkmark.circle.fill",
	check: "checkmark",
	chevronDown: "chevron.down",
	chevronLeft: "chevron.left",
	chevronRight: "chevron.right",
	chevronUp: "chevron.up",
	exclamationmark: "exclamationmark.circle.fill",
	history: "clock.fill",
	image: "photo",
	info: "info.circle.fill",
	line: "line.3.horizontal.decrease",
	person: "person.fill",
	question: "questionmark.bubble.fill",
	search: "magnifyingglass",
	settings: "gear",
	share: "square.and.arrow.up",
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
	const { theme } = useStyles();
	return (
		<SymbolView
			weight={weight}
			tintColor={color ?? theme.system.blue}
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
