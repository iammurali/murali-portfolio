import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../layout/layout";
import profilepic from "@/src/components/profilepic.jpeg";
import {
  ArrowIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
} from "@/src/components/icons";
import { socialLinks } from "@/lib/info";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <Layout data={{ title: "Murali Elumalai" }}>
      <h1 className="font-bold text-3xl font-serif text-neutral-800 dark:text-neutral-200">
        About me
      </h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {`Hey, I'm Murali.`} I am on the process of increasing my social
        presence. {`I'm helping early stage startups with their technology`}
      </p>

      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {`I'm passionate about Coding, Photography and Videography. The combination of this interest
        is what led me to my current role of being an engineer`}
      </p>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {`I love petting dogs, playing games and listening to music`}
      </p>
      <hr className="border-neutral-500 mt-5 mb-3"></hr>
      <h1 className="dark:text-neutral-200 pb-2 font-bold font-serif">Social Links</h1>
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
      {/* <hr className="border-neutral-500 mt-5 mb-3"></hr> */}
      <h1 className="dark:text-neutral-200 py-4 font-bold font-serif">I Use</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https://amzn.to/3NzcOes`}
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {/* <GithubIcon /> */}
                <div >{`Macbook Pro 16"`}</div>
              </div>
              <ArrowIcon />
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 text-xs mt-2">
              This is my primary laptop i use for work. M1 Pro, 16GB.
            </p>
          </div>
        </a>
        {/*  */}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https://amzn.to/3JzOxUk`}
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {/* <GithubIcon /> */}
                <div >Macbook Air M1</div>
              </div>
              <ArrowIcon />
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 text-xs mt-2">
              Secondary laptop, For travelling and everything else.
            </p>
          </div>
        </a>
        {/*  */}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https://amzn.to/3r7nhGC`}
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {/* <GithubIcon /> */}
                <div >{`AOC Monitor 24"`}</div>
              </div>
              <ArrowIcon />
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 text-xs mt-2">
              It does the job, didnt want to replace it as of now.
            </p>
          </div>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https://amzn.to/3pvkIxG`}
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {/* <GithubIcon /> */}
                <div >{`Apple Magic Mouse Black Edition`}</div>
              </div>
              <ArrowIcon />
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 text-xs mt-2">
              {`Don't judge me i got it as a gift  from my friend`}
            </p>
          </div>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https://amzn.to/3JE9lKG`}
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {/* <GithubIcon /> */}
                <div >{`Iphone 11`}</div>
              </div>
              <ArrowIcon />
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 text-xs mt-2">
              {`Not planning to replace until its not satisfying my need.`}
            </p>
          </div>
        </a>
        
      </div>
    </Layout>
  );
}
