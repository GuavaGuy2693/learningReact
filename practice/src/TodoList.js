import React, {useState} from 'react';
import Todo from './Todo'

export default function TodoList({todos, toggleTodo}) {
  return (
    todos.map(p => {
      return <Todo key = {p.id} toggleTodo = {toggleTodo} todo = {p} />
    })
  )
}
