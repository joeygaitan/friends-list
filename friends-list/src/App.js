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
    
  }

  getFriend = (friendId) =>{
    
  }

  updateAccount = () => {
    // let originalFriends = [{username: "tom",id:1}]
    // this.setState({account: {...this.state.account,friends:[...originalFriends]}})
    let friends = JSON.parse(sessionStorage.getItem('friends'))
    let userInfo = JSON.parse(sessionStorage.getItem('userInfo'))

    this.setState({
      account:{username: userInfo.username, friends:[...friends]}
    })
  }

  addFriend = (friendId) => {
    let newFriend = {username:friendId.username,id:this.state.account.friends.length()-1}
    this.setState({account: {username: this.state.account, friends: [...this.state.account.friends, {...newFriend}]}}) 
    sessionStorage.setItem('friendsList',JSON.stringify(this.state.friends))
    this.updateAccount()
  }

  removeFriend = (friendId) =>{

  }

  getPosts = () =>{
    let originalPosts = [{title: "Nasa Discovers gold", description: "Nasa discovers a new asteriod in a asteriod belt between Jupyter and Mars",author : "tom"}]
    this.setState({posts: [...originalPosts]})
  }

  addPost = (post) => {
    let newPost = {title:post.title,description:post.description,author:this.state.account.username}

    this.setState({posts: [...posts,{...newPost}]})
    this.updateAccount()
  }

  logOut = () => {
    //for later when I build a backend
  }

  logIn = (user=null) => {
    if(user != null){
      let originalFriends = [{username: "tom",id:1}]
      sessionStorage.setItem('friends', JSON.stringify(originalFriends))
      console.log(user)
      this.setState({account:{username: user,friends:[...originalFriends]}})
    }else{
      return null
    }
  }

  signUp = (user=null) => {
    if(user !=null){
      let originalFriends = [{username: "tom",id:1}]
      console.log(user)
      sessionStorage.setItem('friends', JSON.stringify(originalFriends))
      this.setState({account:{username: user,friends:[...originalFriends]}})
      console.log(this.state.account)
    }else{
      return null
    }
  }

  loggedIn = () => {
    //this will check if I am logged in still
  }

  componentDidMount = () =>{
    // this.updateAccount()
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
