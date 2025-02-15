import React from "react";
import { Switch } from "react-native";
import { ToggleProps } from "./types";
import { useStyles } from "react-native-unistyles";

export const Toggle = ({ disabled, onValueChange, value }: ToggleProps) => {
	const { theme } = useStyles();

	return (
		<Switch
			disabled={disabled}
			trackColor={{ true: theme.system.blue }}
			onValueChange={onValueChange}
			value={value}
		/>
	);
};
