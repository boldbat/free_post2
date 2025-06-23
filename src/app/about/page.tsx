"use client";
import React, { useEffect, useState } from "react";
import { DiMongodb, DiNginx, DiNpm, DiPostgresql, DiVim } from "react-icons/di";
import {
  FaAws,
  FaCss3,
  FaDocker,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaLinux,
  FaNodeJs,
  FaPhone,
  FaReact,
  FaVuejs,
  FaYarn,
} from "react-icons/fa6";
import {
  RiFirebaseFill,
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiKubuntu,
  SiPm2,
  SiPrettier,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { TbTerminal2 } from "react-icons/tb";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "boldbat.nz@icloud.com",
    href: "mailto:boldbat.nz@icloud.com",
    icon: <FaEnvelope height={"50px"} />,
  },
  {
    name: "Phone",
    content: "+976 86970213",
    href: "tel:+97686970213",
    icon: <FaPhone height={"50px"} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/boldbat/",
    content: "/boldbat",
    icon: <FaLinkedin height={"50px"} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/boldbat",
    content: "/boldbat",
    icon: <FaGithub height={"50px"} />,
  },
];

const TOOLS = [
  {
    name: "JavaScript",
    content: "JavaScript is a high-level, interpreted programming language",
    icon: <SiJavascript size={"50px"} color={"#f0db4f"} />,
    color: "#f0db4f",
  },
  {
    name: "TypeScript",
    content: "TypeScript is a superset of JavaScript that compiles to plain JS",
    icon: <SiTypescript size={"50px"} color={"#007acc"} />,
    color: "#007acc",
  },
  {
    name: "HTML",
    content: "Next.js is a React framework for production",
    icon: <FaHtml5 size={"50px"} color="#e34c26" />,
    color: "#e34c26",
  },
  {
    name: "CSS",
    content: "Next.js is a React framework for production",
    icon: <FaCss3 size={"50px"} color="#563d7c" />,
    color: "#563d7c",
  },
  {
    name: "Nodejs",
    content: "Next.js is a React framework for production",
    icon: <FaNodeJs size={"50px"} color="#6cc24a" />,
    color: "#6cc24a",
  },
  {
    name: "React.js",
    content: "Next.js is a React framework for production",
    icon: <FaReact size={"50px"} color="#61dafb" />,
    color: "#61dafb",
  },
  {
    name: "Docker",
    content: "Next.js is a React framework for production",
    icon: <FaDocker size={"50px"} color="#2496ed" />,
    color: "#2496ed",
  },
  {
    name: "NginX",
    content: "Next.js is a React framework for production",
    icon: <DiNginx size={"50px"} color="#008000" />,
    color: "#008000",
  },
  {
    name: "Vue.js",
    content: "Next.js is a React framework for production",
    icon: <FaVuejs size={"50px"} color="#41b883" />,
    color: "#41b883",
  },
  {
    name: "Express.js",
    content: "Next.js is a React framework for production",
    icon: <SiExpress size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "PostgreSQL",
    content: "Next.js is a React framework for production",
    icon: <DiPostgresql size={"50px"} color="#336791" />,
    color: "#336791",
  },
  {
    name: "MongoDB",
    content: "Next.js is a React framework for production",
    icon: <DiMongodb size={"50px"} color="#4db33d" />,
    color: "#4db33d",
  },
  {
    name: "Tailwind CSS",
    content: "Next.js is a React framework for production",
    icon: <RiTailwindCssFill size={"50px"} color="#06b6d4" />,
    color: "#06b6d4",
  },
  {
    name: "Firebase",
    content: "Next.js is a React framework for production",
    icon: <RiFirebaseFill size={"50px"} color="#FFCA28" />,
    color: "#FFCA28",
  },
  {
    name: "Git",
    content: "Next.js is a React framework for production",
    icon: <FaGit size={"50px"} color="#f05032" />,
    color: "#f05032",
  },
  {
    name: "GitHub",
    content: "Next.js is a React framework for production",
    icon: <FaGithub size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "VS Code",
    content: "Next.js is a React framework for production",
    icon: <SiVisualstudiocode size={"50px"} color="#007acc" />,
    color: "#007acc",
  },
  {
    name: "VIM",
    content: "Next.js is a React framework for production",
    icon: <DiVim size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Prettier",
    content: "Next.js is a React framework for production",
    icon: <SiPrettier size={"50px"} color="#f7b93c" />,
    color: "#f7b93c",
  },
  {
    name: "NPM",
    content: "Next.js is a React framework for production",
    icon: <DiNpm size={"50px"} color="#CB3837" />,
    color: "#CB3837",
  },
  {
    name: "Yarn",
    content: "Next.js is a React framework for production",
    icon: <FaYarn size={"50px"} color="#2C8EBB" />,
    color: "#2C8EBB",
  },
  {
    name: "Vercel",
    content: "Next.js is a React framework for production",
    icon: <SiVercel size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Linux",
    content: "Next.js is a React framework for production",
    icon: <FaLinux size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Kubuntu",
    content: "Next.js is a React framework for production",
    // give me correct color for  kubuntu
    icon: <SiKubuntu size={"50px"} color="#0077C4" />,
    color: "#000000",
  },
  {
    name: "Terminal",
    content: "Next.js is a React framework for production",
    icon: <TbTerminal2 size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "AWS",
    content: "Next.js is a React framework for production",
    icon: <FaAws size={"50px"} color="#3f51b5" />,
    color: "#000000",
  },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <img
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square  bg-zinc-800"
                  alt="me"
                  src="/assets/me.jpg"
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">BOLDBAT.K</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Software Engineer & AI Specialist
                </div>
                <div className="text-xs text-zinc-400 text-center">
                  Ulaanbaatar, Mongolia
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md "
                      href={link.href}
                    >
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="basis-3/4 w-[500px]">
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-10 lg:md-20">About me</h1>
            <p className="mb-10 text-roboto">
              Hey there! I&apos;m BOLDBAT.K, a Software Engineer and AI Specialist from Ulaanbaatar, Mongolia,
              passionate about creating innovative digital solutions. With expertise in TypeScript, NodeJS, Flutter,
              Python, C++, JavaScript, AI/ML (TensorFlow, PyTorch, Langchain), UI/UX design, and video editing,
              I thrive on turning ideas into reality through coding, AI integration, and thoughtful design.
            </p>
            <p className="mb-6">
              Currently pursuing my Bachelor&apos;s in AI at Mongolian University of Science and Technology (2023-2027),
              I&apos;m the Founder & CEO of Oyu Intelligence LLC, where I lead the development of cutting-edge AI products
              and solutions. My professional journey includes roles as Creative Lead at Ehlel Brand, freelance web developer,
              and Software Engineer at Oyunii Undraa Group.
            </p>
            <p className="mb-10">
              When I&apos;m not coding, you can find me participating in hackathons, leading volunteer projects,
              engaging in competitive debates, or exploring new technologies while developing my next AI-driven application.
              I&apos;ve achieved recognition in various competitions and hackathons, always pushing the boundaries of what&apos;s possible with technology.
            </p>
            <h1 className="text-3xl mb-10 lg:md-20">Education & Achievements</h1>
            <div className="mb-10">
              <h3 className="text-xl mb-4 text-zinc-300">Education</h3>
              <div className="bg-zinc-800 p-4 rounded-lg mb-4">
                <h4 className="text-lg font-semibold text-white">Bachelor&apos;s in Artificial Intelligence</h4>
                <p className="text-zinc-400">Mongolian University of Science and Technology</p>
                <p className="text-zinc-500 text-sm">2023 - 2027</p>
              </div>

              <h3 className="text-xl mb-4 text-zinc-300 mt-8">Professional Experience</h3>
              <div className="space-y-4">
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-white">Founder & CEO</h4>
                  <p className="text-zinc-400">Oyu Intelligence LLC</p>
                  <p className="text-zinc-500 text-sm">September 2024 - Present</p>
                  <p className="text-zinc-300 text-sm mt-2">Leading AI product development and innovation</p>
                </div>

                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-white">Creative Lead</h4>
                  <p className="text-zinc-400">Ehlel Brand</p>
                  <p className="text-zinc-500 text-sm">June 2024 - September 2024</p>
                  <p className="text-zinc-300 text-sm mt-2">Led creative direction and brand development</p>
                </div>

                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-white">Software Engineer</h4>
                  <p className="text-zinc-400">Oyunii Undraa Group</p>
                  <p className="text-zinc-500 text-sm">March 2023 - June 2024</p>
                  <p className="text-zinc-300 text-sm mt-2">Full-stack development and system architecture</p>
                </div>

                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-white">Web Developer (Freelancer)</h4>
                  <p className="text-zinc-400">Independent</p>
                  <p className="text-zinc-500 text-sm">2019 - 2024</p>
                  <p className="text-zinc-300 text-sm mt-2">Custom web solutions and WordPress development</p>
                </div>
              </div>

              <h3 className="text-xl mb-4 text-zinc-300 mt-8">Achievements & Recognition</h3>
              <div className="bg-zinc-800 p-4 rounded-lg">
                <ul className="space-y-2 text-zinc-300">
                  <li>• Multiple hackathon winner and participant</li>
                  <li>• Competitive programming achievements</li>
                  <li>• AI/ML competition recognition</li>
                  <li>• Open source contributor</li>
                  <li>• Tech community leadership roles</li>
                </ul>
              </div>
            </div>

            <h1 className="text-3xl mb-10 lg:md-20">Stuff I use</h1>
            <div className="mb-5">
              {!toolsLoaded ? (
                <p className="h-[100px]"></p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 5,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {TOOLS.reverse().map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div
                        key={tool.name}
                        className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                      >
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
            {/* <div className="">
              <Splide
                options={{
                  type: "loop",
                  interval: 2000,
                  autoplay: true,
                  pagination: false,
                  speed: 3000,
                  perPage: 5,
                  perMove: 1,
                  rewind: true,
                  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                  arrows: false,
                }}
                aria-label="My Favorite Images"
              >
                {TOOLS.map((tool) => (
                  <SplideSlide key={tool.name}>
                    <div
                      key={tool.name}
                      className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                    >
                      {tool.icon}
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
