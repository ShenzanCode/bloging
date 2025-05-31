"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { assets } from "@/Assets/assets";

const BlogItem = ({ image, category, description, title, id }) => {
  // Truncate description safely
  const truncateDescription = (text, maxLength = 120) => {
    if (typeof text !== "string") return "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <article className="max-w-[330px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000] transition-shadow">
      <Link href={`/blog/${id}`} aria-label={`Read blog post: ${title || "Untitled"}`}>
        <Image
          src={image || "/placeholder.jpg"}
          alt={title ? `${title} thumbnail` : "Blog post thumbnail"}
          width={330}
          height={220}
          className="border-b border-black w-full h-auto"
        />
      </Link>
      <div className="p-5">
        <p className="inline-block px-2 py-1 bg-black text-white text-sm mb-3">
          {category || "Uncategorized"}
        </p>
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
          {title || "Untitled"}
        </h5>
        <p className="mb-3 text-sm tracking-tight text-gray-700">
          {truncateDescription(description)}
        </p>
        <Link
          href={`/blog/${id}`}
          className="inline-flex items-center py-2 font-semibold text-center hover:text-blue-600"
          aria-label={`Read more about ${title || "this blog post"}`}
        >
          Read more
          <Image
            src={assets.arrow}
            alt="Arrow icon"
            width={12}
            height={12}
            className="ml-2"
          />
        </Link>
      </div>
    </article>
  );
};

export default BlogItem;