export type DeleteAction = {
  type: "DELETE_TASK", payload: number
}

export const deleteTask = (key: number) => ({
  type: "DELETE_TASK",
  payload: key
});