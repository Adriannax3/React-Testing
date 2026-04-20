# React Testing

A small repository for learning how to test React applications.

This project is a simple practice space for writing tests for React components. It includes tests for a registration form and a users list, so the examples cover both user interactions and asynchronous data loading.

## Testing Tools and Features

- Vitest as the test runner
- `test` for defining test cases
- `expect` for checking results
- React Testing Library for testing components from the user's point of view
- `render` for mounting the component in a test
- `screen` for finding elements on the page
- `getByText`, `getByRole`, and `getByLabelText` for accessible queries
- `findByText` for waiting for async UI changes
- `userEvent` for simulating real user actions
- `toBeInTheDocument` from jest-dom for clear DOM assertions
- `vi.spyOn` for mocking API functions
- `mockResolvedValueOnce` and `mockRejectedValueOnce` for testing success and error states
- `afterEach` and `vi.restoreAllMocks` for cleaning mocks after each test
- React Query `QueryClientProvider` as a test wrapper
- `jsdom` as a browser-like test environment
- `setupFiles` for loading shared test configuration

## Goal

The tests check if the form renders correctly, shows validation errors, and displays a success message after correct input. They also check if the users list shows loading, success, error, and empty states after fetching data.
