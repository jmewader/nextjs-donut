/*COMPONENTS*/
import Head from "next/head";
import MainLayout from "../components/MainLayout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Donuts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Главная</h1>
      <Link href="/donuts">
        <a>Все пончики</a>
      </Link>
    </>
  );
}
