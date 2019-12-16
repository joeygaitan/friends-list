import React, { Component } from 'react';
import FunctionsContext from '../../../../context/functions';
import './style.css';
import EditPosts from './editPosts/'

class Posts extends Component {
    static contextType = FunctionsContext 
    constructor(props) {
        super(props);
        this.state = {  
            clicker: false
        }
    }
    
    differentPage = (object) => {
        this.context.Post(object)
        this.props.history.push('/dashboard/post')
    }

    render() { 
        return (
            <div className="col-4-sm">
            <div>
                <h5>Posts</h5>
            </div>
            
                {this.context.posts.map((object)=>{
                    return (<>
                    <div className="card" style={{"backgroundColor": "#b2dbbf"}} onClick={(object)=>{return this.differentPage(object)}}>
                        <div className="card-header">
                        {object.title}
                        </div>
                        <div className="card-body" style={{"padding": "50px"}}>
                        <blockquote className="blockquote mb-0">
                        <p>{object.description}</p>
                        <footer className="blockquote-footer">Author:{object.author}</footer>
                        </blockquote>
                        </div>
                    </div>
                        </>
                    );
                })}
                <div>
                <button onClick={()=>{this.setState({clicker:!this.state.clicker})}}>Add a post</button>
                {clicker ? <EditPosts/>:""}
            </div>
            </div>
         );
    }
}
 
export default Posts;