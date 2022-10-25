export default function edittodo(todos,editingtext,settodos,settodoediting,seteditingtext, id) {
    if(todos){
      const updatedtodos = [...todos].map((todo) => {
        if (todo.id === id) {
          todo.text = editingtext
        }
  
        return todo
      })
      settodos(updatedtodos)
      settodoediting(null)
      seteditingtext("")
    }
    else{
      window.alert("fdf")
    
  }
  }