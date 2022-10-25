import React, { useState } from 'react';
import './App.css';
import deletetodo from './components/deleteTodo.js'
import clearcompleted from './components/clearCompletedTodos';
import pending from './components/clearPendingTodos';
import completedtodo from './components/completedtodo';
import edittodo from './components/editTodo';
import {
  Button, Input, Checkbox, Heading, Text, Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer
} from '@chakra-ui/react';


function App() {
  const [todos, settodos] = useState([])
  const [todo, settodo] = useState("")
  const [todoediting, settodoediting] = useState("")
  const [editingtext, seteditingtext] = useState(null)



  function handlesubmit(e) {
    e.preventDefault();
    if (todo) {
      const newtodo = {
        id: new Date().getTime(),
        text: todo,
        completed: false
      }
      settodos([...todos, newtodo])
      settodo("");
      console.log(todos)


    }
    else {
      window.alert("Cannot Add Blank ToDO")
    }
  }




  return (
    <div className="App">
      <div >
        <Heading>To-Do List</Heading>
      </div>
      <div className='InputForm'>
        <div>
          <form onSubmit={handlesubmit}>
            <Input className='InputBox' size='lg' type="text" placeholder='Write Task Here...' onChange={(e) => settodo(e.target.value)} value={todo} />
            {/* <Button colorScheme='blue' className='Button' type="submit" >Submit</Button> */}
          </form>
        </div>
        <div className='formSubmitButton'>
          <Button colorScheme='blue' className='Button' type="submit" >Submit</Button>
        </div>

      </div>


      <div className='List' >
        {todos.map((todo) =>
          <div className={todo.completed ? "strike" : ""} key={todo.id}>



            {todoediting === todo.id ? (
              <form >
                <button
                  type="submit" hidden
                  onClick={() => edittodo(todos, editingtext, settodos, settodoediting, seteditingtext, todo.id)}>
                </button>
                <Input
                  type="text"
                  defaultValue={todo.text}
                  onChange={(e) => {
                    if (e.target.value) {
                      seteditingtext(e.target.value)
                    }
                    else {
                      window.alert("Cannot Add Blank ToDO")
                    }
                  }}
                ></Input>

              </form>
            ) : (

              <div className='oneList'>



                <TableContainer className='table'>
                  <Table  >


                    <Tbody>

                      <Tr>
                        <Td className='Td'> <Checkbox size='lg' value={todo.text} onChange={() => completedtodo(settodos, todos, todo.id)} checked={todo.completed} /></Td>
                        <Td> <Text   > {todo.text}</Text></Td>
                        <Td isNumeric><Button colorScheme='blue' className='Button' onClick={() => deletetodo(settodos, todos, todo.id)}>delete</Button>
                          <Button colorScheme='blue' className='Button' onClick={() => settodoediting(todo.id)} > edit</Button></Td>
                      </Tr>

                    </Tbody>

                  </Table>
                </TableContainer>





              </div>


            )}


          </div>

        )}
      </div>

      <div className='footer' >
        <Button colorScheme='blue' className='Button' onClick={() => clearcompleted(settodos, todos)}>Clear Completed</Button>
        <Button colorScheme='blue' className='Button' onClick={() => settodos([])}>Delete All</Button>
        <Button colorScheme='blue' className='Button' onClick={() => pending(settodos, todos)}>Clear Pending</Button>
      </div>

    </div>
  );
}



export default App;