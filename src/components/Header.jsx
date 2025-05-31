"use client";
import Image from "next/image";
import Head from "next/head";
import React, { useState } from "react";
import { assets } from "@/Assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Header = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);

    try {
      setIsLoading(true);
      const response = await axios.post("/api/email", formData);
      if (response.data.success) {
        toast.success(response.data.msg);
        setEmail("");
      } else {
        toast.error("Failed to send email");
      }
    } catch (error) {
      toast.error("An error occurred while submitting the form");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Latest Technology and Programming Blogs | YourSiteName</title>
        <meta
          name="description"
          content="Stay updated with the latest insights on technology, programming, and industry trends. Subscribe to our blog for fresh content delivered to your inbox!"
        />
        <meta
          name="keywords"
          content="technology, programming, blogs, industry trends, tech news"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "YourSiteName",
              url: "https://yoursite.com",
              potentialAction: {
                "@type": "SubscribeAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://yoursite.com/api/email",
                },
                description:
                  "Subscribe to receive the latest blog updates on technology and programming.",
              },
            }),
          }}
        />
      </Head>
      <header className="py-5 px-5 md:py-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Image
            src={assets.logo}
            width={180}
            height={60}
            alt="YourSiteName Logo"
            className="w-[130px] sm:w-auto"
            priority
          />
          <nav>
            <button
              className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]"
              aria-label="Get Started with Our Blog"
            >
              Get Started <Image src={assets.arrow} alt="Arrow Icon" width={20} height={20} />
            </button>
          </nav>
        </div>
        <div className="text-center my-8">
          <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
          <p className="mt-10 max-w-[740px] mx-auto text-xs sm:text-base">
            Stay updated with our latest insights on technology, programming, and industry trends. Subscribe to receive fresh content directly in your inbox!
          </p>
          <form
            className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]"
            onSubmit={onSubmit}
            aria-label="Subscribe to our newsletter"
          >
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter your email"
              className="pl-4 outline-none flex-1"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className={`border-l border-black py-4 px-4 sm:px-8 ${
                isLoading ? "bg-gray-600 text-white" : "active:bg-gray-600 active:text-white"
              }`}
              aria-label={isLoading ? "Submitting subscription" : "Subscribe to newsletter"}
            >
              {isLoading ? "Submitting..." : "Subscribe"}
            </button>
          </form>
        </div>
      </header>
    </>
  );
};

export default Header;