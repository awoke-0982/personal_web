import myImage from './port.jpg';
import "./Social.css";
const Home = () => {

  return <h1>
 
 <div>


  <div style={{alignItems:"stretch", display:"flex" ,fontfamily:"Serif",}}>
  <div style={{width:"800px",hight:"400px"  , margin:"30px"}}>
 <img src={myImage} alt="Trees" height="700px" width="1700px"/>  </div> 
<div style={{width:"700px", hight:"400px" ,margin:"10px"}}><b style={{color:"gray"}}>
<div className="fullstact"style={{color: 'black', fontSize: '1.2em', fontWeight: 'bold'}}>Full Stack Developer</div> 
  <br/>Programming languages</b>- JavaScript, TypeScript, HTML5, CSS, PHP, etc.<br/>
<b style={{color:"gray"}}>Frameworks & libraries </b>-React, Node.js, Bootstrap, etc.<br/>
<b style={{color:"gray"}}>Technologies </b>SQL Server,GitHub etc.<br/>
<b style={{color:"gray"}}>Programs & tools </b>Figma,VS Code etc.<br/>
</div> </div>


</div> 

  </h1>;

};

export default Home;
