import { TextInputProps as TextInputPropsRN } from "react-native";

interface TextInputProps {
	keyboardType?: TextInputPropsRN["keyboardType"];
	onChangeText: TextInputPropsRN["onChangeText"];
	value: TextInputPropsRN["value"];
}

export { TextInputProps };
