import { Banner } from "../../../components";
import { render } from "@testing-library/react-native";
import { mockAppTheme } from "../../../mocks";

describe("Banner", () => {
	["dark", "light"].forEach((theme) => {
		beforeEach(() => {
			mockAppTheme(theme as "light" | "dark");
		});
		it(`should render correctly in ${theme}`, () => {
			const onPress = jest.fn();
			const tree = render(
				<Banner
					description="Description"
					onPress={onPress}
					title="Title"
				/>
			).toJSON();

			expect(tree).toMatchSnapshot();
		});
	});
});
