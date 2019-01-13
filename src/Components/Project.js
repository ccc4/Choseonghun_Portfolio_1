import React from 'react';
import PropTpye from 'prop-types';
import './Project.css';

import github_icon from './images/github_icon.png'
import android_icon from './images/android_icon.png'
import ios_icon from './images/ios_icon.png'

import Home_Yakssok from './images/Home_Yakssok.png';
import Home_Library_web from './images/Home_Library_web.png';
import Home_Samgukji from './images/Home_Samgukji.png';
import Home_Syuya from './images/Home_Syuya.png';


function Project({title, githubURI, skills, link}) {
    return(
        <div className="Project">
            <div className="Project__Column">
                {title === "Yakssok" && 
                    <a href={link}>
                        <img className="Project__Thumbnail" src={Home_Yakssok} title={title} alt={title}/>
                    </a>
                }
                {title === "Library_web" && 
                    <a href={link}>
                        <img className="Project__Thumbnail" src={Home_Library_web} title={title} alt={title}/>
                    </a>
                }
                {title === "About Samgukji" && 
                    <a href={link}>
                        <img className="Project__Thumbnail" src={Home_Samgukji} title={title} alt={title}/>
                    </a>
                }
                {title === "About Syuya" && 
                    <a href={link}>
                        <img className="Project__Thumbnail" src={Home_Syuya} title={title} alt={title}/>
                    </a>
                }
                
            </div>
            <div className="Project__Column">
                <div className="Project__Header">
                    <a href={githubURI}>
                        <h2>{title}</h2>
                    </a>                
                    <ul className="Project__Title__ul">
                        <li className="Project__Title__li">
                            <a href={githubURI}>
                                <img className="Project__Title__img" src={github_icon} title="github" alt="github"/>
                            </a>
                        </li>
                        {/* Yakssok -> 안드로이드, iOS 다운링크 걸어주기. iOS 는 다운불가.. */}
                        {title === "Yakssok" && 
                            <li className="Project__Title__li">
                                {/* <a href="#" onClick={() => {alert('준비중입니다.');}}> */}
                                <a href="https://github.com/ccc4/Android_Yakssok_ver.1">
                                    <img className="Project__Title__img" src={android_icon} title="android" alt="android"/>
                                </a>
                            </li>
                        }
                        {title === "Yakssok" && 
                            <li className="Project__Title__li">
                                {/* <a href="#" onClick={() => {alert('준비중입니다.');}}> */}
                                <a href="https://github.com/ahahahahyeong/Yakssok_IOS">
                                    <img className="Project__Title__img" src={ios_icon} title="ios" alt="ios"/>
                                </a>
                            </li>
                        }

                    </ul>
                </div>
                <div>
                    <ul className="Project__Skills__ul">
                        {skills.map((skill, index) => <ProjectSkills skill={skill} key={index} />)}
                    </ul>
                </div>
                <p><a href={link}><strong>- 체험해보기</strong></a></p>
            </div>
        </div>
    )
}

function ProjectSkills({skill}) {
    return(
        <li className="Project__Skills__li"><strong>#</strong>{skill}</li>
    )
}

Project.PropTpye = {
    title: PropTpye.string.isRequired, 
    githubURI: PropTpye.string.isRequired, 
    skills: PropTpye.array.isRequired, 
    link: PropTpye.string.isRequired
}

ProjectSkills.PropTpye = {
    skill: PropTpye.string.isRequired
}

export default Project;