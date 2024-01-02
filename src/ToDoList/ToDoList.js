import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Container } from '../Containers/Container'
import { ToDoListDarkTheme } from '../Themes/ToDoListDarkTheme'
import { ToDoListLightTheme } from '../Themes/ToDoListLightTheme'

export default class ToDoList extends Component {
    render() {
        return (
            <ThemeProvider theme={ToDoListDarkTheme}>
                <Container>Hello</Container>
            </ThemeProvider>
        )
    }
}
