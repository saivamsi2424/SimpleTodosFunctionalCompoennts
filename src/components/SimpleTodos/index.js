import {useState} from 'react'
import TodoItem from '../TodoItem'
import {Heading,Container1,Container2,UnorderList} from './styledComponents'

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
    const deleteItem = id => {
        const filteredList = todosList.filter(eachItem => eachItem.id !== id)
        setTodosList(
          filteredList
        )
      }
return(
    <Container1>
        <Heading>
            Simple Todos
        </Heading> 
        <Container2>
            <UnorderList>
                {todosList.map((eachItem)=>(
                    <TodoItem
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