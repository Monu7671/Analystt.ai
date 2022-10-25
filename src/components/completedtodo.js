export default function completedtodo(settodos,todos,id) {

    
    const updatedtodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }
    )
    settodos(updatedtodos)
  }