import Markdown from "markdown-to-jsx";
import { Code } from "./Highlighted";
import { useMarkdownBlogContext } from "../MarkdownBlogApp";

function Post() {
    const { post } = useMarkdownBlogContext();

    return (
        post?.length > 0 &&
        post.map((code, ind) => {
            return (
                <Markdown
                    key={ind}
                    options={{
                        overrides: {
                            code: {
                                component: Code,
                            },
                        },
                    }}
                >
                    {code}
                </Markdown>
            );
        })
    );
}

export default Post;
