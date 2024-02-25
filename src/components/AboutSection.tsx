import { Separator } from "./ui/separator"
import Bubbles from "./ui/bubbles"
export default function About() {
  return (
    <section id="about" className="px-2 md:px-24">
      <div className="flex gap-5">
        <Bubbles/>
        <h2 className="text-white text-2xl md:text-3xl lg:text-3xl py-4">About Me</h2>
      </div>
      <Separator/>
      <p className="text-lg text-white mt-4 mb-6 md:text-xl py-2">
        I graduated from Central Luzon State University in 2019 with a BS in Information Technology, majoring in Systems Development. To kickstart my career, I then studied Full Stack Web Development at Avion School. 
      </p> 
      <p className="text-lg text-white mt-4 mb-6 md:text-xl py-2">
        I have a bit of experience with web and mobile development. I had on-the-job training at Philippine Rice Research Institute(PhilRice) where I became a mobile developer intern and In 2023, I worked as a freelance software engineer.
        </p>
      <p className="text-lg text-white mt-4 mb-6 md:text-xl">
        During my free time, I enjoy gardening, travelling and listening to music. 
      </p>
      <p className="text-lg text-white mt-4 mb-6 md:text-xl">
        I&apos;m driven by curiosity, always seeking new challenges and experiences in my career. Each project is a chance to innovate and grow, and I&apos;m eager for what lies ahead.
      </p>
    </section>
  )
}