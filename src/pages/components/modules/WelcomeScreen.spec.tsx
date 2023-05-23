import { render, screen } from "@testing-library/react";
import WelcomeScreen from "./WelcomeScreen";

describe("Welcome screen", () => {
  it("should display right title", () => {
    render(<WelcomeScreen />);
    const title = "ChatGPT";
    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
