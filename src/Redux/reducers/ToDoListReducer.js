import { ToDoListDarkTheme } from "../../Themes/ToDoListDarkTheme"
import { ToDoListLightTheme } from "../../Themes/ToDoListLightTheme"
import { ToDoListPrimaryTheme } from "../../Themes/ToDoListPrimaryTheme"
import { add_task } from "../types/ToDoListTypes"

const initialState = {
    themeToDoList: ToDoListDarkTheme,
    taskList: [
        { id: 'task-1', taskName: 'task 1', done: true },
        { id: 'task-2', taskName: 'task 2', done: false },
        { id: 'task-3', taskName: 'task 3', done: true },
        { id: 'task-4', taskName: 'task 4', done: false }
    ],

}

export default (state = initialState, action) => {
    switch (action.type) {
        case add_task: {
            if (action.newTask.taskName.trim() === '') {
                alert("Bạn chưa nhập Task Name");
                return { ...state };
            }
            let taskListUpdate = [...state.taskList];
            let index = taskListUpdate.findIndex(task => task.taskName === action.newTask.taskName);
            if (index !== -1) {
                alert("Task Name đã tồn tại!");
                return { ...state };
            }
            state.taskList = [...taskListUpdate, action.newTask];
            return { ...state };
        }
        
        default:
            return { ...state }
    }
}
