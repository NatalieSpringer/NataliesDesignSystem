import { TextStyle } from "react-native";

interface TextProps {
	align?: TextStyle["textAlign"];
	children: string;
	color?: string;
	numberOfLines?: number;
	size: "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "xxxl";
	weight?: "bold";
}

export { TextProps };
