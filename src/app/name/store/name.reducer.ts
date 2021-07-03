import * as NameAction from "./name.action"

let initial={names:["Sahil","Nizam","ranjit","aalam"]}
    


export function Namereducer(state = initial,action: NameAction.NameActiontype)
{
    switch(action.type){
        case NameAction.Sa:
            let change=action.payload
            let data={...state,Users:[...state.names,action.payload]}
            console.log({...state,User:[...state.names,action.payload]})
            return {...state,
                names:[...state.names,action.payload]}
        case NameAction.CLEAR:
            console.log({...state,names:[]})
            return {...state,names:[]};
        default:
            console.log(state)
            return state;
    }
}