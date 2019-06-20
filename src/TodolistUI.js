/**
 * Created by ollie on 2019/6/20.
 */
import React, {Component} from 'react'
import {Input, List, Button} from 'antd';
const Search = Input.Search;
class TodolistUi extends Component {
    render(){
        return (
            <div className="container">
                <Search
                    placeholder="请输入内容"
                    enterButton="提交"
                    size="large"
                    value={this.props.inputValue}
                    onSearch={this.props.handleSearch}
                    onChange={this.props.handleInputChange}
                />
                <List
                    style={{marginTop: '10px'}}
                    size="large"
                    bordered
                    dataSource={this.props.list}
                    locale={{emptyText: '暂无数据'}}
                    renderItem={
                        (item, index) => (
                            <List.Item>
                                <Button type="danger"
                                        style={{marginRight: '10px'}}
                                        onClick={(index)=>{this.props.handleItemDelete(index)}}
                                >
                                    X
                                </Button>
                                {item}
                            </List.Item>
                        )
                    }
                />
            </div>
        )
    }
}

export default TodolistUi