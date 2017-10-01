import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import * as courseActions from '../../actions/createCourse';
class CoursesPage extends React.Component{
  constructor(props,context){
        super(props,context);
        this.state={
          course : {title: ""}
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event){
        const course = this.state.course;
        course.title =event.target.value;
        this.setState({course: course});
    }
    onClickSave(){
     // console.log(">>>>>"+{this.state.course.title});
       // alert(`Saving ${this.state.course.title}`);
      this.props.dispatch(courseActions.createCourses(this.state.course));
    }
    courseRow(course,index){
      return <div key="index"> {course.title}</div>;
    }
    render(){
        return(
            <div>
                <h1>Courses</h1>
              {this.props.course.map(this.courseRow())}
                <h2>Add Course</h2>
                <input type="text"
                       onChange={this.onTitleChange}
                       value={this.state.course.title}
                  />
                <input  type="submit"
                        value="save"
                        onClick={this.onClickSave}

                />


            </div>

        );
    }

}
CoursesPage.propTypes={
  dispatch: PropTypes.func.required,
  course :PropTypes.array.required
};
function mapStateToProps(state,ownProps){
  return{
    courses:state.courses
  };

}

export default connect(mapStateToProps)(CoursesPage);

