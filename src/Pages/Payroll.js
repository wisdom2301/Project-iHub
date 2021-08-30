import React from "react";
import PayrollTab from "../Components/PayrollTab";

function Payroll() {
  const month = new Date()

  return (
    <>
      <h6 style={{ textAlign: "right", marginTop: "6.8rem", marginRight:'6rem' }}>
        <a
          href="manage employee"
          style={{ marginRight: "50px", textDecoration: "none" }}
        >
          <i class="fas fa-cog "></i> Manage Payroll
        </a>
      </h6>
      <section style={{ textAlign: "center" }}>
        <div style={{ marginLeft: "-350px" }}>
          <h3>
            <i class="fas fa-chevron-left"></i>
            {month.toDateString()}
            <i class="fas fa-chevron-right"></i>
            {/* <i class="far fa-calendar-alt" style={{marginLeft:'15px'}}></i> */}
            <input
              type="date"
              style={{ width: "50px", backgroundColor: "transparent" }}
            />
          </h3>
          <p style={{ fontSize: "16px", fontWeight: "400" }}>
            Payment Scheduled on 29th August 2021
            <a href="/" style={{ textDecoration: "none", color: "black" }}>
              <span style={{ fontWeight: "600" }}>Change</span>
            </a>
          </p>
        </div>

        <div className="payroll-card">
          <div className="pay--card">
            <h1>
              <strike>N</strike>14.2M
            </h1>
            <span>Available Balance</span>
          </div>
          <div className="pay--card">
            <h1>
              <strike>N</strike>10.2M
            </h1>
            <span>Total Gross</span>
          </div>
          <div className="pay--card">
            <h1>
              <strike>N</strike>1.2M
            </h1>
            <span>Overtime</span>
          </div>
        </div>
        <PayrollTab />
      </section>
    </>
  );
}

export default Payroll;