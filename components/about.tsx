// pages/about.tsx
import Head from 'next/head';
import styles from '../CSS/About.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>About Us</h1>
          <p className={styles.heroSubtitle}>
            We are a team of passionate individuals dedicated to delivering high-quality solutions.
          </p>
        </section>

        {/* Company Overview Section */}
        <section className={styles.overview}>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide outstanding products and services that bring value to our clients and
            can able to make a trustful relationship among us.
          </p>
        </section>

      </main>
    </>
  );
}
