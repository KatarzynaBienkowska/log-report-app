import { render, screen } from "@testing-library/react";
import Input from "../components/Input";

describe("Input", () =>
  it("Should render proper label", () => {
    const label = "Test";
    render(<Input label={label} />);
    const element = screen.getByText(label);
    expect(element).toBeInTheDocument();
  }));
