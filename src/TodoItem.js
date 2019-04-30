import React, {Component} from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render() {
        const {item} = this.props;
        return (
            <li
                onClick={this.handleItemDelete}
            >
                {item}
            </li>
        );
    }

    handleItemDelete() {
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }

}

export default TodoItem;