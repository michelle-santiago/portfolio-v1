import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { PiLinkedinLogoFill} from 'react-icons/pi'
import { FaGithubAlt } from 'react-icons/fa'

export default function Intro() {
  return (
    <section id="intro" className="px-2 md:px-24">
      <div className="sm:px-8 mt-16">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="flex flex-col text-center items-center justify-center md:flex-row md:space-x-4 md:text-left">
            <div className="m-5">
              <Image
                src="/mishil.png"
                alt=""
                width={200}
                height={200}
                priority={true} 
                className="rounded-full bg-teal-600 dark:bg-yellow-500"
              />
            </div>
            <div className="md:mt-2 md:w-3/5 px-5">
              <h1 className="text-3xl font-mono tracking-wider">
                  Hi, I&apos;m <strong>Michelle. </strong>
              </h1>
              <p className="text-lg mt-4 mb-6 md:text-2xl">
                <span>I&apos;m a</span>
                <span className="font-semibold text-teal-600 dark:text-yellow-500">
                  &nbsp;Full Stack Developer&nbsp;
                </span>
                based in the Philippines, steadily navigating the software engineering sea.
              </p>
              <Button>
                <Link href="#projects">
                  Projects
                </Link>
              </Button>
              <Separator className="my-4"/>
              <div className="mt-4 flex gap-4">
                <Link href="https://github.com/michelle-santiago">
                  <FaGithubAlt size={30}/>
                </Link>
                <Link href="https://ph.linkedin.com/in/michelle-santiago-03855a275">
                  <PiLinkedinLogoFill size={30}/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
