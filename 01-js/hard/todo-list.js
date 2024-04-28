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

    if (indexOfTodo < 0 || indexOfTodo >= this.todos.length) {
      return;
    }
    //splice(index,length)
    this.todos.splice(indexOfTodo, 1);
  }

  update(index,updatedTodo){
    if (index < 0 || index >= this.todos.length) {
      return;
    }
    return this.todos[index] = updatedTodo
  }

  getAll(){
    return [...this.todos]
  }

  get(indexOfTodo){
    if (indexOfTodo < 0 || indexOfTodo >= this.todos.length) {
      return null;
    }
    return this.todos[indexOfTodo];
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

