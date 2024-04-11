import { createContext, useContext, useState } from "react";

const MarkdownBlog = createContext();
export const useMarkdownBlogContext = () => useContext(MarkdownBlog);

function MarkdownBlogApp({ children }) {
    const [post, setPost] = useState([]);
    console.log(post);

    return (
        <MarkdownBlog.Provider value={{ post, setPost }}>
            {children}
        </MarkdownBlog.Provider>
    );
}

export default MarkdownBlogApp;
