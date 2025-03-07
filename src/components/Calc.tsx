import { useState } from "react";

export function useCalculator() {
    const [num1, setNum1] = useState<number|null>(null);
    const [num2, setNum2] = useState<number|null>(null);
    const [result, setResult] = useState<number|null>(null);

    const add = () => {
        if (num1 !== null || num2 !== null) {
            const num3 = null;
            setResult(num3);
        }
        if (num1 !== null && num2 !== null) {
            setResult(num1 + num2);
        }
    };

    const sub = () => {
        if (num1 !== null || num2 !== null) {
            const num3 = null;
            setResult(num3);
        }
        if (num1 !== null && num2 !== null) {
            setResult(num1 - num2);
        }
    };

    const mul = () => {
        if (num1 !== null || num2 !== null) {
            const num3 = null;
            setResult(num3);
        }
        if (num1 !== null && num2 !== null) {
            setResult(num1 * num2);
        }
    };

    const div = () => {
        if (num1 !== null || num2 !== null || num2 === 0) {
            const num3 = null;
            setResult(num3);
        }
        if (num1 !== null && num2 !== null) {
            setResult(parseFloat((num1 / num2).toFixed(4)));
        }
    };

    const pow = () => {
        if (num1 !== null || num2 !== null) {
            const num3 = null;
            setResult(num3);
        }
        if (num1 !== null && num2 !== null && num2 >= 0) {
            let num3 = 1;
            for (let i = 0; i < num2; i++) {
                num3 = num3 * num1;
            }
            setResult(num3);
        }
    };

    const clear = () => {
        setNum1(null);
        setNum2(null);
        setResult(null);
    }


    return { num1, setNum1, num2, setNum2, result, add, sub, mul, div, pow, clear };
}
