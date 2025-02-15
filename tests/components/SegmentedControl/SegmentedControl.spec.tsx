import { SegmentedControl } from "../../../components";
import { fireEvent, render } from "@testing-library/react-native";
import { mockAppTheme } from "../../../mocks";

describe("SegmentedControl", () => {
	["dark", "light"].forEach((theme) => {
		beforeEach(() => {
			mockAppTheme(theme as "light" | "dark");
		});
		it(`should render correctly in ${theme}`, () => {
			const onPress = jest.fn();
			const tree = render(
				<SegmentedControl
					items={["Item One", "Item Two"]}
					selectedIndex={0}
					onPress={onPress}
				/>
			).toJSON();

			expect(tree).toMatchSnapshot();
		});
	});

	describe("interaction", () => {
		it(`should call onPress when tapping element`, () => {
			const onPress = jest.fn();
			const { getAllByRole } = render(
				<SegmentedControl
					items={["Item One", "Item Two"]}
					selectedIndex={0}
					onPress={onPress}
				/>
			);

			fireEvent(getAllByRole("button")[1], "onPress");
			expect(onPress).toHaveBeenCalledTimes(1);
		});
	});
});
