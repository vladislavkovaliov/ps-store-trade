export interface LabelProps {
    text: string;
    htmlFor: string;
}

export function Label({ text, htmlFor }: LabelProps) {
    return (
        <label htmlFor={htmlFor} className="text-white text-md mb-1">
            {text}:
        </label>
    );
}
