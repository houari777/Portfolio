import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  FileTextOutlined,
  ProjectOutlined,
  TrophyOutlined,
  MailOutlined
} from "@ant-design/icons";
import "./App.css";
import profileImg from "./assets/profile.jpg";

const { Header, Content, Footer } = Layout;

const Home = () => (
  <section className="section home" style={{ width: "100vw", minHeight: "100vh", background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #00c6ff 100%)", color: "#fff", borderRadius: 0, boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)", padding: 32, margin: 32, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
    <img src={profileImg} alt="Profile" className="profile-img" style={{width: 240, height: 240, borderRadius: "50%", marginBottom: 32, boxShadow: "0 4px 16px rgba(0,0,0,0.15)", objectFit: "cover"}} />
    <h1 style={{ fontSize: "2.8rem", fontWeight: 900, letterSpacing: 2, color: "yellow", textShadow: "0 4px 8px rgba(0,0,0,0.2)" }}>DJEBBOURI HOUARI</h1>
    <h2 style={{ fontSize: "1.4rem", fontWeight: 600, color: "#ffd700", marginBottom: 18 }}>State Computer Engineer</h2>
    <div style={{ marginBottom: 18, fontSize: "1.08rem", color: "#e0eaff" }}>
      <div>Email: <a href="mailto:houaridjeb@gmail.com" style={{ color: "#ffd700" }}>houaridjeb@gmail.com</a></div>
      <div>Phone: <span style={{ color: "#ffd700" }}>0657460377 / 0561945322</span></div>
      <div>Address: Cite 1500 AADL Bloc F2 N°05 BECHAR, 08000 BECHAR</div>
      <div>LinkedIn: <a href="https://linkedin.com/in/djebbouri-houari-96b4a4171" target="_blank" rel="noopener noreferrer" style={{ color: "#ffd700" }}>djebbouri-houari-96b4a4171</a></div>
      <div>GitHub: <a href="https://github.com/houari777" target="_blank" rel="noopener noreferrer" style={{ color: "#ffd700" }}>houari777</a></div>
    </div>
    <p style={{ fontSize: "1.18rem", lineHeight: 1.8, color: "#e0eaff", marginBottom: 24, background: "linear-gradient(135deg, #e0eaff 0%, #fff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", padding: "1rem", borderRadius: "10px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
      I participate in the development and maintenance of existing and planned IT systems. I contribute to functional analysis, technical design, coding, implementation, and documentation of computer programs.
    </p>
  </section>
);

const About = () => (
  <section className="section about" style={{ background: "#fff", borderRadius: 24, boxShadow: "0 4px 16px rgba(30,60,114,0.08)", padding: 32, margin: 32, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
    <h2 style={{ color: "#1e3c72", fontWeight: 700 }}>Profile</h2>
    <p style={{ fontSize: "1.1rem", color: "#222", marginBottom: 16 }}>
      I participate in the development and maintenance of existing and planned IT systems. I contribute to functional analysis, technical design, coding, implementation, and documentation of computer programs.
    </p>
    <a href="/cv.pdf" download className="ant-btn ant-btn-primary" style={{ background: "linear-gradient(90deg, #ffd700 0%, #2a5298 100%)", color: "#1e3c72", fontWeight: 700, border: "none", borderRadius: 16, padding: "8px 24px" }}>Download CV</a>
  </section>
);

const Skills = () => (
  <section className="section skills" style={{ background: "#f6f9fc", borderRadius: 24, boxShadow: "0 4px 16px rgba(30,60,114,0.06)", padding: 32, margin: 32, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
    <h2 style={{ color: "#1e3c72", fontWeight: 700 }}>Skills</h2>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "center", alignItems: "center" }}>
      <div>
        <h3 style={{ color: "#2a5298" }}>Languages</h3>
        <ul>
          <li>Arabic</li>
          <li>French</li>
          <li>English</li>
        </ul>
        <h3 style={{ color: "#2a5298" }}>Programming Languages</h3>
        <ul>
          <li>Java</li>
          <li>JavaScript</li>
          <li>PHP</li>
          <li>C#</li>
          <li>Dart</li>
        </ul>
      </div>
      <div>
        <h3 style={{ color: "#2a5298" }}>Frameworks & Libraries</h3>
        <ul>
          <li>Spring</li>
          <li>Laravel</li>
          <li>Angular</li>
          <li>Flutter</li>
          <li>React.js</li>
        </ul>
        <h3 style={{ color: "#2a5298" }}>Operating Systems</h3>
        <ul>
          <li>Windows (all versions)</li>
          <li>Kali Linux</li>
          <li>Fedora</li>
        </ul>
      </div>
      <div>
        <h3 style={{ color: "#2a5298" }}>Professional Skills</h3>
        <ul>
          <li>Oracle Middleware 12c (ADF Ed.)</li>
          <li>Java SE and EE development</li>
          <li>JSP, Servlets, JSF, EJB, JMS, JPA</li>
          <li>JAX-WS & JAX-RS web services</li>
          <li>React.js development</li>
        </ul>
        <h3 style={{ color: "#2a5298" }}>Databases</h3>
        <ul>
          <li>Boost Grace</li>
          <li>Oracle</li>
          <li>MySQL</li>
          <li>Firebase</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section className="section projects" style={{ background: "#fff", borderRadius: 24, boxShadow: "0 4px 16px rgba(30,60,114,0.08)", padding: 32, marginBottom: 32 }}>
    <h2 style={{ color: "#1e3c72", fontWeight: 700 }}>Projects Carried Out</h2>
    <ul style={{ fontSize: "1.08rem", color: "#222" }}>
      <li>Setup of a 70-socket local network with patch cabinets (2010)</li>
      <li>Desktop application for filtering AADL subscriber lists (2018)</li>
      <li>Desktop Applications: Supermarket Management, Laboratory Analysis Management (Java), Cafeteria Management</li>
      <li>Web Application with Spring Boot, JavaScript, Bootstrap for domain inspection tracking (2019)</li>
      <li>Android App: Market Manager</li>
      <li>Support Application with Flutter & Laravel PHP (2023 – Present)</li>
      <li>React.js Dashboard for data management</li>
    </ul>
  </section>
);

const Experience = () => (
  <section className="section experience" style={{ background: "#f6f9fc", borderRadius: 24, boxShadow: "0 4px 16px rgba(30,60,114,0.06)", padding: 32, marginBottom: 32 }}>
    <h2 style={{ color: "#1e3c72", fontWeight: 700 }}>Professional Experience</h2>
    <ul style={{ fontSize: "1.08rem", color: "#222" }}>
      <li><b>State Computer Engineer</b> (Feb 2009 – Dec 2018), Direction des Domaines de la Wilaya de Bechar<br/>Developed software for fast and accurate search of AADL and social housing subscriber lists.</li>
      <li><b>Senior Computer Engineer</b> (Dec 2018 – Dec 2023), Regional Directorate of National Domains Bechar<br/>Participated in the design and modernization of the DGDN information system.</li>
      <li><b>Computer Engineer</b> (Jan 2024 – Present), National Employment Agency (ANEM)<br/>Manage databases and provide technical support. Develop internal tools and optimize IT workflows. Participate in the implementation of new applications. Train users and support IT process improvements.</li>
    </ul>
  </section>
);

const Education = () => (
  <section className="section education" style={{ background: "#fff", borderRadius: 24, boxShadow: "0 4px 16px rgba(30,60,114,0.08)", padding: 32, marginBottom: 32 }}>
    <h2 style={{ color: "#1e3c72", fontWeight: 700 }}>Academic Background & Certificates</h2>
    <ul style={{ fontSize: "1.08rem", color: "#222" }}>
      <li><b>Oran University</b> — State Computer Engineer<br/>Graduation: September 2006<br/>Specialization: Distributed Systems<br/>Graduation Project: Management Information System for the Faculty of Science, University of Oran (Oracle DB, Oracle Forms, Oracle Reports)</li>
      <li><b>National Specialized Training Institute Professional</b> (Centre of Excellence Specialized in ICT and Phone Trades – Bou-Ismail, Tipaza)<br/>Date: September 2016<br/>Overview of Java/Java EE platform, Desktop & web application development, Web services and business component development with Java SE/EE, JPA data access layer implementation, Application security using JAAS API</li>
      <li><b>Certificates:</b> State Computer Engineer, Udemy Certificate: Android Application Penetration Testing (Arabic)</li>
    </ul>
  </section>
);

const Contact = () => (
  <section className="section contact" style={{ background: "#f6f9fc", borderRadius: 24, boxShadow: "0 4px 16px rgba(30,60,114,0.06)", padding: 32, marginBottom: 32 }}>
    <h2 style={{ color: "#1e3c72", fontWeight: 700 }}>Contact</h2>
    <p style={{ fontSize: "1.08rem", color: "#222" }}>Email: <a href="mailto:houaridjeb@gmail.com" style={{ color: "#2a5298" }}>houaridjeb@gmail.com</a></p>
    <p style={{ fontSize: "1.08rem", color: "#222" }}>LinkedIn: <a href="https://linkedin.com/in/djebbouri-houari-96b4a4171" target="_blank" rel="noopener noreferrer" style={{ color: "#2a5298" }}>djebbouri-houari-96b4a4171</a></p>
    <p style={{ fontSize: "1.08rem", color: "#222" }}>GitHub: <a href="https://github.com/houari777" target="_blank" rel="noopener noreferrer" style={{ color: "#2a5298" }}>houari777</a></p>
    <p style={{ fontSize: "1.08rem", color: "#222" }}>Phone: <span style={{ color: "#2a5298" }}>0657460377 / 0561945322</span></p>
    <p style={{ fontSize: "1.08rem", color: "#222" }}>Address: Cite 1500 AADL Bloc F2 N°05 BECHAR, 08000 BECHAR</p>
  </section>
);

const items = [
  { label: <Link to="/">Home</Link>, key: "home", icon: <HomeOutlined /> },
  { label: <Link to="/about">About</Link>, key: "about", icon: <UserOutlined /> },
  { label: <Link to="/skills">Skills</Link>, key: "skills", icon: <FileTextOutlined /> },
  { label: <Link to="/projects">Projects</Link>, key: "projects", icon: <ProjectOutlined /> },
  { label: <Link to="/experience">Experience</Link>, key: "experience", icon: <TrophyOutlined /> },
  { label: <Link to="/education">Education</Link>, key: "education", icon: <FileTextOutlined /> },
  { label: <Link to="/contact">Contact</Link>, key: "contact", icon: <MailOutlined /> }
];

function App() {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh", background: "linear-gradient(135deg, #232526 0%, #1e3c72 60%, #00c6ff 100%)" }}>
        // ...
        <Header style={{ position: "fixed", top: 0, left: 0, width: "100vw", zIndex: 1000, background: "rgba(30,60,114,0.98)", padding: 0, boxShadow: "0 2px 12px rgba(0,0,0,0.2)", borderBottom: "2px solid #ffd700", color: "#ffd700", backdropFilter: "blur(8px)" }}>
          <Menu mode="horizontal" items={items} style={{ 
            justifyContent: "center", 
            background: "transparent", 
            color: "#ffd700", // Gold color for navbar font
            fontWeight: 700, 
            fontSize: "1.15rem", 
            border: "none",
            fontFamily: "'Poppins', sans-serif",
            textTransform: "uppercase",
            letterSpacing: "1px",
            textShadow: "0 2px 4px rgba(0,0,0,0.3)"
          }} />
        </Header>
        <Content style={{ width: "100vw", minHeight: "100vh", padding: 0, background: "none", marginTop: 64, marginBottom: 56 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Content>
        <Footer style={{ position: "fixed", bottom: 0, left: 0, width: "100vw", textAlign: "center", background: "rgba(30,60,114,0.95)", color: "#ffd700", fontWeight: 600, borderTop: "2px solid #ffd700", letterSpacing: 1, zIndex: 1000 }}>{"© " + new Date().getFullYear() + " DJEBBOURI HOUARI. All rights reserved."}</Footer>
      </Layout>
    </Router>
  );
}

export default App;


// Add global style to disable scrolling
const style = document.createElement('style');
style.innerHTML = 'body { overflow: hidden !important; }';
document.head.appendChild(style);