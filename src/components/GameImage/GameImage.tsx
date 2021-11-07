export interface GameImageProps {
    src: string;
}

export function GameImage({ src }: GameImageProps) {
    return (
        <img
            src={src}
            alt="game-card-img"
            className="w-52 h-72 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded border-none"
        />
    );
}
