import React from "react";
import "./Main.css";
function Main() {
  return (
    <main>
      <h1 classNAme="main--title">Fun Facts About React</h1>
      <ul className="main--list">
        <li>Was first released in 2013</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}
export default Main;