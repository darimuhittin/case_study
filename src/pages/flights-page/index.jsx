import React from 'react'
import TourCardMobile from '../../components/tour-card-mobile'
import TourCardDesktop from '../../components/tour-card-desktop'
import SummaryCard from '../../components/summary-card'
import styles from "./style.module.css"
import { Link } from 'react-router-dom'
import { useWindowSize } from '../../hooks/hooks'
const FlightsPage = () => {

  const size = useWindowSize();
  return (
    <div className={styles.container}>
    <h1 className={styles.headingText}>First class travel at economy prices</h1>
    <p className={styles.littleText}>Select a tour that suits you below.</p>
    {size.width < 1024 ?
    (
      <>
      <div>
        <TourCardMobile/>
        <TourCardMobile/>
        <TourCardMobile/>
      </div>
      <SummaryCard/>
      <div style={{ display:"flex",justifyContent:"end" }}>
        <Link to={`/result`} className={styles.link}>
        <button className={ styles.nextButton}>Next</button>
        </Link>
      </div>
      </>
      ):(
        <div style={{ display:"flex" }}>
        <div className={styles.bigTable}>
          <TourCardDesktop/>
          <TourCardDesktop/>
          <TourCardDesktop/>
          <TourCardDesktop/>
          <TourCardDesktop/>
          <TourCardDesktop/>
          <TourCardDesktop/>
          <TourCardDesktop/>
          <TourCardDesktop/>
        </div>
        <div>
          <SummaryCard/>
          <div style={{ display:"flex",justifyContent:"end" }}>
            <Link to={`/result`} className={styles.link}>
              <button className={ styles.nextButton}>Next</button>
            </Link>
          </div>
        </div>
        </div>)}
    </div>
  )
}

export default FlightsPage