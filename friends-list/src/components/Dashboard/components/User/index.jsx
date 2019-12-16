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
        console.log(this.context)
        return (
            <div className="col-4-md" style={{"padding": "50px"}}>
                <div className="card" style={{"width":"400px","backgroundColor":"#b2dbbf"}}>
                    <img className="card-img-top" src="https://st2.depositphotos.com/1007566/12304/v/950/depositphotos_123041468-stock-illustration-avatar-man-cartoon.jpg" alt="Card image"/>
                    <div className="card-body">
                        <h4 className="card-title">{this.context.account.username}</h4>
                        <p className="card-text">Add Some text here</p>
                        <a href="#" className="btn btn-primary" onClick={()=>this.ifClicked()}>log Out</a>
                    </div>
                </div>
            </div>
            );
    }
}
 
export default withRouter(User);