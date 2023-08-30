import "./Post.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "../../services/blogs/BlogService";

export default function Post() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    }, [])
    const blogs = useSelector((state) => {
        return state.blogs.blogs
    })
    console.log(blogs);
    return (
        <>
            {blogs && blogs.map(item => (
                <div className="container">
                    <div>{item.dateTime}</div>
                    <div>{item.title}</div>
                    <div><img src={item.image} /></div>
                </div>
            ))
            }
        </>
    )
}