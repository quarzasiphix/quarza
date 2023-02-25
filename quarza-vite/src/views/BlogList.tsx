import { useState } from "react";
import './blog.css'

interface Blog {
  id: number;
  title: string;
  author: string;
}

interface BlogListProps {
  title: string;
//handleDelete: (id: number) => void;
}

const BlogList = ({title}: BlogListProps) => {
  const [blogs, setBlogs]= useState([    {        "title": "site e",         "body": "sup",         "author": "me",         "id": 1    },    {        "title": "waza",         "body": "wazaa sup",         "author": "ea",         "id": 2    },    {        "title": "tes et",         "body": "wazaa sup body",         "author": "me",         "id": 3     }]);
    return ( 
        <div className="blog-list">
        <h2> {title} </h2>
        { blogs.map((blog: Blog) => (
            <div className="blog-preview" key={blog.id}>
              <h2>{blog.title}</h2>
              <p> author { blog.author}</p>
            </div>
        ))}
        </div>
    )
}
 
export default BlogList;