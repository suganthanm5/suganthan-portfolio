import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ExternalLink,
  Code,
  Database,
  Brain,
  BarChart,
  User,
  Briefcase,
  GraduationCap,
  Award,
  Send
} from 'lucide-react';
import './App.css';

const App = () => {
  const [activeRole, setActiveRole] = useState('Full Stack Developer');

  const resumeLinks = {
    'Full Stack Developer': `${import.meta.env.BASE_URL}resume-fsd.pdf`,
    'Data Analyst': `${import.meta.env.BASE_URL}resume-da.pdf`
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeLinks[activeRole];
    link.download = `Suganthan_M_${activeRole.replace(/\s+/g, '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="glass" style={{ position: 'fixed', top: '1rem', left: '50%', transform: 'translateX(-50%)', width: '90%', maxWidth: '1200px', zIndex: 1000, padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 className="gradient-text">SM.</h2>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <motion.div {...fadeInUp}>
          <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>Suganthan M</h1>
          <h2 className="gradient-text" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
            Full Stack Developer | Data Analyst | AI & ML Student
          </h2>
          <p style={{ maxWidth: '600px', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
            Transforming complex data into actionable insights and building scalable web applications with a Vibe Coding approach.
          </p>

          <div className="role-selector glass" style={{ padding: '0.5rem', borderRadius: '3rem' }}>
            {['Full Stack Developer', 'Data Analyst'].map(role => (
              <button
                key={role}
                className={`role-btn ${activeRole === role ? 'active' : ''}`}
                onClick={() => setActiveRole(role)}
              >
                {role}
              </button>
            ))}
          </div>

          <button className="btn-primary" style={{ marginTop: '2rem' }} onClick={handleDownload}>
            <Download size={20} /> Download {activeRole} Resume
          </button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="container">
        <h2 className="section-title"><span>About Me</span></h2>
        <div className="grid grid-2">
          <motion.div {...fadeInUp} className="glass card">
            <p>
              I am a final-year B.Tech student in Artificial Intelligence and Machine Learning with strong skills in Full Stack Development and Data Analytics. I have hands-on experience in Python, React, SQL, Excel, Power BI, and Tableau.
            </p>
            <p style={{ marginTop: '1rem' }}>
              I follow a <strong>Vibe Coding</strong> approach, focusing on building real-world projects, rapid prototyping, and learning through hands-on development.
            </p>
          </motion.div>
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="glass card">
            <h3>My Core Focus</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem' }}>
              <div className="skill-tag"><Code size={14} style={{ marginRight: '5px' }} /> Full Stack Development</div>
              <div className="skill-tag"><BarChart size={14} style={{ marginRight: '5px' }} /> Data Analytics</div>
              <div className="skill-tag"><Brain size={14} style={{ marginRight: '5px' }} /> Machine Learning</div>
              <div className="skill-tag"><Database size={14} style={{ marginRight: '5px' }} /> Business Intelligence</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container">
        <h2 className="section-title"><span>Experience</span></h2>
        <div className="grid">
          <motion.div {...fadeInUp} className="experience-item">
            <h3 style={{ color: 'var(--primary)' }}>Data Analyst Intern</h3>
            <h4>NLC India Ltd.</h4>
            <p className="skill-tag" style={{ display: 'inline-block', margin: '0.5rem 0' }}>Duration: Internship</p>
            <ul style={{ marginTop: '1rem', listStyle: 'none', paddingLeft: '0' }}>
              <li>• Cleaned and processed structured datasets using Python and Excel</li>
              <li>• Performed data analysis to identify trends and patterns</li>
              <li>• Developed interactive dashboards using Power BI and Tableau</li>
              <li>• Provided insights to support business and operational decisions</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container">
        <h2 className="section-title"><span>Technical Skills</span></h2>
        <div className="grid grid-3">
          <motion.div {...fadeInUp} className="glass card">
            <Code className="gradient-text" style={{ marginBottom: '1rem' }} />
            <h3>Development</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">HTML/CSS</span>
            </div>
          </motion.div>
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="glass card">
            <Database className="gradient-text" style={{ marginBottom: '1rem' }} />
            <h3>Data & ML</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">Pandas/NumPy</span>
              <span className="skill-tag">Scikit-learn</span>
              <span className="skill-tag">Preprocessing</span>
            </div>
          </motion.div>
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="glass card">
            <BarChart className="gradient-text" style={{ marginBottom: '1rem' }} />
            <h3>Analysis Tools</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
              <span className="skill-tag">Power BI</span>
              <span className="skill-tag">Tableau</span>
              <span className="skill-tag">Excel</span>
              <span className="skill-tag">Git/GitHub</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container">
        <h2 className="section-title"><span>Top Projects</span></h2>
        <div className="grid grid-3">
          <ProjectCard
            title="IPL Match Winner Prediction"
            desc="Built a machine learning model using historical IPL data to analyze team performance and visualize insights."
            tags={['ML', 'Python', 'Visualization']}
          />
          <ProjectCard
            title="Audio Denoising using ML"
            desc="Developed a system to remove noise from audio signals applying preprocessing and feature extraction techniques."
            tags={['Audio Processing', 'ML', 'Python']}
          />
          <ProjectCard
            title="Image Recognition Chatbot"
            desc="Built an AI chatbot capable of analyzing images and responding with text using CV and conversational interaction."
            tags={['AI', 'Computer Vision', 'React']}
          />
        </div>
      </section>

      {/* Education & Certs */}
      <section className="container">
        <div className="grid grid-2">
          <div>
            <h2 className="section-title" style={{ textAlign: 'left' }}><span>Education</span></h2>
            <div className="education-item">
              <h3>B.Tech – AI & ML</h3>
              <p>IFET College of Engineering (2022 – 2026)</p>
              <p style={{ color: 'var(--primary)', fontWeight: 'bold' }}>CGPA: 8.2 / 10</p>
            </div>
            <div className="education-item" style={{ marginTop: '2rem' }}>
              <h3>HSC – Computer Science</h3>
              <p>Percentage: 79%</p>
            </div>
          </div>
          <div>
            <h2 className="section-title" style={{ textAlign: 'left' }}><span>Certifications</span></h2>
            <div className="glass card" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Award className="gradient-text" />
              <div>
                <h4>MySQL – Coursera (Meta Sponsored)</h4>
                <h4>Power BI – Coursera</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container glass" style={{ marginBottom: '6rem' }}>
        <h2 className="section-title"><span>Get In Touch</span></h2>
        <div className="grid grid-2">
          <div>
            <p style={{ marginBottom: '2rem' }}>I am seeking opportunities as a Full Stack Developer or Data Analyst. Let's build something amazing together!</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <a href="mailto:suganthanm2005@gmail.com" className="glass" style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Mail className="gradient-text" /> suganthanm2005@gmail.com
              </a>
              <a href="tel:+919342452512" className="glass" style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Phone className="gradient-text" /> +91-9342452512
              </a>
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <a href="https://github.com/suganthanm5" target="_blank" rel="noopener noreferrer" className="glass" style={{ padding: '0.75rem' }}><Github /></a>
              <a href="https://www.linkedin.com/in/suganthan-mahadevan-263056306" target="_blank" rel="noopener noreferrer" className="glass" style={{ padding: '0.75rem' }}><Linkedin /></a>
            </div>
          </div>
          <motion.form {...fadeInUp} className="grid" style={{ gap: '1rem' }}>
            <input type="text" placeholder="Name" className="glass" style={{ padding: '1rem', color: 'white' }} />
            <input type="email" placeholder="Email" className="glass" style={{ padding: '1rem', color: 'white' }} />
            <textarea placeholder="Message" className="glass" style={{ padding: '1rem', color: 'white', minHeight: '150px' }}></textarea>
            <button className="btn-primary" type="button" onClick={() => alert('Vibe Check Sent!')}>
              <Send size={18} /> Send Message
            </button>
          </motion.form>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
        <p>&copy; 2024 Suganthan M. All rights reserved.</p>
        <p style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>Built with React & Vibe Coding</p>
      </footer>
    </div>
  );
};

const ProjectCard = ({ title, desc, tags }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="glass card project-card"
  >
    <Code size={40} className="gradient-text" style={{ marginBottom: '1.5rem' }} />
    <h3>{title}</h3>
    <p style={{ margin: '1rem 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{desc}</p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      {tags.map(tag => <span key={tag} className="skill-tag" style={{ fontSize: '0.7rem' }}>{tag}</span>)}
    </div>
  </motion.div>
);

export default App;
