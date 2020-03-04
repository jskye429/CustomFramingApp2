import React from "react";

const auth = new Auth();
const StoredContext = React.createContext();
const UserContext = React.createContext();


const storedUsers = {
  meetup: {
    title: 'Authenticated Users',
    date: Date(),
    users: ['Bob', 'Jessy', 'Christina', 'Adam']
  },
  user: {
    name: 'Roy'
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'loginUser':
      return {
        ...state,
        isAuthenticated: action.payload.authenticated,
        name: action.payload.user.name
      };
    default:
      return state;




}
};



export default Login;