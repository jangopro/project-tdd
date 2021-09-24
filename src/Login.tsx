import Authentication from "./Authentication";
import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState("");
    return (
        <form>
            <label htmlFor="username">Phone, email or username</label>
            <input type="text" name="username" id="username" onChange={(event) => setUsername(event.target.value)} />
            <button
                onClick={() =>
                    Authentication.authenticate({
                        username,
                    })
                }
                type="submit"
            >
                Log in
            </button>
        </form>
    );
}
