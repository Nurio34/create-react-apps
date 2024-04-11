import { useGlobalContext } from "../../GlobalApp";
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/1-Home";
import MarkdownBlog from "../../Pages/2-MarkdownBlog";

function Main() {
    const { mainHeight } = useGlobalContext();

    return (
        <main style={{ minHeight: mainHeight }}>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/markdown-blog" element={<MarkdownBlog />} />
            </Routes>
        </main>
    );
}

export default Main;
