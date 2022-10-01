import { useState, useEffect, useContext } from "react";
import {
    Outlet,
    Link, 
    useLoaderData 
} from "react-router-dom";

import BlogPost from "./BlogPost";
import { getPosts } from "../utils/api";
import "./Main.css"

export async function loader() {
    const posts = await getPosts();
    return { posts };
}

export default function Main() {
    const { posts } = useLoaderData();
    
    let postElement = posts.map(post => (
                                    <li key={ post.id } >
                                        <Link to={ `${post.id}` } >
                                            <BlogPost  post={post.title} />
                                        </Link>
                                    </li>
                                    ));

    return (
        <main className="main">
            <button className="add-post-btn">Add Post</button>
            <h1 className="blog-post-title">Our Blog Post</h1>

           <section className="blogpost-list">
                <ul>
                    {  postElement }
                </ul>
            </section>
        </main>
    )
}