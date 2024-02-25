"use client"
import "./globals.css";
import Footer from "./footer";
import Nav from "./nav"
import { ThemeProvider } from "next-themes"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-stone-900 ">
        <ThemeProvider enableSystem={true} attribute="class">
          <div id="top" className="flex">
            <div className="fixed z-10">
              <Nav/> 
            </div>
            <div className="relative w-full flex flex-col">
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
