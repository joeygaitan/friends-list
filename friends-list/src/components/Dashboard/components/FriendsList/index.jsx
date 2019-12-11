import React, { Component } from 'react';

class FriendsList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div div className="col-4-md" style={{"padding": "50px"}}>
                <div class="card" style={{"width": "18rem"}}>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">The boy</li>
                        <li class="list-group-item">Hank hill drinking brother</li>
                        <li class="list-group-item">The guy from wallstreet</li>
                    </ul>
                </div>
            </div>
         );
    }
}
 
export default FriendsList;