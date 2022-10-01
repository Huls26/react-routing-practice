import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Home from "./Home";

export default function BlogLayout() {
    return (
        <div className="container">
            <Header />

            <Outlet />
        </div>
    )
}