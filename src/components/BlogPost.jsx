import { Link, useLoaderData } from "react-router-dom";
import { getPosts } from "../util/api";
import "./BlogPost.css" 

import Post from "./Post";


export async function loader() {
    let posts = await getPosts();
    
    return { posts }
}

export default function BlogPost() {
    const { posts } = useLoaderData();

    let postElement = posts.map(post => (
                                        <Link to={`${post.id}`}>
                                            <Post key={ post.id } post={ post.title } />
                                        </Link>
                                        ))

    return (
        <section className="blogpost-container">
            <button className="add-post-btn">Add Post</button>

            <div className="blogpost">
                <h1 className="blogpost-title">Our Blog Posts</h1>

                <div className="posts-container">
                    { postElement }
                </div>
            </div>
        </section>
    )
}