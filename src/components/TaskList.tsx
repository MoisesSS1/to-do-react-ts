import React from "react";
import Styles from "./TaskList.module.css";

import { ITask } from "../interfaces/Task";

type Props = {
  taskList: ITask[];
  handleDelete(id: number): void;
  editTask(task: ITask): void;
};

const TaskList = ({ taskList, handleDelete, editTask }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => {
          return (
            <div key={task.id} className={Styles.task}>
              <div className={Styles.details}>
                <h4>{task.title}</h4>
                <p>Dificuldade: {task.difficulty}</p>
              </div>
              <div className={Styles.actions}>
                <i className="bi bi-pencil" onClick={() => editTask(task)}></i>
                <i
                  className="bi bi-trash"
                  onClick={() => handleDelete(task.id)}
                ></i>
              </div>
            </div>
          );
        })
      ) : (
        <p>Não há tarefas</p>
      )}
    </>
  );
};

export default TaskList;
