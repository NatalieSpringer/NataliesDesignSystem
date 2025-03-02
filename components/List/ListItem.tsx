import React from "react";
import { View } from "react-native";
import { ListLeft, ListRight } from "./ListOptions";
import { Divider } from "../Divider";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export const ListItem: React.FC<{ children: React.ReactNode }> & {
	Left: typeof ListLeft;
	Right: typeof ListRight;
} = ({ children }) => {
	const { styles } = useStyles(stylesheet);
	const leftChildren = React.Children.map(children, (child) => {
		if (React.isValidElement(child) && child.type === ListItem.Left) {
			return child;
		}
		return null;
	});

	const rightChildren = React.Children.map(children, (child) => {
		if (React.isValidElement(child) && child.type === ListItem.Right) {
			return child;
		}
		return null;
	});

	return (
		<>
			<View style={styles.container}>
				{leftChildren}
				{rightChildren}
			</View>
			<Divider />
		</>
	);
};

const stylesheet = createStyleSheet(() => ({
	container: {
		alignItems: "center",
		justifyContent: "space-between",
		flexDirection: "row",
		width: "100%"
	}
}));

ListItem.Left = ListLeft;
ListItem.Right = ListRight;
