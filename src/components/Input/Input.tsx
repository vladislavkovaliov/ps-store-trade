import React from "react";

export interface InputProps {
    id: string;
    type?: "text" | "password";
    name: string;
}

export function Input({ id, type = "text", name }: InputProps) {
    return (
        <input
            id={id}
            className="w-100 h-10 rounded-lg outline-none px-2 bg-white shadow-md text-grey-600"
            type={type}
            name={name}
        />
    );
}
