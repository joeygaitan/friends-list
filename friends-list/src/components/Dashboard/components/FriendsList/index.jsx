import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';

class FriendsList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    friendPage = () =>{
        this.props.history.push('/friend')
    }

    render() { 
        return ( 
            <div div className="col-4-md" style={{"padding": "50px"}}>
                <div class="card" style={{"width": "18rem","backgroundColor":"#b2dbbf"}}>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" style={{"backgroundColor":"#b2dbbf"}} onClick={()=>{this.friendPage()}}>The boy</li>
                        <li class="list-group-item" style={{"backgroundColor":"#b2dbbf"}} onClick={()=>{this.friendPage()}}>Hank hill drinking brother</li>
                        <li class="list-group-item" style={{"backgroundColor":"#b2dbbf"}} onClick={()=>{this.friendPage()}}>The guy from wallstreet</li>
                    </ul>
                </div>
            </div>
         );
    }
}
 
export default withRouter(FriendsList);