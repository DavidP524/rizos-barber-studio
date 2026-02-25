"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(true);

    useEffect(() => {
        // Detect if it's a touch device using fine pointer media query
        const isTouch = window.matchMedia("(pointer: coarse)").matches;
        setIsTouchDevice(isTouch);

        if (isTouch) return;

        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button" ||
                target.closest("a") ||
                target.closest("button")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    if (isTouchDevice) return null;

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 rounded-full bg-gold pointer-events-none z-[9999] shadow-[0_0_10px_rgba(212,175,55,0.8)]"
                animate={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                    scale: isHovering ? 2.5 : 1,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
            />
        </>
    );
}
