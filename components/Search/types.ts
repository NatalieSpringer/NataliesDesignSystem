import { TextInputProps as TextInputPropsRN } from "react-native";

interface SearchProps {
	keyboardType?: TextInputPropsRN["keyboardType"];
	onChangeText: TextInputPropsRN["onChangeText"];
	maxLength?: TextInputPropsRN["maxLength"];
	multiline?: TextInputPropsRN["multiline"];
	numberOfLines?: TextInputPropsRN["numberOfLines"];
	onSubmitEditing: TextInputPropsRN["onSubmitEditing"];
	placeholder?: TextInputPropsRN["placeholder"];
	value: TextInputPropsRN["value"];
}

export { SearchProps };
