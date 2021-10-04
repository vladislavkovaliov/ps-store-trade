import { Switch } from "../../modules";

export function MainScreen() {
    return (
        <div className="h-screen w-screen bg-indigo-900">
            <div className="container py-4 flex space-x-2">
                <div className="text-white">Popular games:</div>
                <Switch />
            </div>
        </div>
    );
}
