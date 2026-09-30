import React from "react";
import clsx from "clsx";
import BrowserOnly from "@docusaurus/BrowserOnly";
// import Link from '@docusaurus/Link';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
import BannerUrl from "@site/static/img/banner.png";
import ChadUrl from "@site/static/img/astrochad.png";
// import PepeUrl from '@site/static/img/astropepe.png';
import AssemblyUrl from "@site/static/img/assembly.png";
// import SearchBar from '@theme/SearchBar';
import * as animationHero from "@site/static/hero.json";

import styles from "./index.module.css";

import RadialGradient from "../components/RadialGradient";
import ContentBox from "../components/ContentBox";
import AstroChad from "../components/AstroChad";
import Satellites from "../components/Satellites";

const subheaderClasses = "opacity-60 md:px-[25%] mb-10 text-lg text-center";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title mb-4">{siteConfig.title}</h1>
        <p className="hero__subtitle mb-8">{siteConfig.tagline}</p>

        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}

        {/* <input
          placeholder="Search docs"
          type="text"
          className="px-4 bg-black/30 rounded-lg h-14 backdrop-blur-lg outline-0 max-w-[700px] w-full"
        /> */}

        {/* <img src={BannerUrl} /> */}
      </div>
    </header>
  );
}

export default function Home() {
  // const { siteConfig } = useDocusaurusContext();

  return (
    <Layout>
      <RadialGradient />
      <main className="relative z-10 py-8 lg:py-12 overflow-x-hidden">
        <HomepageHeader />

        {/* 
      <div className={styles.pepe}>
        <img src={PepeUrl} />
      </div> */}

        {/* <img src="/img/banner.png" /> */}
        <div className="flex flex-col gap-y-10 px-4 w-full mx-auto">
          <div className="max-w-xl w-full mx-auto">
            <BrowserOnly>
              {() => {
                const Lottie = require("lottie-react").default;
                return <Lottie animationData={animationHero} />;
              }}
            </BrowserOnly>
          </div>

          <div>
            <h2 className={styles.title}>Learn</h2>
            <p className={subheaderClasses}>
              Get ready to explore the vast universe of Astroport. Dive in and
              discover all the ways you can deepen your understanding of
              Astroport, whether you're a beginner just starting your DeFi
              journey or a seasoned pro looking to expand your AMM knowledge.
            </p>
            <ContentBox title="Learn" />
          </div>

          <div>
            <div className="max-w-[600px] w-full mx-auto aspect-square mb-10">
              <Satellites />
            </div>
            <h2 className={styles.title}>Govern</h2>
            <p className={subheaderClasses}>
              Discover how to propose contributions as an active community
              member to the Astroport governing body, the Astral Assembly.
            </p>
            <ContentBox title="Govern" />
          </div>

          <div>
            <div className="max-w-[600px] w-full mx-auto aspect-square">
              <AstroChad />
            </div>
            <h2 className={styles.title}>Develop</h2>
            <p className={subheaderClasses}>
              Expand your developer skills and explore the exciting realm of
              Astroport's code base with detailed explanations and tutorials.
            </p>
            <ContentBox title="Develop" />
          </div>
        </div>
      </main>
    </Layout>
  );
}
