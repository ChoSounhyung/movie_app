import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {/* <Link to={{pathname:"/about", state: {
        fromNavigation: true
        }}}>About</Link>  About 페이지로 object를 보냄 */}
    </div>
  );
}

export default Navigation;
