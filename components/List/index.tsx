import React from "react";
import { View } from "react-native";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import { ListItem } from "./ListItem";

const List: React.FC<{ children: React.ReactNode }> & {
    Item: typeof ListItem;
} = ({ children }) => {
    const { styles } = useStyles(stylesheet);

    return <View style={{gap: 5}}>{children}</View>;
};

List.Item = ListItem;

export { List, ListItem };