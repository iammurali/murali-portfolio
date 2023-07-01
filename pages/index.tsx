import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../layout/layout";
import profilepic from "@/src/components/profilepic.jpeg";
import {
  ArrowIcon,
  Flutter,
  GithubIcon,
  Golang,
  InstagramIcon,
  LinkedInIcon,
  NextLogo,
  Nodejs,
  TwitterIcon,
} from "@/src/components/icons";
import { socialLinks } from "@/lib/info";
import AWS from "@/src/components/aws.svg";
import GCP from "@/src/components/gcp.svg";
import Postgres from "@/src/components/postgres.svg";
import Mongo from "@/src/components/mongodb.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout
      data={{
        title: "Murali Elumalai",
        description: "A portfolio of Murali Elumalai's website",
      }}
    >
      <h1 className="font-bold text-3xl font-serif text-neutral-800 dark:text-neutral-200">
        Murali Elumalai
      </h1>

      <p className="my-5 max-w-[480px] text-neutral-800 dark:text-neutral-200">
      {`Hey, I'm Murali 👋`}<br /> <b>{`I'm an Engineer II at Eli & Lilly`}</b>, where
        my team is building a better future through technology driven
        problem-solving.
      </p>
      <ul className="mb-2 flex flex-wrap  max-w-[480px]" aria-label="Technologies used">
        <li className="mr-1 mt-2">
          <div className="flex items-center rounded-full bg-neutral-50 dark:bg-neutral-800 px-3 py-1 text-xs font-medium leading-5 text-neutral-900 dark:text-neutral-100">
            React
          </div>
        </li>
        <li className="mr-1 mt-2">
          <div className="flex items-center rounded-full bg-neutral-50 dark:bg-neutral-800 px-3 py-1 text-xs font-medium leading-5 text-neutral-900 dark:text-neutral-100">
            Flutter
          </div>
        </li>
        <li className="mr-1 mt-2">
          <div className="flex items-center rounded-full bg-neutral-50 dark:bg-neutral-800 px-3 py-1 text-xs font-medium leading-5 text-neutral-900 dark:text-neutral-100">
            Go
          </div>
        </li>
        <li className="mr-1 mt-2">
          <div className="flex items-center rounded-full bg-neutral-50 dark:bg-neutral-800 px-3 py-1 text-xs font-medium leading-5 text-neutral-900 dark:text-neutral-100">
            Node.js
          </div>
        </li>
        <li className="mr-1 mt-2">
          <div className="flex items-center rounded-full bg-neutral-50 dark:bg-neutral-800 px-3 py-1 text-xs font-medium leading-5 text-neutral-900 dark:text-neutral-100">
            Typescript
          </div>
        </li>
      </ul>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row text-white">
        <Image
          src={profilepic}
          alt="Murali"
          className="rounded-full grayscale"
          height={80}
          width={80}
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <a
            className="flex items-center gap-2"
            href={socialLinks.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          <a
            className="flex items-center gap-2"
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
            Twitter
          </a>
          <a
            className="flex items-center gap-2"
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
            Github
          </a>
        </div>
        {/* bio */}
      </div>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {`As a passionate Engineer, I specialize in Full Stack development, aiding early-stage startups with easily adoptable tech stacks. 
        I actively collaborate on open-source projects, fostering a spirit of innovation and collaboration.`}
      </p>

      
      <div className="max-w-[460px] text-neutral-900 dark:text-neutral-100 prose prose-neutral dark:prose-invert ">
        <p>
            I have also worked on companies like JP Morgan & Chase, ARInspect as a
          spring boot developer.
        </p>
      </div>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
      <li>
          <a
            href={socialLinks.twitter}
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">Follow me on twitter</p>
          </a>
        </li>
        <li className="">
          <a
            href={socialLinks.email}
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">Send me an email</p>
          </a>

        </li>
        
      </ul>
    </Layout>
  );
}
