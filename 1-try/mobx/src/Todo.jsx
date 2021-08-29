import { observer } from "mobx-react-lite";
import todo from './store/todo';

const Todo = observer(()=>{
  return (
    <div className="todo-list">
      <button onClick = {()=>{todo.fetch()}}>fetch todo</button>
      {todo.todos.map(t =>
        <div className="todo-list-item" key={t.id}>
          <input type="checkbox" checked ={t.completed} onChange={()=>{todo.completeTodo(t.id)}}/>
          {t.title.name}
          <button onClick={()=>{todo.removeTodo(t.id)}}>X</button>
        </div>
      )}
    </div>
  )
})

export default Todo;