import { React, useState } from "react";
import { addTask } from "../JS/actions/task";
import { useDispatch } from "react-redux";

const AddTasks = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      {/* App title section */}
      <div className="row m-1 p-4">
        <div className="col">
          <div className="p-1 h1 text-primary text-center mx-auto display-inline-block">
            <i className="fa fa-check bg-primary text-white rounded p-2" />
            <u>My Todo-s</u>
          </div>
        </div>
      </div>
      {/* Create todo section */}
      <div className="row m-1 p-3">
        <div className="col col-11 mx-auto">
          <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
            <div className="col">
              <input
                className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
                type="text"
                placeholder="Add new .."
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="col-auto m-0 px-2 d-flex align-items-center">
              <label className="text-secondary my-2 p-0 px-1 view-opt-label due-date-label d-none">
                Due date not set
              </label>
              <i
                className="fa fa-calendar-times-o my-2 px-1 text-danger btn clear-due-date-button d-none"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Clear Due date"
              />
            </div>
            <div className="col-auto px-0 mx-0 mr-2">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  dispatch(
                    addTask({ description: description, id: Math.random() })
                  )
                }
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 mx-4 border-black-25 border-bottom" />
    </div>
  );
};

export default AddTasks;
