// Create Skill component here to display your skills
// In this component there should be a list with each listitem as your skill.

import {Component} from "react";

export class Skill extends Component{

    constructor(){
        super();
        this.skill=["HTML","JAVA","JS","DBMS","CSS"];
    }
    render(){
        const result=this.skill.map((eachSkill,index)=><li key={index}><button>{eachSkill}</button></li>);
        return(
            <div className="skill">
             <ul>
                {result}
            </ul>
            </div>
        );
    }
}