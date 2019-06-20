/**
 * Created by ollie on 2019/6/20.
 */
import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    REMOVE_TODO_ITEM,
    GET_TODO_ALL
} from './actionTypes';

export const getTodoAllAction = (list)=>({
    type: GET_TODO_ALL,
    value: list
});


export const getChangeInputValueAction=(value)=>({
    type: CHANGE_INPUT_VALUE,
    value: value
});

export const getAddTodoItemAction=(value)=>({
    type: ADD_TODO_ITEM,
    value: value
});

export const getRemoveTodoItemAction=(index)=>({
    type: REMOVE_TODO_ITEM,
    index
});