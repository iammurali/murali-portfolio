import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../layout/layout";
import profilepic from "@/src/components/profilepic.jpeg";
import { ArrowIcon, GithubIcon, InstagramIcon, TwitterIcon } from "@/src/components/icons";
import { socialLinks } from "@/lib/info";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <Layout data={{ title: "Murali Elumalai" }}>
      <h1 className="font-bold text-3xl font-serif text-white">
        About me
      </h1>
      <p className="my-5 max-w-[460px] text-neutral-200">
        {`Hey, I'm Murali.`} I am on the process of 
        increasing my social presence. {`I'm helping early stage startups with their technology`}
      </p>
      
      <p className="my-5 max-w-[600px] text-neutral-200">
        {`I'm passionate about Coding, Photography and Videography. The combination of this interest
        is what led me to my current role of being an engineer`}
      </p>
      <hr className="border-neutral-500 mt-3 mb-3"></hr>
      <p className="my-5 max-w-[600px] text-neutral-200">
        {`I love petting dogs, playing games and listening to music`}
      </p>
      <div className="flex flex-col gap-2 md:flex-row md:gap-2">
      <a
            rel="noopener noreferrer"
            target="_blank"
            href={socialLinks.instagram}
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <InstagramIcon />
              <div className="ml-3">Instagram</div>
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
              <TwitterIcon />
              <div className="ml-3">Twitter</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={socialLinks.github}
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <GithubIcon />
              <div className="ml-3">Github</div>
            </div>
            <ArrowIcon />
          </a>
          
      </div>
    </Layout>
  );
}