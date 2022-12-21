import React from 'react';
import Lottie from 'lottie-react';
import clsx from 'clsx';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
import RadialGradient from '../components/RadialGradient';
import BannerUrl from '@site/static/img/banner.png';
import ChadUrl from '@site/static/img/astrochad.png';
// import PepeUrl from '@site/static/img/astropepe.png';
import AssemblyUrl from '@site/static/img/assembly.png';
// import SearchBar from '@theme/SearchBar';
import ContentBlocks from '../components/ContentBlocks';
import * as animationHero from '@site/static/hero.json';

import styles from './index.module.css';

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

const contentBlockProps = {
  overview: {
    image: BannerUrl,
    title: 'Getting Started',
    text: 'Today, the doors of Astroport’s governing body, the Astral Assembly, open. And that means all astronauts can enter to help shape the future of Terra 2.0’s most popular swap protocol.',
    footer: false,
  },
  learn: {
    image: BannerUrl,
    title: 'Learn',
    text: 'Today, the doors of Astroport’s governing body, the Astral Assembly, open. And that means all astronauts can enter to help shape the future of Terra 2.0’s most popular swap protocol.',
    footer: false,
  },
  govern: {
    image: AssemblyUrl,
    title: 'Govern',
    text: 'Today, the doors of Astroport’s governing body, the Astral Assembly, open. And that means all astronauts can enter to help shape the future of Terra 2.0’s most popular swap protocol.',
    footer: false,
  },
  develop: {
    image: ChadUrl,
    title: 'Develop',
    text: 'Today, the doors of Astroport’s governing body, the Astral Assembly, open. And that means all astronauts can enter to help shape the future of Terra 2.0’s most popular swap protocol.',
    footer: true,
  },
};

export default function Home() {
  // const { siteConfig } = useDocusaurusContext();

  return (
    <Layout>
      <RadialGradient />
      <div className="relative z-10 py-8 lg:py-12">
        <HomepageHeader />
        <main>{/* <HomepageFeatures /> */}</main>

        {/* <ContentBlocks 
        banner={contentBlockProps.overview.banner}
        image={contentBlockProps.overview.image}
        title={contentBlockProps.overview.title}
        text={contentBlockProps.overview.text}
        footer={contentBlockProps.overview.footer}

      /> */}

        {/* 
      <div className={styles.pepe}>
        <img src={PepeUrl} />
      </div> */}

        {/* <img src="/img/banner.png" /> */}
        <div className="max-w-xl w-full mx-auto">
          <Lottie animationData={animationHero} />
        </div>

        <ContentBlocks
          title={contentBlockProps.learn.title}
          text={contentBlockProps.learn.text}
          footer={contentBlockProps.learn.footer}
        />

        <ContentBlocks
          image={contentBlockProps.govern.image}
          title={contentBlockProps.govern.title}
          text={contentBlockProps.govern.text}
          footer={contentBlockProps.govern.footer}
        />

        {/* <div className={styles.figs}>
        <img src={ChadUrl} />
      </div> */}

        <ContentBlocks
          image={contentBlockProps.develop.image}
          title={contentBlockProps.develop.title}
          text={contentBlockProps.develop.text}
          footer={contentBlockProps.develop.footer}
        />
      </div>
    </Layout>
  );
}
