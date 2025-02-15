import { TextInput } from "../../../components";
import { fireEvent, render } from "@testing-library/react-native";
import { mockAppTheme } from "../../../mocks";

describe("TextInput", () => {
	["dark", "light"].forEach((theme) => {
		beforeEach(() => {
			mockAppTheme(theme as "light" | "dark");
		});
		it(`should render correctly in ${theme}`, () => {
			const onChangeText = jest.fn();
			const tree = render(
				<TextInput onChangeText={onChangeText} value="Text" />
			).toJSON();

			expect(tree).toMatchSnapshot();
		});

		it(`should render correctly in ${theme} with multiline`, () => {
			const onChangeText = jest.fn();
			const tree = render(
				<TextInput
					numberOfLines={4}
					multiline
					onChangeText={onChangeText}
					value="Text"
				/>
			).toJSON();

			expect(tree).toMatchSnapshot();
		});
	});

	describe("interaction", () => {
		it("should call onChangeText when user changes text", () => {
			const onChangeText = jest.fn();
			const { getByTestId } = render(
				<TextInput onChangeText={onChangeText} value="Text" />
			);

			fireEvent(getByTestId("TextInput"), "onChangeText", {
				value: "Text123"
			});

			expect(onChangeText).toHaveBeenCalledTimes(1);
		});
	});
});
