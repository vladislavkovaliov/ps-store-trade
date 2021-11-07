import { useCallback, useLayoutEffect, useState } from "react";
import { debounce } from "lodash";

export function useHover(ref: any, initState = false) {
    const [isHover, setHover] = useState<boolean>(initState);

    const handleMouseEnter = useCallback(() => {
        setHover(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHover(false);
    }, []);

    useLayoutEffect(() => {
        if (ref && ref.current) {
            ref.current.addEventListener(
                "mouseenter",
                debounce(handleMouseEnter, 100)
            );
            ref.current.addEventListener(
                "mouseleave",
                debounce(handleMouseLeave, 100)
            );
        }
    }, [handleMouseEnter, handleMouseLeave, ref]);

    return { isHover };
}
