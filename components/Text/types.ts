import { ReactNode } from "react";
import { TextStyle } from "react-native";

interface TextProps {
	align?: TextStyle["textAlign"];
	children: ReactNode;
	color?: string;
	numberOfLines?: number;
	size: "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "xxxl";
	weight?: "bold";
}

export { TextProps };
