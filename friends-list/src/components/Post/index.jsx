import React, { Component } from 'react';
import FunctionsContext from '../../context/functions';

class Post extends Component {
    static contextType = FunctionsContext 
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return ( 
            <>
                <div className="card" style={{"width":"400px", "margin":"100px"}}>
                    <img className="card-img-top" src="img_avatar1.png" alt="Card image"/>
                    <div className="card-body">
                        <h4 className="card-title">{this.context.post}</h4>
                        <p className="card-text">Some example text.</p>
                        <a href="#" className="btn btn-primary">Add Friend</a>
                        <a href="#" className="btn btn-primary">Remove Friend</a>
                    </div>
                </div>
            </>
         );
    }
}
 
export default Post;