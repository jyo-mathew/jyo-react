import React from 'react';

const Activities =(props) => {

  let localActivities= props.activities;
  debugger;
  return(

    <div> Activities

      {
        localActivities.map((activity) =>{
          console.log("hi TimeStamp"+activity.timeStamp);
       return (
         <div>
         <div>{activity.user.name}</div>
        <div>{activity.timeStamp}</div>
         </div>
       )
      }
        )

      }
      <input type="text" value={props.singleActivity.name} onChange={props.onChange}/>
      <div></div>
      <input type="submit" value="add Activity" className="btn-primary" onClick={props.save}/>
    </div>

  );

};

export default Activities;
