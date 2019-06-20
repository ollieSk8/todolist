import React, {Component, Fragment} from 'react';
import axios from 'axios';
import {Input, List, Button} from 'antd';
import store from './store/index';
import {
    getTodoAllAction,
    getChangeInputValueAction,
    getAddTodoItemAction,
    getRemoveTodoItemAction
} from './store/actionCreators';
const Search = Input.Search;
class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <Search
                        placeholder="请输入内容"
                        enterButton="提交"
                        size="large"
                        value={this.state.inputValue}
                        onSearch={this.handleSearch}
                        onChange={this.handleInputChange}
                    />
                    <List
                        style={{marginTop: '10px'}}
                        size="large"
                        bordered
                        dataSource={this.state.list}
                        locale={{emptyText: '暂无数据'}}
                        renderItem={
                            (item, index) => (
                                <List.Item>
                                    <Button type="danger"
                                            style={{marginRight: '10px'}}
                                            onClick={this.handleItemDelete.bind(this, index)}
                                    >
                                        X
                                    </Button>
                                    {item}
                                </List.Item>
                            )
                        }
                    />
                </div>
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
