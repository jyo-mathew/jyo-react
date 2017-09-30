import React from 'react';
class CoursesPage extends React.Component{


    constructor(props,contxt){
        super(props,context);
        this.state={
          course : {title: null}
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
        alert('${this.state.course}');
    }
    render(){
        return(
            <div>
                <h1>Courses</h1>
                <h2>Add Course</h2>
                <input type="text"
                       onChange={this.onTitleChange}
                       value="{this.state.course.title}"
                  />
                <input  type="submit"
                        value="save"
                        onClick={this.onClickSave}

                />



            </div>

        );
    }

}
export default CoursesPage;

