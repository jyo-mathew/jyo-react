import React from 'react';
import Activities from './ActivitiesForm';
import {connect} from 'react-redux';
import * as activityActions from '../../actions/activityAction';
class ActivitiesPage extends React.Component{
constructor(props){
  super(props);
 let singleActivity ={name:"Add Jyothis",lastName:""}
 const activity =[{
    timeStamp : new Date().getTime(),
    text : 'Ate lunch1',
    user : {
      id: 1,
      name : 'Jyothis',
      comments :["mycoments","my comments2"]
          }

  },
   {
     timeStamp : new Date().getTime(),
     text : 'Ate lunch',
     user : {
       id: 2,
       name : 'Jyothis',
       comments :["mycoments","my comments2"]
     }

   }];
 this.state = {activity,singleActivity};
// this.setActivityState = this.setActivityState(this);
};
  setActivityState(e) {
    //alert(e.target.name + e.target.value);
    let field = e.target.name;
    let value = e.target.value;
    this.activity[field] = value;

    //alert(`Saving ${this.state.course.title}`);
    //this.props.dispatch(courseActions.createCourses(this.state.course));
  };
  onClickSave(e){
    alert(`Saving`);
    this.props.dispatch(activityActions.createActivity(this.state.activity));
  }


render(){
  return(
    <div>
    <div>Heading from  Activity Page</div>
    <Activities activities={this.state.activity} singleActivity={this.state.singleActivity} onChange={this.setActivityState}
    save={this.onClickSave}/>
    </div>
  );
}
};
function mapStateToProps(state,ownProps){

  return{
    activity: state.activity
  };

}

export default connect(mapStateToProps)(ActivitiesPage);
