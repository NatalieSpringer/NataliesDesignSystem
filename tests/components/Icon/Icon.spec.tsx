import { Icon } from "../../../components";
import { render } from "@testing-library/react-native";
import { mockAppTheme } from "../../../mocks";

describe("Icon", () => {
	["dark", "light"].forEach((theme) => {
		beforeEach(() => {
			mockAppTheme(theme as "light" | "dark");
		});
			it(`should render correctly in ${theme}`, () => {
				const tree = render(<Icon name={"checkmark"} color="blue" size={20} />).toJSON();
	
				expect(tree).toMatchSnapshot();
			});
			
			it(`should render correctly in ${theme} with no size specified`, () => {
				const tree = render(<Icon name={"checkmark"} color="blue" />).toJSON();
	
				expect(tree).toMatchSnapshot();
			});
	});
});
