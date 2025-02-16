import { RadioButton } from "../../../components";
import { fireEvent, render } from "@testing-library/react-native";
import { mockAppTheme } from "../../../mocks";

describe("RadioButton", () => {
	["dark", "light"].forEach((theme) => {
		["s", "m", "l"].forEach((size) => {
			[true, false].forEach((selected) => {
				beforeEach(() => {
					mockAppTheme(theme as "light" | "dark");
				});
				it(`should render correctly in ${theme} with text`, () => {
					const onPress = jest.fn();
					const tree = render(
						<RadioButton
							onPress={onPress}
							selected={selected}
							size={size as "s" | "m" | "l"}
						/>
					).toJSON();

					expect(tree).toMatchSnapshot();
				});
			});
		});
	});

	describe("interaction", () => {
		it("should call onPress when tapped", () => {
			const onPress = jest.fn();
			const { getByRole } = render(
				<RadioButton onPress={onPress} selected={false} size={"s"} />
			);

			fireEvent(getByRole("button"), "onPress");
			expect(onPress).toHaveBeenCalledTimes(1);
		});
	});
});
