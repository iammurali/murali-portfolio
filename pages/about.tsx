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
        {`I'm passionate about Coding, Photography and Videography. The combination of this interest
        is what led me to my current role of being an engineer`}
      </p>
    </Layout>
  );
}
