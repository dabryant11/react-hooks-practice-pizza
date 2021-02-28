import React from "react";

function Pizza({ id, topping, size, vegetarian }) {
  function editPizza() {
    console.log("zaaaaaa");
  }
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td>
        <button onClick={editPizza} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
