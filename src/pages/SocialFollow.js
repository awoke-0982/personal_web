import React from "react";
import "./Social.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import {
    faGithubSquare,
    faTelegram,
    faFacebook,


  } from "@fortawesome/free-brands-svg-icons";
export default function SocialFollow(){
    return (
        <div className="social-container">
         
            <div className="social-container"> 
            
                <a href="https://" style={{textDecoration:"none"}} >Contact Me</a>

        <a href="https://github.com/awoke-0982/SIMS" className="github social">
            <FontAwesomeIcon icon={faGithubSquare} size="1x" /> Github</a> <br/>
        <a href="https://t.me/sondiago" className="telegram social">
            <FontAwesomeIcon icon={faTelegram} size="1x" /> Telegram</a> <br/>
        <a href="https://www.facebook.com/learnbuildteach/"className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="1x" textDecoration={"none"} />Facebook</a><br/>
        <a href="https://alazereawoke0982@gmail.com" className="email social">
         Email</a>
   
            </div>
             </div>
    )
}