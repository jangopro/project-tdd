import Authentication from "./Authentication";
import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <form>
            
            <label htmlFor="username">Phone, email or username</label>
            <input type="text" name="username" id="username" onChange={(event) => setUsername(event.target.value)} />
            
            <label htmlFor="password">Password</label>
            <input 
            type="password"
            name="password"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
             />

            <button
                onClick={() =>
                    Authentication.authenticate({
                        username,
                        password
                    })
                }
                type="button"
            >
                Log in
            </button>
        </form>
    );
}
