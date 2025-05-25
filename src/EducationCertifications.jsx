import { Row, Col } from 'antd';

export default function EducationCertifications() {
  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh', width: '100vw', background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #00c6ff 100%)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)', margin: 0, padding: '2.5rem 0' }}>
      <Col xs={22} sm={18} md={14} lg={12} xl={10} style={{ color: '#fff', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 22, color: '#ffd700', textShadow: '0 2px 12px rgba(0,0,0,0.12)' }}>Education & Certifications</h2>
        <ul style={{ paddingLeft: 0, fontSize: '1.18rem', lineHeight: 1.8, color: '#e0eaff', listStyle: 'none', margin: 0 }}>
          <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffd700' }}>Master in Computer Science</strong> - University of Bechar (2007)</li>
          <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffd700' }}>Bachelor in Computer Engineering</strong> - University of Bechar (2005)</li>
          <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffd700' }}>Certifications:</strong> Oracle Certified Professional, Java SE; Spring Professional Certification; React Developer Certificate</li>
          <li><strong style={{ color: '#ffd700' }}>Courses:</strong> Advanced Java, Full Stack Web Development, Cloud Computing</li>
        </ul>
      </Col>
    </Row>
  );
}