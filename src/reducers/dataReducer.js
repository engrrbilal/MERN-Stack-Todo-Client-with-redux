var dataReducerDefaultState = {
    todos:[1],
}

export default (state=dataReducerDefaultState,action)=>{
    switch(action.type){
            case 'ADD-TODO':
            return({
                ...state,
                // todos:todos.concat(action.data)
                todos:state.todos.concat(action.data)

            })
            case 'GET-TODOS':
            return({
                ...state,
                todos:action.todo
            })
            case 'UPDATE-TODO':
            return({
                ...state,
                todos:action.todo
            })
            default:
            return state;    
    }
}