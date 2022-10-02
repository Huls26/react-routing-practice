import { useLoaderData } from "react-router-dom";
import { getPost } from "../util/api";

export async function loader({ params }) {
    console.log(params)
    return getPost(params.postId);
}

export default function Post({post}) {
    const selectPost = useLoaderData();

    return (
        <article className="post-container">
            <p className="post">{ selectPost.title || post }</p>
        </article>
    )
}