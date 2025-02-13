import type { Preview } from "@storybook/react";
import { View } from "react-native";
import React from "react";
import { createStyleSheet, useStyles } from 'react-native-unistyles'

const stylesheet = createStyleSheet((theme) => ({
    background: {
      backgroundColor: theme.general.background,
    }  
}));

const preview: Preview = {
  decorators: [
		(Story) => {
      const { styles } = useStyles(stylesheet);
      return (
			<View style={styles.background}>
				<Story />
			</View>
		)
  }
	],

  parameters: {
    backgrounds: {
      default: "plain",
      values: [
        { name: "plain", value: "white" },
        { name: "warm", value: "hotpink" },
        { name: "cool", value: "deepskyblue" },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
