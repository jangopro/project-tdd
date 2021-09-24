interface IAuthentication {}


class Authentication implements IAuthentication {
    authenticate(credentials: ({username: string})) {

    }
}


export default new Authentication();
