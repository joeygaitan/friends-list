import React, { Component } from 'react';
import FunctionsContext from '../../../../context/functions';

class Posts extends Component {
    static contextType = FunctionsContext 
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="col-4-sm">
            <div>
                <h5>Posts</h5>
            </div>
            <div className="card" style={{"backgroundColor": "#b2dbbf"}}>
                {this.context.posts.map((object)=>{
                    return (<>
                        <div className="card-header">
                        {object.title}
                        </div>
                        <div className="card-body" style={{"padding": "50px"}}>
                        <blockquote className="blockquote mb-0">
                        <p>{object.description}</p>
                        <footer className="blockquote-footer">Author:{object.author}</footer>
                        </blockquote>
                        </div>
                        </>
                    );
                })}
            </div>
            </div>
         );
    }
}
 
export default Posts;