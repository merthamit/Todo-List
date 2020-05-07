import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
    constructor(props){
        super(props)
        this.deleteIt = this.deleteIt.bind(this)
        this.lineIt = this.lineIt.bind(this)
        this.onUpdate = this.onUpdate.bind(this)
        this.updateIt = this.updateIt.bind(this)
        this.newNameIt = this.newNameIt.bind(this)
        this.state = {
            onUpdate : false,
            todoName : this.props.todoName
        }
    }

    deleteIt(e){
        this.props.deleteIt(this.props.id)
    }

    lineIt(){
        this.props.lineIt(this.props.id)
    }

    onUpdate(){
        this.setState({
            onUpdate : !this.state.onUpdate
        })
    }

    newNameIt(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    updateIt(){
        this.props.updateIt(this.props.id,this.state.todoName)
        this.setState({
            onUpdate : !this.state.onUpdate
        })
    }

    render() {

        let result
        if(!this.state.onUpdate){
            result = <div>
            <p onClick={this.lineIt} className={this.props.isCompleted ? 'Line' : ''}>{this.props.todoName}</p>
            <button onClick={this.deleteIt}>Sil</button>
            <button onClick={this.onUpdate}>Düzenle</button>
        </div>
        }
        else{
            result = <div>
                <input value={this.state.todoName} name='todoName' onChange={this.newNameIt} ></input>
                <button onClick={this.updateIt}>Düzenle ve Devam Et</button>
            </div>
        }
        return (
            <div>
                {result}
            </div>
        )
    }
}

export default Todo
