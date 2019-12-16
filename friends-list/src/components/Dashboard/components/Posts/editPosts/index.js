import React, { Component } from 'react';

class EditPosts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:'',
            descripition:''
         }
    }

    onSave = ()=>{
        this.context.addPost({title:this.state.title,descripition:this.state.descripition})
    }

    render() { 
        return (
        <div style={{"paddingTop": "10px"}}>
            <div className="form-group">
                <label>Title</label>
                <input type="email" class="form-control" 
                onChange={(event)=>{this.setState({title:event.target.value})}}
                id="email"/>
            </div>
            <div className="form-group">
                <label>descripition</label>
                <input type="password" class="form-control"
                onChange={(event)=>{this.setState({descripition:event.target.value})}}
                id="pwd"/>
            </div>
            <button className="btn btn-default">Submit</button>
        </div>
         );
    }
}
 
export default EditPosts;