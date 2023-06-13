import React from 'react';
import './BlogPage.css';
import BlogCard from '../Blogs/miniComponent/BlogCard';
import CreateBlogButton from './CreateBlogButton';

const BlogPage = () => {
    const blogData = [
        {
            id: 1,
            title: 'My First Blog Post',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus lorem non diam viverra, sed vestibulum ligula ullamcorper.',
            image: 'https://example.com/blog1.jpg',
        },
        {
            id: 2,
            title: 'Another Blog Post',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis mauris commodo, commodo nulla eu, venenatis mauris.',
            image: 'https://example.com/blog2.jpg',
        },
        {
            id: 3,
            title: 'Another New Post',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis mauris commodo, commodo nulla eu, venenatis mauris.',
            image: 'https://example.com/blog2.jpg',
        },
        {
            id: 4,
            title: 'Another New Post',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis mauris commodo, commodo nulla eu, venenatis mauris.',
            image: 'https://example.com/blog2.jpg',
        },
        // Add more blog objects as needed
    ];

    return (
        <div className="bg-gray-100 mt-10 pt-10">

            <CreateBlogButton />
            <div className="container mx-auto mt-8 mb-10">
                <div className=" px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {blogData.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
