import React from 'react';
import classes from "./footer.module.css"
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import bug from '../../assets/bug.png'

const Footer = (props)=>{
    return(
        <div>
            <div className={classes.Footer} style={{backgroundColor:"#1B1B1D",backgroundSize:"100% 100%"}} >
                <center>
                    <h2 className={classes.H2}>BUGUNDO<img src={bug} alt="bug" style={{width:'50px',marginLeft:'15px',transform:'translate(0,-5px)'}}/></h2>
                </center>
                <ul className={classes.U}>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Teams</li>
                    <li>Terms & Condition</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className={classes.Img}>
                <img src={instagram} alt="Social" className={classes.Social}/>
                <img src={facebook} alt="Social" className={classes.Social}/>
                <img src={twitter} alt="Social" className={classes.Social}/>
                <img src={linkedin} alt="Social" className={classes.Social}/>
                <span style={{float:'right',color:'white'}} className={classes.Copyright}>Copyright <i className="far fa-copyright"></i> 2020 BUGUNDO. All rights reserved</span>
            </div>
        </div>
    )
}

export default Footer;