import './App.css';
import Counter from './Counter';
import Counter2 from './Counter2.jsx'
import Todo from './Todo';

function App() {
  return (
    <div className="app">
      <Counter/>
      <Todo/>
      <Counter2/>
    </div>
  );
}

export default App;
