import { useState } from "react";

const useInput = (validateValue: { (value: string): boolean }) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIstouched] = useState(false);

    const isValid = validateValue(enteredValue);

    const hasError = !isValid && isTouched;

    const enteredValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredValue(event.target.value);
    };

    const isTouchedHandler = () => {
        setIstouched(true);
    };

    const reset = () => {
        setEnteredValue("");
        setIstouched(false);
    };

    return {
        enteredValue,
        isValid,
        enteredValueHandler,
        isTouchedHandler,
        reset,
        hasError,
    };
};

export default useInput;
