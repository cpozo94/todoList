import React, { useState } from "react";
import propTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faTrash, faCheck, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import Pendiente from "./pendiente.jsx";


const Tarea = (props) => {

  
	const Nuevo = (e) => {
	  setTodo(e.target.value);
	};
  
	const handleKey = (event) => {
	  if (event.key === "Enter" && event.target.value !== "") {
		setTodoList([...todoList, todo]);
		setTodo("");
	  }
	};
  
	const tareaHecha = () => {
	  props.setTodoList(
		props.todoList.filter((item, currentIndex) => i == currentIndex)
	  );
	};
  
	return (
	  <div className="col">
		<h1 className="title">Tasks Done</h1>
		<ul className="list-group">
		  {props.tareaList.map((item, index) => {
			return <li className="list-group-item" key={index}>{item}
			<FontAwesomeIcon
                icon={faCheckSquare} id="square"
                
              /></li>;
		  })}
		</ul>
		<div className="items-left">
		  <p>{props.tareaList.length} Tasks Done</p>
		</div>
	  </div>
	);
  };
  

export default Tarea;

