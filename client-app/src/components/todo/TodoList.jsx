import { List } from '@mui/material'
import TodoItem from './TodoItem'

const TodoList = ()  => {

  return (
    <List disablePadding >
      <TodoItem item={{id: 0, name: 'Test aja', value: true}} />
      <TodoItem item={{id: 1, name: 'container', value: true}} />
      <TodoItem item={{id: 2, name: 'secondaryAction', value: false}} />
      <TodoItem item={{id: 2, name: 'Test', value: false}} />
      <TodoItem item={{id: 2, name: 'Styles applied to the', value: true}} />
    </List>
  )
}

export default TodoList