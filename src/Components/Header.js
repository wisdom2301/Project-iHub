import React from "react";

function Header() {
  const d = new Date();

  return (
    <>
      <section className="emp-con">
        <div>
          <div>
            <input type="text" placeholder="Search for employees" style={{paddingLeft:'80px'}} />
            <span style={{ marginLeft: "30px", color:'black' }}>{d.toDateString()}</span>
            <span style={{marginLeft:'10px', color:'black'}}>{d.toLocaleTimeString()}</span>
          </div>
        </div>
        <div className="notify">
          <div>
            <i class="far fa-bell fa-2x"></i>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="logo" />
          </div>
        </div>
      </section>
      
    </>
  );
}

export default Header;