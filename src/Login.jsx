export default function Login() {
    return (
        <form>
            <label htmlFor="username">Phone, email or username</label>
            <input type="text" name="username" id="username" />
            <button type="submit">Log in</button>
        </form>
    );
}
