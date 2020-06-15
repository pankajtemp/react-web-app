import React, { useState } from "react";
import PostCard from "./PostCard";

let localData = localStorage.getItem("secretsAnonymous");
if (!localData) localData = "[]";
const ideas = JSON.parse(localData);

function Contents() {
  const [newText, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }
  function handleClick(event) {
    if (event.target.name === "add") {
      if (newText.length) ideas.push(newText);
      setText("");
    } else {
      console.log(ideas);
      localStorage.setItem("secretsAnonymous", JSON.stringify(ideas));
    }
    event.preventDefault();
  }

  return (
    <div className="jumbotron">
      <h1 className="display-4">Hello user!</h1>
      <h3>Anything you share here will be shared anonymously.</h3>
      <hr className="my-4" />
      <div style={{ display: "flex" }}>
        {ideas.map((idea, index) => (
          <PostCard key={index} secret={idea} />
        ))}
      </div>
      <div>
        <br />
        <form>
          <div className="form-group">
            <label>Have a new secret?</label>
            <input
              onChange={handleChange}
              className="form-control"
              type="text"
              placeholder="Bella ciao."
              autoFocus
              required
              value={newText}
            />
            <br />
            <button onClick={handleClick} className="btn btn-dark" name="add">
              + Add
            </button>
            <br />
            <br />
            <button onClick={handleClick} className="btn btn-dark" name="save">
              + Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Contents;
