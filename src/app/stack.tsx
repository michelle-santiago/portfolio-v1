import { TiHtml5 } from "react-icons/ti"
import { DiRuby } from "react-icons/di"
import { SiRubyonrails, SiTailwindcss, SiPostman, SiMysql, SiAxios, SiVercel, SiRender} from "react-icons/si"
import { BiLogoJavascript, BiLogoReact, BiLogoPostgresql } from "react-icons/bi"
import { BsFiletypeCss} from "react-icons/bs"
import { FaGitSquare} from "react-icons/fa"

import { Button } from "@/components/ui/button"

export default function Stack() {
  return (
    <section>
      <div className="sm:px-8 bg-teal-500 dark:bg-gray-950">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <h2 className="text-white text-3xl">Tech Stack</h2>
          <div className="mt-4 p-5 grid md:grid-cols-2 lg:grid-cols-2 gap-4 rounded-lg bg-white dark:bg-stone-900">
            <div className="flex flex-col gap-2 p-4 rounded-lg border">
              <h3 className="text-xl">FrontEnd</h3>
              <div className="flex flex-wrap gap-4 pt-6">
                <Button variant={"transparent"}>
                  <TiHtml5 size="40"/>
                  <span className="px-2">HTML</span>
                </Button>
                <Button variant={"transparent"}>
                  <BiLogoJavascript size="40"/>
                  <span className="px-2">Javascript</span>
                </Button>
                <Button variant={"transparent"}>
                  <BsFiletypeCss size="40"/>
                </Button>
                <Button variant={"transparent"}>
                  <SiTailwindcss size="40"/>
                  <span className="px-2">TailwindCSS</span>
                </Button>
                <Button variant={"transparent"}>
                  <BiLogoReact size="40"/>
                  <span className="px-2">ReactJS</span>
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-2 p-4 rounded-lg border">
              <h3 className=" text-xl">BackEnd</h3>
              <div className="flex flex-wrap gap-4 pt-6">
                <Button variant={"transparent"}>
                  <DiRuby size="40"/>
                  <span className="px-2">Ruby</span>
                </Button>
                <Button variant={"transparent"}>
                  <SiRubyonrails size="40"/>
                  <span className="px-2">Ruby on Rails</span>
                </Button>
                <Button variant={"transparent"}>
                  <BiLogoPostgresql size="40"/>
                  <span className="px-2">Postgresql</span>
                </Button>
                <Button variant={"transparent"}>
                  <SiMysql size="40"/>
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-2 p-4 rounded-lg border">
              <h3 className="text-xl">Tools</h3>
              <div className="flex flex-wrap gap-4 pt-6">
                <Button variant={"transparent"}>
                  <FaGitSquare size="40"/>
                  <span className="px-2">Git</span>
                </Button>
                <Button variant={"transparent"}>
                  <SiAxios size="40"/>
                  <span className="px-2">Axios</span>
                </Button>
                <Button variant={"transparent"}>
                  <span className="px-2">Rspec</span>
                </Button>
                <Button variant={"transparent"}>
                  <SiVercel size="40"/>
                  <span className="px-2">Vecel</span>
                </Button>
                <Button variant={"transparent"}>
                  <SiRender size="40"/>
                  <span className="px-2">Render</span>
                </Button>
                <Button variant={"transparent"}>
                  <SiPostman size="40"/>
                  <span className="px-2">Postman</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}