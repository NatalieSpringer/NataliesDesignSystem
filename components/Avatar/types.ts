import { ImageSource } from "expo-image";

interface AvatarProps {
	size: "s" | "m" | "l";
	source: string | ImageSource;
}

export { AvatarProps };
