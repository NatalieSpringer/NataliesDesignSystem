import { Avatar } from "../../../components";
import { fireEvent, render } from "@testing-library/react-native";
import { mockAppTheme } from "../../../mocks";

describe("Avatar", () => {
	["dark", "light"].forEach((theme) => {
		["s", "m", "l", undefined].forEach((size) => {
			beforeEach(() => {
				mockAppTheme(theme as "light" | "dark");
			});
			it(`should render correctly ${size} in ${theme}`, () => {
				const tree = render(
					<Avatar
						size={size as "s" | "m" | "l"}
						source="https://picsum.photos/seed/696/3000/2000"
					/>
				).toJSON();

				expect(tree).toMatchSnapshot();
			});
		});
		it(`should render correctly with empty source`, () => {
			const tree = render(<Avatar size="s" />).toJSON();

			expect(tree).toMatchSnapshot();
		});
	});

	describe("integration", () => {
		it("should show image after onLoad is called", () => {
			const tree = render(
				<Avatar
					size={"s"}
					source="https://picsum.photos/seed/696/3000/2000"
				/>
			);

			const image = tree.getByTestId("image");
			fireEvent(image, "onLoad", { nativeEvent: {} });
		});
	});
});
