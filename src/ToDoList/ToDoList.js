import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Container } from '../Containers/Container';
import { Dropdown } from '../Components/Dropdown';
import { Heading3 } from '../Components/Heading';
import { TextField } from '../Components/TextField';
import { Button } from '../Components/Button';
import { Table, Th, Thead, Tr } from '../Components/Table';
import { connect } from 'react-redux';
import { addTaskAction, changeThemeAction, deleteTaskAction, doneTaskAction, undoneTaskAction, editTaskAction, updateTaskAction } from '../Redux/actions/ToDoListActions';
import { arrTheme } from '../Themes/ThemeManager';


class ToDoList extends Component {

    state = {
        taskName: '',
        disabledUpdate: true,
    }

    renderTaskToDo = () => {
        return this.props.taskList.filter(task => !task.done).map((task, index) => {
            return <Tr key={index}>
                <Th style={{ verticalAlign: 'middle' }}>{task.taskName}</Th>
                <Th className='text-right'>
                    <Button onClick={() => {
                        this.setState({
                            disabledUpdate: false
                        }, () => {
                            this.props.dispatch(editTaskAction(task));
                        });
                    }} className="ml-1"><i className='fa fa-edit'></i></Button>
                    <Button onClick={() => {
                        this.props.dispatch(doneTaskAction(task));
                    }} className="ml-1"><i className='fa fa-check'></i></Button>
                    <Button onClick={() => {
                        this.props.dispatch(deleteTaskAction(task));
                    }} className="ml-1"><i className='fa fa-trash'></i></Button>
                </Th>
            </Tr>
        })
    }

    renderTaskCompleted = () => {
        return this.props.taskList.filter(task => task.done).map((task, index) => {
            return <Tr key={index}>
                <Th style={{ verticalAlign: 'middle' }}>{task.taskName}</Th>
                <Th className='text-right'>
                    <Button onClick={() => {
                        this.props.dispatch(undoneTaskAction(task));
                    }} className="ml-1"><i className='fa fa-sync'></i></Button>
                    <Button onClick={() => {
                        this.props.dispatch(deleteTaskAction(task));
                    }} className="ml-1"><i className='fa fa-trash'></i></Button>
                </Th>
            </Tr>
        })
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    renderTheme = () => {
        return arrTheme.map((theme, index) => {
            return <option key={index} value={theme.id}>{theme.name}</option>
        })
    }

    handleChangeTheme = (e) => {
        let themeId = e.target.value;
        this.props.dispatch(changeThemeAction(themeId));
    }

    //LifeCycle phiên bản 16 nhận vào props mới được thực thi trước render
    // componentWillReceiveProps(newProps) {
    //     console.log(this.props);
    //     console.log(newProps);
    //     this.setState({
    //         taskName: newProps.taskEdit.taskName,
    //     })
    // }

    //Life Cycle tĩnh, không truy xuất được con trỏ this
    // static getDerivedStateFromProps(newProps, currentState) {
    //     // newProps: là props mới, props cũ là this.props(không truy xuất được)
    //     // curentState: ứng với state hiện tại this.state

    //     // trả về state mới (this.state)
    //     let newState = { ...currentState, taskName: newProps.taskEdit.taskName };
    //     return newState;
    //     // trả về null thì state giữ nguyên
    //     // return null;
    // }

    render() {
        return (
            <ThemeProvider theme={this.props.themeToDoList}>
                <Container className='w-50'>
                    <Dropdown onChange={this.handleChangeTheme}>
                        {this.renderTheme()}
                    </Dropdown>
                    <Heading3>To do list</Heading3>
                    <TextField value={this.state.taskName} onChange={this.handleChange} name="taskName" label="Task Name" className="w-50" />
                    <Button onClick={() => {
                        // Lay thong tin
                        let { taskName } = this.state;
                        // Tao 1 task object
                        let newTask = {
                            id: Date.now(),
                            taskName: taskName,
                            done: false
                        }
                        // dispatch len redux
                        this.props.dispatch(addTaskAction(newTask))
                    }} className='ml-2'><i className='fa fa-plus'></i> Add Task</Button>

                    {
                        this.state.disabledUpdate ? <Button disabled onClick={() => {
                            this.props.dispatch(updateTaskAction(this.state.taskName));
                        }} className='ml-2'><i className="fa fa-upload"></i> Update Task</Button>
                            : <Button onClick={() => {
                                let { taskName } = this.state;
                                this.setState({
                                    disabledUpdate: true,
                                    taskName: "",
                                }, () => {
                                    this.props.dispatch(updateTaskAction(taskName));
                                })
                            }} className='ml-2'><i className="fa fa-upload"></i> Update Task</Button>
                    }


                    <hr />
                    <Heading3>Task To Do</Heading3>
                    <Table>
                        <Thead>
                            {this.renderTaskToDo()}
                        </Thead>
                    </Table>

                    <hr />
                    <Heading3>Task Completed</Heading3>
                    <Table>
                        <Thead>
                            {this.renderTaskCompleted()}
                        </Thead>
                    </Table>
                </Container>
            </ThemeProvider>
        )
    }


    //Đây là life Cycle trả về props cũ và state cũ của component trước khi render (lifecycle này chạy sau render)
    componentDidUpdate = (prevProps, prevState) => {
        // Nếu như taskEdit trước mà khác taskEdit sau thì sẽ setState
        if (prevProps.taskEdit.id !== this.props.taskEdit.id) {
            this.setState({
                taskName: this.props.taskEdit.taskName,
            })
        }
    }
}


const mapStateToProps = state => {
    return {
        themeToDoList: state.ToDoListReducer.themeToDoList,
        taskList: state.ToDoListReducer.taskList,
        taskEdit: state.ToDoListReducer.taskEdit,
    }
}


export default connect(mapStateToProps)(ToDoList);