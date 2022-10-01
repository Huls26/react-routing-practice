import { useLoaderData } from "react-router-dom";
import { getPost } from "../utils/api";

import Header from "./Header";
import BlogPost from "./BlogPost";

export async function loader({params}) {
    return getPost(params.postId);
}

export default function Post() {
    const post = useLoaderData();

    console.log(post)
    return (
        <>
            <BlogPost post={ post.title } />
        </>
    )
}