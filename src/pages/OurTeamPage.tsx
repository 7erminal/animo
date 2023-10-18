import React, { useRef } from "react";
import Header from "../components/nav/Header";
import ProfilePane from "../components/our_team/components/ProfilePane";
import Footer from "../components/footer/Footer";

const OurTeamPage: React.FC = () => {
    const about  = useRef<null | HTMLDivElement>(null)
    const features  = useRef<null | HTMLDivElement>(null)
    const workedWith  = useRef<null | HTMLDivElement>(null)
    const ourTeam  = useRef<null | HTMLDivElement>(null)

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

    const colors = [
        '#00abfb',
        '#fb4c00',
        '#00cd89',
        '#00abda',
        '#002bda',
        '#7102e7',
        '#f70a88',
        '#F4F6F6',
        '#FFFFFF'
    ]

    const profiles = [
        [
            "Wilson Abakisi",
            "A leader who shows dedication and commitment to whatever cause he's working for. Wilson has a 'never give up' attitude which has been fundamental in the progress of the company.",
            "Founder",
            "/images/Abakisi.jpg"
        ],
        [
            "Bede Abbe",
            "Bede is a visionary who always takes innovation to the next level. An abled software engineer who has been working in the IT space for all of his working career, Bede is well informed and knowledgeable in matters concerning software development and system functionalities. He have worked with multiple systems and technologies including AWS, nagios, Kubernetes and docker which combined with my software development experience using languages like GoLang, Python, PHP, React and Flutter.",
            "Software Engineer",
            "/images/bede.jpeg"
        ],
        [
            "Louis Yelifari",
            "An brilliant and innovative individual, Louis has always challenged himself to do the impossible. Its no wonder he is a key figure in projects and solutions provided by the company.",
            "Solutions Architect and project manager",
            "/images/Louis.jpg"
        ],
        [
            "Eric Amankyim",
            "Eric Amankyim is Google Certified User Experience Engineer who is passionate about creating outstanding digital experiences. His unique blend of design and development expertise allows him to bring innovation and user-centricity to every project.",
            "UI/UX Engineer",
            "/images/eric.jpg"
        ],
        [
            "Benjamin Israel Angsomwine",
            "Skilled in Session Initiation Protocol (SIP), Universal Mobile Telecommunications System (UMTS), Code Division Multiple Access Method (CDMA), Management, Product Marketing, Sales Aquisitions and Customer Management, Benjamin is well equipped to conduct business analysis of projects to help set the right goals so that the approach to development is optimal for each unique case.",
            "Business Analyst",
            "/images/Israel.jpg"
        ],
        [
            "Gregory Amogma",
            "As a Quality Assurance Engineer, Gregory is dedicated to ensuring that the best of products are released for customers' use. He ensures that the end user would be satisfied with the solutions provided and also able to navigate it seamlessly.",
            "Quality Assurance Engineer",
            "/images/Greg.heic"
        ],
        [
            "Michael Atengdem",
            "Michael is an IT professional with skills in ICT literacy training, Product and services documentation, IT products Implementation, IT Infrastructure and networks and Business Development. He holds several professional qualifications in, Microsoft certifications, Blockchain Technology, ITIL, Cisco, Agile Scrum, and is a certified UN DIAL trainer for Digital literacy. He has over a decade of experience in the IT industry spanning technical delivery, cyber security, training, and user support, and has worked with USAID/PMI, Abt Associates, Kingho Mining,Avnash industries, Geomining Consultancy,and the international NGO Lively Minds amongst others",
            "Networks and Security",
            "/images/Mike.jpg"
        ]
    ]

    return <div style={{ position: 'relative', height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Header scrollToView_={scrollToView} />
        <div className="team-header">
            <h2>Our Team</h2>
        </div>
        <div>
            <p>
               We strive to deliver the best solutions to the most complex problems
            </p>
        </div>
        <ProfilePane color_={colors[8]} name={profiles[0][0]} role={profiles[0][2]} picture={profiles[0][3]} description={profiles[0][1]} />
        <ProfilePane color_={colors[7]} name={profiles[1][0]} role={profiles[1][2]} picture={profiles[1][3]} description={profiles[1][1]} />
        <ProfilePane color_={colors[8]} name={profiles[2][0]} role={profiles[2][2]} picture={profiles[2][3]} description={profiles[2][1]} />
        <ProfilePane color_={colors[7]} name={profiles[3][0]} role={profiles[3][2]} picture={profiles[3][3]} description={profiles[3][1]} />
        <ProfilePane color_={colors[8]} name={profiles[4][0]} role={profiles[4][2]} picture={profiles[4][3]} description={profiles[4][1]} />
        <ProfilePane color_={colors[7]} name={profiles[5][0]} role={profiles[5][2]} picture={profiles[5][3]} description={profiles[5][1]} />
        <ProfilePane color_={colors[8]} name={profiles[6][0]} role={profiles[6][2]} picture={profiles[6][3]} description={profiles[6][1]} />
        <Footer scrollToView_={scrollToView} />
    </div>
}

export default OurTeamPage