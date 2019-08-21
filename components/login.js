import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, StatusBar, TextInput, Button } from 'react-native';
import fire from '../config/Fire';
// import { Link } from 'react-router.dom';
import Home from '../src/Home';


const styles = StyleSheet.create({
    logoContainer: {
        marginTop: 220,
        alignItems: "center",
        flexGrow: 1,
        justifyContent: "center"
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        fontSize: 12,
        fontFamily: "Helvetica-Light",
        marginTop: 3,
        textAlign: "center"
    },
    container: {
        flex: 1,
        alignItems: "center"
    },
    input: {
        height: 40,
        margin: 15,
        opacity: 0.83,
        backgroundColor: "#f5f5f5"
    },
    loginButton: {
        backgroundColor: "#00e700",
        marginBottom: 80
    },
    signupButton: {
        backgroundColor: "#87cefa"
    }
});


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.handleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
            console.log(error);
        })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            // <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View>
                    <StatusBar
                        barStyle="dark-content"
                    />
                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.logo}
                            source={require("../assets/To-do_List-512.png")}
                        />
                        <Text style={styles.title}>An app made for people who love lists</Text>
                    </View>

                    <View>
                        <TextInput
                            returnKeyType="next"
                            placeholder={"Email"}
                            style={styles.input}
                            keyboardType="email-address"
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChange={(email) => this.setState({ email })}
                        />
                        <TextInput
                            returnKeyType="go"
                            placeholder={"Password"}
                            style={styles.input}
                            secureTextEntry
                            ref={(input) => this.password = input}
                            onChange={password => this.setState({ password })}
                        />
                        <Button
                            onPress={this.handleChange.login}
                            style={styles.loginButton}
                            title="LOGIN">
                        </Button>
                        <Button
                            onPress={this.signup}
                            style={styles.signupButton}
                            title="SIGNUP">
                        </Button>
                    </View>
                </View>
                //</KeyboardAvoidingView>
        )
    }
}

