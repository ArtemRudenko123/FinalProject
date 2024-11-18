import React from "react";
import './projectss.css'
import Item from "./item/item";
const Projects = () => {
    const projects = [
        {
            name:'Todo List',
            link:'https://artemrudenko123.github.io/ToDoList/'
        },
        {
            name:'Quiz',
            link:'https://artemrudenko123.github.io/Quiz1/'
        },
        {
            name:'Calculator',
            link:'https://artemrudenko123.github.io/Calculator/'
        },
       ]
    return(
        <div className="projects__wrapper">
            {
                projects.map((project, index) => (
                    <Item key={index} title = {project}/>
                ))
            }
        </div>
    )
}

export default Projects
