"use client";
import Image from "next/image";
import Head from "next/head";
import React from "react";
import { assets } from "@/Assets/assets";

const Footer = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="YourSiteName - Stay updated with the latest technology and programming blogs. Connect with us on social media and explore our content."
        />
        <meta
          name="keywords"
          content="technology, programming, blogs, social media, YourSiteName"
        />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "YourSiteName",
              url: "https://yoursite.com",
              logo: "/path/to/logo_light.png",
              sameAs: [
                "https://facebook.com/yoursite",
                "https://twitter.com/yoursite",
                "https://plus.google.com/yoursite",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "contact@yoursite.com",
                contactType: "Customer Support",
              },
            }),
          }}
        />
      </Head>
      <footer className="flex flex-col sm:flex-row justify-around gap-4 sm:gap-0 bg-black py-5 items-center">
        <Image
          src={assets.logo_light}
          alt="YourSiteName Logo"
          width={120}
          height={40}
          className="w-[120px]"
        />
        <p className="text-sm text-white">
          &copy; {new Date().getFullYear()} YourSiteName. All rights reserved.
        </p>
        <nav aria-label="Social media links">
          <ul className="flex gap-4">
            <li>
              <a
                href="https://facebook.com/yoursite"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow YourSiteName on Facebook"
              >
                <Image
                  src={assets.facebook_icon}
                  alt="Facebook Icon"
                  width={40}
                  height={40}
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/yoursite"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow YourSiteName on Twitter"
              >
                <Image
                  src={assets.twitter_icon}
                  alt="Twitter Icon"
                  width={40}
                  height={40}
                />
              </a>
            </li>
            <li>
              <a
                href="https://plus.google.com/yoursite"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow YourSiteName on Google Plus"
              >
                <Image
                  src={assets.googleplus_icon}
                  alt="Google Plus Icon"
                  width={40}
                  height={40}
                />
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default Footer;