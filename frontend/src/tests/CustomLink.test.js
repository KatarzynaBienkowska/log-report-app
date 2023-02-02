import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CustomLink from "../components/CustomLink";

describe("CustomLink", () => {
  const children = "Test";
  const href = "/testPage";

  it("Should render proper children", () => {
    render(
      <MemoryRouter>
        <CustomLink to={href}>{children}</CustomLink>
      </MemoryRouter>
    );
    const element = screen.getByText(children);
    expect(element).toBeInTheDocument();
  });

  it("Should have proper href", () => {
    render(
      <MemoryRouter>
        <CustomLink to={href}>{children}</CustomLink>
      </MemoryRouter>
    );
    const element = screen.getByText(children).closest("a");
    expect(element).toHaveAttribute("href", href);
  });
});
