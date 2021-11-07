import { GameImage } from "../GameImage/GameImage";

export interface GameCardProps {
    url: string;
    title: string;
    price: string;
    imageSrc: string;
}

export function GameCard({ url, title, price, imageSrc }: GameCardProps) {
    return (
        <a href={url} className="cursor-pointer space-y-3 mx-4 my-3">
            <GameImage src={imageSrc} />
            <div>
                <div className="text-white text-base">{title}</div>
                <div className="text-gray-400 text-white text-xs">{price}</div>
            </div>
        </a>
    );
}
