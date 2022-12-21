import React from 'react';
import styles from './styles.module.css';
import ContentBox from './ContentBox';

export default function ContentBlocks({ image, title, text, children }) {
  if (title === 'Learn') {
    return (
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <ContentBox title="Learn" />
      </div>
    );
  }

  return (
    <div>
      {children}
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
      <ContentBox title="Develop" />
    </div>
  );
}
