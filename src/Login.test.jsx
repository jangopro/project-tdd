import { render, screen } from "@testing-library/react";

import Login from "./Login";

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
});
