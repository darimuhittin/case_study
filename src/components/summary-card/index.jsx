import React from 'react'
import styles from "./style.module.css"
import planeImg from "../../assets/plane-circle-check-solid-01.png"
const SummaryCard = () => {
  return (
      <>
    <div className={styles.card}>
        <img src={planeImg} alt="plane" width={40} height={40} />
        <span className={styles.blackText} style={{ marginTop:16 }}>Hawaiian Airlines</span>
        <span className={styles.grayText} style={{ marginTop:4 }}>FIG4312</span>
        <span className={styles.blackText} style={{ marginTop:16 }}>16h 45m (+1d)</span>
        <span className={styles.blackText} style={{ marginTop:8 }}>7:00 AM - 4:15 PM</span>
        <span className={styles.grayText} style={{ marginTop:8 }}>2h 45m in HNL</span>
    </div>

        <div className={styles.summaryContainer} style={{ display:"flex",justifyContent:"center",marginTop:24 }}>
            <div className={styles.priceSummaryContainer}>
                <span>Subtotal</span>
                <span style={{ marginTop:8 }}>Taxes and Fees</span>
                <span  style={{ marginTop:8 }}>Total</span>
            </div>
            <div className={styles.priceSummaryContainer} style={{ marginLeft:32 }}>
                <span>$503</span>
                <span style={{ marginTop:8 }}>$503</span>
                <span style={{ marginTop:8 }}>$503</span>
            </div>
        </div>
    </>
  )
}

export default SummaryCard