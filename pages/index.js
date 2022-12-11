import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import NavBar from './components/navbar'
import HomeScreen from './components/hero'

export default function Home() {
  return (
    <div>

      <NavBar/>
      <HomeScreen/>
      
    </div>
  )
}
