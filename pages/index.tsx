import type { NextPage } from 'next'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  var [activBrand, setActivBrand] = useState('Audi');

  var herstellerArray = ['Audi', 'BMW', 'Mercedes']
  var audiModelArray = ["Audi_A1", "Audi_A3", "Audi_A4", "Audi_A5", "Audi_A6", "Audi_A7", "Audi_A8", "Audi_Q3", "Audi_Q5", "Audi_Q7", "Audi_R8", "Audi_RS", "Audi_TT"]
  var bmwModelArray = ["1er-Reihe", "2er Reihe", "3er-Reihe", "4er Reihe", "5er-Reihe", "6er-Reihe", "7er-Reihe", "8er-Reihe"]

  var getElement = (array: Array<String>) => {
    const list = array.map((name) => <option>{name}</option>);
    return list;
  }

  var getModel = () => {
    if (activBrand == "Audi") {
      return getElement(audiModelArray)
    } else if (activBrand == "BMW") {
      return getElement(bmwModelArray)
    } else {
      return <option>error</option>;
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.landing}>
        <h1>Fahrzeugauswahl</h1>
      </div>
      <div className={styles.choosing}>
        <select onChange={(event) => { setActivBrand(event.target.value) }}>
          {
            getElement(herstellerArray)
          }
        </select>

        <select>
          {getModel()}
        </select>

        <select>
          <option value='wahl'>---</option>
          <option value='BMW'>BMW</option>
          <option value='Audi'>Audi</option>
          <option value='Mercedes'>Mercedes</option>
        </select>
      </div>
      <div className={styles.content}>
        <img alt='Car'></img>
      </div>
    </div>
  )
}

export default Home
