import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sudipta Biswas | MERN Stack Developer Portfolio",
  description: "Explore the professional portfolio of Sudipta Biswas, a passionate MERN Stack Developer skilled in MongoDB, Express.js, React, and Node.js. Discover projects, skills, and experience in full-stack web development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomCursor></CustomCursor>
        {children}
      </body>
    </html>
  );
}
