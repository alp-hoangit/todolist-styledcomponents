import { ToDoListDarkTheme } from "../../Themes/ToDoListDarkTheme"
import { add_task, change_theme, done_task, undone_task, delete_task, edit_task, update_task } from "../types/ToDoListTypes"
import { arrTheme } from "../../Themes/ThemeManager";

const initialState = {
    themeToDoList: ToDoListDarkTheme,
    taskList: [
        { id: 'task-1', taskName: 'task 1', done: true },
        { id: 'task-2', taskName: 'task 2', done: false },
        { id: 'task-3', taskName: 'task 3', done: true },
        { id: 'task-4', taskName: 'task 4', done: false }
    ],
    taskEdit: {},


}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case add_task: {
            if (action.newTask.taskName.trim() === '') {
                alert("Bạn chưa nhập Task Name!");
                return { ...state };
            }
            let taskListUpdate = [...state.taskList];
            let index = taskListUpdate.findIndex(task => task.taskName === action.newTask.taskName.trim());
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
            return { ...state };
        }

        case done_task: {
            let taskListUpdate = [...state.taskList];
            const index = taskListUpdate.findIndex(task => task.id == action.task.id);
            if (index !== -1) {
                taskListUpdate[index].done = true;
                state.taskList = [...taskListUpdate];
            }
            return { ...state };
        }

        case undone_task: {
            let taskListUpdate = [...state.taskList];
            const index = taskListUpdate.findIndex(task => task.id == action.task.id);
            if (index !== -1) {
                taskListUpdate[index].done = false;
                state.taskList = [...taskListUpdate];
            }

            return { ...state };
        }

        case delete_task: {
            // let taskListUpdate = [...state.taskList];
            // taskListUpdate = taskListUpdate.filter(task => task.id !== action.task.id);
            // state.taskList = [...taskListUpdate];
            // return { ...state };
            return { ...state, taskList: state.taskList.filter(task => task.id !== action.task.id) };
        }

        case edit_task: {
            return { ...state, taskEdit: action.task };
        }

        case update_task: {
            state.taskEdit = { ...state.taskEdit, taskName: action.taskName };
            let taskListUpdate = [...state.taskList];
            const index = taskListUpdate.findIndex(task => task.id == state.taskEdit.id);
            if (index !== -1) {
                taskListUpdate[index] = state.taskEdit;
                state.taskList = [...taskListUpdate];
            }
            state.taskEdit = { id: "-1", taskName: "", done: false };
            return { ...state };
        }

        default:
            return { ...state }
    }
}
