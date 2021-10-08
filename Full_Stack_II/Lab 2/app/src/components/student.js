import React from "react";
import Courses from "./courses";

const coursesLoop = (enrolled) => {
    let courses = []
    for(let e of enrolled.split(',')) {
        courses.push(<Courses enrolled={e}/>);
    }
    return courses;
}

const Student = props => {
    return ( <>
        <p> Student <b>{props.name}</b> with student <b>{props.number}</b> </p>
        {coursesLoop(props.enrolled)}
        </>
    );
}
 
export default Student;