export class LoginService {
    public login = (login: string, pass: string): boolean => {
        console.log("LoginService::login(login: string, pass: string)", {
            login: login,
            passValue: pass,
        });
        return true;
    };

    public dispose(): void {}
}
