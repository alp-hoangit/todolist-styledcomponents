import { add_task, change_theme, done_task, delete_task, edit_task, undone_task, update_task } from "../types/ToDoListTypes";


export const addTaskAction = (newTask) => ({
  type: add_task,
  newTask
})

export const doneTaskAction = (task) => ({
  type: done_task,
  task
})

export const undoneTaskAction = (task) => ({
  type: undone_task,
  task
})

export const deleteTaskAction = (task) => ({
  type: delete_task,
  task
})

export const editTaskAction = (task) => ({
  type: edit_task,
  task
})

export const updateTaskAction = (taskName) => ({
  type: update_task,
  taskName
})

export const changeThemeAction = (themeId) => ({
  type: change_theme,
  themeId
})