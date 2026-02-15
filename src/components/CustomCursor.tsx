
import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring physics for the cursor follow
    const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Show cursor on first movement
            if (!isVisible && (e.clientX !== 0 || e.clientY !== 0)) {
                setIsVisible(true);
            }

            // Update motion values
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isPointer =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('cursor-pointer') ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsHovering(isPointer);
        };

        // Use a listener for mousedown to prevent any "jumps" during clicks
        const handleMouseDown = (e: MouseEvent) => {
            if (e.clientX !== 0 || e.clientY !== 0) {
                mouseX.set(e.clientX);
                mouseY.set(e.clientY);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mousedown", handleMouseDown);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mousedown", handleMouseDown);
        };
    }, [isVisible, mouseX, mouseY]);

    return (
        <motion.div
            id="custom-cursor"
            style={{
                left: 0,
                top: 0,
                x: cursorX,
                y: cursorY,
                translateX: "-50%",
                translateY: "-50%",
                opacity: isVisible ? 1 : 0,
                scale: isHovering ? 2.5 : 1,
                // We handle transitions via framer-motion now for x, y, and scale
                // So we should remove the CSS transition for these in index.css if needed
            }}
            className={`pointer-events-none fixed z-[9999] rounded-full border-2 border-primary mix-blend-screen shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)] transition-colors duration-300 ${isHovering ? "bg-primary/20" : "bg-transparent"
                }`}
        />
    );
};

export default CustomCursor;
