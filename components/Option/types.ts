interface OptionProps {
	leftTitle: string;
	leftSubtitle?: string;
	onPress: (selected: boolean) => void;
	rightTitle: string;
	rightSubtitle: string;
	selected?: boolean;
}

export { OptionProps };
