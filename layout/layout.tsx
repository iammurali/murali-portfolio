import Header from "@/src/components/head";
import Link from "next/link";
import PropTypes from "prop-types";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ArrowIcon } from "@/src/components/icons";
import { motion } from "framer-motion";



function MyLogo(){
    return <motion.svg width="30" height="30" viewBox="0 0 79 91" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path d="M0.165894 0.0171509L18.1659 27.5174L17 72.5L0.165894 90.0172V0.0171509Z" fill="white" 
        initial={{ x: -50, opacity: 0.5 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.1,
          type: "spring",
          stiffness: 50,
        }}/>
    <motion.path 
        initial={{ x: 50, opacity: 0.5 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 50,
        }} d="M78.5 0.0171509L60.5 27.5174V74.5L78.5 90.0172V0.0171509Z" fill="white"/>
    <motion.path initial={{ y: -50, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 50,
        }} d="M39.1637 27.6435L18.2372 0.193498H39.1637L60.0901 0.193498L39.1637 27.6435Z" fill="white"/>
    </motion.svg>
}

const Layout = ({
  data,
  children,
}: {
  data: { title: string };
  children: ReactNode;
}) => {
  let { title } = data;
  let pathName = usePathname() || "/";

  return (
    <>
      <Header></Header>
      <main className="flex flex-col md:flex-row">
        <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
          <div className="lg:sticky lg:top-20">
            <span className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start">
              <MyLogo />
            </span>
            <nav className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative text-white">
              <ul className="text-bold mt-2 flex flex-row md:flex-col space-x-0 pr-10 mb-2 md:mt-0">
                <li className="py-[5px]">
                  <Link href="/">
                    <span
                      className={`text-neutral-400 hover:text-white hover:bg-neutral-800 hover:rounded-md py-[5px] px-[10px] ${
                        pathName == "/"
                          ? "font-bold text-white bg-neutral-800 rounded-md transition-all duration-1000"
                          : ""
                      }`}
                    >
                      Home
                    </span>
                  </Link>
                </li>
                <li className="py-[5px]">
                  <Link href="/about">
                    <span
                      className={`text-neutral-400 hover:text-white hover:bg-neutral-800 hover:rounded-md py-[5px] px-[10px] ${
                        pathName == "/about"
                          ? "font-bold text-white bg-neutral-800 rounded-md transition-color duration-500"
                          : ""
                      }`}
                    >
                      About
                    </span>
                  </Link>
                </li>
                <li className="py-[5px]">
                  <Link href="/projects">
                    <span
                      className={`text-neutral-400 hover:text-white hover:bg-neutral-800 hover:rounded-md py-[5px] px-[10px] ${
                        pathName == "/projects"
                          ? "font-bold text-white bg-neutral-800 rounded-md transition-color duration-500"
                          : ""
                      }`}
                    >
                      Projects
                    </span>
                  </Link>
                </li>
                <li className="py-[5px]">
                  <Link
                    href="https://blog.muralielumalai.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      className={`text-neutral-400 hover:text-white hover:bg-neutral-800 hover:rounded-md py-[5px] px-[10px]`}
                    >
                      Blog {`>>`}
                    </span>
                  </Link>
                </li>

                {/* Add more menu items as needed */}
              </ul>
            </nav>
          </div>
        </aside>
        <motion.div className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
          {children}
        </motion.div>
      </main>
    </>
  );
};
Layout.propTypes = {
  data: PropTypes.object,
  children: PropTypes.array,
};

Layout.defaultProps = {
  data: {},
  children: {},
};

export default Layout;
