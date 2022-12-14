import { onboardCarousel } from "@exploriana/constants";
import { render } from "@testing-library/react-native";
import { OnboardCarousel } from "@exploriana/components/Carousel";

jest.mock("react-native-reanimated", () => require("react-native-reanimated/mock"));

describe("Onboarding Carousel", () => {
  it("expects to be rendered", () => {
    render(<OnboardCarousel images={onboardCarousel} />);
  });

  it(`expects to have ${onboardCarousel.length} slides`, () => {
    const { getAllByLabelText } = render(<OnboardCarousel images={onboardCarousel} />);
    expect(getAllByLabelText("carousel-image").length).toBe(onboardCarousel.length);
  });
});
