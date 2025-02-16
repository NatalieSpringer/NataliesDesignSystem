import { LayoutContainer, Text } from "../../../components";
import { render } from "@testing-library/react-native";
import { mockAppTheme } from "../../../mocks";

describe("LayoutContainer", () => {
	["dark", "light"].forEach((theme) => {
		beforeEach(() => {
			mockAppTheme(theme as "light" | "dark");
		});
		it(`should render correctly in ${theme}`, () => {
			const tree = render(
				<LayoutContainer>
					<Text size="m">Sample Text</Text>
				</LayoutContainer>
			).toJSON();

			expect(tree).toMatchSnapshot();
		});
	});
});
