import React from "react";
import { Link } from "react-router-dom";
import image from "../../../asset/Img/saintmartin.jpg";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg shadow-md ">
      <img
        className="w-full h-40 object-cover object-center rounded-t-lg"
        src={image}
        alt={blog.title}
      />
      <div className="p-6">
        <h2 className="text-lg font-semibold">{blog.title}</h2>
        <p className="text-gray-600 mt-2">{blog.excerpt}</p>
        <Link
          to={`/blog/${blog._id}`}
          className="text-indigo-500 mt-4 inline-block"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
