import { ReactNode } from "react";

export interface MenuItem {
    id: string;
    component: ReactNode;
}

export interface MenuBarProps {
    items: Array<MenuItem>;
}

export function MenuBar({ items }: MenuBarProps) {
    return (
        <div className="w-80 bg-indigo-500">
            <ul className="sticky top-0 h-screen pt-20 w-80">
                {items.map(({ id, component }) => (
                    <li
                        className="py-1 px-5 hover:bg-purple-700 cursor-pointer"
                        key={id}
                    >
                        {component}
                    </li>
                ))}
            </ul>
        </div>
    );
}
