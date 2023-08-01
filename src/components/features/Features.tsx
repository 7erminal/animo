import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

const Features: React.FC = () => {
    return <section className='features'>
        <div className="container features-container">
            <div className="row d-flex justify-content-center">
                <div className="menu-content pb-60 col-lg-10">
                    <div className="title-container text-center">
                        <h1 className="mb-10 features-title">We would like to work with you</h1>
                        <p>Surely we can help you with a solution.</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-3 course-left">
                    <div className="single-course">
                        <FontAwesomeIcon icon={faRocket} size="lg" className='f-icon' style={{color: '#85c1e9'}} />
                        <a href="#"><h4 className='single-course-header'>High Performance</h4></a>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisic ing elit, seddo eiusmod tempor incid.idunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="single-course">
                        <FontAwesomeIcon icon={faGear} size="lg" className='f-icon' style={{color: '#85c1e9'}} />
                        <a href="#"><h4 className='single-course-header'>High Performance</h4></a>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisic ing elit, seddo eiusmod tempor incid.idunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 course-middle">
                    <img className="img-fluid mx-auto d-block" src="/images/Full-Stack-Developer.jpeg" alt="" />
                </div>
                <div className="col-lg-3 course-right">
                    <div className="single-course">
                        <FontAwesomeIcon icon={faBuilding} size="lg" className='f-icon' style={{color: '#85c1e9'}} />
                        <a href="#"><h4 className='single-course-header'>High Performance</h4></a>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisic ing elit, seddo eiusmod tempor incid.idunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="single-course">
                        <FontAwesomeIcon icon={faPhoneVolume} size="lg" className='f-icon' style={{color: '#85c1e9'}} />
                        <a href="#"><h4 className='single-course-header'>High Performance</h4></a>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisic ing elit, seddo eiusmod tempor incid.idunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Features