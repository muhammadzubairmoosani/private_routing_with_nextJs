import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Private routing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Home page</h1>

        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        <button type="submit">
          <Link href="/login">
            <a>Login</a>
          </Link>
        </button>
        <br />
        <button type="submit">
          <Link href="/signup">
            <a>Sign up</a>
          </Link>
        </button>
      </main>

      <footer className={styles.footer}>Private routing example</footer>
    </div>
  );
}
