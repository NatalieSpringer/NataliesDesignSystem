import { SwitchProps } from "react-native";

interface ToggleProps {
	disabled?: SwitchProps["disabled"];
	onValueChange: SwitchProps["onValueChange"];
	value: SwitchProps["value"];
}

export { ToggleProps };
