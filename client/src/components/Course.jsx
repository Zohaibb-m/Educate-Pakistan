import React, {useState,useEffect} from "react";
import Axios from 'axios'
import {BrowserRouter as Router, Route, Link,  useNavigate, useParams } from 'react-router-dom'

function Course(props){
    let {courseID}=useParams()
    let [state,setState]=useState({
        course:""
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
    return (
            <div>
                <h1>{state.course.courseName}</h1>          
            </div>
    );
}

export default Course;