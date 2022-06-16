import React, {useState,useEffect} from "react";
import Axios from 'axios'
import {BrowserRouter as Router, Route, Link,  useNavigate, useParams } from 'react-router-dom'

function Course(props){
    let {courseID}=useParams()
    let [state,setState]=useState({
        course:false
    })
    useEffect(()=>{async function getData(){
        await Axios.post("/data/getCourseData",{
            id:courseID
        })
            .then((response)=>{
                setState({
                    course:response.data
                })
            })
    }
    getData() 
}, [])
console.log("../images/"+String(state.course.courseImage),state.course,"H")
    if(!state.course)return(
        <div>
            Loading...
        </div>
    )
    else 
        return (
            <div>
                <img src={require("../images/"+String(state.course.courseImage))} />
                <h1>Course Name: {state.course.courseName}</h1>
                <p>Description: {state.course.courseDescrition} </p>
            </div>
    );
}

export default Course;