import React, {Component, Fragment} from 'react';
import axios from 'axios';
import store from './store/index';
import {
    getTodoAllAction,
    getChangeInputValueAction,
    getAddTodoItemAction,
    getRemoveTodoItemAction
} from './store/actionCreators';
import TodolistUi from './TodolistUI';
class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleItemDelete=this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <Fragment>
                <TodolistUi
                    inputValue={this.state.inputValue}
                    list={this.state.list}
                    handleSearch={this.handleSearch}
                    handleInputChange={this.handleInputChange}
                    handleItemDelete={this.handleItemDelete}
                />
            </Fragment>
        );
    }

    componentDidMount() {
        axios({
            url: `https://www.easy-mock.com/mock/5d0513ee6d97202d2c7a897a/gettodolist/todolist`,
            method: 'get'
        }).then((res)=> {
            let list = res.data.data.list;
            const action = getTodoAllAction(list);
            store.dispatch(action);
        }).catch(()=> {
            console.log('请求错误');
        })
    }

    handleInputChange(e) {
        const action = getChangeInputValueAction(e.target.value);
        store.dispatch(action);
    }

    handleSearch(val) {
        const action = getAddTodoItemAction(val);
        store.dispatch(action);
    }

    handleItemDelete(index) {
        const action = getRemoveTodoItemAction(index);
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState());
    }
}

export default Todolist;
