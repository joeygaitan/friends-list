import React,{ Component} from 'react';
import {Route , Switch, BrowserRouter } from 'react-router-dom'
import FunctionsContext from './context/functions';
import SignUp from './components/SignIn/index';
import Dashboard from './components/Dashboard/index';
import Friend from './components/Friend/index'

class App extends Component {
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

  getFriends = () =>{
  }

  getFriend = (friendId) =>{

  }

  getAccount = () =>{

  }

  updateAccount = () => {

  }

  addFriend = (friendId) => {

  }

  getPosts = () =>{

  }

  addPosts = () => {

  }

  logOut = () => {

  }

  logIn = (user) => {
    console.log(user)
    
  }

  signUp = (user) => {
    console.log(user)

  }

  loggedIn = () => {

  }

  componentDidMount = () =>{
    
  }

    render(){
      return (<FunctionsContext.Provider value={{
            friends: this.state.friends,
            account: this.state.profile,
            friendRequests:this.state.friendRequest,
            posts: this.state.posts,
            post: this.state.newPost,
            getFriends: this.getFriends,
            getFriend: this.getFriend,
            getAccount: this.getAccount,
            removeFriend: this.removeFriend,
            updateAccount: this.updateAccount,
            addFriend: this.addFriend,
            getPosts: this.getPosts,
            addPosts: this.addPosts,
            logOut: this.logOut,
            logIn: this.logIn,
            signUp: this.signUp
          }}>
        <BrowserRouter>
          <div>
            <Switch>
                <div>
                  <Route exact path ='/' component={SignUp}/>
                  <Route path = '/dashboard' component={Dashboard}/>
                  <Route path = '/dashboard/:id' component={Friend}/>
                </div>
            </Switch>
          </div>
        </BrowserRouter>
        </FunctionsContext.Provider> 
      );
    }
}

export default App;
