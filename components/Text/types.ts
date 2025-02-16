import { TextStyle } from "react-native";

interface TextProps {
	align?: TextStyle["textAlign"], 
	children: string;
	color?: string;
	size: "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "xxxl";
	weight?: "bold";
}

export { TextProps };
