import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Modal, Button } from "react-bootstrap";


function Add() {
  const [show, setShow] = useState(false);
  const [task, setTask] = useState(false);
  // const [add, setAdd] = useState(false);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleTaskClose = () => setTask(false);
  const handleTaskShow = () => setTask(true);
  // const handleAddClose = () => setAdd(false);
  // const handleAddShow = () => setAdd(true);



  return (
    <section className="blessed-state">
      <div>
        <button onClick={handleShow} className="button">
          Add Employee
        </button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="vw-100" style={{ fontWeight: 700 }}>
              Add Employee
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="vh-90">
            <form className="modal-input">
              <label for="employee name">Employee Name</label>
              <br />
              <input type="text" />
              <br />
              <label for="phone">Phone</label>
              <br />
              <input type="tel" />
              <br />
              <label for="department">Department</label>
              <br />
              <input type="select" />
              <br />
              <label for="Email">Email</label>
              <br />
              <input type="email" />
              <br />
            </form>
            <Button
              onClick={handleClose}
              className="modal-btn"
              style={{ marginTop: "100px"}}
            >
              Add
            </Button>
          </Modal.Body>
        </Modal>

        <button onClick={handleTaskShow} className="btn--2">
          Add Task
        </button>

        <Modal show={task} onHide={handleTaskClose}>
          <Modal.Header closeButton>
            <Modal.Title className="vw-100" style={{ fontWeight: 700 }}>
              Create Task
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="vh-90" style={{marginBottom:'80px'}}>
            <form>
              <label
                for="task tittle"
                style={{ fontWeight: "700", marginTop: "10px", display:'flex', marginLeft:'20px', marginBottom:'-20px'}}
              >
                Task Title
              </label>
              <br />
              <input type="text" className="create-task-tittle" />
              <br />
              <label
                for="task description"
                style={{ fontWeight: "700", marginTop: "20px", display:'flex', marginLeft:'20px', marginBottom:'-20px'}}
              >
                Task Description
              </label>
              <br />
              <input type="text" className="create-task" />
              <br />
              <h5 style={{ textAlign: "right", marginTop: "30px" }}>
                <span><a href="Upload"><i class="fas fa-paperclip"></i></a>
                </span>
                <input type='file'  style={{display:'none'}}/>
                Add Attachment
              </h5>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "çenter",
                  marginTop: "30px",
                }}
              >
                <div>
                  <p for="taskdate" style={{ fontWeight: "700" }}>
                    Task Due Date
                  </p>
                </div>
                <div>
                  <input
                    type="date"
                    placeholder="Select Date"
                    style={{width:'auto', height:'auto' }}
                  />
                </div>
              </div>
              <div>
                <span
                  style={{
                    fontWeight: "700",
                    fontSize: "16px",
                    display: "flex",
                    marginTop: "30px", color:'black'
                  }}
                >
                  Assign To
                  _________________________________________________________ Add
                </span>
              </div>
            </form>
            <div>
              <button
                onClick={handleTaskClose}
                className="modal-btn"
                style={{ marginTop: "30px" }}
              >
                Create Task
              </button>
              <button
                onClick={handleTaskClose}
                className="modal-btn--2"
                style={{ marginTop: "30px", marginBottom:'30px'}}
              >
                Cancel
              </button>
            </div>

            {/* <Modal show={add} onHide={handleAddShow}>
              <Modal.Header closeButton>
                <Modal.Title style={{ fontWeight: 700 }}>
                  Add Employee
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Sucessfully Added</p>

                <div>
                  <p>
                    An invitation link has been sent to your email with the
                    following details
                    <br />
                    <br />
                    User ID: GT-35647<br>Password: fd48shf</br>
                  </p>
                </div>

                <Button onClick={handleAddClose} className="modal-btn">
                  Add Another User
                </Button>
                <Button onClick={handleAddClose} className="modal-btn">
                  Done
                </Button>
              </Modal.Body>
            </Modal> */}
          </Modal.Body>
        </Modal>
      </div>
      <section className="blessed-state2">
        <div>
          <Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" className="drop-button">
                <i class="fas fa-filter" style={{ marginRight: "10px" }}></i>{" "}
                Filter
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Gender</Dropdown.Item>
                <Dropdown.Item href="#">Status</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Dropdown>
        </div>
        <div>
          <Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" className="drop-button">
                Bulk Action
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Add Members</Dropdown.Item>
                <Dropdown.Item href="#">Make Selection</Dropdown.Item>
                <Dropdown.Item href="#">Assign Task</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Dropdown>
        </div>
        <div>
          <Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" className="drop-button">
                Export
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Export xlxs</Dropdown.Item>
                <Dropdown.Item href="#">Export to Doc</Dropdown.Item>
                <Dropdown.Item href="#">Export to Drive</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Dropdown>
        </div>
      </section>
    </section>
  );
}

export default Add;
