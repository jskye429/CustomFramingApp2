import React, { Component } from "react";
import axios from "axios";
import Section from "../Section"
import SuccessModal from "./Modals/SuccessModal";
import ErrorModal from "./Modals/ErrorModal";
import "./login.css"

class newUser extends Component {

    state={
        firstName: "",
        lastName: "", 
        email: "",
        password: "",
        successModal: "",
        errorModal: "",
        emailRej: "",
        errorEmailUse: {}        
    }


submitForm = event =>{

    event.preventDefault();

    var newUserData= {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
    }
    
   //this next "if" statement is making sure a password string is passed here before it goes to router since Bcrypt will automatically convert it to a random string
    if(newUserData.password===""){ 
        this.setState({errorModal: "is-active"});
        return;
    }

    axios.post("/api/users/signUp", {newUserData})
    .then(response=>{
       if(response.data.acceptance){ //if new email accepted
            this.setState({successModal: "is-active"});
        }else if(response.data.email){ //if email already in use
            this.setState({errorEmailUse: response.data}, ()=>{
            this.setState({emailRej: "is-active"})
            })
        }
    }).catch(err=>{ //if not all fields are complete
        console.log(err)
        this.setState({errorModal: "is-active"})})
}

handleExit = () => {
    this.setState({successModal: ""})
}
handleErrorExit = () =>{ 
    this.setState({errorModal: ""}, ()=>{
        this.setState({emailRej: ""})
    })
}
handleFirstName = event =>{
    event.preventDefault()
    this.setState({firstName: event.target.value})
}
handleLastName = event =>{
    event.preventDefault()
    this.setState({lastName: event.target.value})
}
handleEmail = event =>{
    event.preventDefault()
    this.setState({email: event.target.value})
}
handlePassword = event =>{
    event.preventDefault()
    this.setState({password: event.target.value})
}

render(){

  return (

    <Section>
        <div className="container has-text-centered">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <h3 className="title has-text-black">Sign Up New User</h3>
            <hr className="login-hr"/>

                <form>
                    <div className="field is-grouped">
      
                    <div className="field is-half is-pulled-left">
                        <div className="control">
                            <input  
                            value={this.state.firstName}
                            id="firstName" 
                            className="input is-med" 
                            type="text" placeholder="First Name" 
                            autoFocus=""
                            onChange={this.handleFirstName}/>
                        </div>
                    </div>
    
                    <div className="field is-half is-pulled-right">
                        <div className="control">
                            <input  
                            value={this.state.lastName}
                            className="input is-med" 
                            type="text" 
                            placeholder="Last Name" 
                            autoFocus=""
                            onChange={this.handleLastName}/>
                        </div>
                    </div>
                    
                    </div>
                   
                    <div className="field is-grouped">
                    
                    <div className="field is-half is-pulled-left">
                        <div className="control">
                            <input 
                            value={this.state.email}
                            className="input is-med" type="text" placeholder="Email Address" 
                            autoFocus=""
                            onChange={this.handleEmail}/>
                        </div>
                    </div>

                    <div className="field is-half is-pulled-right">
                        <div className="control">
                            <input 
                            value={this.state.password} 
                            className="input is-med" 
                            type="password" 
                            placeholder="Password"
                            onChange={this.handlePassword}/>
                        </div>
                    </div> 
                    
                    </div>
           
    
                    <button 
                    className="button is-block is-success is-med is-fullwidth"
                    type="submit"
                    onClick={this.submitForm}
                    >Sign Up<i className="fa fa-sign-in" aria-hidden="true"></i></button>

                </form>
        
                <hr className="login-hr"/>
                <p className="has-text-black">Already have a Login? <a href="/Login">Login Here</a></p>
          
          </div>
        </div>
        </div>
     <SuccessModal
    successModal={this.state.successModal}
    firstName={this.state.firstName}
    handleExit={this.handleExit}
    />

    <ErrorModal
    errorType={this.state.errorModal}
    text1="Please complete all fields."
    handleErrorExit={this.handleErrorExit}
    />

    <ErrorModal
    errorType={this.state.emailRej}
    text1= {this.state.errorEmailUse.email} 
    text2= {this.state.errorEmailUse.message}
    handleErrorExit={this.handleErrorExit}
    />

    </Section>
  );
}
}

export default newUser;
