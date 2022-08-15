import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initAnimation();
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;


function initAnimation() {
  Aos.init({
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120,
    delay: 50,
    duration: 400,
    easing: "ease",
    once: false,
    mirror: false,
    anchorPlacement: "top-bottom",
  });
}

