// import React, { Component } from "react";
// import { StyleSheet, View, TextInput, Button, Text, StatusBar } from "react-native";
// import console = require("console");
// import Home from "../src/Home";



// export default class LoginForm extends Component {
    // constructor(props) {
    //     super(props);
    //     this.login = this.handleChange.bind(this);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.state = {
    //         email: '',
    //         password: ''
    //     }
    // }

    // login(e) {
    //     e.preventDefault();
    //     fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    //     }).catch((error) => {
    //         console.log(error);
    //     })
    // }

    // handleChange(e) {
    //     this.setState({ [e.target.name]: e.target.value });
    // }

    // render() {
    //     return (
            // <View style={styles.container}>
            //     <StatusBar
            //         barStyle="dark-content"
            //     />
            //     <TextInput
            //         returnKeyType="next"
            //         placeholder={"Email"}
            //         style={styles.input}
            //         keyboardType="email-address"
            //         autoCorrect={false}
            //         autoCapitalize="none"
            //         onChangeText={(email) => this.setState({ email })}
            //         value={this.state.email}
            //     />
            //     <TextInput
            //         returnKeyType="go"
            //         placeholder={"Password"}
            //         style={styles.input}
            //         secureTextEntry
            //         ref={(input) => this.password = input}
            //         onChangeText={password => this.setState({ password })}
            //         value={this.state.password}
            //     />
            //     <Button
            //         onPress={() => <Home />}
            //         style={styles.loginButton}
            //         title="LOGIN">
            //     </Button>
            //     <Button
            //         onPress={this.signup}
            //         style={styles.signupButton}
            //         title="SIGNUP">
            //     </Button>
            // </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         marginBottom: 200,
//         padding: 20
//     },
    // input: {
    //     height: 40,
    //     margin: 15,
    //     opacity: 0.83,
    //     backgroundColor: "#f5f5f5"
    // },
    // loginButton: {
    //     backgroundColor: "#00e700",
    //     marginBottom: 80
    // },
    // signupButton: {
    //     backgroundColor: "#87cefa"
    // }
// })