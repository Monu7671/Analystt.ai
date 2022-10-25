export default function deletetodo(settodos,todos,id) {
    const updatedtodos = [...todos].filter((todo) => todo.id !== id)
    settodos(updatedtodos)
}