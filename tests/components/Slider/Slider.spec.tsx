import { Slider } from "../../../components";
import { fireEvent, render } from "@testing-library/react-native";
import { mockAppTheme } from "../../../mocks";

describe("Slider", () => {
	["dark", "light"].forEach((theme) => {
		beforeEach(() => {
			mockAppTheme(theme as "light" | "dark");
		});
		it(`should render correctly in ${theme}`, () => {
			const tree = render(
				<Slider setValue={jest.fn()} step={0.1} value={0} />
			).toJSON();

			expect(tree).toMatchSnapshot();
		});
	});

	describe("integration", () => {
		it("should call setValue when slider is done moving", () => {
			const setValue = jest.fn();
			const { getByRole } = render(
				<Slider setValue={setValue} step={0.1} value={0} />
			);

			fireEvent(getByRole("adjustable"), "onSlidingComplete", {
				value: 0.1
			});

			expect(setValue).toHaveBeenCalledTimes(1);
		});
	});

	describe("accessibility", () => {
		it("should update value when incrementing", () => {
			const setValue = jest.fn();
			const { getByRole } = render(
				<Slider setValue={setValue} step={0.1} value={0} />
			);

			fireEvent(getByRole("adjustable"), "onAccessibilityAction", {
				nativeEvent: { actionName: "increment" }
			});

			expect(setValue).toHaveBeenCalledTimes(1);
		});

		it("should update value when decrementing", () => {
			const setValue = jest.fn();
			const { getByRole } = render(
				<Slider setValue={setValue} step={0.1} value={0} />
			);

			fireEvent(getByRole("adjustable"), "onAccessibilityAction", {
				nativeEvent: { actionName: "decrement" }
			});

			expect(setValue).toHaveBeenCalledTimes(1);
		});

		it("should do nothing when unexpected action is used", () => {
			const setValue = jest.fn();
			const { getByRole } = render(
				<Slider setValue={setValue} step={0.1} value={0} />
			);

			fireEvent(getByRole("adjustable"), "onAccessibilityAction", {
				nativeEvent: { actionName: "123" }
			});

			expect(setValue).toHaveBeenCalledTimes(0);
		});
	});
});
