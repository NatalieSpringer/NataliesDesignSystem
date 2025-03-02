import React from "react";
import { View } from "react-native";
import { ListLeft, ListRight } from "./ListOptions";
import { Divider } from "../Divider";

export const ListItem: React.FC<{ children: React.ReactNode }> & {
    Left: typeof ListLeft;
    Right: typeof ListRight;
} = ({ children }) => {
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
            <View style={{ alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: "100%" }}>
                {leftChildren}
                {rightChildren}
            </View>
            <Divider />
        </>
    );
};

ListItem.Left = ListLeft;
ListItem.Right = ListRight;