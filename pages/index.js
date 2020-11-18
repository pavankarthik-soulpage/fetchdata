// Fetch Data from public API of Github
// Use SWR as a react hook to fetch api data
// Use built in functions fetcher, etc
// Create async function to deploy it as cards
// Render Repository Name, Description, Contributors, Avatar URL

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
export async function getStaticProps() {
  const source = await fetch("https://api.github.com/repositories");
  const lists = await source.json();
  return {
    props: { lists },
  };
}
export default function ApiData({ lists }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fetch Data from API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>List of Repositories</h1>
        <br></br>
        <div className={styles.grid}>
          {lists.map((item) => (
            <ol className={styles.card}>
              <img src={item.owner.avatar_url}></img>
              <br></br>
              <b>Id</b> - {item.id}
              <br></br>Repositoryname -<a href={item.html_url}>{item.name}</a>
              <br></br>
              Description - {item.description}
              <br></br>
              <br></br>
              Contributors -{" "}
              <a href={item.contributors_url}>{item.contributors_url}</a>
            </ol>
          ))}
        </div>
      </main>
    </div>
  );
}
