import React, { useState, useEffect, useRef, SetStateAction } from 'react'
import DateDisplay from '../components/DateDisplay'
import LandingSection from '../components/landing_section/LandingSection'
import Features from '../components/features/Features';
import About from '../components/about/About';
import WorkedWith from '../components/worked_with/WorkedWith';
import Footer from '../components/footer/Footer';
import Header from '../components/nav/Header';
import OurTeam from '../components/our_team/OurTeam';

const HomePage: React.FC = () => {
    const [scrollPosition, setScrollPosition] = useState<SetStateAction<number>>();
    const scrollView = useRef<null | HTMLDivElement>(null)
    const scrollView2 = useRef<null | HTMLDivElement>(null)
    const about  = useRef<null | HTMLDivElement>(null)
    const features  = useRef<null | HTMLDivElement>(null)
    const workedWith  = useRef<null | HTMLDivElement>(null)
    const ourTeam  = useRef<null | HTMLDivElement>(null)

    const handleScroll = (e: any) => {
        console.log("Scroll called")
        const div_ = scrollView2.current
        const position = div_?.offsetTop;
        setScrollPosition(position);

        console.log("Scroll position is "+scrollPosition)
        console.log(scrollView.current?.scrollTop)
    };

    useEffect(() => {
        

        const div_ = scrollView2.current
        console.log("Adding event listener")
        div_?.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            div_?.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(()=>{
        scrollToView("")
    })

    const scrollToView = (type_: string) => {
        if(type_=='about'){
            about.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
        } else if(type_=='features'){
            features.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
        } else if(type_=='workedWith'){
            workedWith.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
        } else if(type_=='ourTeam'){
            ourTeam.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
        }
    }

    return (
        <div ref={scrollView} onScroll={handleScroll} style={{ position: 'relative', height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div ref={scrollView2}></div>
            <Header scrollToView_={scrollToView} />
            <LandingSection />
            <div ref={about}></div>
            <About />
            <div ref={features}></div>
            <Features />
            <div ref={workedWith}></div>
            <WorkedWith />
            <div ref={ourTeam}></div>
            <OurTeam />
            <div ref={workedWith}></div>
            <WorkedWith />
            <Footer scrollToView_={scrollToView} />
        </div>
    )
}

export default HomePage
