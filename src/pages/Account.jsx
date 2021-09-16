import React from "react";
import Nodata from "../components/Nodata";
import Sidebar from "../components/Sidebar";

function Account() {
  return (
    <>
      <div className="account container">
        <Sidebar />
        <Nodata />
      </div>
    </>
  );
}

export default Account;
