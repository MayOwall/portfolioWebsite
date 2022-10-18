import { useEffect, useState } from "react";
import * as S from "./LoadingCircle.styles";

export function LoadingCircle({ ...props }) {
    const [percentage, setPercentage] = useState(0);
    const [percentVisible, setPercentVisible] = useState(true);

    useEffect(() => {
        let percent = 0;
        const set = setTimeout(() => {
            const percentUp = setInterval(() => {
                percent += 2;
                setPercentage(percent);

                if (percent === 100) {
                    clearInterval(percentUp);
                }
            }, 40);
        }, 700);
    }, []);

    useEffect(() => {
        if (percentage === 100) {
            setTimeout(() => setPercentVisible(false), 1500);
        }
    }, [percentage]);

    return (
        <S.Circle className={"visible"}>
            <S.Percentage
                style={{
                    display: `${percentVisible ? "block" : "none"}`,
                }}
            >{`${percentage}%`}</S.Percentage>
        </S.Circle>
    );
}
