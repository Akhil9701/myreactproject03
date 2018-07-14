import React, { Component } from 'react';
import './Signup.css';



class Signup extends Component {
  render() {
    return (
      <div className="App">
      <HomeComponent/>
      
      </div>
    );
  }
}
const HomeComponent = () =>{
  return <div style={{display: "-webkit-box",marginLeft:"174px"}}>
    <div className="leftComponent">
        <NaVComponent/>
        <HomeContentComponent/>
        <HomeBoxComponent/>
        </div>

    </div>
}
const NaVComponent = () =>{
  return <div>
    <h2 style= {{color:"darkolivegreen"}}><strong>MockFlow</strong></h2> 
    <header className="home">
    <nav style={{marginTop:"-36px"}}>
    <a href="">Signup</a>
    <a href="">Help</a>
    <a href="">Pricing</a>
    <a href="">Login</a>
     </nav>
     
     </header>
</div>
}

    const HomeContentComponent =()=>{
      return <div style={{padding: "inherit"}}>
        
      <h3>Register for MockFlow</h3>
      <p>Get started with the Basic Plan which provides free access to all Apps in MockFlow DesignCloud</p>
      <p>For more features,Account can be upgraded anytime later.Learn More</p>
      
        </div>
    }

    const HomeBoxComponent =()=>{
        return <div className="boxComponent">
            <nav>
            <button className="btn">Login Directly</button>  
            <h4>Have a Google account?</h4> 
            </nav>
            <hr/>
            
            <div className="form-group ">
            <label className="control-label " htmlFor="Full Name"></label>
          
      <div className="input-group">
      <div className="input-group-addon">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
      <i className="glyphicon glyphicon-user"></i>
      </div>
      <input spellCheck="false" style={{fontFamily: "arial"}} type="fullname" className="form-control" id="fullname" name="fullname" value="" placeholder="Full Name"/>
      </div>
      </div>

      
      <label className="control-label " htmlFor="Email"></label>    
      <div className="input-group" style={{marginTop:"5px"}}>
      <div className="input-group-addon">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
      <i className="glyphicon glyphicon-envelope"></i>
      </div>
      <input spellCheck="false" style={{fontFamily: "arial"}} type="email" className="form-control" id="email" name="email" value="" placeholder="Email"/>
      </div>
      
      <label className="control-label " htmlFor="Password"></label>  
      <div className="input-group" style={{marginTop:"28px"}}>
      <div className="input-group-addon">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
      <i className="glyphicon glyphicon-lock"></i>
      </div>
      <input spellCheck="false" style={{fontFamily: "arial"}} type="password" className="form-control" id="password" name="password" value="" placeholder="Password"/>
      </div>

      <label className="control-label " htmlFor="Confirm Password"></label>  
      <div className="input-group" style={{marginTop:"28px"}}>
      <div className="input-group-addon">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
      <i className="glyphicon glyphicon-lock"></i>
      </div>
      
      <input spellCheck="false" style={{fontFamily: "arial"}} type="confirm password" className="form-control" id="confirm password" name="confirm password" value="" placeholder="Confirm Password"/>
      </div>

      <p style={{marginTop:"10px"}}>By signing up, I accept the Terms & Privacy policies</p>
            
      <button className='btn1 btn-primary'>Register</button>  
          
            
            </div>
           
    }


export default Signup;