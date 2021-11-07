import { observer } from "mobx-react";
import { MenuBar as MenuBarComponent } from "../../components";
import { Link } from "react-router-dom";

export function MenuBarModule() {
    const items = [
        {
            id: "main",
            component: (
                <Link className="block w-full" to="/">
                    Main
                </Link>
            ),
        },
        {
            id: "sell",
            component: (
                <Link className="block w-full" to="/sell">
                    Sell
                </Link>
            ),
        },
        {
            id: "create-game",
            component: (
                <Link className="block w-full" to="/create-game">
                    Create Game
                </Link>
            ),
        },
    ];

    return <MenuBarComponent items={items} />;
}

export const MenuBar = observer(MenuBarModule);
