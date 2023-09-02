import React from 'react'
import Image from "next/image"
import Link from 'next/link'
export default function Intro() {
  return (
    <>
      <div className="sm:px-8">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 md:flex-row md:space-x-4 md:text-left">
              <div className="m-5">
                <Image
                  src="/mishil.png"
                  alt=""
                  width={250}
                  height={250}
                  className="rounded-full bg-teal-600 dark:bg-yellow-500"
                />
              </div>
              <div className="md:mt-2 md:w-3/5 ">
                <h1 className="text-4xl font-mono tracking-wider">
                    Hi, I&apos;m <strong>Michelle. </strong>
                </h1>
                <p className="text-lg mt-4 mb-6 md:text-2xl ">
                  <span>I&apos;m a</span>
                  <span className="font-semibold text-teal-600 dark:text-yellow-500">
                    &nbsp;Full Stack Web Developer&nbsp;
                  </span>
                  based in Philippines. Navigating the vast web development sea, one website at a time.
                </p>
                <Link href="/projects" className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 dark:bg-yellow-500 dark:hover:bg-yellow-600">
                  Projects
                </Link>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
