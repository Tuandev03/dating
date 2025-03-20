import React, { useEffect } from "react";

const FallingEffects = () => {
    useEffect(() => {
        const createFallingHeart = () => {
            const heart = document.createElement("div");
            heart.classList.add("heart", "absolute", "opacity-80", "text-red-500", "text-2xl");
            heart.innerHTML = "❤️"; // Thay thế bằng emoji trái tim
            document.body.appendChild(heart);

            const size = Math.random() * 20 + 10;
            heart.style.fontSize = `${size}px`;
            heart.style.left = Math.random() * 95 + "vw";

            const duration = Math.random() * 5 + 5;
            heart.style.animation = `fallHearts ${duration}s linear forwards`;
            
            setTimeout(() => heart.remove(), duration * 1000);
        };

        // Tăng số lượng tim rơi
        const heartInterval = setInterval(createFallingHeart, 200);

        return () => clearInterval(heartInterval);
    }, []);

    return (
        <div className="relative w-full h-screen bg-pink-300 overflow-hidden">
            <style>
                {`
                @keyframes fallHearts {
                    from {
                        transform: translateY(-50px) rotate(0deg);
                        opacity: 1;
                    }
                    to {
                        transform: translateY(100vh) rotate(360deg);
                        opacity: 1;
                    }
                }
                .heart {
                    position: absolute;
                    top: -50px;
                    animation-timing-function: linear;
                }
                `}
            </style>
        </div>
    );
};

export default FallingEffects;
