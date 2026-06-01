import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMobileAlt,
  FaPaintBrush,
  FaCode,
  FaLayerGroup,
  FaUsers,
  FaFileDownload,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa";
import "./App.css";

function App() {
  const basePath = import.meta.env.BASE_URL;
  const cvFile = `${basePath}mera_cv.pdf`;
  const profileImage = `${basePath}mira.png`;

  const skillCategories = [
    {
      title: "Web / Front-End Development",
      icon: <FaCode />,
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Bootstrap",
        "Flexbox",
        "CSS Grid",
        "Responsive Design",
        "Framer Motion",
      ],
    },
    {
      title: "Mobile Development",
      icon: <FaMobileAlt />,
      skills: [
        "Flutter",
        "Dart",
        "UI Implementation from Figma",
        "Navigation & Routing",
        "State Management (setState / Provider)",
        "API Integration (Dio, HTTP)",
      ],
    },
    {
      title: "UI/UX & Design",
      icon: <FaPaintBrush />,
      skills: [
        "Figma",
        "UI Design",
        "Components",
        "Auto Layout",
        "Wireframing",
        "Prototyping",
        "Design Systems",
        "Basic UX Principles",
      ],
    },
    {
      title: "Programming & Tools",
      icon: <FaLayerGroup />,
      skills: [
        "Java",
        "C#",
        "Git & GitHub",
        "VS Code",
        "Android Studio",
        "Flutter DevTools",
        "Canva",
      ],
    },
    {
      title: "Software Design",
      icon: <FaLayerGroup />,
      skills: [
        "OOP",
        "SOLID Principles",
        "Design Patterns",
        "Logical Thinking",
        "Algorithmic Problem Solving",
      ],
    },
    {
      title: "Soft Skills",
      icon: <FaUsers />,
      skills: [
        "Teamwork & Communication",
        "Fast Learner",
        "Attention to Detail",
        "Time Management",
        "Problem Solving",
        "Working Under Pressure",
      ],
    },
  ];

  const experience = {
    title: "Software Engineering Trainee",
    company: "Irbid District Electricity Company",
    location: "Irbid, Jordan",
    description:
      "Completed training in the Software Department, focusing on software development, UI implementation, and mobile application workflows. Gained practical experience in building user interfaces and understanding how software projects are structured in a professional environment.",
  };

  const education = {
    degree: "B.Sc. in Software Engineering",
    university: "Jordan University of Science and Technology",
    location: "Jordan",
    description:
      "Software Engineering graduate with knowledge in web development, front-end development, mobile app development, software design, databases, and backend API integration.",
  };

  return (
    <div className="app">
      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>

      <nav className="navbar">
        <h2 className="logo">Mira.dev</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="badge">Software Engineering Graduate</span>

          <h1>
            Hi, I'm <span>Mira Alsakran</span>
          </h1>

          <p>
            I am a Web Developer and Front-End Developer interested in building
            modern, responsive, and user-friendly digital experiences. I also
            have hands-on experience in mobile development, UI/UX design, and
            backend API integration.
          </p>

          <div className="hero-buttons">
            <a href="#project" className="btn primary">
              View My Project
            </a>

            <a href={cvFile} download className="btn cv-btn">
              <FaFileDownload /> Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-card"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="card-glow"></div>

          <img
            src={profileImage}
            alt="Mira Nabil Alsakran"
            className="profile-image"
          />

          <div className="card-name-block">
            <h3>Mira Nabil Alsakran</h3>
            <p>Web Developer • Front-End • Mobile</p>
          </div>

          <div className="role-chips">
            <span>React.js</span>
            <span>UI/UX</span>
            <span>Flutter</span>
          </div>

          <div className="profile-details">
            <div>
              <FaMapMarkerAlt />
              <span>Jordan / UAE</span>
            </div>

            <div>
              <FaBriefcase />
              <span>Open to opportunities</span>
            </div>
          </div>

          <div className="stats">
            <div>
              <h4>2+</h4>
              <span>Projects</span>
            </div>

            <div>
              <h4>20+</h4>
              <span>Technical Skills</span>
            </div>
          </div>

          <div className="card-actions">
            <a
              href="https://github.com/miranabil"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/mira-al-sakran-62158a333"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href={cvFile} download>
              <FaFileDownload />
            </a>
          </div>
        </motion.div>
      </section>

      <motion.section
        id="about"
        className="section"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>

        <p>
          I am a Software Engineering graduate interested in web development,
          front-end development, mobile app development, and UI/UX design. I
          enjoy turning ideas and designs into clean, responsive, and
          user-friendly interfaces. Through my graduation project, training
          experience, and personal portfolio work, I gained practical experience
          in building screens, implementing layouts, creating smooth user flows,
          and connecting applications with backend APIs. I am continuously
          improving my skills in React.js, HTML, CSS, JavaScript, Bootstrap,
          Flexbox, and CSS Grid while building real projects and learning by
          practice.
        </p>
      </motion.section>

      <motion.section
        id="experience"
        className="section timeline-section"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Experience</h2>

        <div className="timeline-card">
          <div className="timeline-dot"></div>

          <div>
            <h3>{experience.title}</h3>
            <h4>{experience.company}</h4>
            <span>{experience.location}</span>
            <p>{experience.description}</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="education"
        className="section timeline-section"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Education</h2>

        <div className="timeline-card">
          <div className="timeline-dot"></div>

          <div>
            <h3>{education.degree}</h3>
            <h4>{education.university}</h4>
            <span>{education.location}</span>
            <p>{education.description}</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="skills"
        className="section"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Technical & Professional Skills</h2>

        <div className="skills-category-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              className="skill-category-card"
              key={category.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>

              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="project"
        className="section project-section"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="project-content">
          <span className="badge">Graduation Project</span>

          <h2>Yalla Rewards App</h2>

          <p>
            Yalla Rewards App is a mall loyalty mobile application that helps
            users browse stores, view offers, collect points, redeem rewards,
            and manage coupons. I worked on designing the application UI,
            building app screens, navigation, reusable components, and backend
            API integration.
          </p>

          <div className="project-tags">
            <span>Flutter</span>
            <span>Dart</span>
            <span>REST APIs</span>
            <span>UI/UX</span>
          </div>

          <a
            href="https://github.com/miranabil/Yalla-rewards-app"
            target="_blank"
            rel="noreferrer"
            className="btn primary"
          >
            <FaGithub /> View on GitHub
          </a>
        </div>

        <motion.div
          className="phone"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="phone-screen">
            <div className="app-title">Yalla Rewards</div>

            <div className="points-card">
              <p>Total Points</p>
              <h3>1,250</h3>
            </div>

            <div className="offer-card">20% OFF</div>
            <div className="offer-card small">Free Coffee Reward</div>
            <div className="offer-card small">New Store Coupon</div>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        id="contact"
        className="section contact"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Let’s Build Something Great</h2>

        <p>
          Open to web development, front-end development, mobile development,
          UI/UX, and software engineering opportunities.
        </p>

        <div className="contact-links">
          <a href="mailto:mira.alsakran04@gmail.com">
            <FaEnvelope /> Email Me
          </a>

          <a
            href="https://github.com/miranabil"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> GitHub Profile
          </a>

          <a
            href="https://www.linkedin.com/in/mira-al-sakran-62158a333"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin /> LinkedIn Profile
          </a>

          <a href={cvFile} download>
            <FaFileDownload /> Download CV
          </a>
        </div>
      </motion.section>

      <footer>
        <p>© 2026 Mira Nabil Alsakran. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;