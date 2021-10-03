export interface IconsProps {
    icon: "google" | "facebook";
}

export function Icon({ icon }: IconsProps) {
    return (
        <div className="w-6 h-6">
            <svg
                data-role={`${icon}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
            >
                <use href={`#${icon}`} />
            </svg>
        </div>
    );
}
