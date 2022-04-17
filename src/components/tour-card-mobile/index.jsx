import React from 'react'
import styles from "./style.module.css"
import planeImg from "../../assets/plane-circle-check-solid-01.png"
const TourCardMobile = () => {
  return (
    <div className={styles.card}>
        <div style={{ display:"flex",}}>
            <img src={planeImg} alt="plane" width={40} height={40} style={{ marginTop:4,marginBottom:4 }} />
            <div style={{ display:"flex",flexDirection:"column",marginLeft:16 ,flexGrow:1,justifyContent:"space-between"}}>
                <span>16h 45m</span>
                <span className={styles.gray}>Hawaiian Airlines</span>
            </div>
            <span style={{ marginLeft:10 }}>$624</span>
        </div>
        <div style={{ marginTop:15,display:"flex" }}>
            <div style={{ display:'flex',flexDirection:"column",width:"60%"}}>
                <span>7:00AM - 4:15PM</span>
                <span className={styles.gray}  style={{ marginTop:13 }}>2h 45m in HNL</span>
            </div>
            <div  style={{ display:'flex',flexDirection:"column",marginLeft:18}}>
                <span>1 stop</span>
                <span className={styles.gray} style={{ marginTop:13 }}>round trip</span>
            </div>
        </div>
    </div>
  )
}

export default TourCardMobile