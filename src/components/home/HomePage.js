import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router";
class HomePage extends React.Component{

    render(){
        return(<div className="">
            <h1>Home Page </h1>
            <Link to="about" className="btn-primary"> Learn more</Link>
            </div>

        );

    }
}
export default HomePage;
