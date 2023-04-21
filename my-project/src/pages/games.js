import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Allumettes from "@/components/Allumettes";
import Motus from "@/components/Motus";

const inter = Inter({ subsets: ["latin"] });

export default function games() {
  return (
    <>
      <Head>
        <title>Portfolio Nolwen Major Francès</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicone.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      {/* <Allumettes /> */}
      <Motus />
    </>
  );
}
