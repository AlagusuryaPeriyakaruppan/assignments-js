/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos=[];
  }

  add(todo){
    this.todos.push(todo)
  }

  remove(indexOfTodo){

    const todoBeRemoved = this.get(indexOfTodo)
    if(!todoBeRemoved)return;
    
    const filteredTodos = this.todos.filter((todo)=>todo!==todoBeRemoved);
    this.todos = filteredTodos;
  }

  update(index,updatedTodo){
    if(index > this.todos.length-1)return;
    return this.todos[index] = updatedTodo
  }

  getAll(){
    return this.todos
  }

  get(indexOfTodo){
    return this.todos[indexOfTodo] ? this.todos[indexOfTodo]:null
  }

  clear(){
    return this.todos=[];
  }
}


const todo = new Todo();
todo.add("Apple")
todo.add("Orange")
todo.add("Banana")
todo.add("Grapes")
todo.update(1,"Kiwi")
todo.update(5,"Unknown Fruit")
console.log(todo.getAll())




module.exports = Todo;

