import React, { Component } from 'react';
import fire from '../config/Fire';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Button, StatusBar } from 'react-native';
import Header from '../components/header';
import InputBar from '../components/inputBar';


class Home extends React.Component {
    constructor() {
        super();


        this.state = {
            todoInput: '',
            todos: [
                { id: 1, title: "Take out the trash", done: false },
                { id: 2, title: "Cook dinner", done: true }
            ]
        }
    }

    // static navigationOptions = {
    //     title: "Home"
    // };

    addNewTodo() {
        // console.log(this.state.todoInput)

        let todos = this.state.todos;

        todos.unshift({
            id: todos.length + 1,
            title: this.state.todoInput,
            done: false
        });

        this.setState({
            todos: todos,
            todoInput: ''
        });

        // console.log(this.state);
    }


    removeTodo(data) {
        let todos = this.state.todos

        todos = todos.filter((todo) => todo.id !== data.id)

        this.setState({ todos })
    }

    todosList() {
        return this.state.todos.map((data) => {
            return (
                <View key={data.id}>

                    <Text
                        style={[styles.todoList, (this.state.todos.done) ? { color: "#fffff" } : { color: "#313131" }]}>{data.title}</Text>

                    <Button
                        title="Remove"
                        color="red"
                        style={styles.removeButton}
                        onPress={() => this.removeTodo(data)}
                    />

                </View>

            )
        })
    }


    render() {
        const statusbar = (Platform.OS == 'ios') ? <View styles={styles.statusbar}></View> : <View></View>
        return (
            <View style={styles.container}>
                {statusbar}

                <Header title="Hey, here's your To-Do List!" />

                <InputBar
                    textChange={todoInput => this.setState({ todoInput })}
                    addNewTodo={() => this.addNewTodo()}
                />

                {/* <Text>{this.state.todoInput}</Text> */}

                <View><TouchableOpacity >
                    {this.todosList()}
                </TouchableOpacity></View>

            </View>
        )
        // onPress={() => this.props.toggleDone()}

        // toggleDone(item) {
        //   let todos = this.state.todos;

        //   todos = todos.map((todo) => {
        //     if (todo.id == item.id) {
        //       todo.done = !todo.done;
        //     }

        //     return todo;
        //   })

        //   this.setState({ todos });
        // }


    }
}


const styles = StyleSheet.create({
    statusbar: {
        height: 30,
        backgroundColor: "#171717"
    },
    font: {
        color: "black"
    },
    todoList: {
        fontSize: 22,
        width: "100%",
        height: 40,
        borderBottomColor: "#DDD",
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 15
    },
    removeButton: {
        height: 40,
        marginRight: 0,
        backgroundColor: "#ff0000"
    }
})


export default Home;