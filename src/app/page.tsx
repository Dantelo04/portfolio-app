"use client"

import Card from "@/components/Card";
import Link from "next/link";
import { CgArrowRight } from "react-icons/cg";
import Image from "next/image";
import { FaAngular, FaCss3Alt, FaGithub, FaGitSquare, FaHtml5, FaJava, FaLinkedin, FaPython, FaReact } from "react-icons/fa";
import { SiFastapi, SiNextdotjs, SiRubyonrails, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import XpCard from "@/components/XpCard";
import Project from "@/components/Project";
import { FaArrowRightLong, FaLocationDot } from "react-icons/fa6";
import { BiLogoCPlusPlus } from "react-icons/bi";


export default function Home() {
  const currentWork = "OneHQ";
  const experienceYears = "1";
  const expertise = "Full Stack Developer";
  const currentCharge = "Front End Developer";

  return (
    <div className="flex flex-col xl:space-y-4 items-center w-auto min-h-screen max-w-screen">
      <div className="flex flex-col min-[1700px]:w-8/12 w-11/12 items-center justify-center space-y-4 xl:items-start h-fit pt-20">
        <div className="flex xl:flex-row flex-col xl:space-x-4 space-y-4 xl:space-y-0 xl:h-72 xl:items-start items-center w-full">
          <div className="flex xl:w-full w-full grow xl:h-full">
            <Card className="w-full">
              <div className="flex min-[800px]:flex-row flex-col space-y-5 min-[800px]:space-x-6 p-5 items-center max-w-full min-[800px]:justify-start justify-center w-full">
                <Image
                  src={"/dante.png"}
                  alt="definetec_logo"
                  width={600}
                  height={600}
                  className="rounded-xl flex object-contain h-full w-full xl:w-auto brightness-90"
                  quality={80}
                ></Image>
                <div className="flex flex-col xl:h-64 text-start w-full justify-center space-y-2 rounded">
                  <div className="text-neutral-400 uppercase">
                    {expertise}
                  </div>
                  <div className="text-neutral-100 text-4xl font-bold">
                    Dante Rivarola Dinatale.
                  </div>
                  <div className="flex flex-col gap-4 text-neutral-400 ">
                    <div className="">I am a {expertise.toLowerCase()} based in Paraguay with <strong>+{experienceYears}</strong> years of experience.</div>
                    <div className="inline-flex xl:justify-start justify-between items-center gap-2">
                      <a href="https://react.dev/" className="z-50" target="_blank" title="React.Js"><FaReact className="w-10 h-10"/></a>
                      <a href="https://angular.dev/overview" className="z-50" target="_blank" title="Angular"><FaAngular className="w-10 h-10"/></a>
                      <a href="https://tailwindcss.com/" className="z-50" target="_blank" title="Tailwind CSS"><RiTailwindCssFill className="w-10 h-10"/></a>
                      <a href="https://www.typescriptlang.org/docs/" className="z-50" target="_blank" title="TypeScript"><SiTypescript className="w-9 h-9"/></a>
                      <a href="https://www.python.org/doc/" className="z-50" target="_blank" title="Python"><FaPython className="w-10 h-10"/></a>
                      <a href="https://git-scm.com/" className="z-50" target="_blank" title="Git"><FaGitSquare className="w-10 h-10"/></a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="xl:flex flex-col space-y-4 xl:w-full w-full grow h-full overflow-hidden">
            <Card className="">
              <div className="flex justify-center p-2 w-full text-neutral-500">
                <div className="wrapper">
                  <div className="marquee">
                    <p>Latest <span className="text-neutral-100">work</span> ✦ Latest <span className="text-neutral-100">work</span> ✦ Latest <span className="text-neutral-100">work</span> ✦ Latest <span className="text-neutral-100">work</span> ✦ Latest <span className="text-neutral-100">work</span> ✦ Latest <span className="text-neutral-100">work</span> ✦ Latest <span className="text-neutral-100">work</span> ✦&nbsp;</p>
                    <p>Latest <span className="text-neutral-100">work</span> ✦ Latest <span className="text-neutral-100">work</span> ✦ Latest <span className="text-neutral-100">work</span> ✦ Latest <span className="text-neutral-100">work</span> ✦ Latest <span className="text-neutral-100">work</span> ✦ Latest <span className="text-neutral-100">work</span> ✦ Latest <span className="text-neutral-100">work</span> ✦&nbsp;</p>
                  </div>
                </div>
              </div>
            </Card >
            <div className="flex xl:flex-row flex-col xl:space-y-0 space-y-4 xl:space-x-4 w-auto h-full">
              <Card className="xl:min-h-32 xl:grow flex-grow h-full" href="https://github.com/Dantelo04" newTab>
                <div className="flex flex-row space-x-2 p-5 text-neutral-700 w-full items-end h-full">
                  <div className="flex flex-col space-y-2 grow text-start">
                    <div className="uppercase text-sm font-bold">
                      Latest work
                    </div>
                    <div className="inline-flex justify-start items-center gap-2 text-3xl font-bold text-neutral-100">
                      Proyects <FaGithub />
                    </div>
                  </div>
                  <div className="flex items-end">
                    <Link href="#" className="hover:text-neutral-100 duration-150 ease-in"><CgArrowRight className="w-5 h-5"></CgArrowRight></Link>
                  </div>
                </div>
              </Card>
              <Card href="https://www.linkedin.com/in/dante-rivarola-dinatale-264a82289/" newTab className="xl:grow">
                <div className="flex flex-row space-x-2 p-5 text-neutral-700 w-full items-end h-full">
                  <div className="flex flex-col space-y-2 grow text-start">
                    <div className="uppercase text-sm font-bold">
                      More about me
                    </div>
                    <div className="inline-flex justify-start items-center gap-2 text-3xl font-bold text-neutral-100">
                      LinkedIn <FaLinkedin />
                    </div>
                  </div>
                  <div className="flex items-end">
                    <Link href="#" className="hover:text-neutral-100 duration-150 ease-in"><CgArrowRight className="w-5 h-5"></CgArrowRight></Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className="flex xl:flex-row flex-col gap-4 w-full grow xl:h-full">
          <Card className="xl:grow xl:w-fit w-full bg-gradient-to-tl relative border-gray-950" color=" from-neutral-100 relative-card to-white" href="https://www.linkedin.com/company/onehq/posts/?feedView=all" newTab={true}>
            <div className="flex xl:flex-row flex-col space-y-5 xl:space-x-6 xl:space-y-0 p-5 items-center max-w-full xl:justify-center xl:h-64 justify-center w-full">
              <div className="xl:flex flex-col hidden w-full text-start justify-center px-1 xl:space-y-2 space-y-2 rounded max-w-full">
                <div className="text-[#3981e1] uppercase">
                  Currently working at
                </div>
                <div className="text-[#3981e1] text-4xl xl:text-6xl font-bold">
                  {currentWork}
                </div>
                <div className="text-[#3981e1]">
                  as a full-time <strong> {currentCharge.toLowerCase()}</strong>
                </div>
                <div className="inline-flex gap-2 py-2 items-center justify-start text-[#3981e1] w-full">
                  <FaReact className="w-10 h-10 z-50 cursor-pointer" title="React.Js"/>
                  <SiTypescript className="w-10 h-10 z-50 cursor-pointer" title="TypeScript"/>
                  <FaCss3Alt className="w-10 h-10 z-50 cursor-pointer" title="CSS"/>
                  <SiRubyonrails className="w-10 h-10 z-50 cursor-pointer" title="Ruby On Rails"/>
                </div>
              </div>
              <Image
                src={"/logo.png"}
                alt="onehq_logo"
                width={800}
                height={800}
                className="rounded-xl object-contain h-full w-full xl:w-36"
                quality={80}
              ></Image>
              <div className="flex flex-col xl:hidden xl:h-64 w-full justify-center px-1 xl:space-y-3 space-y-1 rounded max-w-full">
                <div className="text-[#3981e1] uppercase">
                  Currently working at
                </div>
                <div className="text-[#3981e1] text-5xl xl:text-6xl font-bold">
                  {currentWork}
                </div>
                <div className="text-[#3981e1]">
                  as a full-time <strong> {currentCharge.toLowerCase()}</strong>
                </div>
              </div>
              <div className="flex xl:hidden flex-col w-full xl:absolute bottom-4 right-9">
                <div className="inline-flex gap-5 items-centerw-full justify-between text-[#3981e1]">
                  <FaReact className="w-10 h-10"/>
                  <SiTypescript className="w-10 h-10"/>
                  <FaCss3Alt className="w-10 h-10"/>
                  <SiRubyonrails className="w-10 h-10"/>
                </div>
              </div>
            </div>
          </Card>

          <Card color="from-blue-900 to-sky-950" className="xl:grow xl:w-fit w-full bg-gradient-to-tl relative-card border-gray-800 border-0" href="https://www.pol.una.py/" newTab={true}>
            <div className="flex xl:flex-row flex-col space-y-5 xl:space-x-6 xl:space-y-0 p-5 items-center max-w-full xl:justify-center xl:h-64 justify-center w-full">
              <div className="xl:flex flex-col hidden w-full text-start justify-center px-1 xl:space-y-2 space-y-2 rounded max-w-full">
              <div className="text-neutral-100/50 uppercase">
                  Currently studying at
                </div>
                <div className="text-neutral-100 text-4xl xl:text-6xl font-bold">
                  FP-UNA
                </div>
                <div className="text-neutral-100/50">
                  to become a <strong>software engineer</strong> 
                </div>
                <div className="inline-flex gap-2 py-2 items-center justify-start text-white">
                  <FaPython className="w-10 h-10 z-50 cursor-pointer" title="React.Js"/>
                  <FaHtml5 className="w-10 h-10 z-50 cursor-pointer" title="HTML"/>
                  <FaJava className="w-10 h-10 z-50 cursor-pointer" title="Java"/>
                  <BiLogoCPlusPlus className="w-10 h-10 z-50 cursor-pointer" title="C++"/>
                </div>
              </div>
              <Image
                src={"/fpuna.jpg"}
                alt="definetec_logo"
                width={600}
                height={600}
                className="rounded-xl object-contain h-full w-full xl:w-auto"
                quality={80}
              ></Image>
              <div className="flex flex-col xl:hidden xl:h-64 w-full justify-center px-1 xl:space-y-3 space-y-1 rounded max-w-full">
              <div className="text-neutral-100/50 uppercase">
                  Currently studying at
                </div>
                <div className="text-neutral-100 text-5xl xl:text-6xl font-bold">
                  FP-UNA
                </div>
                <div className="text-neutral-100/50">
                  to become a <strong>software engineer</strong> 
                </div>
              </div>
              <div className="flex xl:hidden flex-col items-start w-full xl:absolute bottom-4 right-9">
                <div className="inline-flex gap-5 items-center w-full justify-between text-white">
                  <FaPython className="w-10 h-10"/>
                  <FaHtml5 className="w-10 h-10"/>
                  <FaJava className="w-10 h-10"/>
                  <BiLogoCPlusPlus className="w-10 h-10"/>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="w-full">
          <XpCard className="w-full" title="Proyects">
            <div className="border w-full grid xl:grid-cols-4 grid-cols-1 gap-3">
            <Project 
                title="OneHQ New Website (Work In Progress)" 
                src="/onehq.png" 
                href="https://onehq.vercel.app/" 
                description="(Work In Progress) Large scale website for insurance bussiness software company OneHQ, made with NextJS, React, Styled Components, Framer Motion and CSS.">
                <SiNextdotjs className="w-10 h-10"/>
                <SiTypescript className="w-9 h-9"/>
                <FaCss3Alt className="w-10 h-10"/>
                <FaReact className="w-10 h-10"/>
              </Project>
              <Project 
                title="Nasa Space Apps Challenge" 
                src="/yvyryryi.png" 
                href="https://yvyryryi.vercel.app/" 
                description="International NASA Hackathon, interplanetary seismic detection project using data from the Moon and Mars as examples. I was in charge of the web design and frontend development of the project using NextJS 14, TypeScript, and Tailwind CSS.">
                <SiNextdotjs className="w-10 h-10"/>
                <SiFastapi className="w-10 h-10"/>
                <RiTailwindCssFill className="w-10 h-10"/>
              </Project>
              <Project 
                title="Weather App with location" 
                href="https://new-clima-app.vercel.app/" 
                src="/clima.png" 
                description="Weather forecast app built with NextJS 14, TypeScript, and APIs from OpenWeather, JS Geolocator, and OpenCage Data for retrieving forecasts and location data. Developed from scratch, it features a responsive and minimalist design using Tailwind CSS.">
                <SiNextdotjs className="w-10 h-10"/>
                <RiTailwindCssFill className="w-10 h-10"/>
                <SiTypescript className="w-9 h-9"/>
                <FaLocationDot className="w-10 h-10"/>
              </Project>
              <Project 
                title="Trello App Clone" 
                src="/trello.png" 
                href="https://trello-clone-nextjs-red.vercel.app/dashboard" 
                description="A Trello clone app, focused on layout and drag n' drop functionality. Built with NextJS and TypeScript, styled with Tailwind CSS, and featuring custom components.">
                <SiNextdotjs className="w-10 h-10"/>
                <RiTailwindCssFill className="w-10 h-10"/>
                <SiTypescript className="w-9 h-9"/>
              </Project>
              <Project 
                title="Angular E-commerce App" 
                src="/store.png" 
                href="https://store-dante.vercel.app/" 
                description="E-commerce project built with Angular 18, Tailwind and TypeScript, featuring filters, categories, a cart system and API calls to 'FakeStore API' from platzi for retrieving fake products.">
                <FaAngular className="w-10 h-10"/>
                <RiTailwindCssFill className="w-10 h-10"/>
                <SiTypescript className="w-9 h-9"/>              
              </Project>
              <Project 
                title="Auth Template for NextJS" 
                href="https://lucia-auth-template-next.vercel.app/" 
                src="/lucia.png" 
                description="This is a NextJS 14 template with Lucia-auth made by me for future projects. Lucia is an authentication library that simplifies session management, emphasizing code clarity.">
                <SiNextdotjs className="w-10 h-10"/>
                <RiTailwindCssFill className="w-10 h-10"/>
                <SiTypescript className="w-9 h-9"/>
              </Project>
              <Project 
                title="TODO App with Local Storage" 
                src="/todo.png" href="https://mynewtodoapp-46e40.web.app/" 
                description="TODO app for task organization, featuring filters, task selection, and editing capabilities. Built with Angular 17, TypeScript, and CSS. All your todos are stored in your local storage.">
                <FaAngular className="w-10 h-10"/>
                <FaCss3Alt className="w-10 h-10"/>
                <SiTypescript className="w-9 h-9"/> 
              </Project>
              <Project 
                title="Anoto Landing Page" 
                href="https://anoto-app.vercel.app/" 
                src="/anoto.png" 
                description="Landing page for the future disruptive company in the tech sector, Anoto Software, high-quality custom software. Built with NextJS 14 and styled with Tailwind CSS and TypeScript.">
                <SiNextdotjs className="w-10 h-10"/>
                <RiTailwindCssFill className="w-10 h-10"/>
                <SiTypescript className="w-9 h-9"/>
              </Project>
              <a href={"https://github.com/Dantelo04"} target="_blank" className="text-neutral-400 w-full min-h-32 rounded p-10 bg-white border-neutral-400 font-mono flex flex-col justify-center items-center gap-5">
                <FaGithub className="w-20 h-20 text-neutral-400"/>
                <div className="text-xl inline-flex gap-2 justify-center items-center">See more<FaArrowRightLong className="w-5 h-5"/></div>
              </a>
            </div>
          </XpCard>
        </div>

        <div className="flex xl:flex-row flex-col space-y-4 xl:space-y-0 w-full xl:space-x-4 xl:h-72">
          <Card className="h-full xl:aspect-square relative-card bg-gradient-to-r border-0">
            <div className="flex xl:flex-row flex-col space-y-4 xl:space-y-0 xl:space-x-4 p-4 w-full">
              <div className="flex flex-col p-10 space-y-4 items-center justify-center grow rounded-2xl">
                <div className="xl:text-8xl text-8xl font-extrabold">
                  +{experienceYears}
                </div>
                <div className="font-bold text-sm xl:text-base uppercase text-neutral-200 text-center">
                  years experience in software development
                </div>
              </div>
            </div>
          </Card>
          <Card href="/contact" className="h-60 xl:h-full xl:aspect-square grow relative">
            <div className="flex flex-row space-x-2 p-4 xl:p-8 justify-between relative w-full items-center">
              <div className="flex flex-col space-y-2 font-bold w-8/12 h-full justify-center text-4xl xl:text-5xl">
                {"Let's"}<span className="text-sky-800 inline-flex justify-start items-center gap-2">work together.</span>
              </div>
              <div className="flex flex-col justify-center items-center gap-2 text-5xl">
                <div className="animate-bounce">
                  💼
                </div>
                <CgArrowRight className="w-6 h-6"></CgArrowRight>
              </div>
            </div>
          </Card>
        </div>
      </div>
      
    </div>
  );
}
