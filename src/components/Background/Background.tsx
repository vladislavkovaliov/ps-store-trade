import React from "react";

export interface BackgroundProps {
    children: React.ReactNode;
}

export function Background({ children }: BackgroundProps) {
    return <div className="w-screen bg-indigo-900">{children}</div>;
}
