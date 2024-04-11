import { createContext, useContext, useEffect, useState } from "react";

export const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

function useGlobalApp({ children }) {
    const [headerHeight, setHeaderHeight] = useState(0);
    const [mainHeight, setMainHeight] = useState(0);

    const [isUsernameInputShow, setIsUsernameInputShow] = useState(false);
    const [isPasswordInputShow, setIsPasswordInputShow] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState({
        name: "",
        pass: "",
    });
    console.log(isLogged);

    useEffect(() => {
        setMainHeight(window.innerHeight - headerHeight);
    }, [headerHeight]);

    return (
        <GlobalContext.Provider
            value={{
                setHeaderHeight,
                mainHeight,
                isUsernameInputShow,
                setIsUsernameInputShow,
                isPasswordInputShow,
                setIsPasswordInputShow,
                user,
                setUser,
                isLogged,
                setIsLogged,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export default useGlobalApp;
