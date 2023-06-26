import { useState, useEffect } from 'react';

function useDebound(value, delay) {
    const [deboundValue, setDeboundValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDeboundValue(value), delay);
        return () => clearTimeout(handler);
    }, [value, delay]);

    return deboundValue;
}

export default useDebound;
