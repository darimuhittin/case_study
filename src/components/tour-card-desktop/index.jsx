import React from 'react'
import styles from "./style.module.css"
import planeImg from "../../assets/plane-circle-check-solid-01.png"
const TourCardDesktop = () => {
  return (
    <div className={styles.container}>
      <img src={planeImg} alt="plane" width={40} height={40} className={styles.img}/>
      <div className={styles.textContainer}>
        <div style={{ display:"flex",flexDirection:"column" }}>
          <span>
            16h 45m
          </span>
          <span style={{ color:"#505D68" }}>
            Hawaiian Airlines
          </span>
        </div>
        <div  style={{ display:"flex",flexDirection:"column" }}>
          <span>7:00AM - 4:15PM</span>
        </div>  
        <div  style={{ display:"flex",flexDirection:"column" ,alignItems:"end"}}>
          <span>
            1 stop
          </span>
          <span  style={{ color:"#505D68" }}>
            2h 45m in HNL
          </span>
        </div>
        <div  style={{ display:"flex",flexDirection:"column",alignItems:"end"}}>
          <span>
            $624
          </span>
          <span  style={{ color:"#505D68" }}>
            round trip
          </span>
        </div>
      </div>

    </div>
  )
}

export default TourCardDesktop