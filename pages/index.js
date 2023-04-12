import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>NextJS Practice</title>
    </Head>
    <Link href='/about'> About</Link>
      <h1 className={styles.homePageTitle}>Hello World!</h1>
    </>
  )
}
