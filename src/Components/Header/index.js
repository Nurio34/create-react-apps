import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../../GlobalApp";
import { calcHeight } from "../../Functions/calcHeight";
import { FaCentercode } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

function Header() {
    const {
        setHeaderHeight,
        isUsernameInputShow,
        setIsUsernameInputShow,
        isPasswordInputShow,
        setIsPasswordInputShow,
        user,
        setUser,
        isLogged,
        setIsLogged,
    } = useGlobalContext();

    const HeaderElement = useRef();

    const UsernameElement = useRef();
    const PasswordElement = useRef();

    const setUserNameFn = (qwd) => {
        if (UsernameElement.current && UsernameElement.current.value.trim()) {
            setUser((pre) => ({
                ...pre,
                name: UsernameElement.current.value,
            }));
            setIsUsernameInputShow(false);
            setIsPasswordInputShow(true);
        }
    };

    const setPasswordFn = (qwd) => {
        if (PasswordElement.current && PasswordElement.current.value.trim()) {
            setUser((pre) => ({
                ...pre,
                pass: PasswordElement.current.value,
            }));
            setIsPasswordInputShow(false);
            setIsLogged(true);
        }
    };

    useEffect(() => {
        HeaderElement.current &&
            setHeaderHeight(calcHeight(HeaderElement.current));
    }, []);

    const [isLogoutButtonShow, setIsLogoutButtonShow] = useState(false);

    return (
        <header
            ref={HeaderElement}
            className="py-[2vh] px-[8vw] flex justify-between items-center"
        >
            <p>Header</p>
            {!isUsernameInputShow && !isPasswordInputShow && !isLogged && (
                <button
                    className="padding2"
                    onClick={(e) => {
                        setIsUsernameInputShow(true);
                    }}
                >
                    Login
                </button>
            )}
            {isUsernameInputShow && (
                <div
                    className="padding2 flex justify-between items-center"
                    style={{ border: "1px solid black" }}
                >
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter username..."
                        className=" border-none outline-none"
                        ref={UsernameElement}
                        onKeyDown={(e) => e.code === "Enter" && setUserNameFn()}
                    />
                    <button
                        className=" bg-transparent border-none"
                        onClick={setUserNameFn}
                    >
                        <FaCentercode size={16} />
                    </button>
                </div>
            )}
            {isPasswordInputShow && (
                <div
                    className="padding2 flex justify-between items-center"
                    style={{ border: "1px solid black" }}
                >
                    <input
                        type="text"
                        name="password"
                        id="password"
                        placeholder="Enter password..."
                        className=" border-none outline-none"
                        ref={PasswordElement}
                        onKeyDown={(e) => e.code === "Enter" && setPasswordFn()}
                    />
                    <button
                        className=" bg-transparent border-none"
                        onClick={setPasswordFn}
                    >
                        <FaCentercode size={16} />
                    </button>
                </div>
            )}
            {isLogged && (
                <div className="relative flex">
                    <p
                        className="font1"
                        style={{ fontVariant: "small-caps" }}
                        onMouseEnter={(e) => setIsLogoutButtonShow(true)}
                        onMouseLeave={(e) => setIsLogoutButtonShow(false)}
                    >
                        {user.name}
                    </p>
                    {isLogoutButtonShow && (
                        <MdCancel
                            className=" absolute top-0 right-0 -translate-y-1/2 translate-x-full"
                            onMouseEnter={(e) => setIsLogoutButtonShow(true)}
                            onClick={(e) => {
                                setIsLogged(false);
                                setUser({});
                            }}
                        />
                    )}
                </div>
            )}
        </header>
    );
}

export default Header;
