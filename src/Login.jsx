export default function Login() {
    return (
        <div>
            Login
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <button type="submit"></button>
        </div>
    );
}