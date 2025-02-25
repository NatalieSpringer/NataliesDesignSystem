import { Tag } from "../../../components";
import { fireEvent, render } from "@testing-library/react-native";
import { mockAppTheme } from "../../../mocks";

describe("Tag", () => {
	["dark", "light"].forEach((theme) => {
		["primary", "secondary"].forEach((variant) => {
			beforeEach(() => {
				mockAppTheme(theme as "light" | "dark");
			});
			it(`should render correctly in ${theme}`, () => {
				const tree = render(
					<Tag
						text="Primary"
						variant={variant as "primary" | "secondary"}
					/>
				).toJSON();

				expect(tree).toMatchSnapshot();
			});

			it(`should render correctly in ${theme} with onPress`, () => {
				const onPress = jest.fn();
				const tree = render(
					<Tag
						onPress={onPress}
						text="Primary"
						variant={variant as "primary" | "secondary"}
					/>
				).toJSON();

				expect(tree).toMatchSnapshot();
			});
		});
	});

	describe("interaction", () => {
		it("should call onPress", () => {
			const onPress = jest.fn();
			const { getByText } = render(
				<Tag onPress={onPress} text="Primary" variant="primary" />
			);

			fireEvent.press(getByText("Primary"));

			expect(onPress).toHaveBeenCalledTimes(1);
			expect(onPress).toHaveBeenCalledWith("Primary");
		});
	});
});
