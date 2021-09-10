import { render, screen } from "@testing-library/react";

import Login from "./Login";

test("make sure the username field is displayed", () => {
    render(<Login />);
    // Assert
    expect(screen.getByLabelText("Phone, email or username")).toBeVisible();
});
