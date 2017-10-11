'use strict';
import React from 'react';
import DashBoardForm from './DashBoardForm';
class DashBoardPage extends React.Component {
 constructor(props){
   super(props);
   this.state ={
     author: {id: "", firstName: "hhh", lastName: ""}
   };
 }

  render() {
    return (
      <div>
        Hello I am from DashBorad
        <DashBoardForm formvalue={this.state.author}/>
      </div>
    );

  }

}
export default  DashBoardPage;
