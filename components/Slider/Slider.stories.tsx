import type { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { Slider } from "./";
import { SliderProps } from "./types";

const meta = {
	title: "Slider",
	component: Slider,
	decorators: [(Story) => <Story />]
} satisfies Meta<typeof Slider>;

export default meta;

const Template: StoryFn<SliderProps> = (args) => {
	const [value, setValue] = useState(0);
	return <Slider {...args} setValue={setValue} value={value} />;
};

export const SliderBasic = Template.bind({});
SliderBasic.args = {
	step: 0.1
};
