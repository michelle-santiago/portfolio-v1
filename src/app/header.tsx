
import { useTheme } from "next-themes"
import { GiDeathStar, GiSunflower } from "react-icons/gi"
import Nav from "./nav"

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  return (
    <header className="pointer-events-none relative z-50 flex flex-none flex-col">
      <div className="top-0 z-10 h-16 pt-6">
        <div className="sm:px-8 w-full">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="relative flex gap-4">
                  <div className="flex flex-1"></div>
                  <Nav/>
                  <div className="flex justify-end md:flex-1">
                    <div className="pointer-events-auto">
                    {currentTheme === "dark" ? (
                      <button
                        onClick={() => setTheme("light")}
                        className="group rounded-full bg-white/90 px-1 py-1 backdrop:shadow-lg  shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 hover:text-yellow-500"
                      >
                        <GiSunflower size={30}/>
                      </button>
                    ) : (
                      <button
                        onClick={() => setTheme("dark")}
                        className="group rounded-full bg-white/90 px-1 py-1 shadow-lg  shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 hover:text-teal-500"
                      >
                        <GiDeathStar size={30}/>
                      </button>
                    )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </header>
  )
}
