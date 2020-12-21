import React from 'react';
import ProjectCard from './ProjectCard';

const PortfolioWork = () => {
    return (
        <div>
            <div className="projectCards">
                <div className="ui link cards">
                    <ProjectCard img1="../images/fitness1.png" img2="../images/fitness2.png" title="Fitness Tracker" links="https://github.com/mandylloyd/Fitness-Tracker" description="This fitness tracker app allows users to store resistance or cardio exercises, view workout statistics by the week or by individual workout." tools="MongoDB/Heroku"/>
                    <ProjectCard img1="../images/yippee1.png" img2="../images/yippee2.png" title="YipPEE" links="https://github.com/mandylloyd/project-1" description="An interactive site that will allow the user to find a restaurant that they are interested in visiting and finding out the rating of their restroom facilities as it relates to ADA and gender-neutral standards of accessibility, as well as clenliness." tools="HTML/CSS/JS/Materialize"/>
                    <ProjectCard img1="../images/teamgen1.png" img2="../images/teamgen2.png" title="Team Generator" links="https://github.com/mandylloyd/TeamGenerator" description="This is a CLA that gets information from user through prompts and generators a HTML file of the team roster." tools="Node"/>
                    <ProjectCard img1="../images/budget1.png" img2="../images/budget2.png" title="Offline Budget Tracker" links="https://github.com/mandylloyd/budget-tracker" description="This is a basic budget tracker that allows user to track income and spending. It updates remaining balance when a new transaction is made. It is a fully functional PWA set up with a web manifest and service worker." tools=""/>
                    <ProjectCard img1="../images/dayplanner1.png" img2="../images/dayplanner2.png" title="Day Planner" links="https://github.com/mandylloyd/day-planner" description="A day planner that uses color coding for events that haven't happened yet or have already happened." tools="JS/CSS/Bootstrap"/>
                    <ProjectCard img1="../images/empdir1.png" img2="../images/empdir2.png" title="Employee Directory" links="https://github.com/mandylloyd/EmployeeDirectory" description="A React application that allows a user to sort through an employee database." tools="React/JS/CSS/Semantic"/>
                    <ProjectCard img1="../images/empsys1.png" img2="../images/empsys2.png" title="Employee Management System" links="https://github.com/mandylloyd/EmployeeManagementSystem" description="This application uses command line interface uses inquirer prompts to help the user view, add, or update. It utilizes an sql database." tools=""/>
                    <ProjectCard img1="../images/notetaker1.png" img2="../images/notetaker2.png" title="Note Taker" links="https://github.com/mandylloyd/NoteTaker" description="This is a note taking application to easily write and save important notes, and delete them to help the user stay organized." tools="Node/Express"/>
                    <ProjectCard img1="../images/quiz1.png" img2="../images/quiz2.png" title="Coding Quiz" links="https://github.com/mandylloyd/code-quiz" description="This quiz begins with 30 seconds when user clicks start and wrong answers reduce time left." tools="JS/HTML/CSS"/>
                    <ProjectCard img1="../images/readmegen1.png" img2="../images/readmegen2.png" title="ReadMe Generator" links="https://github.com/mandylloyd/ReadMeGenerator" description=" This application generates a README.md file through a series of command-line prompts that asks the user information about their project." tools=""/>
                    <ProjectCard img1="../images/weatherdash1.png" img2="../images/weatherdash2.png" title="Weather Dashboard" links="https://github.com/mandylloyd/weather-dashboard" description="This app uses Openweather API. User can search a zip code and read a 5 day forecast about humidity, wind speed, temperature, and the dates." tools="JS/HTML/CSS/Bootstrap"/>
                </div>
            </div>
        </div>
    )
};

export default PortfolioWork;
