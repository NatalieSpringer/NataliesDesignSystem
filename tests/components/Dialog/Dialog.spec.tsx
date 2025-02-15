import { Dialog } from "../../../components";
import { render } from "@testing-library/react-native";
import { mockAppTheme } from "../../../mocks";
import {
	DialogPrimaryProps,
	DialogSecondaryProps
} from "../../../components/Dialog/types";

const buttonsPrimary: DialogPrimaryProps["buttons"] = [
	{
		onPress: jest.fn(),
		text: "Button One"
	},
	{
		onPress: jest.fn(),
		text: "Button Two"
	}
];

const buttonsSecondary: DialogSecondaryProps["buttons"] = [
	{
		onPress: jest.fn(),
		text: "Button One"
	},
	{
		onPress: jest.fn(),
		text: "Button Two"
	},
	{
		onPress: jest.fn(),
		text: "Button Three"
	}
];

describe("Dialog", () => {
	["dark", "light"].forEach((theme) => {
		beforeEach(() => {
			mockAppTheme(theme as "light" | "dark");
		});
		it(`should render correctly primary in ${theme}`, () => {
			const tree = render(
				<Dialog buttons={buttonsPrimary} variant={"primary"} />
			).toJSON();

			expect(tree).toMatchSnapshot();
		});

		it(`should render correctly secondary in ${theme}`, () => {
			const tree = render(
				<Dialog buttons={buttonsSecondary} variant="secondary" />
			).toJSON();

			expect(tree).toMatchSnapshot();
		});
	});
});
