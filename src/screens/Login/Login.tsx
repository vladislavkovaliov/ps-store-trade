import React, { useCallback, useRef } from "react";
import { Icon } from "../../components";

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

export function LoginScreen() {
    const refForm = useRef<HTMLFormElement>(null);

    const handleSubmit = useCallback((e: React.SyntheticEvent) => {
        e.preventDefault();

        if (refForm && refForm.current) {
            const formData = new FormData(refForm.current);
            const loginValue = formData.get("login");
            const passValue = formData.get("password");

            console.log({
                login: loginValue,
                passValue: passValue
            })
        }
    }, []);

    return (
        <div className="h-screen w-screen bg-indigo-900 flex flex-wrap content-center justify-center">
            <div className="divide-y divide-grey space-y-3">
                <div className="flex justify-between">
                    <button
                        className="flex justify-center items-center rounded-lg h-10 w-36 self-center bg-purple-600 hover:bg-purple-700 text-white shadow space-x-3"
                        type="submit"
                    >
                        <Icon icon="google" />
                        <span>Google</span>
                    </button>
                    <button
                        className="flex justify-center items-center rounded-lg h-10 w-36 self-center bg-purple-600 hover:bg-purple-700 text-white shadow space-x-3"
                        type="submit"
                    >
                        <Icon icon="facebook" />
                        <span>Facebook</span>
                    </button>
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
                        <button
                            className="rounded-lg h-10 w-36 self-center bg-purple-600 hover:bg-purple-700 text-white shadow"
                            type="submit"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
