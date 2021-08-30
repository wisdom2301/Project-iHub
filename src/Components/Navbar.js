import React from 'react'
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
      <section className="home-bar">
        <div className="header-bar">
          <header>
            <a href="/" class="insider" className="header-tag">
              <i class="fab fa-elementor"></i> E M S BOARD
            </a>
          </header>
          <nav style={{ marginTop: "-200px" }}>
            <div style={{marginBottom:'60px'}}>
              <NavLink
                to="/"
                activeClassName="select"
                class="insider"
                className="header-tag"
              >
                <i class="fas fa-home fa-1x"></i> Home
              </NavLink>
            </div>
            <div style={{marginBottom:'60px'}}>
              <NavLink
                to="/employee"
                activeClassName="select"
                class="insider"
                className="header-tag"
              >
                <i class="fas fa-user-tie fa-1x"></i> Employee
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/payroll"
                activeClassName="select"
                class="insider"
                className="header-tag"
              >
                <i class="fas fa-user-check fa-1x"></i> Payroll
              </NavLink>
            </div>
          </nav>

          <div>Employee Mgt Sys Board</div>
        </div>
      </section>
    );
}

export default Navbar
