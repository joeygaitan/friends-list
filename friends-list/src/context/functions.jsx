import React from 'react';

export default React.createContext({
    friends: [],
    account: {},
    friendRequests:{},
    posts: [],
    post: {},
    getFriends: ()=>{},
    getFriend: (friendId) => {},
    getAccount: () => {},
    getPost: (post) =>{},
    removeFriend: () => {},
    updateAccount: () => {},
    addFriend: (friendId)=>{},
    getPosts: () =>{},
    addPosts: () => {},
    logOut: () => {},
    logIn: () => {},
    signUp:()=>{}
})