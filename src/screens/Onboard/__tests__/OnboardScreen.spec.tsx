import { render } from "@testing-library/react-native";
import { OnboardingScreen } from "@exploriana/screens/Onboard";

jest.mock("react-native-reanimated", () => require("react-native-reanimated/mock"));

describe("Onboard Screen", () => {
  it("expects to be rendered", () => {
    render(<OnboardingScreen />);
  });

  it("expects to have clouds svg", () => {
    const { getAllByLabelText } = render(<OnboardingScreen />);
    expect(getAllByLabelText("clouds").length).toBe(1);
  });

  it("expects to have carousel", () => {
    const { getAllByLabelText } = render(<OnboardingScreen />);
    expect(getAllByLabelText("carousel").length).toBe(1);
  });

  it("expects to have primary CTA", () => {
    const { getAllByText } = render(<OnboardingScreen />);
    expect(getAllByText(/get started/i).length).toBe(1);
  });
});
