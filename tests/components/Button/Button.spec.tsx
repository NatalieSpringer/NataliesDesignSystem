import { Button } from "../../../components";
import { render } from "@testing-library/react-native";
import { mockAppTheme } from "../../../mocks";

describe("Button", () => {
	["dark", "light"].forEach((theme) => {
		["primary", "secondary", "tertiary"].forEach((variant) => {
			[true, false, undefined].forEach((disabled) => {
				beforeEach(() => {
					mockAppTheme(theme as "light" | "dark");
				});
				it(`should render correctly ${variant} in ${theme} when disabled is ${disabled}`, () => {
					const onPress = jest.fn();
					const tree = render(<Button disabled={disabled} onPress={onPress} text="Hello World" variant={variant as "primary" | "secondary" | "tertiary"} />).toJSON();
		
					expect(tree).toMatchSnapshot();
				});
			});
		});
	});
});
