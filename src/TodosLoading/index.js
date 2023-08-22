import React from "react";
import "./TodosLoading.css";

function TodosLoading() {
  return (
    <div className="todos-loading-container">
      <div className="todos-loading-content1">
        <div className="todos-loading-line"></div>
      </div>
      <div className="todos-loading-content2">
        <div className="todos-loading-line"></div>
      </div>
      <div className="todos-loading-content3">
        <div className="todos-loading-line"></div>
      </div>
    </div>
  );
}

export { TodosLoading };
