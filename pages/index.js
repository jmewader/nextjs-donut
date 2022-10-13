/*COMPONENTS*/
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Donuts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Главная</h1>

      <p className={styles.text}>
        Сладкая пышка, политая сладкой глазурью, - это про донатс, он же пончик.
      </p>
      <Link href="/donuts">
        <button className={styles.btn}>Все пончики</button>
      </Link>
    </>
  );
}
