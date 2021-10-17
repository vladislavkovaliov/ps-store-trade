import { MenuBar } from "../../components";
import { Link } from "react-router-dom";

export function MenuBarModule() {
    const items = [
        {
            id: "main",
            component: <Link className="block w-full" to="/">Main</Link>,
        },
        {
            id: "sell",
            component: <Link className="block w-full" to="/sell">Sell</Link>,
        },
    ];

    return <MenuBar items={items} />;
}
