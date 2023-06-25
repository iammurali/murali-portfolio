import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../layout/layout";
import profilepic from "@/src/components/profilepic.jpeg";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <Layout data={{ title: "Murali Elumalai" }}>
      <h1 className="font-bold text-3xl font-serif text-white">
        Projects
      </h1>
      <p className="my-5 max-w-[460px] text-neutral-200">
        {`This is the early stage of showcasing my projects, 
        I will keep building stuff that will use and list out here`}
      </p>
      <hr className="border-neutral-500 mt-3 mb-3"></hr>
     
    </Layout>
  );
}
