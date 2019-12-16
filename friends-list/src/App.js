import React,{ Component} from 'react';
import {Route , Switch, BrowserRouter } from 'react-router-dom'
import FunctionsContext from './context/functions';
import SignUp from './components/SignIn/index';
import Dashboard from './components/Dashboard/index';
import Post from './components/Post/index';

class App extends Component {
  constructor(){
    super();
    this.state={
      friends: [],
      account: {
        username:"",
        friends: []
    },
      friendProfile: {},
      friendRequest: [],
      posts: [],
      post: {}
    }
  }

  getFriends = () =>{
    let originalFriends = [{username: "tom",id:1}]
    this.setState({account: {...this.state.account,friends:[...originalFriends]}})
  }

  getFriend = (friendId) =>{
    
  }

  updateAccount = () => {

  }

  addFriend = (friendId) => {
    let newFriend = {username:"",id:this.state.account.friends.length()-1}
    this.setState({account: {username: this.state.account, friends: [...this.state.account.friends, {...newFriend}]}}) 
  }

  getPosts = () =>{
    let originalPosts = [{title: "Nasa Discovers gold", description: "Nasa discovers a new asteriod in a asteriod belt between Jupyter and Mars",author : "tom"}]
    this.setState({posts: [...originalPosts]})
  }

  addPost = () => {

  }

  logOut = () => {
    //for later when I build a backend
  }

  logIn = (user) => {
    console.log(user)
    this.setState({account:{username: user}})
  }

  signUp = (user) => {
    console.log(user)
    this.setState({account:{username: user}})
    console.log(this.state.account)
  }

  loggedIn = () => {
    //this will check if I am logged in still
  }

  componentDidMount = () =>{
    this.getPosts()
  }

    render(){
      return (<FunctionsContext.Provider value={{
            friends: this.state.friends,
            account: this.state.account,
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
                  <Route path = '/dashboard/post' component={Post}/>
                </div>
            </Switch>
          </div>
        </BrowserRouter>
        </FunctionsContext.Provider> 
      );
    }
}

export default App;
