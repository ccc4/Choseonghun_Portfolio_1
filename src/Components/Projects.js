import React, {Component} from 'react';
import './Projects.css';

import Project from './Project'

class Projects extends Component {

    state = {}

    componentDidMount() {
        this._getProjects();
    }

    _getProjects = async () => {
        const projects = await [
            {
                title: "Yakssok", 
                githubURI: "https://github.com/ccc4/Tjoeun_Project_Yakssok_Using_Spring", 
                skills: ["SPRING", "MyBatis", "Android", "iOS"], 
                link: "http://124.49.194.124:8181/Yakssok/"
            }, 
            {
                title: "Library_web", 
                githubURI: "https://github.com/ccc4/Tjoeun_Project_3_Library_web", 
                skills: ["MVC2", "JSP"], 
                link: "http://124.49.194.124:8181/Library_web/"
            }, 
            {
                title: "About Samgukji", 
                githubURI: "https://github.com/ccc4/JSP_mk2_jsp_CHO-s-samgukji", 
                skills: ["MVC2", "JSP"], 
                link: "http://124.49.194.124:8181/mk2/"
            }, 
            {
                title: "About Syuya", 
                githubURI: "https://github.com/ccc4/PHP_Web_Simple", 
                skills: ["PHP"], 
                link: "http://124.49.194.124:8182/php2/"
            }
        ]
        this.setState({
            projects
        })
    }


    _renderProjects = () => {
        const projects = this.state.projects.map(project => {
            return(
                <Project
                    title={project.title}
                    githubURI={project.githubURI}
                    skills={project.skills}
                    link={project.link}
                />
            )
        })
        return projects;
    }



    render() {
        const {projects} = this.state
        return(
            <div className={projects ? "Projects" : "Projects--loading"}>
                {projects ? this._renderProjects() : "Loading...."}
            </div>
        )
    }
}

export default Projects;