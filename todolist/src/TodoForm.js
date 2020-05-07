import React, { Component } from 'react'

class TodoForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            todoName : '',
            isCompleted : false
        }
        this.clickAdd = this.clickAdd.bind(this)
        this.nameChange = this.nameChange.bind(this)
    }
    
    nameChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    clickAdd(e){
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            todoName : '',
            isCompleted : false
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.clickAdd}>
                    <input type='text' name='todoName' onChange={this.nameChange} value={this.state.todoName} />
                    <button>Ekle</button>
                </form>
            </div>
        )
    }
}

export default TodoForm
