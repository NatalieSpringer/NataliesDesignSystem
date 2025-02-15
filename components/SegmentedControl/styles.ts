import { Platform } from "react-native";
import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet((theme) => ({
	animatedView: (itemWidth: number) => ({
		position: "absolute",
		borderRadius: 100,
		height: "80%",
		top: "10%",
		width: itemWidth
	}),
	container: {
		borderRadius: 100,
		flex: 1,
		flexDirection: "row",
		minHeight: 44
	},
	controlContainer: {
		justifyContent: "center"
	},
	labelContainer: (width: number) => ({
		alignSelf: "center",
		alignContent: "center",
		alignItems: "center",
		justifyContent: "center",
		height: "100%",
		width
	}),
	labelStyle: {
		fontFamily: Platform.select({
			ios: "SFProText-Regular",
			android: "Roboto"
		})
	}
}));

export { stylesheet };
