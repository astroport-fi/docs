import React from 'react';
import styles from './styles.module.css';
import ContentBox from './ContentBox';

const contentBoxProps = {
  overview: {
    title: 'Getting Started',
  },
  learn: {
    title: 'Learn',
  },
  govern: {
    title: 'Govern',
  },
  develop: {
    title: 'Develop',
  },
};

export default function ContentBlocks({ image, title, text, footer }) {
  if (title === 'Learn') {
    return (
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <ContentBox title={contentBoxProps.learn.title} />
      </div>
    );
  }

  if (title === 'Govern') {
    return (
      <div>
        <div className={styles.figs}>
          <img src={image} />
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <ContentBox title={contentBoxProps.govern.title} />
      </div>
    );
  }

  if (footer) {
    return (
      <div>
        <div className={styles.figs}>
          <img src={image} />
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <ContentBox title={contentBoxProps.develop.title} />
      </div>
    );
  }
}
