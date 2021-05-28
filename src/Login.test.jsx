import { render, screen } from "@testing-library/react";

import Login from "./Login";
import userEvent from "@testing-library/user-event";

function renderLogin() {
    render(<Login />);
}

beforeEach(() => {
    renderLogin();
});

describe("display UI and check default state", () => {
    test("should render a login component", () => {
        expect(screen.getByText("Login")).toBeInTheDocument();
    });

    test("initialize username field", () => {
        expect(getUsernameInput()).toBeInTheDocument();
        expect(getUsernameInput()).toHaveDisplayValue("");
        expect(getUsernameInput()).toBeEnabled();
    });

    test("initialize password field", () => {
        expect(getPasswordInput()).toBeInTheDocument();
        expect(getPasswordInput()).toHaveDisplayValue("");
        expect(getPasswordInput()).toBeEnabled();
    });

    test("should render a submit button", () => {
        expect(getSubmitButton()).toBeInTheDocument();
    });

    test("submit button should be disabled by default", () => {
        expect(getSubmitButton()).toBeDisabled();
    });
});

describe("error state", () => {});

describe("display error message form state", () => {});
describe("enable/ disable submit button", () => {
    test("submit button should be disabled when the password field is empty", () => {
        userEvent.type(getUsernameInput(), "1234");
        expect(getSubmitButton()).toBeDisabled();
    });

    test("submit button should be disabled when the username field is empty", () => {
        userEvent.type(getPasswordInput(), "1234");
        expect(getSubmitButton()).toBeDisabled();
    });

    test("submit button is enabled when both fields have value", () => {
        userEvent.type(getUsernameInput(), "charles");
        userEvent.type(getPasswordInput(), "pwd");

        expect(getSubmitButton()).toBeEnabled();
    });
});
describe("actions", () => {});

function getPasswordInput() {
    return screen.getByLabelText("Password");
}

function getSubmitButton() {
    return screen.getByRole("button");
}

function getUsernameInput() {
    return screen.getByLabelText("Username");
}
