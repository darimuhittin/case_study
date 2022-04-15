import React from 'react'
import TourCard from '../../components/tour-card'
import SummaryCard from '../../components/summary-card'
import styles from "./style.module.css"
const FlightsPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.headingText}>First class travel at economy prices</h1>
      <p className={styles.littleText}>Select a tour that suits you below.</p>
      <div>
        <TourCard/>
        <TourCard/>
        <TourCard/>
      </div>
      <SummaryCard/>
      <div style={{ display:"flex",justifyContent:"end" }}>
        <button className={ styles.nextButton}>Next</button>
      </div>
    </div>
  )
}

export default FlightsPage