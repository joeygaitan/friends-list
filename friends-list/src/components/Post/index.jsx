import React, { Component } from 'react';
import FunctionsContext from '../../context/functions';
import { Link } from 'react-router-dom';

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
                        
                    </div>
                </div>
            </>
         );
    }
}
 
export default Post;