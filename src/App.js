import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import RoutingComponent from './RoutingComponent';


class App extends Component {
  render() {
    return (
      <div className="App">
      <HomeComponent/>
      
      </div>
    );
  }
}
const HomeComponent = () =>{
  return <div style={{display: "-webkit-box"}}>
    <div className="leftComponent">
        <NaVComponent/>
        <HomeContentComponent/>
        <FooterComponent/>
        <CopyrightComponent/>
        </div>
    <div className="rightComponent">
    <AsideComponent/>
    </div>
    </div>

    
}
const NaVComponent = () =>{
  return <div>
    <h2>MockFlow</h2> 
    <header className="home">
    <nav style={{marginTop:"-36px"}}>
    <a><Link to='/'>Signup</Link></a>
    <a><Link to={'/Help'}>Help</Link></a>
    <RoutingComponent/>
     </nav>
     </header>
   
</div>
}
const AsideComponent = () =>{
  return <div>
    <header className="home-aside">
    <h3>Design Cloud</h3>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5DJA4Ve_U18RSvE8wpBVByxxmroroUp_MtJjAGGo8AQl0E4kh" alt=""/>
    <ul>
    <li>
     <h3>wireframe pro</h3>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKWLxI-4eaaLuW3ZFZKvtuN8m4SoMCmz0oTD1Ffy-4ixW0klzT" alt=""/>
     <p>Draw user interface concepts</p>
    </li>
    <li>
     <h3>SiteMap</h3>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKWLxI-4eaaLuW3ZFZKvtuN8m4SoMCmz0oTD1Ffy-4ixW0klzT" alt=""/>
     <p>Create Sitemaps and flows </p>
    </li>
    <li> 
     <h3>DesignCollab</h3>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKWLxI-4eaaLuW3ZFZKvtuN8m4SoMCmz0oTD1Ffy-4ixW0klzT" alt=""/>
     <p>Review and approve designs</p>
    </li>
    <li>
     <h3>WebsitePro</h3>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKWLxI-4eaaLuW3ZFZKvtuN8m4SoMCmz0oTD1Ffy-4ixW0klzT" alt=""/>
     <p>Create Publish websites</p>
    </li>
    <li>
     <h3>AnnotatePro</h3>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKWLxI-4eaaLuW3ZFZKvtuN8m4SoMCmz0oTD1Ffy-4ixW0klzT" alt=""/>
     <p>Markup images and share</p>
    </li>
    <li>
     <h3>BannerPro</h3>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKWLxI-4eaaLuW3ZFZKvtuN8m4SoMCmz0oTD1Ffy-4ixW0klzT" alt=""/>
     <p>Create animated banners</p>
    </li>
     </ul> 
     </header>
</div>
}
const FooterComponent = () =>{
  return <div>
    <footer className="home">
    <nav>
    <a href=""> About</a>
    <a href=""> Samples</a>
    <a href=""> Status</a>
    <a href=""> Blog</a>
    </nav>
    </footer> 
    </div>
    }
    const CopyrightComponent = () =>{
      return <div>
      <h4>©2016 produle</h4>
        </div>
    }
    const HomeContentComponent =()=>{
      return <div>
        <section className="homecomponent-section">
      <h1>Made for Webdesigners</h1>
      <p>UX Tools from Wireframing to implementation</p>
      <input type="button" value="Get Started"/>
        </section>
        </div>
    }
    
export default App;