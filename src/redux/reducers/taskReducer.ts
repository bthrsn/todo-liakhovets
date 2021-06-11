
const initialState = {
  tasks: []
}

export const taskReducer = (state:TaskState = initialState , action: any) => {
  switch(action.type) {
    case "ADD_TASK": {
      return { ...state, tasks: [...state.tasks, action.payload]}
    }
    case "DELETE_TASK": {
      return { ...state, tasks: state.tasks.filter((task, i) => i !== action.payload)}
    }
    default:
      return state;
  }
}

export interface TaskState {
  tasks: string[]
}
