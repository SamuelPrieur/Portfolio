import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Samuel Prieur - Développeur full stack",
  description:
    "Parcourez le portfolio de Samuel Prieur, étudiant en développement web, communication numérique et en graphisme.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
