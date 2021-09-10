import React from "react";

const Filter = ({ setFilter }) => {
  return (
    <div>
      {/* View options section */}
      <div className="row m-1 p-3 px-5 justify-content-center">
        <div className="col-auto d-flex align-items-center">
          <label className="text-secondary my-2 pr-2 view-opt-label">
            Filter
          </label>
          <select
            className="custom-select custom-select-sm btn my-2"
            onClick={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="done">Done</option>
            <option value="undone">Not Done</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
