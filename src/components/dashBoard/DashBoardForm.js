'use strict';
import React from 'react';
import InputText from '../common/inputText/InputText';
import {Link,IndexLink} from "react-router";

class DashBoardForm extends React.Component{

  render(){
debugger
    return(
      <form>
      <div>hello</div>
        debugger
        {this.props.formvalue.firstName}
        <Link type="submit" value="Submit" to="about" className="btn btn-primary btn-default"/>
    </form>

    );
  }
}
export default DashBoardForm;
