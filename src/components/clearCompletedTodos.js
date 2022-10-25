export default function clearcompleted(settodos,todos) {
    const updatedtodos = [...todos].filter((todo) => todo.completed === false)
    settodos(updatedtodos)
  }