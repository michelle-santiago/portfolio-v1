import Projects from "@/components/ProjectSection"
import Intro from "@/components/IntroSection"
import About from "@/components/AboutSection"
import Experience from "@/components/ExperienceSection"
import Stack from "@/components/StackSection"
import Fish from "@/components/ui/fish"

export default function Home() {
  return (
    <div>
      <Intro/>
      <div className="text-teal-500 dark:text-gray-950"> 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="currentColor" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,48C384,43,480,21,576,53.3C672,85,768,171,864,208C960,245,1056,235,1152,213.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <div className="relative">
          <div className="absolute inset-y-0 right-14">
            <Fish/>
          </div>
        </div>
      </div>
      <div className="-mt-34 pb-20 px-4 sm:px-8 bg-teal-500 dark:bg-gray-950">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <About/>
          <Experience/>
          <Stack/>
          <Projects/>
        </div>
      </div>
    </div>
  )
}
