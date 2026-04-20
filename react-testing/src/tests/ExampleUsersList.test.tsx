import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ExampleUsersList from "../components/ExampleUsersList";
import * as apiUsers from "../api/users";
import { afterEach } from "vitest";

afterEach(() => {
  vi.restoreAllMocks();
});

function createWrapper() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  };
}

test("renders loading state", () => {
  render(<ExampleUsersList />, {
    wrapper: createWrapper(),
  });

  expect(screen.getByText("Loading users...")).toBeInTheDocument();
});

test("renders users list after successful fetch", async () => {
  vi.spyOn(apiUsers, "fetchUsers").mockResolvedValueOnce([
    {
      id: 1,
      name: "John Doe",
      email: "john@mail.com",
    },
  ]);

  render(<ExampleUsersList />, {
    wrapper: createWrapper(),
  });

  expect(await screen.findByText("Example users list")).toBeInTheDocument();
  expect(screen.getByText("John Doe")).toBeInTheDocument();
  expect(screen.getByText("john@mail.com")).toBeInTheDocument();
});

test("renders state after failed fetch", async () => {
  vi.spyOn(apiUsers, "fetchUsers").mockRejectedValueOnce(
    new Error("Something went wrong."),
  );

  render(<ExampleUsersList />, {
    wrapper: createWrapper(),
  });

  expect(await screen.findByText("Something went wrong.")).toBeInTheDocument();
});

test("renders state after empty fetch", async () => {
  vi.spyOn(apiUsers, "fetchUsers").mockResolvedValueOnce([]);

  render(<ExampleUsersList />, {
    wrapper: createWrapper(),
  });

  expect(await screen.findByText("No users found.")).toBeInTheDocument();
});
