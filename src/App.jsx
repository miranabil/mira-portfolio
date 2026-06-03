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
  FaTrophy,
  FaCalendarAlt,
} from "react-icons/fa";
import "./App.css";

function App() {
  const basePath = import.meta.env.BASE_URL;
  const cvFile = `${basePath}mera_nabil_cv.pdf`;
  const profileImage = `${basePath}mira.webp`;

  const yallaScreens = [
    {
      title: "Login Screen",
      image: `${basePath}images/yalla-rewards/login.jpg`,
      alt: "Yalla Rewards login screen",
    },
    {
      title: "Register Screen",
      image: `${basePath}images/yalla-rewards/register.jpg`,
      alt: "Yalla Rewards register screen",
    },
    {
      title: "Home Screen",
      image: `${basePath}images/yalla-rewards/home.jpg`,
      alt: "Yalla Rewards home screen",
    },
    {
      title: "Shops Screen",
      image: `${basePath}images/yalla-rewards/shops.jpg`,
      alt: "Yalla Rewards shops screen",
    },
    {
      title: "Offers Screen",
      image: `${basePath}images/yalla-rewards/offers.jpg`,
      alt: "Yalla Rewards offers screen",
    },
    {
      title: "Coupons Screen",
      image: `${basePath}images/yalla-rewards/coupons.jpg`,
      alt: "Yalla Rewards coupons screen",
    },
  ];

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

  const activities = [
    {
      title: "JCPC / Programming Competitions",
      icon: <FaTrophy />,
      description:
        "Participated in programming competitions and ICPC/JCPC-related student activities, which strengthened my problem-solving, teamwork, and logical thinking skills.",
    },
    {
      title: "Tech Conferences & Workshops",
      icon: <FaCalendarAlt />,
      description:
        "Attended technology conferences, workshops, and student events that helped me improve my communication skills, technical awareness, and professional network.",
    },
    {
      title: "University Tech Clubs",
      icon: <FaUsers />,
      description:
        "Active member in university tech communities, including IEEE, ACM, and CTC, where I participated in student activities, events, and collaborative learning experiences.",
    },
    {
      title: "ACM Social Media & Design Leadership",
      icon: <FaPaintBrush />,
      description:
        "Served as Head of the Social Media and Design Section in ACM, leading visual content, social media posts, event designs, and creative design tasks for student activities.",
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
          <a href="#activities">Activities</a>
          <a href="#project">Project</a>
          <a href="#yalla-case-study">Case Study</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <motion.div
          className="hero-text"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
          initial={false}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="card-glow"></div>

          <img
            src={profileImage}
            alt="Mira Nabil Alsakran"
            className="profile-image"
            width="148"
            height="148"
            loading="eager"
            decoding="async"
          />

          <div className="card-name-block">
            <h3>Mira Nabil Alsakran</h3>
            <p>Web Developer • Front-End • UI/UX</p>
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
        id="activities"
        className="section activities-section"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="badge">Activities & Leadership</span>

        <h2>Activities, Competitions & Involvement</h2>

        <p className="section-intro">
          Beyond academic projects, I have been involved in student tech
          communities, competitions, events, and creative leadership roles that
          helped me grow in teamwork, communication, design, and problem-solving.
        </p>

        <div className="activities-grid">
          {activities.map((activity, index) => (
            <motion.div
              className="activity-card"
              key={activity.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="activity-icon">{activity.icon}</div>
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
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

          <div className="project-buttons">
            <a href="#yalla-case-study" className="btn primary">
              View Case Study
            </a>

            <a
              href="https://github.com/miranabil/Yalla-rewards-app"
              target="_blank"
              rel="noreferrer"
              className="btn cv-btn"
            >
              <FaGithub /> View on GitHub
            </a>
          </div>
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
        id="yalla-case-study"
        className="section case-study-section"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="badge">UI/UX Case Study</span>

        <h2>Yalla Rewards UI/UX Case Study</h2>

        <div className="case-study-info">
          <div>
            <h3>Project Overview</h3>
            <p>
              Yalla Rewards is a mall loyalty mobile application that helps
              users browse stores, view offers, collect points, redeem rewards,
              and manage coupons in one place.
            </p>
          </div>

          <div>
            <h3>My Role</h3>
            <p>UI/UX Designer & Flutter Front-End Developer</p>
          </div>

          <div>
            <h3>Tools</h3>
            <p>Figma, Canva, Flutter, Dart</p>
          </div>
        </div>

        <div className="case-study-details">
          <div>
            <h3>Problem</h3>
            <p>
              Mall customers often depend on scattered social media posts,
              paper coupons, and store-only offers, which makes it harder to
              discover deals, collect points, and manage rewards in one clear
              place.
            </p>
          </div>

          <div>
            <h3>Solution</h3>
            <p>
              I designed a simple and user-friendly mobile app experience that
              brings stores, offers, coupons, points, and rewards together with
              clear navigation and consistent screens.
            </p>
          </div>
        </div>

        <h3 className="screens-title">Design Process</h3>

        <div className="process-grid">
          <div>
            <span>01</span>
            <h4>Requirements</h4>
            <p>Defined the main app features and user needs.</p>
          </div>

          <div>
            <span>02</span>
            <h4>User Flow</h4>
            <p>Planned how users move between screens and features.</p>
          </div>

          <div>
            <span>03</span>
            <h4>UI Design</h4>
            <p>Created clean mobile screens with consistent visual style.</p>
          </div>

          <div>
            <span>04</span>
            <h4>Implementation</h4>
            <p>Implemented the screens using Flutter and connected APIs.</p>
          </div>
        </div>

        <h3 className="screens-title">Final UI Screens</h3>

        <div className="screens-grid">
          {yallaScreens.map((screen) => (
            <div className="screen-card" key={screen.title}>
              <img src={screen.image} alt={screen.alt} />
              <p>{screen.title}</p>
            </div>
          ))}
        </div>

        <div className="what-i-learned">
          <h3>What I Learned</h3>
          <p>
            I improved my skills in mobile UI design, visual hierarchy, user
            flows, reusable components, responsive layouts, and implementing
            designs in Flutter while connecting the app with backend APIs.
          </p>
        </div>
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