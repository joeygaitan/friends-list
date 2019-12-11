import {React, Component} from 'react';
import {Route , Switch, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import FunctionsContext from './context/bookstore-context';
import SignUp from './cmponents/SignIn/index';

class React extends Component {
  constructor(){
    super();
    this.state={
      friends: [],
      profile: {},
      friendProfile: {},
      friendRequest: [],
      posts: [],
      post: {}
    }
  }

  componentDidMount = () =>{
    
  }

    render(){
      
      return (
        <FunctionsContext.Provider value={{
          friends: this.state.friends,
          account: this.state.profile,
          friendRequests:this.state.friendRequest,
          posts: this.state.posts,
          post: this.state.newPost,
          getFriends: ()=>{},
          getFriend: (frindId) => {},
          getAccount: () => {},
          removeFriend: () => {},
          updateAccount: () => {},
          addFriend: (friendId)=>{},
          getPosts: () =>{},
          addPosts: () => {},
          logOut: () => {},
          logIn: () => {},
          signUp:()=>{}
          }}>
        <Router>
          <div>
            <Switch>
                <div>
                  <Route exact path ='/' component={SignUp}/>
                  <Route exact path = '/dashboard' component={Dashboard}/>
                  <Route exact path = '/friend' component={Friend}/>
                </div>
            </Switch>
          </div>
        </Router>
        </FunctionsContext.Provider> 
      );
    }
}

export default App;
