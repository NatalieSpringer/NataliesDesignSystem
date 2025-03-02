import { View } from "react-native";

const ListLeft: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <View>{children}</View>;
};

const ListRight: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <View>{children}</View>;
};

export { ListLeft, ListRight };
