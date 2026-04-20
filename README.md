# React Testing

A small repository for learning how to test React applications.

This project is a simple practice space for writing tests for a React registration form. The goal is to learn step by step, from checking rendered text to testing real user actions.

## Testing Tools and Features

- Vitest as the test runner
- `test` for defining test cases
- `expect` for checking results
- React Testing Library for testing components from the user's point of view
- `render` for mounting the component in a test
- `screen` for finding elements on the page
- `getByText`, `getByRole`, and `getByLabelText` for accessible queries
- `userEvent` for simulating real user actions
- `toBeInTheDocument` from jest-dom for clear DOM assertions
- `jsdom` as a browser-like test environment
- `setupFiles` for loading shared test configuration

## Goal

The tests check if the form renders correctly, shows validation errors, and displays a success message after correct input.
