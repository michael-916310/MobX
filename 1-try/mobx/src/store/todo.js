import { action, computed, makeAutoObservable, observable } from "mobx"

class Todo {
  todos = [
    {id:1, title:{id:1, name:'Сходи в магазин'}, completed: false},
    {id:2, title:{id:2, name:'Посмотри TV'}, completed: false},
    {id:3, title:{id:3, name:'Поставь лайк'}, completed: false},
  ]


  constructor(){
    //makeObservable(this, {todos: observable, addTodo: action, computed: computed}, {deep: true});
    makeAutoObservable(this);
  }

  addTodo(todo){
    this.todos.push(todo);
  }

  removeTodo(id){
    this.todos = this.todos.filter(todo=>todo.id !==  id);
  }

  completeTodo(id){
    this.todos = this.todos.map(todo=>todo.id ===  id ? {...todo, completed: !todo.completed} : todo);
  }

  fetch(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => {
      this.todos.push({
        id:new Date(),
        title: {id: new Date(), name: data.title},
        completed: false
      });
    }).catch(err=>{
      console.log(err)
    })
  }

}

export default new Todo();