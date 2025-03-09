import React, { ReactNode } from "react";
import { TouchableOpacity } from "react-native";
import { ListLeft, ListRight } from "./ListOptions";
import { Divider } from "../Divider";
import { createStyleSheet, useStyles } from "react-native-unistyles";

interface ListItemProps {
	children: React.ReactNode;
	onPress?: () => void;
}

const validChildren = (
	children: ReactNode,
	ComponentType: any
): ReactNode | null => {
	return React.Children.map(children, (child) => {
		if (React.isValidElement(child) && child.type === ComponentType) {
			return child;
		}
		return null;
	});
};

export const ListItem: React.FC<ListItemProps> & {
	Left: typeof ListLeft;
	Right: typeof ListRight;
} = ({ children, onPress }) => {
	const { styles } = useStyles(stylesheet);
	const leftChildren = validChildren(children, ListItem.Left);
	const rightChildren = validChildren(children, ListItem.Right);

	return (
		<>
			<TouchableOpacity
				disabled={!onPress}
				onPress={onPress}
				style={styles.container}
			>
				{leftChildren}
				{rightChildren}
			</TouchableOpacity>
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
