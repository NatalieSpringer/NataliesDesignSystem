import { ImageSource } from "expo-image";

interface ImageProps {
	size: "s" | "m" | "l";
	source?: string | ImageSource;
}

export { ImageProps };
