import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { GithubCalendar } from "../components/github";
import Hero from "../components/hero";
import NavBar from "../components/navbar";
import RecentBlogs from "../components/projects";

const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <GithubCalendar />
      <RecentBlogs />
      <RecentBlogs />
    </div>
  );
};

export default Home;
