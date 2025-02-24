import { ReactNode } from "react";

interface LayoutContainerProps {
	children: ReactNode;
	hasPaddingTop?: boolean;
	hasPaddingHorizontal?: boolean;
	isScroll: boolean;
}

export { LayoutContainerProps };
