import { Text } from "../../../components";
import { render } from "@testing-library/react-native";
import { mockAppTheme } from "../../../mocks";

describe("Text", () => {
	["light", "dark"].forEach((theme) => {
		beforeEach(() => {
			mockAppTheme(theme as "light" | "dark");
		});

		it(`should render correctly small in ${theme}`, () => {
			const tree = render(<Text size="s">Hello world</Text>).toJSON();

			expect(tree).toMatchSnapshot();
		});
	});
});
