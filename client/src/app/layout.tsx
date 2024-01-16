import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ReduxProvider from "./components/ReduxProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Online-CV Builder",
  description: "Build your CV online for free and get hired",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleOAuthProvider
          clientId={`${process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENTID}`}
        >
          <ReduxProvider>
            <Navbar />
            {children}
          </ReduxProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
