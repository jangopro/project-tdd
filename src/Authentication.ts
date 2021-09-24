interface IAuthentication {}


class Authentication implements IAuthentication {
    authenticate(credentials: ({username: string, password: string})) {

    }
}


export default new Authentication();
