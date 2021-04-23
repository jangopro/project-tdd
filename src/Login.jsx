export default function Login() {
    function handleChange() {}

    return (
        <div>
            <h2>Login</h2>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <button disabled type="submit"></button>
        </div>
    );
}
