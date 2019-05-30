import React, {Component, Fragment} from 'react'
import TodoItem from './TodoItem'

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input type="text"
                           value={this.state.inputValue}
                           onChange={this.handleChange}
                    />
                    <button onClick={this.handleClick}>提交</button>
                </div>
                <ul>{this.getTodoItem()}</ul>
            </Fragment>
        );
    }

    handleChange(e) {
        const value = e.target.value;
        this.setState(() => {
            return {
                inputValue: value
            }
        });
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem
                    content={item}
                    index={index}
                    key={index}
                    deleteItem={this.handleItemDelete}
                >
                </TodoItem>
            );
        })
    }

    handleClick() {
        if (this.state.inputValue) {
            this.setState((state)=>{
                return {
                    list: [...state.list,state.inputValue],
                    inputValue: ''
                }
            });
        }

    }

    handleItemDelete(index) {
        let list = [...this.state.list];
        list.splice(index, 1);
        this.setState(()=>{
            return {
                list
            }
        });
    }

    componentDidMount(){
        console.log('componentDidMount')
    }
}

export default Todolist;
