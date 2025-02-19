import React from "react";
import { TextInput as TextInputRN, View } from "react-native";
import { SearchProps } from "./types";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import { Icon } from "../Icon";

export const Search = ({
	keyboardType,
	maxLength,
	onChangeText,
	onSubmitEditing,
	placeholder,
	value
}: SearchProps) => {
	const { styles, theme } = useStyles(stylesheet);

	return (
		<View style={styles.container}>
			<View style={styles.search}>
				<Icon color={theme.search.icon} name="search" />
				<TextInputRN
					accessible
					keyboardType={keyboardType}
					returnKeyType="search"
					maxLength={maxLength}
					multiline={false}
					onChangeText={onChangeText}
					onSubmitEditing={onSubmitEditing}
					placeholder={placeholder}
					style={styles.textInput}
					testID="Search"
					value={value}
				/>
			</View>
		</View>
	);
};
