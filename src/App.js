import React, {useEffect} from 'react';
import TodoList from './todo/TodoList';
import Loader from './loader';
import Context from './context';
import Modal from './modal/modal'

const AddTodo = React.lazy(() => import('./todo/AddTodo'));

//
//const AddTodo = React.lazy(() => new Promise(resolve => {
//    setTimeout(()=>{resolve(import('./todo/AddTodo'))}, 3000);
//}));


function App() {
    
    const [todos, setTodos] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
          .then(response => response.json())
          .then(todos => {
            setTimeout(() => {
                setTodos(todos);
                setLoading(false)
            }, 2000)
            
        })
    }, [])
    
    
    useEffect(()=>{
        
    })
    
    
    
    function toggleTodo(id){
        setTodos(
            todos.map(todo => {
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            
            return todo
            })
        )
    }
    
    function removeTodo(id){
        setTodos(todos.filter(todo => todo.id !== id));
    }
    
    function addTodo(title){
        setTodos(todos.concat([{
            title,
            id: Date.now(),
            completed: false
        }]))
    }
    
    
  return (
      <Context.Provider value={ {removeTodo: removeTodo} }>
      
          <div className='wrapper'>

          <h1>React tutorial</h1>
            <Modal />
      
            <React.Suspense fallback={<p></p>}>
                <AddTodo onCreate = {addTodo} />
            </React.Suspense>
      
      
            
      
            {loading && <Loader />}
      
            {todos.length ? 
            <TodoList todos={todos} onToggle={toggleTodo} /> 
            : (
                loading ? null : (
                        <p>No todos</p>
                    )
                )
            }
      
          </div>
      </Context.Provider>
      
  );
}

export default App;
