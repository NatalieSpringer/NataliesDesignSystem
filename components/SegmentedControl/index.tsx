import { Pressable, useWindowDimensions, View } from "react-native";
import Animated, {
	ReduceMotion,
	useAnimatedStyle,
	withTiming
} from "react-native-reanimated";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";

const Control = ({
	index,
	itemWidth,
	selectedIndex,
	onPress,
	item
}: {
	index: number;
	itemWidth: number;
	selectedIndex: number;
	onPress: (index: number) => void;
	item: string;
}) => {
	const { styles, theme } = useStyles(stylesheet);

	const $labelStyle = useAnimatedStyle(() => {
		return {
			color: withTiming(
				index === selectedIndex
					? theme.typography.text
					: theme.segmentedControl.textNotSelected,
				{
					duration: 100,
					reduceMotion: ReduceMotion.System
				}
			),
			fontWeight: index === selectedIndex ? "bold" : "normal"
		};
	}, [selectedIndex, index, theme]);

	return (
		<Pressable
			accessible
			accessibilityLabel={item}
			accessibilityRole="button"
			onPress={(): void => {
				onPress(index);
			}}
			key={index}
			style={styles.labelContainer(itemWidth)}
		>
			<Animated.Text style={[styles.labelStyle, $labelStyle]}>
				{item}
			</Animated.Text>
		</Pressable>
	);
};

export const SegmentedControl = ({
	items,
	selectedIndex,
	onPress
}: {
	items: string[];
	selectedIndex: number;
	onPress: (index: number) => void;
}) => {
	const { styles, theme } = useStyles(stylesheet);

	const { width: windowWidth } = useWindowDimensions();

	const internalPadding = 20;
	const itemWidth = (windowWidth - internalPadding) / items.length;

	const $activeBoxStyle = useAnimatedStyle(() => {
		return {
			left: withTiming(selectedIndex * itemWidth + internalPadding / 2, {
				reduceMotion: ReduceMotion.System
			}),
			backgroundColor: theme.general.background
		};
	}, [selectedIndex, itemWidth, items, theme]);

	return (
		<View
			style={[
				styles.container,
				{
					backgroundColor: theme.segmentedControl.background,
					paddingLeft: internalPadding / 2,
					width: windowWidth
				}
			]}
		>
			<Animated.View
				style={[$activeBoxStyle, styles.animatedView(itemWidth)]}
			/>
			{items.map((item, index) => {
				return (
					<View key={index} style={styles.controlContainer}>
						<Control
							index={index}
							itemWidth={itemWidth}
							selectedIndex={selectedIndex}
							onPress={onPress}
							item={item}
						/>
					</View>
				);
			})}
		</View>
	);
};
