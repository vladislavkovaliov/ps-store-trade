import { useCallback, useState } from "react";

export function useDragAndDrop(initState = false) {
    const [isDragOver, setDragOver] = useState<boolean>(initState);

    const handleDragEnter = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        setDragOver(true);
    }, []);

    const handleDragLeave = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        setDragOver(false);
    }, []);

    const handleDragOver = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
    }, []);

    return {
        isDragOver,
        handleDragLeave,
        handleDragEnter,
        handleDragOver,
        setDragOver,
    };
}
