/*COMPONENTS*/
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
/*UI*/
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Donuts</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="пончики"/>
      </Head>

      <h1 className={styles.title}>Главная</h1>

      <div className={styles.mainImage}>
        <Image
          src="/donuts.png"
          width={500}
          height={300}
          alt="пончик"
        />
      </div>

      <p className={styles.text}>
        Сладкая пышка, политая сладкой глазурью, - это про донатс, он же пончик.
      </p>
      
      <Link href="/donuts">
        <button className={styles.btn}>Все пончики</button>
      </Link>
    </>
  );
}
