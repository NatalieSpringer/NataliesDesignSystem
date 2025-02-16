import { LayoutContainer, Text } from "../../../components";
import { render } from "@testing-library/react-native";
import { mockAppTheme } from "../../../mocks";

describe("LayoutContainer", () => {
	["dark", "light"].forEach((theme) => {
		[true, false].forEach((isScroll) => {
			beforeEach(() => {
				mockAppTheme(theme as "light" | "dark");
			});
			it(`should render correctly in ${theme}`, () => {
				const tree = render(
					<LayoutContainer isScroll={isScroll}>
						<Text size="m">Sample Text</Text>
					</LayoutContainer>
				).toJSON();

				expect(tree).toMatchSnapshot();
			});
		});
	});
});
