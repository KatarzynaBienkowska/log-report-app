import { render, screen } from "@testing-library/react";
import TextArea from "../components/TextArea";

describe("TextArea", () =>
  it("Should render proper label", () => {
    const label = "Test";
    render(<TextArea label={label} />);
    const element = screen.getByText(label);
    expect(element).toBeInTheDocument();
  }));
