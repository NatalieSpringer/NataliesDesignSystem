import React, { useState } from "react";
import { View } from "react-native";
import { ImageProps } from "./types";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import { Image as ImageExpo } from "expo-image";
import { Icon } from "../Icon";

export const Image = ({ size = "m", source = "" }: ImageProps) => {
	const { styles, theme } = useStyles(stylesheet, {
		size
	});

	const [loaded, setLoaded] = useState(false);

	const iconSize = styles.container.size;

	return (
		<View accessible accessibilityRole="image">
			<ImageExpo
				contentFit="cover"
				onLoad={() => setLoaded(true)}
				style={[styles.container, styles.image]}
				source={source}
				testID="image"
				transition={800}
			/>
			{!loaded && (
				<View style={[styles.container]}>
					<Icon
						color={theme.image.icon}
						name="image"
						size={iconSize}
					/>
				</View>
			)}
		</View>
	);
};
