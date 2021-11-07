import { Switch } from "../../modules";
import { Background, GameCard } from "../../components";
import FakeImage from "../../images/uncharted-4.jpeg";

export function SellScreen() {
    return (
        <Background>
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
                        <GameCard
                            key={i}
                            url="games/bla"
                            title="Marvel Spider Man"
                            price="45.99 BYN"
                            imageSrc={FakeImage}
                        />
                    ))}
            </div>
        </Background>
    );
}
