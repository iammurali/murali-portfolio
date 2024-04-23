import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../layout/layout";
import profilepic from "@/src/components/profilepic.jpeg";
import { socialLinks } from "@/lib/info";
import { ArrowIcon, Flutter, GithubIcon, Golang, NextLogo, Nodejs } from "@/src/components/icons";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <Layout data={{ title: "Project", description:"List of project murali has worked on" }}>
      <h1 className="font-bold text-3xl font-serif text-neutral-800 dark:text-neutral-200">Projects</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {`This is the early stage of showcasing my projects, 
        I will keep building stuff that will use and list out here`}
      </p>
      {/* <div className="my-4 flex flex-row space-x-1 max-w-[460px] h-14 overflow-x-auto">
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
          <Nodejs />
          <span className="text-neutral-900 dark:text-neutral-100 ml-3">
            Node.js
          </span>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
          <Golang />
          <span className="text-neutral-900 dark:text-neutral-100 ml-3">
            Golang
          </span>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
          <NextLogo />
          <span className="text-neutral-900 dark:text-neutral-100 ml-3">
            Next.js
          </span>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
          <Flutter   />
          <span className="text-neutral-900 dark:text-neutral-100 ml-3">
            Flutter
          </span>
        </div>
      </div> */}
      
      <hr className="border-neutral-500 mt-3 mb-3"></hr>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https://github.com/iammurali/finnacle`}
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <GithubIcon />
                <div className="ml-3">Finnacle</div>
              </div>
              <ArrowIcon />
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 text-xs mt-2">
              your personal finance tracker
            </p>
          </div>
        </a> */}
        {/*  */}
       
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https://usedaily.io`}
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <GithubIcon />
                <div className="ml-3">Use Daily</div>
              </div>
              <ArrowIcon />
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 text-xs mt-2">
              Landing page for an early stage startup
            </p>
          </div>
        </a>
        {/*  */}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https://www.edaikazhinaducoffeehouse.in`}
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <GithubIcon />
                <div className="ml-3">Coffee house</div>
              </div>
              <ArrowIcon />
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 text-xs mt-2">
              Still in development
            </p>
          </div>
        </a>

        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https://snugl.vercel.app`}
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <GithubIcon />
                <div className="ml-3">Snugl</div>
              </div>
              <ArrowIcon />
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 text-xs mt-2">
              No Code Landing page generator (deprecated)
            </p>
          </div>
        </a>
      </div>
    </Layout>
  );
}
