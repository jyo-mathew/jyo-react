import React,{state,PropTypes} from 'react';
import {connect} from 'react-redux';
//import PropTypes from 'prop-types';
import * as courseActions from '../../actions/courseAction';
class CoursesPage extends React.Component{
  constructor(props,context){
       debugger;
        super(props,context);
        this.state={
          course : {id:1,title: ""}
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event){

        const course = this.state.course;
        course.title =event.target.value;
        //this.setState({course: course});
    }
    onClickSave(e){

       //alert(`Saving ${this.state.course.title}`);
      this.props.dispatch(courseActions.createCourses(this.state.course));
    }
   courseRow(course,index){
      return <div key="index"> {course.title}</div>;
    }
    deleteCourse(){
    }
    render(){
        return(
            <div>
                <h1>Courses</h1>
              {this.props.courses.map(this.courseRow)}
              {this.state.course.title};
                <h2>Add Course</h2>
                <input type="text"
                       onChange={this.onTitleChange}

                  />
                <input  type="submit"
                        value="save"
                        onClick={this.onClickSave}

                />
              <input type="text"  placeholder="enter key to delete" onChange={this.deleteCourse()} />


            </div>

        );
    }

}
/*CoursesPage.propTypes={

  course :PropTypes.array.required
};*/
function mapStateToProps(state,ownProps){
  debugger;
  return{
    courses: state.courses
  };

}
//const connected = connect(mapStateToProps);
//export default connected(CoursesPage);

export default connect(mapStateToProps)(CoursesPage);

