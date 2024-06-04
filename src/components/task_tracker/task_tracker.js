// Standard
import React from 'react'
// Link to stylesheet
import './task_tracker.css';
// Fetch Font awesomes required from libaray
import { FaCheck } from 'react-icons/fa';

// Set State
const tasks = [
    {
        name:"AUTHENTICATION",
        icon: <FaCheck />,
        icon_styling: "fail",
        status: "outstanding", 
        comments: "Increased security and authentication needs to be added to the login function. JWT, storing in MongoDB, Auth Tokens."
    },
    {
        name:"GITHUB PIPELINE",
        icon: <FaCheck />,
        icon_styling: "fail",
        status: "outstanding", 
        comments: "A GitHub pipeline installed into the AWS EC2 bucket."
    },
    {
        name:".ENV FILE",
        icon: <FaCheck />,
        icon_styling: "fail",
        status: "outstanding", 
        comments: "Environment file, used to enable API's in the AWS Sever, and support localhosting."
    },
    {
        name:"REACT JS BOOK",
        icon: <FaCheck />,
        icon_styling: "fail",
        status: "outstanding", 
        comments: "Buy book about react js."
    },
    {
        name:"AWS JS BOOK",
        icon: <FaCheck />,
        icon_styling: "fail",
        status: "outstanding", 
        comments: "Buy book about AWS Server Hosting."
    }
]

function TASK_TRACKER() {
    return(
        <>
            {tasks.map((task, index) =>
                <div className={'task-container ' + task.icon_styling}>
                    <div className='task-name' >{task.name}</div>
                    <div className='task-main-container'>
                        <div className={'task-status'}>{task.status}</div>
                        <div className='task-comment' >{task.comments}</div>
                    </div> 
                </div>
            )}
        </>
    )
}



export default TASK_TRACKER;