import React from "react";

export interface ButtonProps {
    iconComponent?: JSX.Element;
    text: string;
    type?: "button" | "submit" | "reset" | undefined;
}

export function Button({ iconComponent, text, type = "button" }: ButtonProps) {
    return (
        <button
            className="flex justify-center items-center rounded-lg h-10 w-36 self-center bg-purple-600 hover:bg-purple-700 text-white shadow space-x-3"
            type={type}
        >
            {iconComponent}
            <span>{text}</span>
        </button>
    );
}
