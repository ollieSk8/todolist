/**
 * Created by ollie on 2019/6/19.
 */
import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    REMOVE_TODO_ITEM,
    GET_TODO_ALL
} from './actionTypes';
const defaultState = {
    inputValue:'',
    list:[]
};
export default (state = defaultState, action)=> {
   if(action.type===CHANGE_INPUT_VALUE){
       const newState=JSON.parse(JSON.stringify(state));
       newState.inputValue=action.value;
       return newState;
   }else if(action.type===GET_TODO_ALL){
       const newState=JSON.parse(JSON.stringify(state));
       newState.list=action.value;
       return newState;
   }else if(action.type===ADD_TODO_ITEM){
       const newState=JSON.parse(JSON.stringify(state));
       newState.list.push(action.value);
       newState.inputValue='';
       return newState;
   }else if(action.type===REMOVE_TODO_ITEM){
       const newState=JSON.parse(JSON.stringify(state));
       newState.list.splice(action.index,1);
       return newState;
   }
    return state;
}