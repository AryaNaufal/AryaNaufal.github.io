import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './components/navbar'
import Main from './components/main'
import About from './components/about'


export default function Home() {
  return (
      <>
      <Navbar />
      <Main />
      <About />
      </>
  )
}