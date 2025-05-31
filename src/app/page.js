import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>YourSiteName | Technology, Startup, and Lifestyle Blogs</title>
        <meta
          name="description"
          content="Discover the latest insights on technology, startups, and lifestyle at YourSiteName. Subscribe for fresh blog updates delivered to your inbox."
        />
        <meta
          name="keywords"
          content="technology blogs, startup news, lifestyle tips, YourSiteName"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "YourSiteName Homepage",
              url: "https://yoursite.com",
              description:
                "YourSiteName offers the latest blog posts on technology, startups, and lifestyle. Subscribe to stay updated with fresh insights.",
              publisher: {
                "@type": "Organization",
                name: "YourSiteName",
                url: "https://yoursite.com",
              },
            }),
          }}
        />
      </Head>
      <ToastContainer
        theme="dark"
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        aria-live="polite"
      />
      <Header />
      <main>
        <BlogList />
      </main>
      <Footer />
    </>
  );
}