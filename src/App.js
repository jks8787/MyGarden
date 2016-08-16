import React from 'react'
import Footer from './components/Footer.js';
import AddTodo from './containers/AddTodo.js';
import VisibleTodoList from './containers/VisibleTodoList.js';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App;
