import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="container">
            <div className="row">
              <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card card-signin my-5">
                  <div className="card-body">
                    <h5 className="card-title text-center">Sign In</h5>
                    <form className="form-signin">
                      <div className="form-label-group">
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
                        <label for="inputEmail">Email address</label>
                      </div>
        
                      <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                        <label for="inputPassword">Password</label>
                      </div>
        
                      <div className="custom-control custom-checkbox mb-3">
                        <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                        <label className="custom-control-label" for="customCheck1">Remember password</label>
                      </div>
                      <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                      <hr className="my-4"/>
                      <h5 className="card-title text-center">If you are new here put in a desired username and password. Then please press new Here</h5>
                      <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i>New Here</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
 
export default SignUp;