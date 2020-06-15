import React from "react";

function Footer() {
  const today = new Date().getFullYear();
  return (
    <footer>
      <p style={{ fontSize: "0.9rem" }}>copyright {today}</p>
    </footer>
  );
}

export default Footer;
