import React, { useState } from "react";
import Header from "./mini-components/Header";
import Footer from "./mini-components/Footer";

export default function Login(props) {
  const [newUser, setUser] = useState(1);
  const [formContent, setForm] = useState({
    username: "",
    password: "",
    password2: ""
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "checkbox") {
      setUser(prev => !prev);
      console.log({ newUser });
    } else {
      setForm(prev => {
        return {
          ...prev,
          [name]: value
        };
      });
    }
  }

  function handleClick(event) {
    if (event.target.name === "signup") {
      let localData = localStorage.getItem("reactAppUsers");
      if (localData == null) {
        localData = "[]";
      }
      let accounts = JSON.parse(localData);
      let foundUser = null;
      accounts.forEach(user => {
        if (user.uName === formContent.username) {
          foundUser = user;
        }
      });
      if (foundUser) {
        alert("Username already exists");
      } else if (formContent.password.length < 8) {
        alert("Type a longer password");
      } else if (formContent.password !== formContent.password2) {
        alert("Both the passwords have to match");
      } else {
        const newUser = {
          uName: formContent.username,
          pWord: formContent.password
        };
        accounts.push(newUser);
        localStorage.setItem("reactAppUsers", JSON.stringify(accounts));
        alert("Logged in as a new user");
        props.setUserLog(1);
      }
    } else if (event.target.name === "signin") {
      const localData = localStorage.getItem("reactAppUsers");
      if (localData == null) {
        alert("No account has been created yet");
      } else {
        const accounts = JSON.parse(localData);
        let foundUser = null;
        accounts.forEach(user => {
          if (user.uName === formContent.username) {
            foundUser = user;
          }
        });
        if (!foundUser) {
          alert("No account with this username");
        } else if (foundUser.pWord !== formContent.password) {
          alert("Incorrect password");
        } else {
          alert("Logged in");
          props.setUserLog(1);
        }
      }
    }
    event.preventDefault();
  }

  return (
    <div className="App">
      <Header text="React app" />
      <div className="jumbotron jumbotron-fluid">
        <div>
          <input
            onChange={handleChange}
            type="checkbox"
            name="checkbox"
            value={!newUser}
          />
          <span> I already have an account.</span>
        </div>
        <div className="form-container">
          <form>
            <input
              onChange={handleChange}
              type="text"
              name="username"
              value={formContent.username}
              placeholder="Username"
              required
              autoFocus
            />
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formContent.password}
              placeholder="Password"
              required
            />
            {newUser && (
              <input
                onChange={handleChange}
                type="password"
                name="password2"
                value={formContent.password2}
                placeholder="Confirm password"
                required
              />
            )}
            {newUser ? (
              <button
                onClick={handleClick}
                name="signup"
                className="btn btn-lg btn-outline-dark"
              >
                Sign up
              </button>
            ) : (
              <button
                onClick={handleClick}
                name="signin"
                className="btn btn-lg btn-dark"
              >
                Sign in
              </button>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
