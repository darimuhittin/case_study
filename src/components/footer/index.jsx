import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./style.module.css";
import TwitterLogo from "../../assets/twitter.svg";
import FacebookLogo from "../../assets/facebook.svg";
import InstagramLogo from "../../assets/instagram.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconNTextContainer}>
        <img src={logo} alt="logo" className={styles.logo} />
        <p className={styles.text}>
          We are Europe's first premium long-distance coach provider. We have made
          it our mission to offer 'first-class travel at economy prices'
        </p>
        <div className={styles.socialLinks}>
          <button>
            <img src={TwitterLogo} alt="" />
          </button>
          <button>
            <img src={FacebookLogo} alt="" />
          </button>
          <button>
            <img src={InstagramLogo} alt="" />
          </button>
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={styles['links-container']}>
        <h3 className={styles.linksHeader}>LINKS</h3>
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Features</a>
        <a href="#">Newsroom</a>
        <a href="#">Contact</a>
      </div>
      <div className={styles.contactContainer}>
        <h3 className={styles.linksHeader}>CONTACT</h3>
        <span>info@form.com</span>
        <span>882-587-3025</span>
        <span>6116 Willa River Suite 610</span>
      </div>
    </div>
  );
};

export default Footer;
