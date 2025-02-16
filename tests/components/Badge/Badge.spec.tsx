import { Badge } from "../../../components";
import { render } from "@testing-library/react-native";
import { mockAppTheme } from "../../../mocks";

describe("Badge", () => {
	["dark", "light"].forEach((theme) => {
		["primary", "secondary"].forEach((variant) => {
			beforeEach(() => {
				mockAppTheme(theme as "light" | "dark");
			});
			it(`should render correctly in ${theme} with text`, () => {
				const tree = render(
					<Badge
						text="1"
						variant={variant as "primary" | "secondary"}
					/>
				).toJSON();
				
				expect(tree).toMatchSnapshot();
			});
			
			it(`should render correctly in ${theme} with icon`, () => {
				const tree = render(
					<Badge
						name="checkmark"
						variant={variant as "primary" | "secondary"}
					/>
				).toJSON();
				
				expect(tree).toMatchSnapshot();
			});
		});
	});
});
