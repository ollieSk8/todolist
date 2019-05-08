import React, {Component} from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render() {
        const {content} = this.props;
        return (
            <li
                onClick={this.handleItemDelete}
            >
                {content}
            </li>
        );
    }

    handleItemDelete() {
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }

}
TodoItem.propTypes={
    content:PropTypes.string,
    deleteItem:PropTypes.func,
    index:PropTypes.number
}
TodoItem.defaultProps={

}
export default TodoItem;