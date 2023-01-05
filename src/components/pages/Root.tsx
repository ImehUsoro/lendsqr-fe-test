import React from "react";
import { Link, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      {/* <div>
        <Link to="/dashboard">Dashboard</Link>
      </div> */}
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Root;
