import { useEffect, useState } from "react"

export const useDebounce = (value, delay) => {
    const [state, setState] = useState(value);
    useEffect(() => {
        const timerId = setTimeout(() => {
            setState(value);
        }, delay);

        return () => {
            clearTimeout(timerId)
        }
    }, [value, delay])
    return state
}