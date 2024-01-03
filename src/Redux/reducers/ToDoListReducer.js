import { ToDoListDarkTheme } from "../../Themes/ToDoListDarkTheme"
import { add_task, change_theme } from "../types/ToDoListTypes"
import { arrTheme } from "../../Themes/ThemeManager";

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
                alert("Bạn chưa nhập Task Name!");
                return { ...state };
            }
            let taskListUpdate = [...state.taskList];
            let index = taskListUpdate.findIndex(task => task.taskName === action.newTask.taskName);
            if (index !== -1) {
                alert(action.newTask.taskName + " đã tồn tại!");
                return { ...state };
            }
            state.taskList = [...taskListUpdate, action.newTask];
            return { ...state };
        }

        case change_theme: {
            let theme = arrTheme.find(theme => theme.id == action.themeId);
            if (theme) {
                state.themeToDoList = { ...theme.theme };
            }
            return { ...state }
        }

        default:
            return { ...state }
    }
}
