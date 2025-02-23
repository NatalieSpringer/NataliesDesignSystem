import { CardHorizontal } from "../../../components";
import { render } from "@testing-library/react-native";
import { mockAppTheme } from "../../../mocks";

describe("CardHorizontal", () => {
	["dark", "light"].forEach((theme) => {
		beforeEach(() => {
			mockAppTheme(theme as "light" | "dark");
		});
		it(`should render correctly in ${theme}`, () => {
			const onPress = jest.fn();
			const tree = render(
				<CardHorizontal
					description="Description"
					onPress={onPress}
					title="Title"
				/>
			).toJSON();

			expect(tree).toMatchSnapshot();
		});

		it(`should render correctly in ${theme} with specific number of lines`, () => {
			const onPress = jest.fn();
			const tree = render(
				<CardHorizontal
					description="Description"
					numberOfLines={2}
					onPress={onPress}
					title="Title"
				/>
			).toJSON();

			expect(tree).toMatchSnapshot();
		});
	});
});
