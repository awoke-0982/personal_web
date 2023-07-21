import "./Social.css" 
import myImage from './develop.JPG';
const About = () => {
    return <div className="container"> 
    
     
    <div className="box" id="box-1">
<div className="box" id="box-2">
<div className="box" id="box-3">
<div className="box" id="box-4">

      <h3 className="about1">  <br/><br/> <br/><br/>
      <div><b>Hello You</b><br/> <b style={{color:"white"}}>Self introduction</b> I am Alazere Awoke.I live in Ethiopia , 
        Addiss Abeba.I am Information System Professional from Mekell Universty</div><br/>
    <div><b style={{color:"white"}}>Skill</b> <br/>
<b style={{color:"gray" ,  fontfamily: "Sofia"}}>Programming languages</b>- JavaScript, TypeScript, HTML5, CSS, PHP, etc.<br/>
<b style={{color:"gray"}}>Frameworks & libraries </b>-React, Node.js, Bootstrap, etc.<br/>
<b style={{color:"gray"}}>Technologies </b>SQL Server,GitHub etc.<br/>
<b style={{color:"gray"}}>Programs & tools </b>Figma,VS Code etc.<br/>
    
 </div> <br/>
    <div><b style={{color:"white"}}>Personal detail</b> I am sociable or communciate with other easily.<br/>Also i am commited and passionate in My Job.Also i have skill in computer 
      ,network,system analysis,managing team work finaly <br/>I'm quietly confident, naturally curious,<br/> and perpetually working on improving my chops one design problem at a time.
    </div> 
    <br/>  
    <div className="plate-container">
<div className="containe">
    <div className="my-pic">
      {/* 👇 show image */}
      <img src={myImage} alt="Trees" height="200" />  <br />
     
    </div> </div>
    </div>

    </h3>; 
    </div> </div> </div> </div>
    </div>
  };
  
  export default About;