import { createContext, useContext, useState } from "react";

const stateContext = createContext({
    user: null,
    setUser: () => {},
    token: null,
    setToken: () => {},
    surveys: null,
    setSurveys: () => {},
});

const AUTH_TOKEN = "auth_token";

export function Context({ children }) {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem(AUTH_TOKEN));
    const [surveys, setSurveys] = useState({});

    function setToken(token) {
        if (token) {
            localStorage.setItem(AUTH_TOKEN, token);
        } else {
            localStorage.removeItem(AUTH_TOKEN);
        }
        _setToken(token);
    }

    return (
        <stateContext.Provider
            value={{ user, setUser, token, setToken, surveys, setSurveys }}
        >
            {children}
        </stateContext.Provider>
    );
}

export const useStateContext = () => useContext(stateContext);
