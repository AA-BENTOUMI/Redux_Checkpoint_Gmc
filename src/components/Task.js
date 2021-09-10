import React from "react";
import "./Task.css";
import { useDispatch } from "react-redux";
import { deleteTask, statuTask } from "../JS/actions/task";
import { Link } from "react-router-dom";
const Task = ({ Data }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  const handelDone = (id) => {
    dispatch(statuTask(id));
  };
  return (
    <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
      {/* Todo list section */}
      <div className="row mx-1 px-5 pb-3 w-80">
        <div className="col mx-auto">
          {/* Todo Item 1 */}
          <div className="row px-3 align-items-center todo-item rounded">
            <div className="col-auto m-1 p-0 d-flex align-items-center">
              <h2 className="m-0 p-0">
                <i
                  className="fa fa-square-o text-primary btn m-0 p-0 d-none"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Mark as complete"
                />
              </h2>
            </div>
            <div className="col px-1 m-1 d-flex align-items-center">
              <button
                type="button"
                className={Data.status ? "btn btn-success" : "btn btn-warning"}
                onClick={() => handelDone(Data.id)}
              >
                {Data.status ? "Done" : "Not Done"}
              </button>
              <input
                type="text"
                className={
                  Data.status
                    ? " doneStatus form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
                    : "form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
                }
                value={Data.description}
                title="description"
              />
            </div>
            <div className="col-auto m-1 p-0 px-3 d-none"></div>
            <div className="col-auto m-1 p-0 todo-actions">
              <div className="row d-flex align-items-center justify-content-end">
                {/* Edit element by router */}
                <Link to={{ pathname: `/editTask/${Data.id}`, state: Data }}>
                  <h5 className="m-0 p-0 px-2">
                    <i
                      className="fa fa-pencil text-info btn m-0 p-0"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Edit todo"
                    />
                  </h5>
                </Link>
                {/* Delete todo */}
                <h5
                  className="m-0 p-0 px-2"
                  onClick={() => handleDelete(Data.id)}
                >
                  <i
                    className="fa fa-trash-o text-danger btn m-0 p-0"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Delete todo"
                  />
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
