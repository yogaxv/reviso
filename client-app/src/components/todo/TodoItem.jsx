import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const TodoItem = ({item}) => {
  return (
    <ListItem key={item.id} sx={{ padding: 0.2}}>
      <ListItemIcon>
        <CheckCircleIcon fontSize='sm' color={item.value == true ? 'success' : ''} />
      </ListItemIcon>

      <ListItemText primary={item.name} />
    </ListItem>
  )
}

export default TodoItem
