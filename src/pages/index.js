import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css'; // Ensure you create a corresponding CSS module

export default function Home() {
  return (
    <Layout title="Welcome to The Consistent Machine">
      <header className={styles.heroBanner}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>The Consistent Machine</h1>
          <p className={styles.heroSubtitle}>
            Journey through technology with passion and consistency.
          </p>
        </div>
      </header>
      <main className={styles.mainContent}>
        <section className={styles.introduction}>
          <div className={styles.container}>
            <h2>About Me</h2>
            <p>
              Hi, I’m passionate about technology and love exploring new advancements. This space is where I document my journey, share insights, and explore various tech-related topics.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}

