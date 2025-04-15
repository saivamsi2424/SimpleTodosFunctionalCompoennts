import {useState} from 'react';
import {ListItem,Description,Button,NormalContainer,InputElement} from './styledComponents'

const TodoItem = props => {
  const {todoItem, deleteItem,updateTitle} = props
  const {id, title} = todoItem
  const [isEditingNow,setEditing] = useState(false)
  const [newEditedTitle,setEditingTitle] = useState(title)
  const onDelete = () => {
    deleteItem(id)
  }
  const saveTheTitle=()=>{
    
    setEditing(false)
    updateTitle(id,newEditedTitle)
  }
  const changeTheEditingStatus=()=>{
    setEditing(true)
    console.log("Editing is clicked")
  }
  const changeTheInputTitle=(event)=>{
    setEditingTitle(event.target.value)
  }

  return (
    <ListItem>{
    isEditingNow ? <NormalContainer>
      <InputElement value={newEditedTitle} type="text" onChange={changeTheInputTitle}  />
      <Button onClick={saveTheTitle} >Save</Button>
      </NormalContainer> :
    <NormalContainer>
    
      <Description >{title}</Description>
      
      <Button onClick={onDelete} type="button" >
        Delete
      </Button>
      <Button onClick={changeTheEditingStatus} >
        Edit
      </Button>
    
    </NormalContainer>}
    </ListItem>
  )
}
export default TodoItem