import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ExampleForm from "../components/ExampleForm";

test("renders registration form", () => {
  render(<ExampleForm />);

  expect(screen.getByText("Registration")).toBeInTheDocument();
});

test("show submit form without email error", async () => {
  const user = userEvent.setup();

  render(<ExampleForm />);

  await user.click(screen.getByRole("button", { name: "Register" }));

  expect(screen.getByText("Email is required")).toBeInTheDocument();
});

test("show invalid email error", async () => {
  const user = userEvent.setup();

  render(<ExampleForm />);

  const emailInput = screen.getByLabelText("Email");
  const submitButton = screen.getByRole("button", { name: "Register" });

  await user.type(emailInput, "example");
  await user.click(submitButton);

  expect(
    screen.getByText("Please enter a valid email address."),
  ).toBeInTheDocument();
});

test("show too short password error", async () => {
  const user = userEvent.setup();

  render(<ExampleForm />);

  const emailInput = screen.getByLabelText("Email");
  const passwordInput = screen.getByLabelText("Password");
  const submitButton = screen.getByRole("button", { name: "Register" });

  await user.type(emailInput, "example@gmail.com");
  await user.type(passwordInput, "examp");
  await user.click(submitButton);

  expect(
    screen.getByText("The password must be at least 6 characters long."),
  ).toBeInTheDocument();
});

test("show differents passwords error", async () => {
  const user = userEvent.setup();

  render(<ExampleForm />);

  const emailInput = screen.getByLabelText("Email");
  const passwordInput = screen.getByLabelText("Password");
  const passwordConfirmInput = screen.getByLabelText("Confirm password");
  const submitButton = screen.getByRole("button", { name: "Register" });

  await user.type(emailInput, "example@gmail.com");
  await user.type(passwordInput, "example");
  await user.type(passwordConfirmInput, "example123");
  await user.click(submitButton);

  expect(screen.getByText("The passwords do not match.")).toBeInTheDocument();
});

test("register success", async () => {
  const user = userEvent.setup();

  render(<ExampleForm />);

  const emailInput = screen.getByLabelText("Email");
  const passwordInput = screen.getByLabelText("Password");
  const passwordConfirmInput = screen.getByLabelText("Confirm password");
  const submitButton = screen.getByRole("button", { name: "Register" });

  await user.type(emailInput, "example@gmail.com");
  await user.type(passwordInput, "example");
  await user.type(passwordConfirmInput, "example");
  await user.click(submitButton);

  expect(
    screen.getByText("Registration completed successfully."),
  ).toBeInTheDocument();
});
