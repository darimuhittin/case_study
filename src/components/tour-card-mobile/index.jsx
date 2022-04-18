import React from 'react'
import styles from "./style.module.css"
import planeImg from "../../assets/plane-circle-check-solid-01.png"
const TourCardMobile = (props) => {

    const {flight,onSelect,highlight} = props;
  return (
    <div className={styles.card} onClick={()=>{onSelect(flight)}}  style={ highlight ? {backgroundColor:"#F6F6FE",border:"1px solid #605DEC",borderRadius:4} : {cursor:"pointer"}}>
        <div style={{ display:"flex",}}>
            <img src={planeImg} alt="plane" width={40} height={40} style={{ marginTop:4,marginBottom:4 }} />
            <div style={{ display:"flex",flexDirection:"column",marginLeft:16 ,flexGrow:1,justifyContent:"space-between"}}>
                <span>{flight.duration}</span>
                <span className={styles.gray}>{flight.airline}</span>
            </div>
            <span style={{ marginLeft:10 }}>{flight.price.total}</span>
        </div>
        <div style={{ marginTop:15,display:"flex" }}>
            <div style={{ display:'flex',flexDirection:"column",width:"60%"}}>
                <span>{flight.departure_time} - {flight.arrival_time}</span>
                <span className={styles.gray}  style={{ marginTop:13 }}>{flight.stop_detail}</span>
            </div>
            <div  style={{ display:'flex',flexDirection:"column",marginLeft:18}}>
                <span>{flight.stop}</span>
                <span className={styles.gray} style={{ marginTop:13 }}>{flight.trip_type}</span>
            </div>
        </div>
    </div>
  )
}

export default TourCardMobile