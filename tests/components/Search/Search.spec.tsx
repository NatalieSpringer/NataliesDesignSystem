import { Search } from "../../../components";
import { fireEvent, render } from "@testing-library/react-native";
import { mockAppTheme } from "../../../mocks";

describe("Search", () => {
	["dark", "light"].forEach((theme) => {
		beforeEach(() => {
			mockAppTheme(theme as "light" | "dark");
		});
		it(`should render correctly in ${theme}`, () => {
			const onChangeText = jest.fn();
			const onSubmitEditing = jest.fn();
			const tree = render(
				<Search
					onChangeText={onChangeText}
					onSubmitEditing={onSubmitEditing}
					value="Text"
				/>
			).toJSON();

			expect(tree).toMatchSnapshot();
		});

		it(`should render correctly in ${theme} with multiline`, () => {
			const onChangeText = jest.fn();
			const onSubmitEditing = jest.fn();
			const tree = render(
				<Search
					numberOfLines={4}
					multiline
					onChangeText={onChangeText}
					onSubmitEditing={onSubmitEditing}
					value="Text"
				/>
			).toJSON();

			expect(tree).toMatchSnapshot();
		});
	});

	describe("interaction", () => {
		it("should call onChangeText when user changes text", () => {
			const onChangeText = jest.fn();
			const onSubmitEditing = jest.fn();
			const { getByTestId } = render(
				<Search
					onChangeText={onChangeText}
					onSubmitEditing={onSubmitEditing}
					value="Text"
				/>
			);

			fireEvent(getByTestId("Search"), "onChangeText", {
				value: "Text123"
			});

			expect(onChangeText).toHaveBeenCalledTimes(1);
		});
	});
});
