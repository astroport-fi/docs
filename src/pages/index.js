import React from 'react';
import Lottie from 'lottie-react';
import clsx from 'clsx';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
import BannerUrl from '@site/static/img/banner.png';
import ChadUrl from '@site/static/img/astrochad.png';
// import PepeUrl from '@site/static/img/astropepe.png';
import AssemblyUrl from '@site/static/img/assembly.png';
// import SearchBar from '@theme/SearchBar';
import * as animationHero from '@site/static/hero.json';

import styles from './index.module.css';

import RadialGradient from '../components/RadialGradient';
import ContentBlocks from '../components/ContentBlocks';
import AstroChad from '../components/AstroChad';
import Satellites from '../components/Satellites';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

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
      <div className="relative z-10 py-8 lg:py-12">
        <HomepageHeader />
        <main>{/* <HomepageFeatures /> */}</main>

        {/* 
      <div className={styles.pepe}>
        <img src={PepeUrl} />
      </div> */}

        {/* <img src="/img/banner.png" /> */}
        <div className="max-w-xl w-full mx-auto">
          <Lottie animationData={animationHero} />
        </div>

        <ContentBlocks
          title="Learn"
          text="Today, the doors of Astroport’s governing body, the Astral Assembly, open. And that means all astronauts can enter to help shape the future of Terra 2.0’s most popular swap protocol."
        />
        <ContentBlocks
          title="Govern"
          text="Today, the doors of Astroport’s governing body, the Astral Assembly, open. And that means all astronauts can enter to help shape the future of Terra 2.0’s most popular swap protocol."
        >
          <div className="max-w-[600px] w-full mx-auto aspect-square">
            <Satellites />
          </div>
        </ContentBlocks>
        <ContentBlocks
          title="Develop"
          text="Today, the doors of Astroport’s governing body, the Astral Assembly, open. And that means all astronauts can enter to help shape the future of Terra 2.0’s most popular swap protocol."
        >
          <div className="max-w-[600px] w-full mx-auto aspect-square">
            <AstroChad />
          </div>
        </ContentBlocks>
      </div>
    </Layout>
  );
}
