import { render, screen } from "@testing-library/react";

import Authentication from "./Authentication";
import Login from "./Login";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
    render(<Login />);
});

describe("should display", () => {
    test("a username field", () => {
        // Assert
        expect(screen.getByLabelText("Phone, email or username")).toBeVisible();
    });
    test("a password field", () => {
        // Assert
        expect(screen.getByLabelText("Password")).toBeVisible();
    });

    test("a log in button", () => {
        // Assert
        expect(screen.getByRole("button", { name: "Log in" })).toBeVisible();
    });
});

test("should send login credentials to the backend when the user submits the form", () => {
    // Arrange
    jest.spyOn(Authentication, "authenticate").mockReturnValue(true);
    const username = "Bob";
    const password = "passwordValue";

    // Act
    userEvent.type(screen.getByLabelText("Phone, email or username"), username);
    userEvent.type(screen.getByLabelText("Password"), password);
    userEvent.click(screen.getByRole("button", { name: "Log in" }));

    // Assert
    expect(Authentication.authenticate).toHaveBeenCalledWith({ username, password });
});
