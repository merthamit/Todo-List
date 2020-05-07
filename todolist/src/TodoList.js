import React, { Component } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid';

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos : [{ todoName : '1 saat yürüyüs' , id : uuidv4() , isCompleted : false},
                     { todoName : '1 saat kitap' , id : uuidv4() , isCompleted : false}]
        }
        this.addTodo = this.addTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.lineIt = this.lineIt.bind(this)
        this.updateIt = this.updateIt.bind(this)
    }
    addTodo(newTodo){
        let newTodoId = {...newTodo, id : uuidv4()}
        console.log(newTodoId)
        this.setState({
            todos : [...this.state.todos,newTodoId]
        })
    }

    removeTodo(removeTodo){
        this.setState({
            todos : this.state.todos.filter(todo => todo.id !== removeTodo)
        })
    }

    lineIt(id){
        const lineUpdate = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo , isCompleted : !todo.isCompleted}
            }
            return todo
        })
        this.setState({
            todos : lineUpdate
        })
    }

    updateIt(id,newName){
        const updateTodo = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo,todoName : newName}
            }
            return todo
        })
        this.setState({
            todos : updateTodo
        })
    }

    render() {
        let allTodos = this.state.todos.map(todo => (
            <Todo 
            todoName={todo.todoName}
            key={todo.id}
            id={todo.id}
            deleteIt={this.removeTodo}
            lineIt={this.lineIt}
            updateIt={this.updateIt}
            isCompleted={todo.isCompleted}
                  />
        ))
        return (
            <div>
                <TodoForm  addTodo={this.addTodo}/>
                <ul>
                    {allTodos}
                </ul>
            </div>
        )
    }
}

export default TodoList
