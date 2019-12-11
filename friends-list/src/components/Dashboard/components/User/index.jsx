import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FunctionsContext from '../../../../context/functions';

class User extends Component {
    static contextType = FunctionsContext 
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
        ifClicked = () => {
            sessionStorage.removeItem('userInfo')
            this.props.history.push('/')
        }
    render() {
        return ( 
            <div className="col-4-md" style={{"padding": "50px"}}>
                <div className="card" style={{"width":"400px","backgroundColor":"#b2dbbf"}}>
                    <img className="card-img-top" src="img_avatar1.png" alt="Card image"/>
                    <div className="card-body">
                        <h4 className="card-title">{this.context.account.username}</h4>
                        <p className="card-text">Some example text.</p>
                        <a href="#" className="btn btn-primary" onClick={()=>this.ifClicked()}>log Out</a>
                    </div>
                </div>
            </div>
            );
    }
}
 
export default withRouter(User);