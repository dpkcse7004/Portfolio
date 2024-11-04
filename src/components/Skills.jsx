import React from 'react'
import './Skills.css'
const Skills = () => {
  return (
    <div>
        <div className="skill-section">
            <div className="inner-container">

            <div className="section-title center">
                <p>Why Choose Me</p>
                <h2>My Experience Area</h2>
            </div>
            <div className="skill-items">

                <div className="skill-item">
                    <div className="items-info">
                        <p>HTML</p>
                        <p>90%</p>
                    </div>
                    <div className="progress-bar" data-percent='90%'>
                        <span style={{width: "90%"}}></span>
                    </div>
                </div>

                <div className="skill-item">
                    <div className="items-info">
                        <p>CSS</p>
                        <p>70%</p>
                    </div>
                    <div className="progress-bar" data-percent='90%'>
                        <span style={{width: "70%"}}></span>
                    </div>
                </div>
                <div className="skill-item">
                    <div className="items-info">
                        <p>3.Javascript</p>
                        <p>85%</p>
                    </div>
                    <div className="progress-bar" data-percent='90%'>
                        <span style={{width: "85%"}}></span>
                    </div>
                </div>
                <div className="skill-item">
                    <div className="items-info">
                        <p>4.Java</p>
                        <p>80%</p>
                    </div>
                    <div className="progress-bar" data-percent='90%'> 
                        <span style={{width: "90%"}}></span>
                    </div>
                </div>
                <div className="skill-item">
                    <div className="items-info">
                        <p>Python</p>
                        <p>70%</p>
                    </div>
                    <div className="progress-bar" data-percent='90%'>
                        <span style={{width: "70%"}}></span>
                    </div>
                </div>
                <div className="skill-item">
                    <div className="items-info">
                        <p>SQL</p>
                        <p>60%</p>
                    </div>
                    <div className="progress-bar" data-percent='90%'>
                        <span style={{width: "60%"}}></span>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    
    </div>
  )
}

export default Skills