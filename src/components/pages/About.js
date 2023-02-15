import React from "react";

const styles = {
  myimg: {
    height: 280,
    width: "auto",
    borderRadius: 280
  },
  shadow: {
    border: "2 px solid dark-blue",
    boxShadow: "4px 20px 16px #161B23"
  },
};

export default function About() {
  return (
    <>
      <div className="row m-2 p-3">
        <h1 className="text-center">About Me</h1>
      </div>
      <div className="min-vh-100">
        <div className="row m-2 p-3">
          <div className="d-flex justify-content-center mb-3">
          </div>
          <div
            className="d-flex justify-content-evenly text-center"
            style={styles.shadow}
          ></div>
          <p className="fs-4 p-2 d-flex justify-content-center">
           I'm Kyle, and Im new to this 
            <br />
            Hope to work with you in the future
          </p>
        </div>
      </div>
      </>
      );
}

