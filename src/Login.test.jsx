import { render, screen } from "@testing-library/react";

import Login from "./Login";

beforeEach(() => {
    render(<Login />);
});

describe("should display", () => {
    test("a username field", () => {
        // Assert
        expect(screen.getByLabelText("Phone, email or username")).toBeVisible();
    });

    test("a log in button", () => {
        // Assert
        expect(screen.getByRole("button", { name: "Log in" })).toBeVisible();
    });
});
