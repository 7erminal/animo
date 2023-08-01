import React from 'react'
import DateDisplay from '../components/DateDisplay'
import LandingSection from '../components/landing_section/LandingSection'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Features from '../components/features/Features';
import About from '../components/about/About';
import WorkedWith from '../components/worked_with/WorkedWith';
import Footer from '../components/footer/Footer';
import Header from '../components/nav/Header';

const HomePage: React.FC = () => {
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Header />
            <LandingSection />
            <About />
            <Features />
            <WorkedWith />
            <Footer />
        </div>
    )
}

export default HomePage
