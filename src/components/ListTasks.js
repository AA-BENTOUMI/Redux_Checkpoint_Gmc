import { React, useState } from "react";
import { useSelector } from "react-redux";
import "./Task.css";
import Task from "./Task";
import Filter from "./Filter";
const ListTasks = () => {
  const tasks = useSelector((state) => state.taskReducer.tasks);
  const [filter, setFilter] = useState("all");

  return (
    <div>
      <Filter setFilter={setFilter} />
      <div>
        {filter === "all"
          ? tasks.map((el, i) => (
              <div key={i}>
                <Task Data={el} key={el.id} />
              </div>
            ))
          : filter === "done"
          ? tasks
              .filter((el) => el.status === true)
              .map((el, i) => (
                <div key={i}>
                  <Task Data={el} key={el.id} />
                </div>
              ))
          : tasks
              .filter((el) => el.status === false)
              .map((el, i) => (
                <div key={i}>
                  <Task Data={el} key={el.id} />
                </div>
              ))}
      </div>
    </div>
  );
};

export default ListTasks;
