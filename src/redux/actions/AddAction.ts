export type AddAction = {
  type: "ADD_TASK", payload: string
}

export const addTask = (task: string): AddAction => ({
  type: "ADD_TASK",
  payload: task
});

