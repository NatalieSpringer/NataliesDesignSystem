import React from "react";
import { View } from "react-native";
import { DialogProps } from "./types";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import { Button } from "../Button";

export const Dialog = ({ buttons, variant }: DialogProps) => {
	const { styles } = useStyles(stylesheet, {
		variant
	});

	return (
		<View style={styles.container}>
			{variant === "primary" ? (
				<View style={styles.buttonContainer}>
					<View style={styles.primaryButton}>
						<Button {...buttons[0]} variant="secondary" />
					</View>
					<View style={styles.primaryButton}>
						<Button {...buttons[1]} variant="primary" />
					</View>
				</View>
			) : (
				<View style={styles.secondaryButton}>
					<Button {...buttons[0]} variant="secondary" />
					<Button {...buttons[1]} variant="secondary" />
					<Button {...buttons[2]} variant="primary" />
				</View>
			)}
		</View>
	);
};
