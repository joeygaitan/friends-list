import React, { Component } from 'react';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="col-4-md" style={{"padding": "50px"}}>
                <div class="card" style={{"width": "18rem","backgroundColor":"#b2dbbf"}}>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" style={{"backgroundColor":"#b2dbbf"}}>How to be a baby</li>
                        <li class="list-group-item" style={{"backgroundColor":"#b2dbbf"}}>How to tie your shoe without hands</li>
                        <li class="list-group-item" style={{"backgroundColor":"#b2dbbf"}}>Is 50 cent really dead?</li>
                    </ul>
                </div>
            </div>
         );
    }
}
 
export default Posts;