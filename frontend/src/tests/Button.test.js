import { render, screen } from "@testing-library/react";
import Button from "../components/Button";

describe("Button", () =>
  it("Should render proper children", () => {
    const children = "Test";
    render(<Button>{children}</Button>);
    const element = screen.getByText(children);
    expect(element).toBeInTheDocument();
  }));
