import React, { Component } from 'react';

class FriendsList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div div className="col-4-md" style={{"padding": "50px"}}>
                <div class="card" style={{"width": "18rem","backgroundColor":"#b2dbbf"}}>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" style={{"backgroundColor":"#b2dbbf"}}>The boy</li>
                        <li class="list-group-item" style={{"backgroundColor":"#b2dbbf"}}>Hank hill drinking brother</li>
                        <li class="list-group-item" style={{"backgroundColor":"#b2dbbf"}}>The guy from wallstreet</li>
                    </ul>
                </div>
            </div>
         );
    }
}
 
export default FriendsList;