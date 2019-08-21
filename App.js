import React from 'react';
import { View } from 'react-native';
import Login from "./components/login";
import fire from './config/Fire';
import Home from "./src/Home";




// export default function App() {
export default class App extends React.Component {
  constructor(props) {
    super(props);
  //   this.state = {
  //     user: {}
  //   }
  }

  // componentDidMount() {
  //   this.authListener();
  // }

  // authListener() {
  //   fire.auth().onAuthStateChanged((user) => {
  //     console.log(user);
  //     if (user) {
  //       this.setState({ user });
  //     } else {
  //       this.setState({ user: null });
  //     }
  //   })
  // }

  render() {
    return (
      
        // {/* <Login>
        //   {this.state.user ? (<Home />) : (<Login />)}
        // </Login> */}
        <Home />
      
    )
  }

};
