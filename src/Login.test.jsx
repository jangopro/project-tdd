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
        expect(getUsernameInput()).toBeInTheDocument();
    });

    test("should display a password field", () => {
        expect(screen.getByLabelText("Password")).toBeInTheDocument();
    });

    test("should render a submit button", () => {
        expect(getSubmitButton()).toBeInTheDocument();
    });

    test("submit button should be disabled when the username field is empty", () => {
        expect(getSubmitButton()).toBeDisabled();
    });

    test.todo("submit button should be disabled when the password field is empty");

    test.skip("submit button is enabled when both fields have value", () => {
        userEvent.type(getUsernameInput(), "charles");
        userEvent.type(screen.getByLabelText("Password"), "pwd");

        expect(getSubmitButton()).toBeEnabled();
    });

    test("can write things in username field", () => {
        userEvent.type(getUsernameInput(), "banane");
        expect(getUsernameInput()).toHaveDisplayValue("banane");
    });
});

function getSubmitButton() {
    return screen.getByRole("button");
}

function getUsernameInput() {
    return screen.getByLabelText("Username");
}
