"use client"
import "./globals.css";
import Header from "./header";
import Footer from "./footer";
import { ThemeProvider } from "next-themes"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-stone-900">
        <ThemeProvider enableSystem={true} attribute="class">
          <div className="flex w-full">
            <div className="relative flex w-full flex-col">
              <Header/>
              <main className="flex-auto">
                { children }
              </main>
              <Footer/>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
