// Standard
import React, {Component} from 'react'
// Link to stylesheet
import './runescape_api_data.css';
// Fetch Font awesomes required from libaray
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

class Runescape_Api_Data extends Component {
    constructor(props) {
        super(props);
        this.state = {  
                        // Player Name requested
                        player_name: "",
                        // Runescape GET URL
                        // API Response in JSON
                        api_response: "",
                        // Summary Data (Total Skill, Quests ETC)
                        summary_data: [],
                        // Activities Data
                        activites_data: [],
                        // Skills Data
                        skills_data: [],
                        // Var to configure if the collapseable containers are oen or shut
                        r_api_toggle: true
                    };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    // Create function to get API details
    get_runescape_details() {
        // Define the get URL
        var get_url = "http://localhost:9000/runescape?player_name=" + this.state.player_name ;
        const fetchData = async () => {
            // Fetch the url
            await fetch(get_url)
            .then( res => res.text() )
            // Convert response to text
            .then( res => {
                console.log(JSON.parse(res))
                if(JSON.parse(res).error === "NO_PROFILE") {
                    console.log('I am running')
                    // throw new Error(res.status);
                }
                else(
                    // .then( res => res.text() )
                    this.setState({ 
                        // Convert response to JSON
                        api_response: res,
                        // Set summary data state
                        summary_data: [
                                {id: 1, name:"Player Name", value: JSON.parse(res).name},
                                {id: 2, name:"Top Skill", value: JSON.parse(res).magic.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")},
                                {id: 3, name:"Total Skill", value: JSON.parse(res).totalskill.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")},
                                {id: 4, name:"Total XP", value: JSON.parse(res).totalxp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")},
                                {id: 5, name:"Quests Started", value: JSON.parse(res).questsstarted},
                                {id: 6, name:"Quests Completed", value: JSON.parse(res).questscomplete},
                                {id: 7, name:"Quested Not Started", value: JSON.parse(res).questsnotstarted},
                        ],
                        // Set activities state
                        activites_data: JSON.parse(res).activities,
                        // Set skills state
                        skills_data: JSON.parse(res).skillvalues,
                        // Skills Dicitionary
                        skills_dicitionary: [
                            {id:0, skill: 'Attack'},
                            {id:1, skill: 'Defence'},
                            {id:2, skill: 'Strength'},
                            {id:3, skill: 'Constitution'},
                            {id:4, skill: 'Ranged'},
                            {id:5, skill: 'Prayer'},
                            {id:6, skill: 'Magic'},
                            {id:7, skill: 'Cooking'},
                            {id:8, skill: 'Woodcutting'},
                            {id:9, skill: 'Fletching'},
                            {id:10, skill: 'Fishing'},
                            {id:11, skill: 'Firemaking'},
                            {id:12, skill: 'Crafting'},
                            {id:13, skill: 'Smithing'},
                            {id:14, skill: 'Mining'},
                            {id:15, skill: 'Herblore'},
                            {id:16, skill: 'Agility'},
                            {id:17, skill: 'Thieving'},
                            {id:18, skill: 'Slayer'},
                            {id:19, skill: 'Farming'},
                            {id:20, skill: 'Runecrafting'},
                            {id:21, skill: 'Hunter'},
                            {id:22, skill: 'Construction'},
                            {id:23, skill: 'Summoning'},
                            {id:24, skill: 'Dungeoneering'},
                            {id:25, skill: 'Divination'},
                            {id:26, skill: 'Invention'},
                            {id:27, skill: 'Archaeology'},
                            {id:28, skill: 'Necromancy'},
                        ],
                        // Var to configure if the collapseable containers are oen or shut
                        r_api_toggle: false
                    }) 
                )
            })
        }
        fetchData();
        
    }

    onChange = (event) => this.setState({ player_name: event.target.value });

    async handleSubmit(event){
        event.preventDefault();
        //this.setState({ value: event.target.value });
        console.log(this.state.player_name);
        this.get_runescape_details(this.state.player_name);

    }

    render(){
        // console.log(this.state.api_response);
        // console.log(this.state.skills_data);
        return(
            <div>
                <CollapseContainer 
                    text={"Player Name"} 
                    init_collapse={false}
                    header_style={{background:"var(--accent)",margin: "auto",width: "98%",border: "",fontWeight:"bold",borderBottom:"4px solid var(--primary)"}} 
                    body_style={{width:"98%", margin:"auto", border:"none"}} body={
                        <form onSubmit={this.handleSubmit} id="runescape-capture-player-name" className='runescape-player-name-form'>
                            <input type='text' placeholder='- Enter Player Name -' value={this.state.value} onChange={this.onChange} />
                            <input type="submit" value="Submit"/>
                        </form>
                    }
                />
                <CollapseContainer 
                    text={"Summary"} 
                    init_collapse={this.state.r_api_toggle}
                    header_style={{background:"var(--accent)",margin: "auto",width: "98%",border: "",fontWeight:"bold",borderBottom:"4px solid var(--primary)"}} 
                    body_style={{width:"98%", margin:"auto", border:"none", padding: "20px 0"}}
                    body={
                        <div className = 'runescape-summary-data-container'>
                            {this.state.summary_data.map((data, index )=> {
                                // Map/loop through each data point in summary data
                                return(
                                    // Return each data point as individual item
                                    <div className='runescape-summary-item' key={index}>
                                        <span>{data.name}:</span>
                                        <span>{data.value}</span>
                                    </div>
                                )
                            })}
                        </div>
                    }
                />
                <CollapseContainer 
                    text={"Activities"} 
                    init_collapse={this.state.r_api_toggle}  
                    header_style={{background:"var(--accent)",margin: "auto",width: "98%",border: "",fontWeight:"bold",borderBottom:"4px solid var(--primary)"}} 
                    body_style={{width:"98%", margin:"auto", border:"none", padding: "20px 0"}}
                    body={
                        <div className = 'runescape-activities-data-container'>
                            {this.state.activites_data.map((data, index) => {
                                return(
                                    // Return each data point as individual item
                                    <div className='runescape-activities-item' key={index}>
                                        <div>
                                            <div>
                                                <span>{data.text}<br/></span>
                                            </div>
                                            <div>
                                                <span>{data.details}</span>
                                            </div>
                                        </div>
                                        <span>{String(data.date).replace('-', ' ')}</span>
                                    </div>
                                )
                            })}
                        </div>
                    }
                />
                <CollapseContainer 
                    text={"Skills"} 
                    init_collapse={this.state.r_api_toggle} 
                    header_style={{background:"var(--accent)",margin: "auto",width: "98%",border: "", fontWeight:"bold",borderBottom:"4px solid var(--primary)"}} 
                    body_style={{width:"98%", margin:"auto", border:"none", padding: "20px 0"}}
                    body={
                            <div className = 'runescape-skills-data-container'>
                                {this.state.skills_data.map(data => {
                                // skill full name var
                                var skill_full_name = "";
                                // Loop through the skills dic
                                this.state.skills_dicitionary.map(dic_data => {
                                    // If the skills dic id matches the current skills_data id
                                    if(dic_data.id === data.id){
                                        // Set the skills full name var to be used later
                                        skill_full_name = dic_data.skill;
                                    }
                                })
                                // Build the URL for the related icon
                                var skill_icon = "/images/runescape_skills_icons/" + skill_full_name + "-icon.webp";
                                return(
                                    // Return each data point as individual item
                                    <div className='runescape-skills-item'>
                                        <div className='runescape-skills-item-header'>
                                            <span><img src={skill_icon} alt={String(skill_full_name)}/></span>
                                            <span>{String(skill_full_name)} </span>
                                        </div>
                                        <div className='runescape-skills-item-body'>
                                            <div>
                                                <span>Level :</span>
                                                <span>{data.level}</span>
                                            </div>
                                            <div>
                                                <span>XP :</span>
                                                <span>{String(data.xp).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </span>
                                            </div>
                                            <div>
                                                <span>Rank :</span>
                                                <span>{String(data.rank).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    }
                />
            </div>
        )
    }
}

class CollapseContainer extends React.Component {
    // Define var to decide when to show the container
    // If false = hide
    // If true = show
    state = {
        toggle: this.props.init_collapse,
    }

    // Function that changes the var above
    // If true = false
    // If false = true
    ToggleButton() {
        // Update the state to the logical oppersite of current
        this.setState(
            { toggle: !this.state.toggle }
        );
    }

    // ? Evaulate
    // : Or
    // State = Defined by developer
    // Props passed in on the class
    render() {
        // Define the class name
        return (
            <div>
                <div className="collapse-container-header runescape-apis" style={this.props.header_style}>
                    <button className='collapse-icon' onClick={() => this.ToggleButton()}>
                        {this.state.toggle === false ? <FaChevronUp/> : <FaChevronDown/>}
                    </button>
                    <p>{this.props.text}</p>
                </div>
                <div>
                    {this.state.toggle === false ? <div className='collapse-container-body runescape-apis' style={this.props.body_style}>
                    {this.props.body}</div>:<></>}
                </div>
            </div>
        )
    }
}

export default Runescape_Api_Data;
