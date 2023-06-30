import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../layout/layout";
import profilepic from "@/src/components/profilepic.jpeg";
import {
  ArrowIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/src/components/icons";
import { socialLinks } from "@/lib/info";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout data={{ title: "Murali Elumalai", description:"A portfolio of Murali Elumalai's website" }}>
      <h1 className="font-bold text-3xl font-serif text-neutral-800 dark:text-neutral-200">
        Murali Elumalai
      </h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {`Hey, I'm Murali.`} <b>{`I'm an Engineer II at Eli & Lilly`}</b>, where
        my team is building a better future through technology driven
        problem-solving.
      </p>
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
      {/* <hr className="border-neutral-500 mt-5 mb-3"></hr> */}
      {/* <h1 className="dark:text-neutral-200 pb-2 font-bold font-serif">Social Links</h1>
      <div className="flex flex-col gap-2 md:flex-row md:gap-2">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={socialLinks.instagram}
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex items-center">
            <div className="">Node.js</div>
          </div>
          <ArrowIcon />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={socialLinks.twitter}
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex items-center">
            <div className="">React</div>
          </div>
          <ArrowIcon />
        </a>
       
      </div> */}
    </Layout>
  );
}
