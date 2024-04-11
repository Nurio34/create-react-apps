import { useGlobalContext } from "../../GlobalApp";
import BackgroundImage from "../../Assets/Images/MarkdownBlog_Background.jpg";
import UploadButton from "./components/UploadButton";
import MarkdownBlogApp from "./MarkdownBlogApp";
import Post from "./components/Post";
import "./style/index.scss";

function MarkdownBlog() {
    const { mainHeight } = useGlobalContext();

    return (
        <MarkdownBlogApp>
            <section
                style={{
                    minHeight: mainHeight,
                }}
                className="MarkdownBlog py-[2vh] px-[4vw] relative"
            >
                <h1 className=" text-center">
                    Prepare your Blog Post in
                    <i className=" underline underline-offset-2"> Markdown </i>
                    format and post
                </h1>

                <UploadButton />

                <Post />

                <div
                    className=" absolute w-screen top-0 left-0 -z-10 opacity-40"
                    style={{
                        minHeight: mainHeight,

                        backgroundImage: `url(${BackgroundImage})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }}
                ></div>
            </section>
        </MarkdownBlogApp>
    );
}

export default MarkdownBlog;
