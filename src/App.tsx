import "./App.css";
import Todos from "./components/Todos";
import NewToDo from "./components/NewToDo";
import React from "react";
import TodosContextProvider from "./store/store-context";

function App() {
  return (
    <TodosContextProvider>
      <NewToDo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
