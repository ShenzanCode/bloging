import { Outfit } from "next/font/google";
import "./globals.css";


const outfit = Outfit({ subsets: ["latin"],weight: ["400","500", "700", "600"]});

export const metadata = {
  title: "shenzan blog",
  description: "this is my first blog app that is will design and full responsive. all type of blog see at my website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        {children}
        </body>
    </html>
  );
}
