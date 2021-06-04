import LoginServiceController from './LoginServiceController';
import {useState} from 'react';

export default function Login() {
    const [loginVisible, setLoginVisible] = useState(true);

    return (
        <div>
            {loginVisible &&
                <>
                    <h2>Login</h2>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                    />
                    <button type="submit" onClick={
                        () => {
                            if (LoginServiceController.login()) {
                                setLoginVisible(false);
                            }
                        }
                    }></button>
                </>
            }
        </div>
    );
}
