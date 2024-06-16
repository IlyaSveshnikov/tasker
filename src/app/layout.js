import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tasker",
  description: "Manage your to-does effectively!",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logoes/logo.ico",
        href: "/logoes/logo.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logoes/logo-dark.ico",
        href: "/logoes/logo-dark.ico",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
