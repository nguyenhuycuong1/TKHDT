import { createContext, useEffect, useReducer } from 'react';
import { AuthReducer } from './AuthReducer';

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem('currentUser')) || null,
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);
export function ContextProvider({ children }) {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    useEffect(() => {
        localStorage.setItem('currentUser', JSON.stringify(state.user));
    }, [state.user]);
    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
