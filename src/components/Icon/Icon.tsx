export interface IconsProps {
    icon: "google" | "facebook" | "upload";
    size?: "md" | "lg";
}

export function Icon({ icon, size }: IconsProps) {
    let className = null;

    switch (size) {
        case "lg": {
            className = "w-12 h-12";

            break;
        }
        default: {
            className = "w-6 h-6";
        }
    }

    return (
        <div className={className}>
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
