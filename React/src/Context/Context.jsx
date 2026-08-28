import { createContext, useContext, useState } from "react";

const stateContext = createContext({
    user: null,
    setUser: () => {},
    token: null,
    setToken: () => {},
    surveys: null,
    setSurveys: () => {},
});

export function Context({ children }) {
    const [user, setUser] = useState({});

    function _setToken(token) {
        if (token) {
            localStorage.getItem(token);
        } else {
            localStorage.setItem(token);
        }
        return token;
    }

    const [token, setToken] = useState(localStorage.getItem(_setToken));

    const [surveys, setSurveys] = useState({});

    return (
        <stateContext.Provider
            value={{ user, setUser, token, setToken, surveys, setSurveys }}
        >
            {children}
        </stateContext.Provider>
    );
}

export const useStateContext = () => useContext(stateContext);
