import { memo, useEffect, useRef } from "react";
import { useCont } from "../../../../context/PortfolioContext";

const BALL_COUNT = 45;
const COLUMNS = 3;
const COLUMN_WIDTH = 100 / COLUMNS;

const MovingBalls = memo(() => {
    const { theme } = useCont();
    const ballsRef = useRef<HTMLSpanElement[]>([]);

    useEffect(() => {
        ballsRef.current.forEach((ball, i) => {
        if (!ball) return;

        const topRand = Math.floor(Math.random() * 101);
        const leftRand =
            Math.floor(Math.random() * COLUMN_WIDTH) + (Math.floor(i / 15) * COLUMN_WIDTH);

        ball.style.left = `${leftRand}%`;
        ball.style.top = `${topRand}%`;
        ball.style.backgroundColor = i % 2 === 1 ? "var(--sec-color)" : "var(--fourth-color)";
        ball.style.opacity = i % 2 === 1 ? "0.6" : "1";
        });
    }, []);

    return (
        <div>
        {Array.from({ length: BALL_COUNT }, (_, index) => (
            <span
            key={index}
            ref={(el) => (ballsRef.current[index] = el!)}
            className={`z-10 animate-wholeBall w-[12px] h-[12px] rounded-full absolute ${
                theme === 9 ? "opacity-50" : ""
            }`}
            />
        ))}
        </div>
    );
});

export default MovingBalls;
