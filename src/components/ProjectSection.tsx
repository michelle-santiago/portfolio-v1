 
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { projects } from "@/constants/projects"
import { BiLogoGithub } from "react-icons/bi"
import { FiExternalLink }  from "react-icons/fi"
import { FaImages }  from "react-icons/fa"
import Link from "next/link"
import Image from "next/image"

export default function Projects() {
  return (
   <section id="projects" className="pt-4">
      <h2 className="text-white text-3xl md:text-3xl lg:text-3xl py-4">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        { projects.map((project, idx) => {
            return (
              <div key={idx}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="h-10">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AspectRatio ratio={16 / 9}>
                      <Image src={project.screenshot} width={600} height={200} alt="screenshot" className="rounded-md object-cover" />
                    </AspectRatio>
                  </CardContent>
                  <CardFooter className="flex gap-2 bg-stone-950 py-2">
                    <Button variant="transparent">
                      <Link href={project.repo}>
                        <BiLogoGithub size={30}/>
                      </Link>
                    </Button>
                    { project.live !== "" &&
                      <Button variant="transparent">
                        <Link href={project.live}>
                          <FiExternalLink size={30}/>
                        </Link>
                      </Button>
                    }
                    { project.notion !== "" &&
                      <Button variant="transparent">
                        <Link href={project.notion}>
                          <FaImages size={30}/>
                        </Link>
                      </Button>
                    }
                  </CardFooter>
                </Card>   
              </div> 
            )})}
      </div>   
   </section>
  )
}