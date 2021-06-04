import { render, screen } from "@testing-library/react";

import Login from "./Login";
import LoginServiceController from "./LoginServiceController";
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
});

describe("error state", () => {});

describe("display error message form state", () => {});

describe("actions", () => {

    test('should send the values to the backend', () => {
        // Given
        const login = jest.spyOn(LoginServiceController, 'login');

        // When
        userEvent.click(getSubmitButton());

        // Then
        expect(login).toHaveBeenCalledTimes(1);
    });

});

function getPasswordInput() {
    return screen.getByLabelText("Password");
}

function getSubmitButton() {
    return screen.getByRole("button");
}

function getUsernameInput() {
    return screen.getByLabelText("Username");
}
