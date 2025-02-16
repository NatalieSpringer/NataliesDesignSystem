import { IconType } from "../Icon/types";

type BadgePropsCore = {
	variant: "primary" | "secondary";
};

type BadgePropsVariants =
	| {
			name: IconType;
			text?: never;
	  }
	| {
			name?: never;
			text: string;
	  };

type BadgeProps = BadgePropsCore & BadgePropsVariants;

export { BadgeProps };
