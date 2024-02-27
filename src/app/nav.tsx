
import Link from "next/link"
import { TbCircleLetterM } from "react-icons/tb"
import { PiBracketsCurlyFill, PiArticleMediumBold } from "react-icons/pi"
import { useTheme } from "next-themes"
import { GiDeathStar, GiSunflower } from "react-icons/gi"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"
import { MdOutlineArrowUpward } from "react-icons/md"
import { RiToolsFill } from "react-icons/ri"

export default function Nav(){
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  return (
    <div className="">
      <nav className="pointer-events-auto cursor-pointer"> 
        <div className="fixed right-0">
          <div className="my-5 mx-5 px-0.5">
            {currentTheme === "dark" ? (
              <button 
                onClick={() => setTheme("light")}
                className="group rounded-full bg-white/90 px-1.5 py-1 backdrop:shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 hover:text-yellow-500"
              >
                <GiSunflower size={30}/>
              </button>
            ) : (
              <button
                onClick={() => setTheme("dark")}
                className="group rounded-full bg-white/90 px-1 py-1 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 hover:text-teal-500"
              >
                <GiDeathStar size={30}/>
              </button>
            )}
          </div>      
        </div>
        <div className="fixed md:right-0 md:mt-20">
          <div className="flex md:flex-col justify-center">
            <div className="flex items-center my-5 mx-10 md:my-0 md:mx-5">
              <ul className="flex md:flex-col gap-2 rounded-full bg-white/90 px-1 py-0.5 md:py-1.5 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                <li>
                  <Link href="https://michelle-santiago.vercel.app/" className="relative block px-0.5 transition hover:text-teal-500 dark:hover:text-yellow-500">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger><TbCircleLetterM size={30} /></TooltipTrigger>
                        <TooltipContent>
                          <p>Home</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="relative block px-0.5  transition hover:text-teal-500 dark:hover:text-yellow-500">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger> <PiArticleMediumBold size={30} /></TooltipTrigger>
                        <TooltipContent>
                          <p>About Me</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </li>
                <li>
                  <Link href="#stack" className="relative block px-0.5 transition hover:text-teal-500 dark:hover:text-yellow-500">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger><RiToolsFill size={30} /></TooltipTrigger>
                        <TooltipContent>
                          <p>Tech Stack & Tools</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="relative block px-0.5 transition hover:text-teal-500 dark:hover:text-yellow-500">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger><PiBracketsCurlyFill size={30} /></TooltipTrigger>
                        <TooltipContent>
                          <p>Projects</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </li>
              </ul> 
            </div>
          </div>
        </div>
        <div className="fixed bottom-10 right-0">
          <div className="rounded-full bg-white/90 my-5 mx-5 px-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 hover:text-teal-500 dark:hover:text-yellow-500">
            <Link href="#top"><MdOutlineArrowUpward size="30"/></Link>
          </div> 
        </div>
      </nav>
    </div>
  )
}
