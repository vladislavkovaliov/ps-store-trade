import { useCallback, useRef, useState } from "react";
import { useDragAndDrop, useHover } from "../../hooks";
import cs from "classnames";
import { Icon } from "../index";

export interface ImageUploadProps {
    onUploaded: (file: File) => void;
}

export function ImageUpload({ onUploaded }: ImageUploadProps) {
    const [isUploaded, setUploaded] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const { isHover } = useHover(containerRef);
    const {
        isDragOver,
        setDragOver,
        handleDragOver,
        handleDragEnter,
        handleDragLeave,
    } = useDragAndDrop();
    const handleDrop = useCallback(
        (event) => {
            event.preventDefault();
            event.stopPropagation();
            setDragOver(false);

            try {
                const { files } = event.dataTransfer;

                if (files[0]) {
                    if (inputRef && inputRef.current) {
                        inputRef.current.files = files;
                    }

                    const fileReader = new FileReader();

                    fileReader.addEventListener("load", (event) => {
                        const { target } = event;

                        // type-guard
                        if (
                            imgRef &&
                            imgRef.current &&
                            target &&
                            target.result
                        ) {
                            imgRef.current.src = target.result as string;
                            onUploaded(files[0]);
                        }
                    });
                    fileReader.readAsDataURL(files[0]);

                    setUploaded(true);
                }
            } catch (e) {
                console.error(e);
            }
        },
        [onUploaded, setDragOver]
    );

    return (
        <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            ref={containerRef}
            className={cs("relative cursor-pointer w-60 max-w-full border-2", {
                "border-dashed": !isUploaded,
            })}
        >
            <div
                className={cs(
                    "absolute flex justify-center items-center align-center w-full h-full transition duration-500 ease-in-out",
                    {
                        "bg-gray-500": (isHover || isDragOver) && !isUploaded,
                        "border-opacity-0": isUploaded,
                    }
                )}
            >
                {!isUploaded && !isDragOver && <Icon size="lg" icon="upload" />}
            </div>
            <input
                ref={inputRef}
                className="hidden"
                type="file"
                name="files[]"
                id="file"
            />
            <img
                ref={imgRef}
                alt="upload"
                className={cs({
                    hidden: !isUploaded,
                })}
            />
        </div>
    );
}
