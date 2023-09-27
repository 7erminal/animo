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
                        <h1 className="mb-10 features-title" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="400">We would like to work with you</h1>
                        <p data-aos="zoom-in" data-aos-delay="200" data-aos-duration="600">Surely we can help you with a solution.</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-3 course-left">
                    <div className="single-course">
                        <FontAwesomeIcon data-aos="fade-right" data-aos-delay="500" data-aos-duration="400" icon={faRocket} size="lg" className='f-icon' style={{color: '#85c1e9'}} />
                        <a href="#"><h4 className='single-course-header' data-aos="fade-right" data-aos-delay="200" data-aos-duration="400">Software Development</h4></a>
                        <p data-aos="fade-right" data-aos-delay="400" data-aos-duration="700">
                            Our team of developers are dedicated to providing the best software solution for your needs while using latest and effective technologies. We are professional and thrive to provide effective scalable yet simple applications to make our clients life easier.
                        </p>
                    </div>
                    <div className="single-course">
                        <FontAwesomeIcon data-aos="fade-right" data-aos-delay="600" data-aos-duration="400" icon={faGear} size="lg" className='f-icon' style={{color: '#85c1e9'}} />
                        <a href="#"><h4 className='single-course-header' data-aos="fade-right" data-aos-delay="200" data-aos-duration="600">IT Consultancy</h4></a>
                        <p data-aos="fade-right" data-aos-delay="350" data-aos-duration="800">
                            We provide expert solutions and advice to businesses and organizations on how to improve their IT services, including system architecture, data processing optimization, infrastructure and data security.
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 course-middle">
                    <img data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1500" className="img-fluid mx-auto d-block" src="/images/stacks.jpeg" alt="" />
                </div>
                <div className="col-lg-3 course-right">
                    <div className="single-course">
                        <FontAwesomeIcon data-aos="fade-left" data-aos-delay="500" data-aos-duration="400" icon={faBuilding} size="lg" className='f-icon' style={{color: '#85c1e9'}} />
                        <a href="#"><h4 className='single-course-header' data-aos="fade-left" data-aos-delay="200" data-aos-duration="400">UI/UX</h4></a>
                        <p data-aos="fade-left" data-aos-delay="400" data-aos-duration="700">
                            Businesses like to keep their customers engaged through the look and feel of their application. Our UI/UX team is specialized in this field and is dedicated to providing interfaces that are fun and also easy to use.
                        </p>
                    </div>
                    <div className="single-course">
                        <FontAwesomeIcon data-aos="fade-left" data-aos-delay="600" data-aos-duration="400" icon={faPhoneVolume} size="lg" className='f-icon' style={{color: '#85c1e9'}} />
                        <a href="#"><h4 className='single-course-header' data-aos="fade-left" data-aos-delay="200" data-aos-duration="600">Performance Testing</h4></a>
                        <p data-aos="fade-left" data-aos-delay="350" data-aos-duration="800">
                            We provide resources for load testing of applications as well as analytics. Trust our team of experts to point you towards solutions that would boost your applications performance.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Features