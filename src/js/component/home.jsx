import React, { useState } from "react";
import propTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import Tarea from "./tarea.jsx";
import Pendiente from "./pendiente.jsx";




const Home = () => {

	//las tres variables que voy a utilizar, primero la tarea, despues la Lista
	const [todo, setTodo] = useState("");
	const [todoList, setTodoList] = useState([]);
	const [tareaList, setTareaList] = useState([]);
	
  
	const Nuevo = (e) => {
	  setTodo(e.target.value);
	};
  
	const handleKey = (event) => {
	  if (event.key === "Enter" && event.target.value !== "") {
		setTodoList([...todoList, todo]);
		setTodo("");
	  }
	};
  
	return (
	  <div className="container text-center">
		<div className="row">
		  <div className="col">
			<h1 className="title">Add Task</h1>
			<input
			  className="form-control"
			  type="text"
			  placeholder="Add task"
			  onChange={Nuevo}
			  onKeyPress={handleKey}
			  value={todo}
			/>
		  </div>
		  <Pendiente
          todoList={todoList}
          setTodoList={setTodoList}
          tareaList={tareaList}
          setTareaList={setTareaList}
        />
		  <Tarea tareaList={tareaList} setTareaList={setTareaList} />
		</div>
	  </div>
	);
  };
export default Home;  


//hacer nueva lista de tareas que se pueda marcar como hecha.
//guardarlo como un ojbeto, en el setTasklist, generas un objeto {id: }}
//mirar hacer otro elemento para borrar el elemento de la tarea, 
//crear un estado (un array), cuando se meta 
