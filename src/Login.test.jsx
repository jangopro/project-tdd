import { render, screen } from "@testing-library/react";

import Login from "./Login";
import userEvent from "@testing-library/user-event";

function renderLogin() {
    render(<Login />);
}

describe("Login", () => {
    beforeEach(() => {
        renderLogin();
    });

    test("should render a login component", () => {
        expect(screen.getByText("Login")).toBeInTheDocument();
    });

    test("should display a username field", () => {
        expect(screen.getByLabelText("Username")).toBeInTheDocument();
    });

    test("should display a password field", () => {
        expect(screen.getByLabelText("Password")).toBeInTheDocument();
    });

    test("should render a submit button", () => {
        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    test("submit button should be disabled when the username field is empty", () => {
        expect(screen.getByRole("button")).toBeDisabled();
    });

    test.todo("submit button should be disabled when the password field is empty");

    test.skip("submit button is enabled when both fields have value", () => {
        userEvent.type(screen.getByLabelText("Username"), "charles");
        userEvent.type(screen.getByLabelText("Password"), "pwd");

        expect(screen.getByRole("button")).toBeEnabled();
    });
});
