import React from "react";

function About() {
  return (
    <div>
      <h1 style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        What is the app about!!!!
      </h1>
      <p style={{ marginLeft: "0.5rem", marginBottom: "0.5rem" }}>
        This app consumes data from jasonplaceholde a fake REST API. Add, Delete
        and Edit functionality were implemented.
      </p>
      <p style={{ marginLeft: "0.5rem", marginBottom: "0.5rem" }}>
        routing was also implemented using the react-router-dom
      </p>
      <p style={{ marginLeft: "0.5rem", marginBottom: "0.5rem" }}>
        The navbar was build from scratch
      </p>
    </div>
  );
}

export default About;
