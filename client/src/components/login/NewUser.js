import React, { Component } from "react";
import axios from "axios";
import NewUserModal from "./Modals/NewUserModal"
import Section from "../Section"

class newUser extends Component {

    state={
        firstName: "",
        lastName: "", 
        email: "",
        userName: "",
        password: "",
        successModal: "",
        errorModal: ""
    }

submitForm = event =>{

    event.preventDefault();

    var newUserData= {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        userName: this.state.userName,
        password: this.state.password
    }
    axios.post("/api/users/signUp", {newUserData})
    .then(response=>{
        console.log(response)
    }).catch(err=>{alert("please fill out all fields")})
}

handleExit = () => {
    this.setState({successModal: ""})
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
handleUsername = event =>{
    event.preventDefault()
    this.setState({userName: event.target.value})
}
handlePassword = event =>{
    event.preventDefault()
    this.setState({password: event.target.value})
}

render(){

  return (

    <Section>
        <div className="container has-text-centered">
        
          <div className="column is-6 is-offset-3">
            <h3 className="title has-text-black">Sign Up New User</h3>
            <hr className="login-hr"/>

                <form>
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

                    <div className="field">
                        <div className="control">
                            <input 
                            value={this.state.email}
                            className="input is-med" type="text" placeholder="Email Address" 
                            autoFocus=""
                            onChange={this.handleEmail}/>
                        </div>
                    </div>

                    <div className="field is-half is-pulled-left">
                        <div className="control">
                            <input  
                            value={this.state.userName} 
                            className="input is-med" 
                            type="text" 
                            placeholder="Username" 
                            autoFocus=""
                            onChange={this.handleUsername}/>
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
    
                    <button 
                    className="button is-block is-success is-med is-fullwidth"
                    type="submit"
                    onClick={this.submitForm}
                    >Login <i className="fa fa-sign-in" aria-hidden="true"></i></button>

                </form>
        
                <hr className="login-hr"/>
                <p className="has-text-black">New User? <a href="../">Sign Up Here</a></p>
          </div>
        </div>
    <NewUserModal
    activeModal={this.setState.activeModal}
    firstName={this.state.firstName}
    handleExit={this.handleExit}
    />

    </Section>
  );
}
}

export default newUser;