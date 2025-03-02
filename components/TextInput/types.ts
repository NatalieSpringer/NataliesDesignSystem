import { TextInputProps as TextInputPropsRN } from "react-native";

interface TextInputProps {
	keyboardType?: TextInputPropsRN["keyboardType"];
	onChangeText: TextInputPropsRN["onChangeText"];
	maxLength?: TextInputPropsRN["maxLength"];
	multiline?: TextInputPropsRN["multiline"];
	numberOfLines?: TextInputPropsRN["numberOfLines"];
	placeholder?: TextInputPropsRN["placeholder"];
	secureTextEntry?: TextInputPropsRN["secureTextEntry"];
	value: TextInputPropsRN["value"];
}

export { TextInputProps };
