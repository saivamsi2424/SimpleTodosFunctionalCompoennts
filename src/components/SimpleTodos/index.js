import {useState} from 'react'
import {v4 as uuid} from 'uuid'
import TodoItem from '../TodoItem'
import {Heading,Container1,Container2,UnorderList,RowContainer,InputElement,SaveButton} from './styledComponents'

const initialTodosList = [
    {
      id: 1,
      title: 'Book the ticket for today evening',
    },
    {
      id: 2,
      title: 'Rent the movie for tomorrow movie night',
    },
    {
      id: 3,
      title: 'Confirm the slot for the yoga session tomorrow morning',
    },
    {
      id: 4,
      title: 'Drop the parcel at Bloomingdale',
    },
    {
      id: 5,
      title: 'Order fruits on Big Basket',
    },
    {
      id: 6,
      title: 'Fix the production issue',
    },
    {
      id: 7,
      title: 'Confirm my slot for Saturday Night',
    },
    {
      id: 8,
      title: 'Get essentials for Sunday car wash',
    },
  ]
  

const SimpleTodos =()=>{
    const [todosList,setTodosList]  = useState(initialTodosList)
    const [newTodoTitle,setNewTodoTitle] = useState("")
    const deleteItem = id => {
        const filteredList = todosList.filter(eachItem => eachItem.id !== id)
        setTodosList(
          filteredList
        )
      }
      const updateTitle=(id,updatedTitle)=>{
        console.log(updateTitle)
        const updatedList = todosList.map((eachListItem)=>{
          if(eachListItem.id === id){
            return {...eachListItem,title:updatedTitle}
          }else{
            return eachListItem
          }
        })
        setTodosList(updatedList)
      }
      const UpdateTheNewTodoTitle=(event)=>{
        setNewTodoTitle(event.target.value)
      }
      const addNewTodo=()=>{
        const newTodoItem = {
          id:uuid(),
          title:newTodoTitle
        }
        setTodosList((prevTodoList)=>[...prevTodoList,newTodoItem])
        setNewTodoTitle("")
      }
return(
    <Container1>
        <Heading>
            Simple Todos
        </Heading> 
        <RowContainer>
          <InputElement type="text" value={newTodoTitle} onChange={UpdateTheNewTodoTitle} />
          <SaveButton onClick={addNewTodo} >Save Todo</SaveButton>
        </RowContainer>
        <Container2>
            <UnorderList>
                {todosList.map((eachItem)=>(
                    <TodoItem
                    updateTitle={updateTitle}
                    todoItem={eachItem}
                    deleteItem={deleteItem}
                    key={eachItem.id}
                  />
                ))}
            </UnorderList>
        </Container2>
    </Container1>
)
}
export default SimpleTodos