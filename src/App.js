import React,{useState} from 'react';
import './assets/css/App.css';
import MenuVar from './Componetes/MenuVar.js';
import Form from './Componetes/Form.js';
import TodoList from './Componetes/TodoList';

function App () {
  const [inputText,setInputText] = useState ("");
  const [todo,setTodos]=useState ([]);
  return(
        <div className="App">
          <header>
            <MenuVar/>
          </header>
          <div className="Koana wrapper">
            <Form
             inputText={inputText} 
             setInputText={setInputText}
             todo={todo} 
             setTodos={setTodos}
             />
          </div>
          <TodoList todo={todo}/>
          
        </div>
    );
}

export default App;
