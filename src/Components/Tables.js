import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

function Tables() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("https://empmgtapp.herokuapp.com/api/employee")
      .then(({ data }) => {
        setEmployees(data.data);
        
      });
      axios.post("https://empmgtapp.herokuapp.com/api/employee/signup")
  }, []);

  return (
    <div className="table-format">
      <Table striped bordered hover style={{ width: "970px", height: "auto" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Department</th>
            <th>Contacts</th>
            <th>Present Task</th>
            <th>KPI rating</th>
            <th>Status</th>
          </tr>
        </thead>
        {employees.map((em) => (
          <tbody>
            <tr>
              <td>
                <img src={process.env.PUBLIC_URL + "/logo512.png"} alt="logo" />
                {em.firstName} {em.lastName}
              </td>
              <td>{em._id}</td>
              <td>{em.department}</td>
              <td>{em.contactNo}</td>
              <td>{em.role}</td>
              <td>...</td>
              <td>...</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}

export default Tables;
