import { Separator } from "./ui/separator"

export default function About() {
  return (
    <section id="about" className="py-5">
      <h2 className="text-white text-3xl md:text-3xl lg:text-3xl py-4">About Me</h2>
        <Separator/>
        <p className="text-lg text-white mt-4 mb-6 md:text-xl py-2">
          I graduated from Central Luzon State University in 2019
          with a BS in Information Technology and I studied Full Stack Web Development at Avion School. 
        </p> 
        <p className="text-lg text-white mt-4 mb-6 md:text-xl">
          During my free time, I enjoy travelling, watching korean dramas, reading webtoons and listening to music. 
        </p>
        <p className="text-lg text-white mt-4 mb-6 md:text-xl">
          I am a very curious person and would love to learn and experience new things in this career.
        </p>
    </section>
  )
}