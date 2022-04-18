import React from 'react'
import styles from "./style.module.css"
import planeImg from "../../assets/plane-circle-check-solid-01.png"
import { faLeftRight } from '@fortawesome/free-solid-svg-icons'
const SummaryCard = (props) => {
    const {flight} = props
    console.log(flight);
  return (
      <div className={styles.container}>
    <div className={styles.card}>
        <img src={planeImg} alt="plane" width={40} height={40} />
        <span className={styles.blackText} style={{ marginTop:16 }}>{flight.airline}</span>
        <span className={styles.grayText} style={{ marginTop:4 }}>{flight.flight_number}</span>
        <span className={styles.blackText} style={{ marginTop:16 }}>{flight.duration}</span>
        <span className={styles.blackText} style={{ marginTop:8 }}>{flight.departure_time} - {flight.arrival_time}</span>
        <span className={styles.grayText} style={{ marginTop:8 }}>{flight.stop_detail}</span>
    </div>

        <div className={styles.summaryContainer} style={{ display:"flex",justifyContent:"center",marginTop:24 }}>
            <div className={styles.priceSummaryContainer}>
                <span>Subtotal</span>
                <span style={{ marginTop:8 }}>Taxes and Fees</span>
                <span  style={{ marginTop:8 }}>Total</span>
            </div>
            <div className={styles.priceSummaryContainer} style={{ marginLeft:32 }}>
                <span>{flight.price.subTotal}</span>
                <span style={{ marginTop:8 }}>{flight.price.fees}</span>
                <span style={{ marginTop:8 }}>{flight.price.total}</span>
            </div>
        </div>
    </div>
  )
}

export default SummaryCard