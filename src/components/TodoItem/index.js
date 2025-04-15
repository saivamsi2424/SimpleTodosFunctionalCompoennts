import {ListItem,Description,Button} from './styledComponents'

const TodoItem = props => {
  const {todoItem, deleteItem} = props
  const {id, title} = todoItem
  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <ListItem>
      <Description >{title}</Description>
      <Button onClick={onDelete} type="button" >
        Delete
      </Button>
    </ListItem>
  )
}
export default TodoItem