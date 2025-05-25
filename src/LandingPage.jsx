import { Row, Col, Button } from 'antd';
import { MailOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

export default function LandingPage() {
  return (
    <Row justify="center" align="middle" style={{ 
      width: '100vw', 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #00c6ff 100%)',
      backgroundSize: '200% 200%',
      animation: 'gradient 15s ease infinite', 
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)', 
      margin: 0, 
      padding: '2.5rem 0',
      color: '#fff'
    }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={10} style={{
        textAlign: 'center',
        color: '#fff',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '20px',
        padding: '2rem'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: 48
        }}>
          <div style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            overflow: 'hidden',
            position: 'relative',
            marginBottom: 30,
            boxShadow: '0 10px 24px rgba(0, 0, 0, 0.15)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            transition: 'transform 0.3s ease'
          }}>
            <img src={require('../assets/profile.jpg')} alt="Houari Djebbouri" onError={(e) => {
              e.target.src = 'https://via.placeholder.com/200'
            }} style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'opacity 0.3s ease'
            }} />
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 215, 0, 0.05) 50%, rgba(255, 215, 0, 0) 100%)',
              opacity: 0,
              transition: 'opacity 0.3s ease'
            }} />
          </div>
        </div>
        <h1 style={{ 
          fontSize: '3.5rem', 
          fontWeight: 900, 
          marginBottom: 28, 
          letterSpacing: 2, 
          fontFamily: 'Arial, sans-serif',
          color: 'rgba(255, 255, 255, 0.95)', 
          background: 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent',
          textShadow: '0 4px 8px rgba(0,0,0,0.2)',
          animation: 'textGlow 3s ease-in-out infinite'
        }}>
          Houari Djebbouri
        </h1>
        <h2 style={{ 
          fontSize: '1.6rem', 
          fontWeight: 600, 
          marginBottom: 22, 
          color: '#ffd700', 
          background: 'linear-gradient(135deg, #ffd700 0%, #fff 100%)', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent',
          textShadow: '0 2px 4px rgba(255,215,0,0.3)',
          animation: 'textPulse 2s ease-in-out infinite'
        }}>
          State Computer Engineer & Software Developer
        </h2>
        <p style={{ 
          fontSize: '1.18rem', 
          lineHeight: 1.8, 
          color: '#e0eaff', 
          marginBottom: 36,
          background: 'linear-gradient(135deg, #e0eaff 0%, #fff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          padding: '1rem',
          borderRadius: '10px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}>
          15+ years of experience in software development, IT systems, and digital transformation. Specialized in <span style={{ color: '#ffd700', fontWeight: 600 }}>Java</span>, <span style={{ color: '#61dafb', fontWeight: 600 }}>React.js</span>, <span style={{ color: '#00e676', fontWeight: 600 }}>Spring Boot</span>, and mobile development.
        </p>
        <div style={{ marginBottom: 24 }}>
          <Button type="primary" size="large" href="mailto:houaridjeb@gmail.com" icon={<MailOutlined />} style={{
            marginRight: 16,
            background: 'linear-gradient(90deg, #ffd700 0%, #fff 100%)',
            color: '#1e3c72',
            fontWeight: 700,
            border: 'none',
            borderRadius: 16,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}>
            Contact Me
          </Button>
          <Button size="large" href="https://github.com/houari777" target="_blank" icon={<GithubOutlined />} style={{
            marginRight: 12,
            background: '#fff',
            color: '#24292f',
            fontWeight: 700,
            borderRadius: 16,
            border: 'none'
          }}>
            GitHub
          </Button>
          <Button size="large" href="https://linkedin.com/in/djebbouri-houari-96b4a4171" target="_blank" icon={<LinkedinOutlined />} style={{
            background: '#fff',
            color: '#0077b5',
            fontWeight: 700,
            borderRadius: 16,
            border: 'none'
          }}>
            LinkedIn
          </Button>
        </div>
        <div style={{ fontSize: '1.08rem', color: '#e0eaff', marginBottom: 12 }}>
          <span style={{ fontWeight: 600 }}>Explore my work:</span> About &bull; Skills &bull; Projects &bull; Experience &bull; Contact
        </div>
      </Col>
    </Row>
  );
}