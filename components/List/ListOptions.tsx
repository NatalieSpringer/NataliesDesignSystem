import { View } from "react-native";

const ListLeft: React.FC<{ children: React.ReactNode }> = ({ children, ...props }) => {
    return <View {...props}>{children}</View>;
};

const ListRight: React.FC<{ children: React.ReactNode }> = ({ children, ...props }) => {
    return <View {...props}>{children}</View>;
};

export { ListLeft, ListRight };