import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import configData from '../../config.json';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: configData.appName || "Convertr.Tools - Fast Online Converters",
  description: configData.userInstructions.aboutText || "Fast and simple online conversion tools",
  keywords: configData.seoKeywords.join(', '),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col bg-gray-900 text-gray-200">
          <header className="text-center py-8">
            <h1 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">{configData.appName}</h1>
            <p className="text-lg text-gray-400 mb-6">Fast and simple online conversion tools.</p>
          </header>
          {children}
          <footer className="text-center mt-12 pt-6 border-t border-gray-700">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} {configData.appName} - All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
