"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import BlogItem from "./BlogItem";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlogs = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("/api/blog");
      setBlogs(response.data.blogs || []);
    } catch (err) {
      setError("Failed to load blogs. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const categories = ["All", "Technology", "Startup", "Lifestyle"];

  return (
    <>
      <Head>
        <title>Latest Blogs on Technology, Startups, and Lifestyle | YourSiteName</title>
        <meta
          name="description"
          content="Explore our latest blog posts on technology, startups, and lifestyle. Stay informed with insights and trends delivered fresh to you."
        />
        <meta
          name="keywords"
          content="technology blogs, startup news, lifestyle tips, YourSiteName"
        />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              name: "YourSiteName Blog",
              url: "https://yoursite.com/blog",
              description:
                "A collection of blog posts covering technology, startups, and lifestyle topics.",
              publisher: {
                "@type": "Organization",
                name: "YourSiteName",
                url: "https://yoursite.com",
              },
              blogPost: blogs.map((blog) => ({
                "@type": "BlogPosting",
                headline: blog.title || "Untitled Blog",
                description: typeof blog.description === "string" ? blog.description.substring(0, 160) : "",
                url: `https://yoursite.com/blog/${blog._id}`,
                image: blog.image || "",
                datePublished: blog.createdAt || new Date().toISOString(),
                author: {
                  "@type": "Organization",
                  name: "YourSiteName",
                },
              })),
            }),
          }}
        />
      </Head>
      <main className="py-10 px-5 sm:px-10 lg:px-24">
        <nav className="flex justify-center gap-4 sm:gap-6 my-10" aria-label="Blog category filter">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setMenu(category)}
              className={`py-1 px-4 rounded-sm transition-colors ${
                menu === category
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
              aria-current={menu === category ? "true" : "false"}
            >
              {category}
            </button>
          ))}
        </nav>
        {isLoading && (
          <p className="text-center text-gray-500">Loading blogs...</p>
        )}
        {error && (
          <p className="text-center text-red-500">{error}</p>
        )}
        {!isLoading && !error && blogs.length === 0 && (
          <p className="text-center text-gray-500">No blogs available.</p>
        )}
        {!isLoading && !error && blogs.length > 0 && (
          <section
            className="flex flex-wrap justify-around gap-4 gap-y-10 mb-16"
            aria-label="Blog posts"
          >
            {blogs
              .filter((item) => (menu === "All" ? true : item.category === menu))
              .map((item) => (
                <BlogItem
                  key={item._id}
                  id={item._id}
                  image={item.image || ""}
                  description={item.description || ""}
                  title={item.title || "Untitled"}
                  category={item.category || "Uncategorized"}
                />
              ))}
          </section>
        )}
      </main>
    </>
  );
};

export default BlogList;