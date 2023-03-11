import React, { useState } from "react";
import propTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faTrash, faCheck, faCheckSquare, faCheckCircle } from "@fortawesome/free-solid-svg-icons";




const Pendiente = (props) => {
  const moveToTarea = (index) => {
    const itemToMove = props.todoList[index];
    props.setTareaList([...props.tareaList, itemToMove]);
    props.setTodoList(props.todoList.filter((item, i) => i !== index));
  };

  return (
    <div className="col">
      <h1 className="title"> Pendiente</h1>
      <ul className="list-group">
        {props.todoList.map((item, i) => {
          return (
            <li className="list-group-item" key={i}>
              {item}
              <FontAwesomeIcon
                icon={faCheck}
                onClick={() => {
                  moveToTarea(i);
                  
                }}
              />
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() =>
                  props.setTodoList(
                    props.todoList.filter(
                      (item, currentIndex) => i !== currentIndex
                    )
                  )
                }
              />
            </li>
          );
        })}
      </ul>
      <div className="items-left">
        <p>{props.todoList.length} list done</p>
      </div>
    </div>
  );
};


export default Pendiente;
