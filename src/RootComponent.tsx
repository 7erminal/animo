import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import { ROUTES } from './resources/routes-constants'
// import './styles/main.sass'
import './styles/app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'atropos/css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RootComponent: React.FC = () => {
    
    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} />
            </Routes>
        </Router>
    )
}

export default RootComponent
