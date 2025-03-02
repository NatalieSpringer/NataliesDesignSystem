import { List, ListItem, Text } from "../../../components";
import { render } from "@testing-library/react-native";
import { mockAppTheme } from "../../../mocks";

describe("List", () => {
	["dark", "light"].forEach((theme) => {
		beforeEach(() => {
			mockAppTheme(theme as "light" | "dark");
		});
		it(`should render correctly in ${theme}`, () => {
			const tree = render(
				<List>
					<List.Item>
						<ListItem.Left>
							<Text size="s">Left Text</Text>
						</ListItem.Left>
						<ListItem.Right>
							<Text size="s">Right Text</Text>
						</ListItem.Right>
					</List.Item>
				</List>
			).toJSON();

			expect(tree).toMatchSnapshot();
		});
	});
});
