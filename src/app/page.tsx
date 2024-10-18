import Card from "@/components/Card";
import Link from "next/link";
import { CgArrowRight } from "react-icons/cg";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Home() {
  return (
    <div className="flex flex-col xl:space-y-4 items-center w-auto min-h-screen max-w-screen">
      <div className="flex flex-col xl:w-8/12 w-11/12 items-center justify-center space-y-4 xl:items-start h-fit pt-20">
        <div className="flex xl:flex-row flex-col xl:space-x-4 space-y-4 xl:space-y-0 xl:h-72 xl:items-start items-center w-full">
          <div className="flex xl:w-full w-full grow xl:h-full">
            <Card className="w-full">
              <div className="flex xl:flex-row flex-col space-y-5 xl:space-x-6 p-5 items-center max-w-full xl:justify-start justify-center w-full">
                <Image
                  src={"/dante.png"}
                  alt="definetec_logo"
                  width={600}
                  height={600}
                  className="rounded-xl object-contain h-full w-full xl:w-auto"
                  quality={80}
                ></Image>
                <div className="flex flex-col xl:h-64 text-start w-full justify-center space-y-4 rounded max-w-full">
                  <div className="text-neutral-400 uppercase">
                    Full-stack developer
                  </div>
                  <div className="text-neutral-100 text-4xl font-bold">
                    Dante Rivarola Dinatale.
                  </div>
                  <div className="text-neutral-400">
                    I am a web dev based in Asuncion, Paraguay with <strong>+2</strong> years experience.
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

        <div className="flex w-full grow xl:h-full">
          <Card className="w-full bg-gradient-to-tl border-gray-950" color="from-purple-950 relative-card to-gray-800" href="https://definetec.com.py/" newTab={true}>
            <div className="flex xl:flex-row flex-col space-y-5 xl:space-x-6 xl:space-y-0 p-5 items-center max-w-full xl:justify-center xl:h-64 justify-center w-full">
              <div className="xl:flex flex-col hidden w-full text-start justify-center px-1 xl:space-y-3 space-y-2 rounded max-w-full">
                <div className="text-neutral-100/50 uppercase">
                  Currently working at
                </div>
                <div className="text-neutral-100 text-4xl xl:text-6xl font-bold">
                  Definetec
                </div>
                <div className="text-neutral-100/50">
                  as a full-time fullstack developer
                </div>
              </div>
              <Image
                src={"/definetec.png"}
                alt="definetec_logo"
                width={600}
                height={600}
                className="rounded-xl object-contain h-full w-full xl:w-auto"
                quality={80}
              ></Image>
              <div className="flex flex-col xl:hidden xl:h-64 w-full text-start justify-center px-1 xl:space-y-3 space-y-2 rounded max-w-full">
                <div className="text-neutral-100/50 uppercase">
                  Currently working at
                </div>
                <div className="text-neutral-100 text-4xl xl:text-6xl font-bold">
                  Definetec
                </div>
                <div className="text-neutral-100/50">
                  as a full-time fullstack developer
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex w-full grow xl:h-full">
          <Card color="from-indigo-900 to-gray-800" className="w-full bg-gradient-to-tl relative-card border-gray-800 border-0" href="https://www.pol.una.py/" newTab={true}>
            <div className="flex xl:flex-row flex-col space-y-5 xl:space-x-6 xl:space-y-0 p-5 items-center max-w-full xl:justify-center xl:h-64 justify-center w-full">
              <div className="xl:flex flex-col hidden w-full text-start justify-center px-1 xl:space-y-3 space-y-2 rounded max-w-full">
              <div className="text-neutral-100/50 uppercase">
                  Currently studying at
                </div>
                <div className="text-neutral-100 text-4xl xl:text-6xl font-bold">
                  FP-UNA
                </div>
                <div className="text-neutral-100/50">
                  to become a software engineer
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
              <div className="flex flex-col xl:hidden xl:h-64 w-full text-start justify-center px-1 xl:space-y-3 space-y-2 rounded max-w-full">
              <div className="text-neutral-100/50 uppercase">
                  Currently studying at
                </div>
                <div className="text-neutral-100 text-4xl xl:text-6xl font-bold">
                  FP-UNA
                </div>
                <div className="text-neutral-100/50">
                  to become a software engineer
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* <div className="flex xl:flex-row flex-col space-y-4 xl:space-y-0 w-full xl:space-x-4 xl:h-72">
          
        </div> */}

        <div className="flex xl:flex-row flex-col space-y-4 xl:space-y-0 w-full xl:space-x-4 xl:h-72">
          <Card className="h-full xl:aspect-square relative-card bg-gradient-to-r border-0">
            <div className="flex xl:flex-row flex-col space-y-4 xl:space-y-0 xl:space-x-4 p-4 w-full">
              <div className="flex flex-col p-10 space-y-4 items-center justify-center grow rounded-2xl">
                <div className="xl:text-8xl text-8xl font-extrabold">
                  +2
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
              <div className="text-5xl animate-bounce">💼</div>
            </div>
            <CgArrowRight className="w-5 h-5 absolute xl:bottom-10 right-10 bottom-6"></CgArrowRight>
          </Card>
        </div>
      </div>
      
    </div>
  );
}
