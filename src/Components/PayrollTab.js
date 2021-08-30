import React, { useState, useEffect } from 'react'
import { Table } from "react-bootstrap";
import axios from "axios";


function PayrollTab() {

const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("https://empmgtapp.herokuapp.com/api/employee")
      .then(({ data }) => {
        setEmployees(data.data);
      });
  }, []);

    return (
      <div>
        <div className="table-format">
          <Table striped bordered hover style={{ width: "970px", height: "auto" }}
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Dept</th>
                <th>Allowance</th>
                <th>Basic Salary</th>
                <th>Gross Salary</th>
                <th>Net Salary</th>
                <th>Status</th>
              </tr>
            </thead>
            {employees.map((em) => (
            <tbody>
              <tr>
                
                <img src={process.env.PUBLIC_URL + "/logo512.png"} alt="logo" />{em.firstName} {em.lastName}
                <td>{em.department}</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
              </tr>
            </tbody>
             ))}
          </Table>
        </div>
      </div>
    );
}

export default PayrollTab
