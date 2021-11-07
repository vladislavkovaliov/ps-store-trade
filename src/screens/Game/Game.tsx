import { GameImage } from "../../components";
import FakeImage from "../../images/uncharted-4.jpeg";

export function GameScreen() {
    return (
        <div className="w-screen bg-indigo-900">
            <div className="container py-4 flex mx-auto space-x-2">
                <div>
                    <GameImage src={FakeImage} />
                </div>

                <div className="text-white">
                    <div>
                        <p>Uncharted</p>
                        <p>Озвучка: Русская</p>
                        <p>Текст: Русская</p>
                    </div>

                    <div>
                        <p>Цена: 150 BYN</p>
                        <p>Локация: Минск</p>
                    </div>
                </div>
            </div>

            <div className="container py-4 flex mx-auto space-x-2">
                <div className="text-white">
                    Uncharted — серия компьютерных игр в жанре action-adventure,
                    разработанных компанией Naughty Dog и изданных Sony Computer
                    Entertainment для консолей PlayStation. По состоянию на май
                    2016 года было продано более 28 миллионов копий игр серии.
                </div>
            </div>
        </div>
    );
}
