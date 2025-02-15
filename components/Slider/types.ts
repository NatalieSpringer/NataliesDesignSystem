import { SliderProps as SliderPropsRN } from "@react-native-community/slider";

interface SliderProps {
	lowerLimit?: SliderPropsRN["lowerLimit"];
	maximumValue?: SliderPropsRN["maximumValue"];
	minimumValue?: SliderPropsRN["minimumValue"];
	onSlidingComplete?: SliderPropsRN["onSlidingComplete"];
	/**
	 * Required to update value for accessibility
	 * @param value
	 */
	setValue: (value: number) => void;
	step: number;
	upperLimit?: SliderPropsRN["upperLimit"];
	value: number;
}

export { SliderProps };
