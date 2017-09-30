
 import React,{Component} from 'react';
 import {render} from 'react-dom';
 import AwesomeComponent from '../client/app/AwesomeComponent.js';
 import Shoppinglist from '../client/app/Shoppinglist.js';
 import Name from '../client/app/FunctionComponent.js';
 import Header from './common/Header';
 import PropTypes from 'prop-types';
 class App extends Component {

 constructor(props){
 super(props);
 const myName = "Jyothis";
 const activities = {
 name: 'My Name',
 lastName : 'Last name',
 userDetails :{
 userID : 1
 }
 };
 const activities1 = {
 name: 'My Name',
 lastName : 'Last name',
 userDetails :{
 userID : 1
 }
 };

 //const s = {activities, activities1}
 const s = {
 activities: activities,
 activities1: activities1
 };

 this.state=s;
 }


 render () {
 return (
 <div className="container-fluid">
<Header />
 <p> </p>
 {this.props.children}

 </div>
 );
 }

 }
 App.propTypes={
 children: PropTypes.object.required
 };
 export default App;
/* render(<App/>, document.getElementById('app'));*/
