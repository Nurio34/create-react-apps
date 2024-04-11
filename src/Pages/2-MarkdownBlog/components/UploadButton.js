import { FaFileUpload } from "react-icons/fa";
import { useMarkdownBlogContext } from "../MarkdownBlogApp";

function UploadButton() {
    const { setPost } = useMarkdownBlogContext();

    return (
        <label
            htmlFor="file"
            className="GlassBg absolute top-1/2 left-1/2   py-[2vh] px-[4vw] text-center space-y-4 cursor-pointer"
            style={{ transform: "translate(-50%,-50%)" }}
        >
            <p className="font1 w-max" style={{ fontVariant: "small-caps" }}>
                Upload Your Blog
            </p>
            <FaFileUpload size={24} color="blue" />
            <input
                className=" hidden"
                type="file"
                id="file"
                name="file"
                accept=".md"
                multiple
                onChange={(e) => {
                    let urls = Object.values(e.target.files);
                    urls = urls.map((obj) => URL.createObjectURL(obj));

                    urls.forEach((url) => {
                        fetch(url)
                            .then((res) => res.text())
                            .then((data) => {
                                setPost((pre) => [...pre, data]);
                            })
                            .catch((err) => console.log(err));
                    });
                }}
            ></input>
        </label>
    );
}

export default UploadButton;
