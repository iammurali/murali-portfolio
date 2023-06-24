import Header from "@/src/components/head";
import Link from "next/link";
import PropTypes from "prop-types";
import { ReactNode } from "react";

const Layout = ({
  data,
  children,
}: {
  data: { title: string };
  children: ReactNode;
}) => {
  let { title } = data;

  return (
    <>
      <Header></Header>
      <main className="flex flex-col md:flex-row">
        <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
          <div className="lg:sticky lg:top-20">
            <span className="text-3xl text-white ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start text-bold">M</span>
            <nav className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative text-white">
              <ul className="text-bold mt-2 flex flex-row md:flex-col space-x-0 pr-10 mb-2 md:mt-0">
                <li className="py-[5px]">
                  <Link href="/">
                    <span className="text-white hover:text-neutral-400 transition duration-300 py-[5px] px-[10px] font-bold">
                      Home
                    </span>
                  </Link>
                </li>
                <li className="py-[5px]">
                  <Link href="https://blog.muralielumalai.com/" target="_blank" rel="noopener noreferrer">
                    <span className="text-white hover:text-neutral-400 transition duration-300 py-[5px] px-[10px]">
                      Blog
                    </span>
                  </Link>
                </li>
                <li className="py-[5px]">
                  <Link href="/about">
                    <span className="text-white hover:text-neutral-400 transition duration-300 py-[5px] px-[10px]">
                      About
                    </span>
                  </Link>
                </li>
                <li className="py-[5px]">
                  <Link href="/projects">
                    <span className="text-white hover:text-neutral-400 transition duration-300 py-[5px] px-[10px]">
                      Projects
                    </span>
                  </Link>
                </li>
                
                {/* Add more menu items as needed */}
              </ul>
            </nav>
          </div>
        </aside>
        <div className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
          {children}
        </div>
      </main>
    </>
  );
};
Layout.propTypes = {
  data: PropTypes.object,
  children: PropTypes.object,
};

Layout.defaultProps = {
  data: {},
  children: {},
};

export default Layout;
