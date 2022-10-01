import "./BlogPost.css";

export default function BlogPost({post}) {
    return (
        <article className="post-container">
            <p className="post">{post}</p>
        </article>
    )
}