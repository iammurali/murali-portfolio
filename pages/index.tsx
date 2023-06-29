import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../layout/layout";
import profilepic from "@/src/components/profilepic.jpeg";
import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/src/components/icons";
import { socialLinks } from "@/lib/info";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout data={{ title: "Murali Elumalai" }}>
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
    </Layout>
  );
}
