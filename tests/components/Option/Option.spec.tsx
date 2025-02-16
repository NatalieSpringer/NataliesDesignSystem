import { Option } from "../../../components";
import { fireEvent, render } from "@testing-library/react-native";
import { mockAppTheme } from "../../../mocks";

describe("Option", () => {
	["dark", "light"].forEach((theme) => {
		[true, false, undefined].forEach((selected) => {
			beforeEach(() => {
				mockAppTheme(theme as "light" | "dark");
			});
			it(`should render correctly in ${theme} when selected is ${selected}`, () => {
				const onPress = jest.fn();
				const tree = render(
					<Option
						leftSubtitle="Left Subtitle"
						leftTitle="Left Title"
						onPress={onPress}
						selected={selected}
						rightSubtitle="Right Subtitle"
						rightTitle="Right Title"
					/>
				).toJSON();

				expect(tree).toMatchSnapshot();
			});
		});
	});

	describe("interaction", () => {
			it(`should call onPress when tapping element`, () => {
				const onPress = jest.fn();
				const { getAllByRole } = render(
					<Option
						leftSubtitle="Left Subtitle"
						leftTitle="Left Title"
						onPress={onPress}
						selected={false}
						rightSubtitle="Right Subtitle"
						rightTitle="Right Title"
					/>
				);
	
				fireEvent(getAllByRole("button")[1], "onPress");
				expect(onPress).toHaveBeenCalledTimes(1);
			});
		});
});
