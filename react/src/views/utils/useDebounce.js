import { useState, useEffect } from 'react';

const useDebounce = (callback, delay) => {
    const [args, setArgs] = useState(null);

    useEffect(() => {
        const handler = setTimeout(() => {
            if (args) {
                callback(...args);
                setArgs(null);
            }
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [args, delay, callback]);

    return (...args) => setArgs(args);
};

export default useDebounce;
