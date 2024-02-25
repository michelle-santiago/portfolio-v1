import { TiHtml5 } from "react-icons/ti"
import { DiRuby } from "react-icons/di"
import { SiRubyonrails, SiTypescript, SiTailwindcss, SiPostman, SiMysql, SiAxios, SiVercel, SiRender} from "react-icons/si"
import { BiLogoJavascript, BiLogoReact, BiLogoPostgresql } from "react-icons/bi"
import { FaGitSquare, FaDocker, FaCss3} from "react-icons/fa"
import { TbBrandNextjs } from "react-icons/tb"
import { GoRuby } from "react-icons/go"
import { GrMysql } from "react-icons/gr"
import { Separator } from "@/components/ui/separator"
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import Bubbles from "./ui/bubbles"

export default function Stack() {
  
  return (
    <section id="stack" className="py-5 px-2 md:px-24 ">
      <div className="flex gap-5">
        <Bubbles/>
        <h2 className="text-white text-2xl md:text-3xl lg:text-3xl py-4">Tech Stack & Tools</h2>
      </div>
      <Separator/>
      <div className="flex flex-wrap justify-center gap-2 w-50 pt-6">
        <Card>
          <CardContent className="flex flex-col md:flex-row items-center gap-2 p-3 md:px-6">
            <TiHtml5 size="40"/>
            <span className="font-semibold">HTML</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col md:flex-row items-center gap-2 p-3 md:px-6">
            <BiLogoJavascript size="40"/>
            <span className="font-semibold">JavaScript</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col md:flex-row items-center gap-2 p-3 md:px-6">
            <SiTypescript size="40"/>
            <span className="font-semibold">TypeScript</span>
          </CardContent>
        </Card>   
        <Card>
          <CardContent className="flex flex-col md:flex-row items-center gap-2 p-3 md:px-6">
            <FaCss3 size="40"/>  
            <span className="font-semibold">CSS</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col md:flex-row items-center gap-2 p-3 md:px-6">
            <SiTailwindcss size="40"/>
            <span className="font-semibold">TailwindCSS</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col md:flex-row items-center gap-2 p-3 md:px-6">
            <BiLogoReact size="40"/>
            <span className="font-semibold">ReactJS</span>
          </CardContent>
        </Card>  
        <Card>
          <CardContent className="flex flex-col md:flex-row items-center gap-2 p-3 md:px-6">
            <TbBrandNextjs size="40"/>
            <span className="font-semibold">NextJS</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col md:flex-row items-center gap-2  p-3 md:px-6">
            <DiRuby size="40"/>
            <span className="font-semibold">Ruby</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col md:flex-row items-center gap-2 p-3 md:px-6">
             <SiRubyonrails size="40"/>
             <span className="font-semibold">Ruby on Rails</span>
          </CardContent>
        </Card>  
        <Card>
          <CardContent className="flex flex-col md:flex-row items-center gap-2 p-3 md:px-6">
            <BiLogoPostgresql size="40"/>
            <span className="font-semibold">PostgreSQL</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col md:flex-row items-center gap-2 p-3 md:px-6">
            <GrMysql size="40"/>
            <span className="font-semibold">MySQL</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col md:flex-row items-center gap-2 p-3 md:px-6">
            <FaDocker size="40"/>
            <span className="font-semibold">Docker</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col md:flex-row items-center gap-2 p-3 md:px-6">
            <FaGitSquare size="40"/>
            <span className="font-semibold">Git</span>
          </CardContent>
        </Card>     
        
        <Card>
          <CardContent className="flex flex-col md:flex-row items-center gap-2 p-3 md:px-6">
            <SiAxios size="40"/>
            <span className="font-semibold">Axios</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col md:flex-row items-center gap-2 p-3 md:px-6">
            <GoRuby size="40"/>
            <span className="font-semibold">RSpec</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col md:flex-row items-center gap-2 p-3 md:px-6">
            <SiVercel size="40"/>
            <span className="font-semibold">Vercel</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col md:flex-row items-center gap-2 p-3 md:px-6">
            <SiRender size="40"/>
            <span className="font-semibold">Render</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col md:flex-row items-center gap-2 p-3 md:px-6">
            <SiPostman size="40"/>
            <span className="font-semibold">Postman</span>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
