import React from 'react'
import logo from '../../assets/logo.svg'
import iconMenu from '../../assets/icon-menu.svg'
import styles from "./style.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Header = () => {
    const [showHiddenMenu,setShowHiddenMenu] = React.useState(false);
    const hiddenMenuRef = React.useRef(null);
  return (
    <nav style={{ display:"flex",justifyContent:"space-between", alignItems:"center",color:"#424B5A",paddingTop:2,paddingLeft:15,paddingRight:15}}>
        <div>
            <img src={logo} alt="logo" />
        </div>
        <div className={styles.sm_hide}>
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
        <div className={styles.sm_hide}>
            <button style={{ paddingLeft:42,paddingRight:42,paddingTop:13,paddingBottom:13 }}>
                BOOK NOW
            </button>
        </div>
        <div>
            <button onClick={()=>{setShowHiddenMenu(old=>!old)}}>
                <img src={iconMenu} alt="" width={24} height={24}/>
            </button>
        </div>
        { showHiddenMenu && (
            <div className={styles.hiddenMenu} ref={hiddenMenuRef}>
                <div style={{ marginTop:42, marginRight:20,marginLeft:20,display:"flex",justifyContent:"space-between"}}>
                    <img src={logo} alt="logo" width={109} height={53} />

                    <button onClick={()=>{setShowHiddenMenu(old=>!old)}}>
                        <img src={iconMenu} alt="" width={24} height={24}/>
                    </button>
                </div>
                <div style={{ marginTop:42 ,display:"flex",flexDirection:"column"}}>
                    <ul style={{ paddingLeft:24,marginTop:0,marginBottom:0 }}>
                        <li className={styles.hiddenMenuLink}>
                            <a href="#">HOME</a>
                        </li>
                        <li className={styles.hiddenMenuLink}>
                            <a href="#">ABOUT US</a>
                        </li>
                        <li className={styles.hiddenMenuLink}>
                            <a href="#">FEATURES</a>
                        </li>
                        <li className={styles.hiddenMenuLink}>
                            <a href="#">NEWSROOM</a>
                        </li>
                        <li className={styles.hiddenMenuLink}>
                            <a href="#">CONTACT</a>
                        </li>
                        
                    </ul>


                <button className={styles.bookButton} >
                    BOOK NOW
                </button>
                </div>

                <div>
            </div>
        </div>
        )}
    </nav>
  )
}

export default Header