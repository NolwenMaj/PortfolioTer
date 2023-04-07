import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Home from '@/components/Home'
import Spaces from '@/components/Spaces'
import Projects from '@/components/Projects'
import Apropos from '@/components/apropos' 
import ButtonTop from '@/components/ButtonTop'

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  return (
    <>
      <Head>
        <title>Portfolio Nolwen Major Francès</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicone.jpg" />
      </Head>
      <ButtonTop/>
      <Header/>
      <Home/>
      <Projects/> 
      <Apropos/>
    </>
  )
}
