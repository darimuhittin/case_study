import React from "react";
import styles from "./style.module.css";
import planeImg from "../../assets/plane-circle-check-solid-01.png";
const TourCardDesktop = (props) => {
  const { flight,onSelect,highlight } = props;
  return (
    <div className={styles.container}  onClick={()=>{onSelect(flight)}} style={ highlight ? {backgroundColor:"#F6F6FE",border:"1px solid #605DEC",borderRadius:4} : {cursor:"pointer"}}>
      <img
        src={planeImg}
        alt="plane"
        width={40}
        height={40}
        className={styles.img}
      />
      <div className={styles.textContainer}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>{flight.duration}</span>
          <span style={{ color: "#505D68" }}>{flight.airline}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>
            {flight.departure_time} - {flight.arrival_time}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
          }}
        >
          <span>{flight.stop}</span>
          <span style={{ color: "#505D68" }}>{flight.stop_detail}</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
          }}
        >
          <span>{flight.price.total}</span>
          <span style={{ color: "#505D68" }}>{flight.trip_type}</span>
        </div>
      </div>
    </div>
  );
};

export default TourCardDesktop;
