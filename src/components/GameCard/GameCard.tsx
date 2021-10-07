import FakeImage from "../../images/uncharted-4.jpeg"

export function GameCard() {
    return (
        <div className="cursor-pointer space-y-3 mx-4 my-3">
            <img src={FakeImage} className="w-52 h-72 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded border-none" />
            <div>
                <div className="text-white text-base">Marvel Spider Man</div>
                <div className="text-gray-400 text-white text-xs">45.99 BYN</div>
            </div>
        </div>
    );
}
