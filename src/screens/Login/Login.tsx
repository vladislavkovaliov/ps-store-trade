import { observer } from "mobx-react";
import React, { useCallback, useRef } from "react";
import { Button, Icon } from "../../components";
import { useService } from "../../hooks";
import { useHistory } from "react-router-dom";

export interface InputProps {
    type?: "text" | "password";
    name: string;
}

export function Input({ type = "text", name }: InputProps) {
    return (
        <input
            className="w-100 h-10 rounded-lg outline-none px-2 bg-white shadow-md text-grey-600"
            type={type}
            name={name}
        />
    );
}

export function LoginScreenComponent() {
    const loginService = useService("LoginService");
    const history = useHistory();

    const refForm = useRef<HTMLFormElement>(null);

    const handleSubmit = useCallback(
        (e: React.SyntheticEvent) => {
            e.preventDefault();

            if (refForm && refForm.current) {
                const formData = new FormData(refForm.current);
                const loginValue = formData.get("login");
                const passValue = formData.get("password");

                const isLogged = loginService.login(
                    loginValue as string,
                    passValue as string
                );
                if (isLogged) {
                    history.push("/");
                }
            }
        },
        [loginService, history]
    );

    return (
        <div className="h-screen w-screen bg-indigo-900 flex flex-wrap content-center justify-center">
            <div className="divide-y divide-grey space-y-3">
                <div className="flex justify-between">
                    <Button
                        text="Goggle"
                        iconComponent={<Icon icon="google" />}
                    />
                    <Button
                        text="Facebook"
                        iconComponent={<Icon icon="facebook" />}
                    />
                </div>

                <form
                    name="login"
                    className="py-3 space-y-3"
                    onSubmit={handleSubmit}
                    ref={refForm}
                >
                    <div className="flex flex-col space-y-3 w-76">
                        <Input name="login" />
                        <Input name="password" type="password" />
                    </div>
                    <div className="flex justify-between">
                        <a
                            href="/login"
                            className="w-40 self-center text-white"
                        >
                            Forgot password?
                        </a>
                        <Button text="Login" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export const LoginScreen = observer(LoginScreenComponent);
