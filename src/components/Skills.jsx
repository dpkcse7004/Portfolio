import React from 'react'
import './Skills.css'
const Skills = () => {
    const store = "Click here"
    return (
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
                            <span style={{ width: "90%" }}></span>
                        </div>
                    </div>

                    <div className="skill-item">
                        <div className="items-info">
                            <p>CSS</p>
                            <p>70%</p>
                        </div>
                        <div className="progress-bar" data-percent='90%'>
                            <span style={{ width: "70%" }}></span>
                        </div>
                    </div>
                    <div className="skill-item">
                        <div className="items-info">
                            <p>Javascript</p>
                            <p>85%</p>
                        </div>
                        <div className="progress-bar" data-percent='90%'>
                            <span style={{ width: "85%" }}></span>
                        </div>
                    </div>
                    <div className="skill-item">
                        <div className="items-info">
                            <p>Java</p>
                            <p>80%</p>
                        </div>
                        <div className="progress-bar" data-percent='90%'>
                            <span style={{ width: "90%" }}></span>
                        </div>
                    </div>

                    <div className="skill-item">
                        <div className="items-info">
                            <p>Python</p>
                            <p>70%</p>
                        </div>
                        <div className="progress-bar" data-percent='90%'>
                            <span style={{ width: "70%" }}></span>
                        </div>
                    </div>
                    <div className="skill-item">
                        <div className="items-info">
                            <p>SQL</p>
                            <p>60%</p>
                        </div>
                        <div className="progress-bar" data-percent='90%'>
                            <span style={{ width: "60%" }}></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-title center resource">
                <h2>Resources</h2>
            </div>
            <div className="resource-box">
                <div className="r-box">
                    <div className="skill-icon-box">
                        <img src="./image/html.png" alt="" className="skill-icon" />
                    </div>
                    <div className="skill-icon-btn">
                        <button className="icon-btn">{store}</button>
                    </div>
                </div>
                <div className="r-box">
                    <div className="skill-icon-box">
                        <img src="./image/css.png" alt="" className="skill-icon" />
                    </div>
                    <div className="skill-icon-btn">
                        <button className="icon-btn">{store}</button>
                    </div>
                </div>
                <div className="r-box">
                    <div className="skill-icon-box">
                        <img src="./image/javascript.png" alt="" className="skill-icon" />
                    </div>
                    <div className="skill-icon-btn">
                        <button className="icon-btn">{store}</button>
                    </div>
                </div>
                <div className="r-box">
                    <div className="skill-icon-box">
                        <img src="./image/react.png" alt="" className="skill-icon" />
                    </div>
                    <div className="skill-icon-btn">
                        <button className="icon-btn">{store}</button>
                    </div>
                </div>
                <div className="r-box">
                    <div className="skill-icon-box">
                        <img src="./image/c.png" alt="" className="skill-icon" />
                    </div>
                    <div className="skill-icon-btn">
                        <button className="icon-btn">{store}</button>
                    </div>
                </div>
                <div className="r-box">
                    <div className="skill-icon-box">
                        <img src="./image/java.png" alt="" className="skill-icon" />
                    </div>
                    <div className="skill-icon-btn">
                        <button className="icon-btn">{store}</button>
                    </div>
                </div>
                <div className="r-box">
                    <div className="skill-icon-box">
                        <img src="./image/python.png" alt="" className="skill-icon" />
                    </div>
                    <div className="skill-icon-btn">
                        <button className="icon-btn">{store}</button>
                    </div>
                </div>
                <div className="r-box">
                    <div className="skill-icon-box">
                        <img src="./image/sql.png" alt="" className="skill-icon" />
                    </div>
                    <div className="skill-icon-btn">
                        <button className="icon-btn">{store}</button>
                    </div>
                </div>
                <div className="r-box">
                    <div className="skill-icon-box">
                        <img src="./image/github.png" alt="" className="skill-icon" />
                    </div>
                    <div className="skill-icon-btn">
                        <button className="icon-btn">{store}</button>
                    </div>
                </div>                          
            </div>
        </div>
    )
}

export default Skills