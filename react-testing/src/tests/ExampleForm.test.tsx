import { render, screen } from "@testing-library/react";
import ExampleForm from "../components/ExampleForm";

test("renders registration form", () => {
  render(<ExampleForm />);

  expect(screen.getByText("Registration")).toBeInTheDocument();
});
