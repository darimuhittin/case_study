import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./style.module.css";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#FFF", textAlign: "center",padding:15 }}>
      <img src={logo} alt="logo" className={styles.logo} width={159} height={97}/>
      <p className={styles.text}>
        We are Europe's first premium long-distance coach provider. We have made
        it our mission to offer 'first-class travel at economy prices'
      </p>
      <hr className={styles.divider} />
      <div className={styles['links-container']}>
        <a href="#">HOME</a>
        <a href="#">ABOUT US</a>
        <a href="#">FEATURES</a>
        <a href="#">NEWSROOM</a>
        <a href="#" style={{ marginBottom:24 }}>CONTACT</a>
      </div>
    </div>
  );
};

export default Footer;
