import React from 'react'
// Link to stylesheet
import './Home.css';

class SkillsBanner extends React.Component {
    render() {
        return(
            <>
                <div className='intro-card react'>
                    <div className='intro-sub-card'>
                        <div className='top-container'>
                            <div>
                                <h3>{this.props.main_header} <br/><span style={{fontWeight:"lighter"}}> {this.props.sub_header}</span></h3>
                            </div>
                            <div>
                                <img src={this.props.gif} alt="Home Page Logo"></img>
                            </div>
                        </div>
                        <div style={{display:"flex"}}>
                            <p>{this.props.blurb}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

function Home(){
    // Define object to store card information
    var intro_cards = [
        {
            main_header: "REACTIVE ",
            sub_header: "REACT.JS",
            blurb: "React is a JavaScript library for building user interfaces. It is commonly used to create single-page applications and allows developers to create reusable UI components1. Additionally, React uses a declarative syntax to describe how the UI should look and behave based on changes to the application state.",
            gif: "/images/external_logos/react_gif.gif",
        },
        {
            main_header: "HYPERTEXT ",
            sub_header: "HTML5",
            blurb: "HTML, or Hypertext Markup Language, is a markup language for the web that defines the structure of web pages. It is one of the most basic building blocks of every website, making it crucial to learn if you want to pursue a career in web development",
            gif: "/images/external_logos/html_gif.gif",
        },
        {
            main_header: "STYLISH ",
            sub_header: "CSS",
            blurb: "CSS, or Cascading Style Sheets, is a markup language used to style and format HTML elements on web pages. It defines how elements should appear, including properties like colors, fonts, spacing, and layout",
            gif: "/images/external_logos/css_gif.gif",
        },
        {
            main_header: "GENIUS ",
            sub_header: "JAVASCRIPT",
            blurb: "JavaScript (JS) is an object-oriented programming language that adheres to ECMA Script Standards and is commonly used to design the behavior of web pages",
            gif: "/images/external_logos/js_gif.gif",
        },
        {
            main_header: "ROOM TO GROW WITH ",
            sub_header: "MONGODB",
            blurb: "MongoDB is a popular open-source NoSQL document database that stores data in flexible JSON-like documents rather than tables with a fixed schema like SQL databases. It makes it easy to store and query large volumes of unstructured or semi-structured data",
            gif: "/images/external_logos/mongodb_png.png",
        },
        {
            main_header: "CODE WITH ",
            sub_header: "NODE.JS",
            blurb: "MongoDB is a popular open-source NoSQL document database that stores data in flexible JSON-like documents rather than tables with a fixed schema like SQL databases. It makes it easy to store and query large volumes of unstructured or semi-structured data",
            gif: "/images/external_logos/node_png.png",
        },
        {
            main_header: "STORED WITH ",
            sub_header: "MySQL",
            blurb: "MySQL is the world’s most popular open-source relational database management system (RDBMS). It enables users to store, manage, and retrieve structured data efficiently, supporting various applications from small-scale projects to large-scale websites and enterprise-level solutions",
            gif: "/images/external_logos/mysql_png.png",
        },
        {
            main_header: "SERVED WITH",
            sub_header: "AMAZON WEB SERVICES",
            blurb: "Amazon Web Services (AWS) is the world’s most comprehensive and broadly adopted cloud, offering over 200 fully featured services from data centers globally. It provides scalable and cost-effective cloud computing solutions, allowing individuals, companies, and governments to access on-demand operations like compute power, database storage, content delivery, and more",
            gif: "/images/external_logos/aws_png.png",
        },
        {
            main_header: "COMPILED WITH ",
            sub_header: "COPILOT (AI)",
            blurb: "Microsoft Copilot is a conversational chat interface that lets you search for specific information, generate text such as emails and summaries, and create images based on text prompts you write. It can even write code in widely used computer languages like JavaScript, C, and Python",
            gif: "/images/external_logos/copilot_png.png",
        },
        {
            main_header: "COMPUTED",
            sub_header: "CHAT GPT (AI)",
            blurb: "ChatGPT is an AI language model developed by OpenAI, designed to understand and generate human-like text based on the input it receives. It can assist with a wide range of tasks, from answering questions and providing explanations to generating creative content and engaging in conversations.",
            gif: "/images/external_logos/chatgpt_png.png",
        },
        {
            main_header: "COMMITED WITH ",
            sub_header: "GITHUB",
            blurb: "GitHub is a cloud-based platform where you can store, share, and collaborate on code with others. It allows you to showcase your work, track changes to your code, and receive feedback from peers",
            gif: "/images/external_logos/github_png.png",
        },
        {
            main_header: "HOSTED ON ",
            sub_header: "UNBUNTU",
            blurb: "Ubuntu is a popular open-source operating system based on the Linux kernel, known for its user-friendly interface and strong community support. It is widely used for both personal computers and servers, offering robust security features and a vast repository of software applications.",
            gif: "/images/external_logos/unbuntu_png.png",
        },
    ]

    return(
        <div className="main-page-container">
            <div className='header home'>
                <img src='/images/chat_gpt_generated/blacksmiths_home_page_webp.webp'></img>
                <h1>WELCOME TO THE FORGE</h1>
            </div>
            {
                intro_cards.map((data, index) => {
                    return(
                        // Return each data point as individual item
                        <SkillsBanner
                            main_header={data.main_header}
                            sub_header={data.sub_header}
                            blurb={data.blurb}
                            gif={data.gif}
                            card_styling={data.card_styling}
                            key={index}
                        />
                    )
                })
            }
        </div>
    )
}

export default Home;