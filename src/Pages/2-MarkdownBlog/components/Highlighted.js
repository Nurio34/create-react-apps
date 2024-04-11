import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "./CopyButton";
import CopyMessage from "./CopyMessage";
import { useEffect, useState } from "react";

export const Code = ({ children, ...props }) => {
    const className = Object.values({ ...props })[0].split("-")[1];

    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        let time;

        if (isCopied) {
            time = setTimeout(() => {
                setIsCopied(false);
            }, 1500);
        }

        // return () => clearTimeout(time);
    }, [isCopied]);

    return (
        <div className="relative overflow-hidden">
            <SyntaxHighlighter language={className} style={dark}>
                {children}
            </SyntaxHighlighter>
            <CopyButton setIsCopied={setIsCopied} children={children} />
            <CopyMessage isCopied={isCopied} />
        </div>
    );
};
