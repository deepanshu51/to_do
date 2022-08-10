import logo from './logo.svg';
import './App.css';
import Header from "./Mycomponents/Header";
import Todos from './Mycomponents/Todos';
import Footer from './Mycomponents/Footer';
import React, {useState } from 'react';
function App() {
  const onDelete = (todo)=>{
    console.log("I am ondelete of todo",todo);
    //let index = todos.index.Of(todo);
    //todos.splice(index,1);

    setTodos(todos.filter((e)=>{
      return e!=todo;
    }))
  }
  const  [todos,setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the market to get this job done2"
    }, 
    {
      sno: 3,
      title: "Go to the ghat",
      desc: "You need to go to the market to get this job done3"
    }

  ]);
  return (
    <>
    <Header  title="My Todos List"/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
