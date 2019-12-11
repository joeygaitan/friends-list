import React, { Component } from 'react';
import User from './components/User/index';
import FriendsList from './components/FriendsList/index';
import Posts from './components/Posts/index';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div class="container">
            <div className="row">
                <User/>
                <Posts/>
                <FriendsList/>
            </div>
        </div> );
    }
}
 
export default Dashboard;