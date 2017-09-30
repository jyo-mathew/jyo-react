import React from "react";
import {Link} from "react-router";
  class AboutPage extends React.Component{

    render(){
      return(<div
          className=""
        >
          <h1>About Page </h1>
          <Link to="about" className="btn bt"/>
        </div>

      );

    }
  }
export default AboutPage;
