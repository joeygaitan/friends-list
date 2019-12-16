import React, { Component } from 'react';

class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <div className="card" style={{"width":"400px", "margin":"100px"}}>
                    <img className="card-img-top" src="img_avatar1.png" alt="Card image"/>
                    <div className="card-body">
                        <h4 className="card-title">John Doe</h4>
                        <p className="card-text">Some example text.</p>
                        <a href="#" className="btn btn-primary">Add Friend</a>
                        <a href="#" className="btn btn-primary">Remove Friend</a>
                    </div>
                </div>
            </>
         );
    }
}
 
export default Friend;