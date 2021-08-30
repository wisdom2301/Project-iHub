import React from "react";
import Add from "../Components/Add";
import Tables from "../Components/Tables";

function Employee() {
  return (
    <>
      <div>
        <h6 style={{ textAlign: "right", marginTop: "6.8rem", marginRight:'6rem' }}>
          <a
            href="manage employee"
            style={{ marginRight: "50px", textDecoration: "none" }}
          >
            <i class="fas fa-cog "></i> Manage Employee
          </a>
        </h6>
        <Add />
        <Tables />
      </div>
    </>
  );
}

export default Employee;