import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: '400', // if single weight, otherwise you use array like [400, 500, 700],
  style: 'normal', // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Vivek Desale",
  description: "Vivek Desale is a Web Developer and Designer based in India. He is passionate about creating beautiful and functional websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`select-none ${poppins.className}`}>{children}</body>
    </html>
  );
}
