import React from 'react';
import {Link,IndexLink} from "react-router";

const Header =()=> {
  return(
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {" | "}
      <Link to="/course" activeClassName="active">Courses</Link>
      {"  |  "}
      <Link to="/dashBoard" activeClassName="active">Dash Board</Link>
      {"  |  "}
      <Link to="/activitiesPage" activeClassName="active">Activities Page</Link>
    </nav>
  );
};
export default Header;
