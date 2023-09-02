
import Link from "next/link"
import { TbCircleLetterM } from "react-icons/tb"
import { PiBracketsCurlyFill, PiArticleMediumBold } from "react-icons/pi"
import { MdAlternateEmail } from "react-icons/md"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet"
export default function Nav(){
  return (
    <>
      <div className="flex flex-1 justify-end md:justify-center">
        <nav className="pointer-events-auto hidden md:block">
          <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
            <li>
              <Link href="/" className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-yellow-500">
                <TbCircleLetterM size={30} />
              </Link>
            </li>
            <li>
              <Link href="/about" className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-yellow-500">
                <PiArticleMediumBold size={30} />
              </Link>
            </li>
            <li>
              <Link href="/projects" className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-yellow-500">
                 <PiBracketsCurlyFill size={30} />
              </Link>
            </li>
            <li>
              <Link href="/contact" className="relative block px-3 py-3 transition hover:text-teal-500 dark:hover:text-yellow-500">
                <MdAlternateEmail size={25} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="pointer-events-auto md:hidden">
        <button
          className="group flex items-center rounded-full bg-white/90 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
          type="button"
          aria-expanded="false"
        >
          <Sheet>
            <SheetTrigger><TbCircleLetterM size={40}/></SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Michelle Santiago</SheetTitle>
                <SheetDescription>
                  <ul className="flex flex-col bg-white/90 text-sm font-medium text-zinc-800 text-left shadow-zinc-800/5  backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                    <li>
                      <Link href="/" className="block px-3 py-2 transition hover:text-teal-500 dark:hover:text-yellow-500">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="r block px-3 py-2 transition hover:text-teal-500 dark:hover:text-yellow-500">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/projects" className="block px-3 py-2 transition hover:text-teal-500 dark:hover:text-yellow-500">
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="block px-3 py-3 transition hover:text-teal-500 dark:hover:text-yellow-500">
                        Contacts
                      </Link>
                    </li>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </button>
      </div>
   </>
  )
}

