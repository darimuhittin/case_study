import React from 'react'
import logo from '../../assets/logo.svg'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from "./style.module.css"
const Header = () => {
  return (
    <nav style={{ display:"flex",justifyContent:"space-between",marginLeft:40,marginRight:135,marginTop:19, alignItems:"center",color:"#424B5A" }}>
        <div>
            <img src={logo} alt="logo" />
        </div>
        <div className={styles.navbarMiddle}>
            <ul style={{ display:"flex",color:"#000000" }}>
                <li>
                    <a href="#">HOME</a>
                </li>
                
                <li style={{ marginLeft:48 }}>
                    <a href="#">ABOUT US</a>
                </li>
                
                <li  style={{ marginLeft:48 }}>
                    <a href="#">FEATURES</a>
                </li>
                
                <li  style={{ marginLeft:48 }}>
                    <a href="#">NEWSROOM</a>
                </li>
                
                <li  style={{ marginLeft:48 }}>
                    <a href="#">CONTACT</a>
                </li>
            </ul>
        </div>
        <div>
            <button style={{ paddingLeft:42,paddingRight:42,paddingTop:13,paddingBottom:13 }}>
                BOOK NOW
            </button>
        </div>
    </nav>
  )
}

export default Header