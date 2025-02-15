import { ButtonProps } from "../Button/types";

type FixedLengthArray<T, L extends number> = [T, ...T[]] & { length: L };

type DialogPrimaryProps = {
	variant: "primary";
	buttons: FixedLengthArray<Omit<ButtonProps, "variant" | "disabled">, 2>;
};

type DialogSecondaryProps = {
	variant: "secondary";
	buttons: FixedLengthArray<Omit<ButtonProps, "variant" | "disabled">, 3>;
};

type DialogProps = DialogPrimaryProps | DialogSecondaryProps;

export { DialogProps, DialogPrimaryProps, DialogSecondaryProps };
