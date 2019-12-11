import React from 'react';

export default React.createContext({
    friends: [],
    account: {},
    friendRequests:[],
    getFriends: ()=>{},
    getFriend: (frindId) => {},
    getAccount: () => {},
    removeFriend: () => {},
    updateAccount: () => {},
    addFriend: (friendId)=>{}, 
    logOut: () => {},
    logIn: () => {} 
})