// Standard
import React from 'react'
// Link to stylesheet
import './task_tracker.css';
// Fetch Font awesomes required from libaray
import { FaCheck } from 'react-icons/fa';

// Set State
const tasks = [
    {
        name:"CHAT GPT",
        icon: <FaCheck />,
        icon_styling: "success",
        status: "done", 
        comments: "Subscribe to CHATGPT for use in the project, to generate images, text and to recommend code enhancements."
    },
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
    },
    {
        name:"NAVBAR",
        icon: <FaCheck />,
        icon_styling: "fail",
        status: "outstanding", 
        comments: "Re-write navbar code to use map function instead of for loop to render html elements and prevent warning messages on build."
    },
    {
        name:"AUTOMATED TESTING",
        icon: <FaCheck />,
        icon_styling: "fail",
        status: "outstanding", 
        comments: "Explore and implment automated testing within the react js framework."
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