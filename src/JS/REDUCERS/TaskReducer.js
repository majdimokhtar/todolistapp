import {ADD_TASK,DELETE_TASK,DONE_TASK} from '../ACTION TYPES/Task';





const initialstate={
todolist:[
{id:1,text:"first task",isDone:false},
{id:2 ,text:"second task",isDone:true}

],
load:false,


};


export const TaskReducer=(state=initialstate,{type,payload})=>{
switch (type) {
    case ADD_TASK:
        return {...state,todolist:[...state.todolist,payload]};
        case DELETE_TASK:
            return {...state ,
                   todolist:state.todolist.filter((el)=>el.id !==payload)};

                   case DONE_TASK:
            return {...state ,
                   todolist:state.todolist.map((el)=>el.id==payload?{...el,isDone:!el.isDone} : el)};
    default:
        return state;
}

};