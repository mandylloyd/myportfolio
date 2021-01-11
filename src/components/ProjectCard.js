import React from 'react';
import './ProjectCard.css'

const ProjectCard = (props) => {
    return (
        <div>
            <div className="card">
                <div className="image">
                    <div className="ui fade reveal">
                        <div className="visible content">
                            <img alt="project screenshot" className="ui large image" src={props.img1} />
                        </div>
                        <div className="hidden content">
                        <img alt="project screenshot" className="ui large image" src={props.img2} />
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="header">
                        {
                        props.title
                    }</div>
                    <div className="meta">
                    {/* <a href="url">link text</a> */}
                        <a href={
                            props.links
                        }>{props.text}</a>
                    </div>
                    <div className="description">
                        {
                        props.description
                    } </div>
                </div>
                <div className="extra content">
                    <span className="right floated">
                        {
                        props.tools
                    }
                        {
                        props.date
                    } </span>
                </div>
            </div>
        </div>
    )
};

export default ProjectCard;
