/**
 * Created by ollie on 2019/6/19.
 */

const defaultState = {
    inputValue:'',
    list:[]
};
export default (state = defaultState, action)=> {
   if(action.type==='change_input_value'){
       const newState=JSON.parse(JSON.stringify(state));
       newState.inputValue=action.value;
       return newState;
   }else if(action.type==='get_list'){
       const newState=JSON.parse(JSON.stringify(state));
       newState.list=action.value;
       return newState;
   }else if(action.type==='add_todo_item'){
       const newState=JSON.parse(JSON.stringify(state));
       newState.list.push(action.value);
       newState.inputValue='';
       return newState;
   }else if(action.type==='remvoe_todo_item'){
       const newState=JSON.parse(JSON.stringify(state));
       newState.list.splice(action.index,1);
       return newState;
   }
    return state;
}