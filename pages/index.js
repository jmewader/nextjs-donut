/*COMPONENTS*/
import Head from "next/head";
import Link from "next/link";
import MainLayout from "../components/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Donuts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Главная</h1>
      <Link href="/donuts">
        <a>Все пончики</a>
      </Link>
    </MainLayout>
  );
}
