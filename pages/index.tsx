import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  var console = () => {

  }

  return (
    <div className={styles.container}>
      <div className={styles.landing}>
        <h1>Fahrzeugauswahl</h1>
      </div>
      <div className={styles.choosing}>
        <select>
          <option value='wahl'>---</option>
          <option value='BMW'>BMW</option>
          <option value='Audi'>Audi</option>
          <option value='Mercedes'>Mercedes</option>
        </select>

        <select onSelect={console}>
          <option value='wahl'>---</option>
          <option value='BMW'>BMW</option>
          <option value='Audi'>Audi</option>
          <option value='Mercedes'>Mercedes</option>
        </select>

        <select>
          <option value='wahl'>---</option>
          <option value='BMW'>BMW</option>
          <option value='Audi'>Audi</option>
          <option value='Mercedes'>Mercedes</option>
        </select>
      </div>
      <div className={styles.content}>
      </div>
    </div>
  )
}

export default Home
