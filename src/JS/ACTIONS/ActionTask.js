import {ADD_TASK,DELETE_TASK,DONE_TASK} from '../ACTION TYPES/Task';






export const addTask=(payload)=>{

return{
type: ADD_TASK ,
payload,


}

}

export const deleteTask=(id)=>{

    return{
    type: DELETE_TASK ,
    payload:id,
    
    
    }
    
    }


    export const doneTask=(payload)=>{

        return{
        type: DONE_TASK ,
        payload,
        
        
        }
        
        }