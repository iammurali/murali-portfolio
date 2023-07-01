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

export default function Contact() {
  return (
    <Layout data={{ title: "Contact", description:"Let's work together" }}>
      <h1 className="font-bold text-3xl font-serif text-neutral-800 dark:text-neutral-200">
        {`Let's Work Together`}
      </h1>
      Contact Form
        
      
    </Layout>
  );
}
