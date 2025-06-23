import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "ai-car-sharing",
    category: "AI Application",
    title: "AI-based Car Sharing App",
    src: "/assets/projects-screenshots/ai-car-sharing/landing.png",
    screenshots: ["landing.png", "matching.png", "analytics.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.firebase,
      ],
    },
    live: "https://ai-car-sharing.boldbat.com/",
    github: "https://github.com/boldbat/ai-car-sharing",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI-Powered Car Sharing Revolution
          </TypographyP>
          <TypographyP className="font-mono ">
            An innovative car sharing application that leverages artificial intelligence
            to optimize vehicle allocation, predict demand patterns, and enhance user experience.
            The app uses machine learning algorithms to match users with the most suitable
            vehicles based on their preferences, location, and historical usage patterns.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">AI-Powered Matching</TypographyH3>
          <p className="font-mono mb-2">
            Smart vehicle recommendation system that analyzes user behavior,
            preferences, and real-time availability to suggest the perfect car for each trip.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/ai-car-sharing/matching.png`,
              `${BASE_PATH}/ai-car-sharing/landing.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Predictive Analytics</TypographyH3>
          <p className="font-mono mb-2">
            Advanced algorithms predict demand patterns and optimize vehicle distribution
            across the city to ensure maximum availability where and when users need it most.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/ai-car-sharing/analytics.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Real-time Tracking</TypographyH3>
          <p className="font-mono mb-2">
            Live GPS tracking and IoT integration provide real-time vehicle status,
            location updates, and seamless booking experience through the mobile app.
          </p>
          <TypographyH3 className="my-4 mt-8">Smart Pricing</TypographyH3>
          <p className="font-mono mb-2">
            Dynamic pricing model powered by AI that adjusts rates based on demand,
            time of day, weather conditions, and local events to optimize both
            affordability and availability.
          </p>
        </div>
      );
    },
  },
  {
    id: "ai-career-planning",
    category: "AI Application",
    title: "AI-driven Career Planning App",
    src: "/assets/projects-screenshots/ai-career-planning/landing.png",
    screenshots: ["landing.png", "roadmap.png", "skills.png"],
    live: "https://career-ai.boldbat.com/",
    github: "https://github.com/boldbat/ai-career-planning",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.firebase,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            An intelligent career planning application that uses AI and machine learning
            to provide personalized career guidance, skill gap analysis, and professional
            development recommendations. The app analyzes user profiles, market trends,
            and industry demands to create tailored career roadmaps.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Personalized Career Roadmaps</TypographyH3>
          <p className="font-mono mb-2">
            AI-powered analysis of user skills, interests, and goals to generate
            customized career paths with step-by-step guidance and milestone tracking.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/ai-career-planning/roadmap.png`,
              `${BASE_PATH}/ai-career-planning/landing.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Skill Gap Analysis</TypographyH3>
          <p className="font-mono mb-2">
            Advanced algorithms identify skill gaps between current abilities and
            target career requirements, providing specific learning recommendations
            and resource suggestions.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/ai-career-planning/skills.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Market Intelligence</TypographyH3>
          <p className="font-mono mb-2">
            Real-time job market analysis and salary insights powered by machine learning
            to help users make informed career decisions based on current industry trends.
          </p>
          <TypographyH3 className="my-4 mt-8">Learning Path Optimization</TypographyH3>
          <p className="font-mono mb-2">
            Smart learning recommendations that adapt to user progress and preferences,
            integrating with popular learning platforms and certification programs
            for seamless skill development.
          </p>
          <p className="font-mono mb-2 mt-5">
            The app combines natural language processing for resume analysis,
            predictive modeling for career trajectory forecasting, and collaborative
            filtering for personalized recommendations.
          </p>
        </div>
      );
    },
  },
  {
    id: "ai-chatbot-game",
    category: "Game Development",
    title: "AI Chatbot Integration in 2D Game",
    src: "/assets/projects-screenshots/ai-chatbot-game/landing.png",
    screenshots: ["landing.png", "conversation.png", "gameplay.png"],
    live: "https://game-ai.boldbat.com/",
    github: "https://github.com/boldbat/ai-chatbot-game",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.firebase,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            An innovative 2D game featuring integrated AI chatbot technology that creates
            dynamic, context-aware conversations with NPCs. The game leverages natural
            language processing to provide immersive storytelling experiences where
            player interactions shape the narrative in real-time.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Dynamic NPC Conversations</TypographyH3>
          <p className="font-mono mb-2">
            AI-powered NPCs that understand context, remember previous interactions,
            and respond naturally to player queries, creating unique dialogue
            experiences for each playthrough.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/ai-chatbot-game/conversation.png`,
              `${BASE_PATH}/ai-chatbot-game/gameplay.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Adaptive Storytelling</TypographyH3>
          <p className="font-mono mb-2">
            Machine learning algorithms analyze player choices and conversation patterns
            to dynamically adjust story elements, quest objectives, and character
            development paths.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/ai-chatbot-game/landing.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Natural Language Processing</TypographyH3>
          <p className="font-mono mb-2">
            Advanced NLP integration allows players to communicate with game characters
            using natural language, breaking away from traditional menu-based dialogue systems.
          </p>
          <TypographyH3 className="my-4 mt-8">Real-time Learning</TypographyH3>
          <p className="font-mono mb-2">
            The AI system continuously learns from player interactions to improve
            response quality and create more engaging, personalized gaming experiences
            that evolve with each session.
          </p>
        </div>
      );
    },
  },
  {
    id: "mongolia-guide",
    category: "Travel & Tourism",
    title: "Mongolia Guide App",
    src: "/assets/projects-screenshots/mongolia-guide/landing.png",
    screenshots: ["landing.png", "culture.png", "travel.png"],
    live: "https://mongolia-guide.boldbat.com",
    github:"https://github.com/boldbat/mongolia-guide",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.firebase,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A comprehensive digital guide to Mongolia, showcasing the country&apos;s rich
            culture, stunning landscapes, and unique experiences. Built with love for
            my homeland, this app serves as a bridge between Mongolia and the world,
            offering travelers authentic insights and practical information.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Cultural Heritage</TypographyH3>
          <p className="font-mono mb-2">
            Detailed exploration of Mongolia&apos;s nomadic traditions, historical sites,
            and cultural practices, featuring interactive maps and multimedia content
            to bring the heritage to life.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/mongolia-guide/culture.png`,
              `${BASE_PATH}/mongolia-guide/landing.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Travel Planning</TypographyH3>
          <p className="font-mono mb-2">
            Smart itinerary suggestions based on season, interests, and duration,
            with real-time weather data and local event information to help
            travelers make the most of their Mongolian adventure.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/mongolia-guide/travel.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Local Insights</TypographyH3>
          <p className="font-mono mb-2">
            Authentic recommendations from locals, hidden gems off the beaten path,
            and practical tips for navigating Mongolia&apos;s unique landscape and culture.
          </p>
          <TypographyH3 className="my-4 mt-8">Interactive Features</TypographyH3>
          <p className="font-mono mb-2">
            Virtual tours of key destinations, language learning tools for basic
            Mongolian phrases, and a community platform for travelers to share
            experiences and connect with locals.
          </p>
          <p className="font-mono mb-2 mt-8 text-center">
            Bringing Mongolia closer to the world, one digital experience at a time.
          </p>
        </div>
      );
    },
  },
];
export default projects;
