import React, { useRef, useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideHandler(ref, onOutsideClick) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                // alert("You clicked outside of me!");
                onOutsideClick();
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
export default function OutsideClickHandler(props) {
    const wrapperRef = useRef(null);
    useOutsideHandler(wrapperRef, props.onOustideClick);

    return <div ref={wrapperRef}>{props.children}</div>;
}