import React from 'react'
import './Details.css'
const Details = () => {
    return (
        <>
            <div className='detail-container'>

                <div className='heading'>
                    <center><h1>About me</h1></center>
                </div>
                <div className='introduction'>
                    <p> I’m a B.Tech graduate in Computer Science with a passion for creating efficient solutions and visually engaging web experiences. As a fresher, I bring strong problem-solving skills and a solid foundation in frontend web development.</p>

                    <div className="container-fluid">
                        <div className="row border-0">
                            <div className="col-3">Birthday:</div>
                            <div className="col-9">6 Sepetmber,2004</div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row border-0">
                            <div className="col-3">Age:</div>
                            <div className="col-9">20</div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row border-0">
                            <div className="col-3">City:</div>
                            <div className="col-9">Gaya,Bihar</div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row border-0">
                            <div className="col-3">Profile:</div>
                            <div className="col-9">Web Developer</div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row border-0">
                            <div className="col-3">Job Role:</div>
                            <div className="col-9">MERN Stack Development</div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row border-0">
                            <div className="col-3">Education:</div>
                            <div className="col-9">Bachelor of Technology</div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row border-0">
                            <div className="col-3">Interest:</div>
                            <div className="col-9">Travel,Photography,Cricket</div>
                        </div>
                    </div >
                </div >
            </div>
        </>
    )
}
export default Details