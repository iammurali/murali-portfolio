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
      <h1 className="font-bold text-3xl font-serif text-neutral-800 dark:text-neutral-200">Ventures</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {`This is the early stage of showcasing my projects & ventures, 
        I will keep building stuff that will use and list out here`}
      </p>    
      <hr className="border-neutral-500 mt-3 mb-3"></hr>
      <h2 className="font-bold text-xl font-serif text-neutral-800 dark:text-neutral-200 pt-2 pb-4">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https://ddos-chi.vercel.app/`}
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <GithubIcon />
                <div className="ml-3">DDOS</div>
              </div>
              <ArrowIcon />
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 text-xs mt-2">
              Daily dose of sarcasm
            </p>
          </div>
        </a>
       
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
      {/* <hr className="border-neutral-500 mt-3 mb-3"></hr> */}
      <h2 className="font-bold text-xl font-serif text-neutral-800 dark:text-neutral-200 py-4">Ventures</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https://tulirnaturals.com/`}
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <GithubIcon />
                <div className="ml-3">Tulir Naturals</div>
              </div>
              <ArrowIcon />
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 text-xs mt-2">
              An ecommerce focused on sustainable pain relief products
            </p>
          </div>
        </a>
       
      
      </div>
    </Layout>
  );
}
