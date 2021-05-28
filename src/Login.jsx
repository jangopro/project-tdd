import { useState } from "react";

export default function Login() {
    const [passwordText, setPasswordText] = useState("");
    const [usernameText, setUsernameText] = useState("");
    const [disabledButton, setDisabledButton] = useState(true);

    function handleUsernameChange(value) {
        setUsernameText(value);
        if (usernameText !== "" && passwordText !== "") {
            setDisabledButton(false);
        }
    }

    function handlePasswordChange(value) {
        setPasswordText(value);
        if (usernameText !== "" && passwordText !== "") {
            setDisabledButton(false);
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                name="username"
                id="username"
                onChange={(event) => handleUsernameChange(event.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                id="password"
                onChange={(event) => handlePasswordChange(event.target.value)}
            />
            <button disabled={disabledButton} type="submit"></button>
        </div>
    );
}
