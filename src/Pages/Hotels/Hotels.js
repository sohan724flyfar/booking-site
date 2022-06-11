import React from "./Hotels.css";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";

const Hotels = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch"></div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
