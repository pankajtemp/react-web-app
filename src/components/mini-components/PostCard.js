import React from "react";

const myColors = ["#a9a9a9", "#b0b0b0", "#d3d3d3", "#d0d0d0"];

function Post(props) {
  return (
    <div
      style={{ backgroundColor: myColors[Math.floor(4 * Math.random())] }}
      className="card"
    >
      <img src="https://picsum.photos/100" alt="couldn't load" />
      <p>{props.secret}</p>
    </div>
  );
}

export default Post;
