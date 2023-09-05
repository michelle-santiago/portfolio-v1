import { TiHtml5 } from "react-icons/ti"
import { DiRuby } from "react-icons/di"
import { SiRubyonrails, SiTailwindcss, SiPostman, SiMysql, SiAxios, SiVercel, SiRender} from "react-icons/si"
import { BiLogoJavascript, BiLogoReact, BiLogoPostgresql } from "react-icons/bi"
import { BsFiletypeCss} from "react-icons/bs"
import { FaGitSquare} from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function Stack() {
  return (
    <section id="stack" className="py-5">
      <h2 className="text-white text-3xl md:text-3xl lg:text-3xl py-4">Tech Stack</h2>
      <Separator/>
      <div className="flex flex-wrap gap-4 pt-6">
        <Button variant="transparent">
          <TiHtml5 size="40"/>
          <span className="px-2">HTML</span>
        </Button>
        <Button variant="transparent">
          <BiLogoJavascript size="40"/>
          <span className="px-2">Javascript</span>
        </Button>
        <Button variant="transparent">
          <BsFiletypeCss size="40"/>
        </Button>
        <Button variant="transparent">
          <SiTailwindcss size="40"/>
          <span className="px-2">TailwindCSS</span>
        </Button>
        <Button variant="transparent">
          <BiLogoReact size="40"/>
          <span className="px-2">ReactJS</span>
        </Button>
        <Button variant="transparent">
          <DiRuby size="40"/>
          <span className="px-2">Ruby</span>
        </Button>
        <Button variant="transparent">
          <SiRubyonrails size="40"/>
          <span className="px-2">Ruby on Rails</span>
        </Button>
        <Button variant="transparent">
          <BiLogoPostgresql size="40"/>
          <span className="px-2">Postgresql</span>
        </Button>
        <Button variant="transparent">
          <SiMysql size="40"/>
        </Button>
        <Button variant="transparent">
          <FaGitSquare size="40"/>
          <span className="px-2">Git</span>
        </Button>
        <Button variant="transparent">
          <SiAxios size="40"/>
          <span className="px-2">Axios</span>
        </Button>
        <Button variant="transparent">
          <span className="px-2">Rspec</span>
        </Button>
        <Button variant="transparent">
          <SiVercel size="40"/>
          <span className="px-2">Vecel</span>
        </Button>
        <Button variant="transparent">
          <SiRender size="40"/>
          <span className="px-2">Render</span>
        </Button>
        <Button variant="transparent">
          <SiPostman size="40"/>
          <span className="px-2">Postman</span>
        </Button>
      </div>
    </section>
  )
}