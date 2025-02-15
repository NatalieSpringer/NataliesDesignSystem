import React, { useState } from "react";
import { View } from "react-native";
import { AvatarProps } from "./types";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import { Image } from "expo-image";
import { Icon } from "../Icon";

export const Avatar = ({ size = "m", source }: AvatarProps) => {
	const { styles, theme } = useStyles(stylesheet, {
		size
	});

	const [loaded, setLoaded] = useState(false);

	const iconSize = styles.container.size;

	return (
		<View accessible accessibilityRole="image">
			<Image
				contentFit="cover"
				onLoad={() => setLoaded(true)}
				style={[styles.container, { position: "absolute" }]}
				source={source}
				testID="image"
				transition={800}
			/>
			{!loaded && (
				<View style={[styles.container]}>
					<Icon
						color={theme.avatar.icon}
						name="person"
						size={iconSize}
					/>
				</View>
			)}
		</View>
	);
};
