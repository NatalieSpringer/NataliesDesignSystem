interface ButtonProps {
	disabled?: boolean;
	onPress: () => void;
	text: string;
	variant: "primary" | "secondary" | "tertiary";
}

export { ButtonProps };
