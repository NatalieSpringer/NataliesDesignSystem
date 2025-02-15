import { Toggle } from "../../../components";
import { render } from "@testing-library/react-native";
import { mockAppTheme } from "../../../mocks";

describe("Toggle", () => {
	["dark", "light"].forEach((theme) => {
		beforeEach(() => {
			mockAppTheme(theme as "light" | "dark");
		});
		[true, false].forEach((value) => {
			it(`should render correctly when toggle value is ${value}`, () => {
				const tree = render(
					<Toggle
						onValueChange={jest.fn()}
						value={value}
					/>
				).toJSON();
				
				expect(tree).toMatchSnapshot();
			});
		});
	});
});
