export default function pending(settodos,todos) {
    const updatedtodos = [...todos].filter((todo) => todo.completed === true)
    settodos(updatedtodos)
  }