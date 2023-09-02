"use client"
import "./globals.css";
import Header from "./header";
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
                <div className="sm:px-8 mt-9">
                  <div className="mx-auto w-full max-w-7xl lg:px-8">
                    { children }
                  </div>
                </div>
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
