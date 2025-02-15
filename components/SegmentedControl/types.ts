interface SegmentedControlProps {
	items: string[];
	selectedIndex: number;
	onPress: (index: number) => void;
}

export { SegmentedControlProps };
