import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../layout/layout";
import profilepic from "@/src/components/profilepic.jpeg";
import { socialLinks } from "@/lib/info";
import { ArrowIcon, GithubIcon } from "@/src/components/icons";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <Layout data={{ title: "Murali Elumalai" }}>
      <h1 className="font-bold text-3xl font-serif text-white">Projects</h1>
      <p className="my-5 max-w-[460px] text-neutral-200">
        {`This is the early stage of showcasing my projects, 
        I will keep building stuff that will use and list out here`}
      </p>
      <hr className="border-neutral-500 mt-3 mb-3"></hr>
      <div className="grid grid-cols-3 gap-4">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https://github.com/iammurali/finnacle`}
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <GithubIcon />
                <div className="ml-3">Finnacle</div>
              </div>
              <ArrowIcon />
            </div>
            <p className="text-neutral-400 text-xs mt-2">
              your personal finance tracker
            </p>
          </div>
        </a>
        {/*  */}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https://github.com/iammurali/snuglweb`}
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <GithubIcon />
                <div className="ml-3">Snugl</div>
              </div>
              <ArrowIcon />
            </div>
            <p className="text-neutral-400 text-xs mt-2">
              No Code Landing page generator
            </p>
          </div>
        </a>
        {/*  */}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https://github.com/iammurali/animated-portfolio`}
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <GithubIcon />
                <div className="ml-3">Animated portfolio</div>
              </div>
              <ArrowIcon />
            </div>
            <p className="text-neutral-400 text-xs mt-2">
              A cool text only portfolio webiste
            </p>
          </div>
        </a>
        
      </div>
    </Layout>
  );
}
