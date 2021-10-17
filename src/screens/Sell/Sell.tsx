import { Switch } from "../../modules";
import { GameCard } from "../../components";

export function SellScreen() {
    return (
        <div className="w-screen bg-indigo-900">
            <div className="container py-4 flex mx-auto space-x-2">
                <div className="text-white test-base uppercase">
                    Popular games:
                </div>
                <Switch />
            </div>
            <div className="container py-4 flex flex-wrap mx-auto">
                {Array(21)
                    .fill(42)
                    .map((x, i) => (
                        <GameCard key={i} />
                    ))}
            </div>
        </div>
    );
}
