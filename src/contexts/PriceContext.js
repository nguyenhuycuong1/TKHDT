import { useState, createContext } from 'react';

export const PriceContext = createContext(0);
export function PriceContextProvider({ children }) {
    var [totalPrice, setTotalPrice] = useState(0);

    return <PriceContext.Provider value={{ totalPrice, setTotalPrice }}>{children}</PriceContext.Provider>;
}
