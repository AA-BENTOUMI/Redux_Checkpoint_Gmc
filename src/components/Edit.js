import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../JS/actions/task";
const Edit = ({ location: { state }, history }) => {
  const [description, setdescription] = useState(state.description);
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(updateTask(state.id, description));
    history.push("/");
  };
  return (
    <div>
      {/* edet todo section */}
      <div className="row m-1 p-3">
        <div className="col col-11 mx-auto">
          <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
            <div className="col">
              <input
                className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
                type="text"
                placeholder="Add new .."
                onChange={(e) => setdescription(e.target.value)}
                value={description}
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
                onClick={handleEdit}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
