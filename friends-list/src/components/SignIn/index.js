import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FunctionsContext from '../../context/functions';


class SignUp extends Component {
    static contextType = FunctionsContext 
    constructor(props) {
        super(props);
        this.state = { username:'',password:'', failed: false, stillLogged: false }
    }

    ifClicked= () =>{
      console.log(this.state.username,this.state.password)
      if(this.state.username !=='' && this.state.password!== ''){
        console.log(this.state.username,this.state.password)
        let userInfo = {username:this.state.username,password:this.state.password}
        if(!sessionStorage.getItem('userInfo')){
          sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
        }else{
          this.context.signIn(this.state.username)
          this.props.history.push('/dashboard')
        }
        this.context.SignUp(this.state.username)
        this.props.history.push('/dashboard')
      }else{
        this.setState({ failed: !this.state.failed })
      }
    }
    render() {
        return (
            <div className="container">
              <div className='row'>
              <h1 className="col-lg-12" style={{"text-align":"center", "padding-top":"30px"}}>The Buddy System</h1>
              </div>
            <div className="row">
              <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card card-signin my-5">
                  <div className="card-body">
                    <h5 className="card-title text-center">Sign In</h5>
                    <form className="form-signin">
                      <div className="form-label-group">
                        <input 
                        type="email" 
                        id="inputEmail" 
                        className="form-control" 
                        placeholder="Email address" 
                        onChange= { (e) => {
                        this.setState({ username: e.target.value})
                        }} 
                        required/>
                        <label for="inputEmail">Email address</label>
                      </div>
        
                      <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" onChange= { (e) => {
                        this.setState({ password: e.target.value})
                        }} required/>
                        <label for="inputPassword">Password</label>
                      </div>
        
                      <div className="custom-control custom-checkbox mb-3">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" for="customCheck1">Remember password</label>
                      </div>
                      <button className="btn btn-lg btn-primary btn-block text-uppercase" onClick={()=>this.ifClicked()}>Sign in</button>

                      {this.state.failed ? <h4 className="" style={{"color":"red"}}>user name or password is missing please try again</h4> : ""}
                      <hr className="my-4"/>
                      <h5 className="card-title text-center">If you are new here put in a desired username and password. Then please press new Here</h5>
                      <button className="btn btn-lg btn-google btn-block text-uppercase"><i className="fab fa-google mr-2" onClick={()=>this.ifClicked()}></i>New Here</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
 
export default withRouter(SignUp);