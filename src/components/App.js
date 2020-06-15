import React, { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

export default function App() {
  const [loggedIn, setLog] = useState(0);

  function onLogChange(loggedInAs) {
    console.log("function called to update status to " + loggedInAs);
    setLog(loggedInAs);
  }

  return (
    <div>
      {loggedIn ? (
        <Dashboard user={loggedIn} setUserLog={onLogChange} />
      ) : (
        <Login setUserLog={onLogChange} />
      )}
    </div>
  );
}
