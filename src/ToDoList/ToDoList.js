import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Container } from '../Containers/Container';
import { ToDoListDarkTheme } from '../Themes/ToDoListDarkTheme';
import { ToDoListLightTheme } from '../Themes/ToDoListLightTheme';
import { ToDoListPrimaryTheme } from '../Themes/ToDoListPrimaryTheme';
import { Dropdown } from '../Components/Dropdown';
import { Heading1, Heading2, Heading3, Heading4, Heading5 } from '../Components/Heading';
import { TextField } from '../Components/TextField';
import { Button } from '../Components/Button';
import { Table, Th, Td, Thead, Tbody, Tr } from '../Components/Table';
import { connect } from 'react-redux';
import { addTaskAction } from '../Redux/actions/ToDoListActions';


class ToDoList extends Component {

    state = {
        taskName: ''
    }

    renderTaskToDo = () => {
        return this.props.taskList.filter(task => !task.done).map((task, index) => {
            return <Tr key={index}>
                <Th style={{ verticalAlign: 'middle' }}>{task.taskName}</Th>
                <Th className='text-right'>
                    <Button className="ml-1"><i className='fa fa-edit'></i></Button>
                    <Button className="ml-1"><i className='fa fa-check'></i></Button>
                    <Button className="ml-1"><i className='fa fa-trash'></i></Button>
                </Th>
            </Tr>
        })
    }

    renderTaskCompleted = () => {
        return this.props.taskList.filter(task => task.done).map((task, index) => {
            return <Tr key={index}>
                <Th style={{ verticalAlign: 'middle' }}>{task.taskName}</Th>
                <Th className='text-right'>
                    <Button className="ml-1"><i className='fa fa-trash'></i></Button>
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

    render() {
        return (
            <ThemeProvider theme={this.props.themeToDoList}>
                <Container className='w-50'>
                    <Dropdown>
                        <option value="">Dark Theme</option>
                        <option value="">Light Theme</option>
                        <option value="">Primary Theme</option>
                    </Dropdown>
                    <Heading3>To do list</Heading3>
                    <TextField onChange={this.handleChange} name="taskName" label="Task Name" className="w-50" />
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
                    <Button className='ml-2'><i className="fa fa-upload"></i> Update Task</Button>

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
}

const mapStateToProps = state => {
    return {
        themeToDoList: state.ToDoListReducer.themeToDoList,
        taskList: state.ToDoListReducer.taskList,
    }
}


export default connect(mapStateToProps)(ToDoList);