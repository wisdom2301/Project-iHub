import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Modal } from "react-bootstrap";

function Rightbar() {
    const [task, setTask] = useState(false);

    const handleTaskClose = () => setTask(false);
    const handleTaskShow = () => setTask(true);

    const handleSubmit = {

    }

    return (
        <div className='right-bar'>

            <div className='right-btn'>
                <button>Send Email</button>
                <button>Suggestions</button>

                <button onClick={handleTaskShow}>Create Task</button>
                <Modal show={task} onHide={handleTaskClose}>
          <Modal.Header closeButton>
            <Modal.Title className="vw-100" style={{ fontWeight: 700 }}>
              Create Task
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="vh-80" style={{marginBottom:'80px'}}>
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
                  ___________________________________ 
                </span><button onClick={handleTaskClose}>Add</button>
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
                onClick={handleSubmit}
                className="modal-btn--2"
                style={{ marginTop: "30px", marginBottom:'30px'}}
              >
                Cancel
              </button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
                
        </div>
    )
}

export default Rightbar;
