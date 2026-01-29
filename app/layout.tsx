import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

const robotoFont = Roboto({
  subsets: ["latin"],
});

// });

export const metadata: Metadata = {
  title: {
    template: "%s / Aairi Metrics Consulting Limited ",
    default: "Welcome / Aairi Metrics Consulting Limited",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoFont.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Contacts />
        <Footer />
      </body>
    </html>
  );
}
