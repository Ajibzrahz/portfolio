import { motion } from "framer-motion";
import {
  FolderGit2,
  Mail,
  MapPin,
  ExternalLink,
  User,
  ArrowRight,
  Code2,
  Server,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function App() {
  const projects = [
    {
      title: "Livestock Intelligence Cost Estimator",
      description:
        "A data-driven platform designed to help livestock farmers estimate startup and operational costs, compare farm scales, and make smarter financial decisions.",
      stack: ["Node.js", "Express", "MongoDB", "Render"],
      link: "https://github.com/Ajibzrahz/livestock-cost-estimator-backend",
    },
    {
      title: "Smart Mart Backend API",
      description:
        "A scalable backend API powering an e-commerce workflow with authentication, product handling, and a structure ready for frontend integration.",
      stack: ["Node.js", "Express", "MongoDB"],
      link: "#",
    },
    {
      title: "Authentication System",
      description:
        "A secure authentication flow featuring JWT, email verification, cookies, and password reset logic built for real application use cases.",
      stack: ["Node.js", "JWT", "MongoDB", "Nodemailer"],
      link: "https://github.com/Ajibzrahz/Authetication",
    },
  ];

  const skills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "JWT Auth",
    "Git & GitHub",
    "Render",
    "Postman",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const styles = {
    page: {
      minHeight: "100vh",
      color: "white",
      fontFamily: "Inter, Arial, sans-serif",
      background:
        "radial-gradient(circle at top left, rgba(34,211,238,0.12), transparent 28%), radial-gradient(circle at top right, rgba(99,102,241,0.14), transparent 30%), linear-gradient(135deg, #020617, #0f172a 45%, #020617)",
    },
    container: {
      maxWidth: "1180px",
      margin: "0 auto",
      padding: "32px 20px 72px",
    },
    nav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "18px 0 30px",
      gap: "16px",
      flexWrap: "wrap",
    },
    brand: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      fontWeight: 700,
      fontSize: "18px",
      color: "#f8fafc",
    },
    navLinks: {
      display: "flex",
      gap: "14px",
      flexWrap: "wrap",
    },
    navLink: {
      color: "#cbd5e1",
      textDecoration: "none",
      fontSize: "14px",
      padding: "10px 14px",
      borderRadius: "999px",
      border: "1px solid rgba(148,163,184,0.18)",
      background: "rgba(15,23,42,0.45)",
      backdropFilter: "blur(12px)",
    },
    hero: {
      display: "grid",
      gridTemplateColumns: "1.2fr 0.8fr",
      gap: "28px",
      alignItems: "stretch",
      marginBottom: "28px",
    },
    glass: {
      background: "rgba(15,23,42,0.55)",
      border: "1px solid rgba(148,163,184,0.16)",
      boxShadow: "0 20px 60px rgba(0,0,0,0.28)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderRadius: "28px",
    },
    heroLeft: {
      padding: "36px",
      minHeight: "520px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "10px 16px",
      borderRadius: "999px",
      border: "1px solid rgba(103,232,249,0.22)",
      background: "rgba(8,47,73,0.35)",
      color: "#a5f3fc",
      fontSize: "14px",
      width: "fit-content",
      marginBottom: "20px",
    },
    title: {
      fontSize: "clamp(2.6rem, 6vw, 4.8rem)",
      lineHeight: "1.02",
      margin: "0 0 18px",
      letterSpacing: "-0.04em",
    },
    gradientText: {
      background: "linear-gradient(90deg, #ffffff, #67e8f9)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    text: {
      color: "#cbd5e1",
      lineHeight: 1.75,
      fontSize: "17px",
      maxWidth: "670px",
    },
    actionRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "14px",
      marginTop: "28px",
    },
    primaryBtn: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      padding: "14px 20px",
      borderRadius: "16px",
      background: "linear-gradient(135deg, #22d3ee, #6366f1)",
      color: "white",
      textDecoration: "none",
      fontWeight: 700,
      boxShadow: "0 12px 30px rgba(99,102,241,0.28)",
    },
    secondaryBtn: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      padding: "14px 20px",
      borderRadius: "16px",
      border: "1px solid rgba(148,163,184,0.2)",
      color: "#e2e8f0",
      textDecoration: "none",
      background: "rgba(15,23,42,0.5)",
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: "14px",
      marginTop: "34px",
    },
    statCard: {
      padding: "18px",
      borderRadius: "22px",
      border: "1px solid rgba(148,163,184,0.14)",
      background: "rgba(2,6,23,0.45)",
    },
    statValue: {
      fontSize: "26px",
      fontWeight: 800,
      marginBottom: "6px",
    },
    statLabel: {
      color: "#94a3b8",
      fontSize: "14px",
    },
    heroRight: {
      padding: "26px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: "18px",
    },
    imageWrap: {
      width: "100%",
      borderRadius: "24px",
      overflow: "hidden",
      border: "1px solid rgba(148,163,184,0.16)",
      background: "#020617",
    },
    image: {
      width: "100%",
      height: "360px",
      objectFit: "cover",
      display: "block",
    },
    profileName: {
      fontSize: "28px",
      fontWeight: 700,
      margin: "6px 0",
    },
    subText: {
      color: "#94a3b8",
      fontSize: "15px",
    },
    location: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      color: "#cbd5e1",
      marginTop: "10px",
    },
    socialRow: {
      display: "flex",
      gap: "12px",
      marginTop: "18px",
      flexWrap: "wrap",
    },
    socialBtn: {
      width: "48px",
      height: "48px",
      borderRadius: "16px",
      border: "1px solid rgba(148,163,184,0.16)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      textDecoration: "none",
      background: "rgba(15,23,42,0.6)",
      fontSize: "18px",
    },
    twoCol: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "22px",
      marginBottom: "22px",
    },
    section: {
      padding: "28px",
    },
    sectionTitle: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontSize: "26px",
      fontWeight: 700,
      margin: "0 0 14px",
    },
    muted: {
      color: "#94a3b8",
      lineHeight: 1.75,
    },
    skillWrap: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      marginTop: "18px",
    },
    skillTag: {
      padding: "10px 14px",
      borderRadius: "999px",
      background: "rgba(30,41,59,0.75)",
      border: "1px solid rgba(148,163,184,0.16)",
      color: "#e2e8f0",
      fontSize: "14px",
    },
    projectSection: {
      padding: "28px",
      marginBottom: "22px",
    },
    projectGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
      gap: "18px",
      marginTop: "18px",
    },
    projectCard: {
      padding: "22px",
      borderRadius: "24px",
      border: "1px solid rgba(148,163,184,0.15)",
      background: "linear-gradient(180deg, rgba(15,23,42,0.9), rgba(2,6,23,0.88))",
      minHeight: "260px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    projectTitle: {
      fontSize: "22px",
      fontWeight: 700,
      margin: "14px 0 10px",
    },
    projectText: {
      color: "#cbd5e1",
      lineHeight: 1.7,
      fontSize: "15px",
    },
    iconChip: {
      width: "44px",
      height: "44px",
      borderRadius: "14px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(34,211,238,0.1)",
      border: "1px solid rgba(34,211,238,0.16)",
      color: "#67e8f9",
    },
    stack: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      marginTop: "16px",
    },
    tag: {
      background: "rgba(30,41,59,0.72)",
      padding: "7px 11px",
      borderRadius: "999px",
      fontSize: "12px",
      color: "#e2e8f0",
      border: "1px solid rgba(148,163,184,0.12)",
    },
    linkBtn: {
      marginTop: "18px",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      textDecoration: "none",
      color: "#a5f3fc",
      fontWeight: 700,
    },
    contactBox: {
      padding: "30px",
      display: "flex",
      justifyContent: "space-between",
      gap: "16px",
      alignItems: "center",
      flexWrap: "wrap",
      background:
        "linear-gradient(135deg, rgba(34,211,238,0.1), rgba(99,102,241,0.12), rgba(15,23,42,0.7))",
    },
    contactTitle: {
      margin: 0,
      fontSize: "28px",
      fontWeight: 800,
    },
    footer: {
      padding: "18px 4px 0",
      color: "#64748b",
      fontSize: "14px",
      textAlign: "center",
    },
  };

  const responsive = `
    @media (max-width: 960px) {
      .hero-grid, .two-col-grid {
        grid-template-columns: 1fr !important;
      }
      .hero-left {
        min-height: auto !important;
      }
      .stats-grid {
        grid-template-columns: 1fr !important;
      }
    }
  `;

  return (
    <div style={styles.page}>
      <style>{responsive}</style>
      <div style={styles.container}>
        <motion.nav
          style={styles.nav}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div style={styles.brand}>
            <Sparkles size={18} color="#67e8f9" /> Raheem.dev
          </div>
          <div style={styles.navLinks}>
            <a href="#about" style={styles.navLink}>About</a>
            <a href="#projects" style={styles.navLink}>Projects</a>
            <a href="#contact" style={styles.navLink}>Contact</a>
          </div>
        </motion.nav>

        <section className="hero-grid" style={styles.hero}>
          <motion.div
            className="hero-left"
            style={{ ...styles.glass, ...styles.heroLeft }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            <div>
              <div style={styles.badge}>
                <Code2 size={16} /> Backend Developer • Building practical systems
              </div>
              <h1 style={styles.title}>
                Building <span style={styles.gradientText}>modern backend systems</span> that solve real problems.
              </h1>
              <p style={styles.text}>
                I’m Raheem Ajibona, a backend developer focused on building APIs, authentication systems,
                and data-driven web applications with Node.js, Express.js, and MongoDB.
              </p>
              <div style={styles.actionRow}>
                <a href="#projects" style={styles.primaryBtn}>
                  View Projects <ArrowRight size={18} />
                </a>
                <a href="#contact" style={styles.secondaryBtn}>
                  <Mail size={17} /> Let’s Connect
                </a>
              </div>
            </div>

            <div className="stats-grid" style={styles.statsGrid}>
              <div style={styles.statCard}>
                <div style={styles.statValue}>3+</div>
                <div style={styles.statLabel}>Featured projects</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statValue}>Node.js</div>
                <div style={styles.statLabel}>Primary backend stack</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statValue}>API</div>
                <div style={styles.statLabel}>Practical problem solving</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ ...styles.glass, ...styles.heroRight }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div style={styles.imageWrap}>
              <img src="/picture.png" alt="Raheem Ajibona" style={styles.image} />
            </div>
            <div>
              <div style={styles.profileName}>Raheem Ajibona</div>
              <div style={styles.subText}>Backend Developer • Computer Science Student</div>
              <div style={styles.location}>
                <MapPin size={16} /> Nigeria
              </div>
              <div style={styles.socialRow}>
                <a href="https://github.com/Ajibzrahz" style={styles.socialBtn} aria-label="GitHub"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/raheem-ajibona-489bb4270/" style={styles.socialBtn} aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="mailto:ajibonaraheem@gmail.com" style={styles.socialBtn} aria-label="Email"><Mail size={18} /></a>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="two-col-grid" style={styles.twoCol} id="about">
          <motion.div
            style={{ ...styles.glass, ...styles.section }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={styles.sectionTitle}><User size={19} color="#67e8f9" /> About Me</h2>
            <p style={styles.muted}>
              I’m a Computer Science student focused on backend development and real-world software solutions.
              My work includes building REST APIs, authentication workflows, database-backed applications,
              and deployable backend services.
            </p>
          </motion.div>

          <motion.div
            style={{ ...styles.glass, ...styles.section }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2 style={styles.sectionTitle}><Server size={19} color="#67e8f9" /> Core Skills</h2>
            <div style={styles.skillWrap}>
              {skills.map((skill) => (
                <span key={skill} style={styles.skillTag}>{skill}</span>
              ))}
            </div>
          </motion.div>
        </section>

        <motion.section
          style={{ ...styles.glass, ...styles.projectSection }}
          id="projects"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={styles.sectionTitle}><FolderGit2 size={20} color="#67e8f9" /> Featured Projects</h2>
          <p style={styles.muted}>
            A selection of backend-focused projects that reflect how I approach practical system design and implementation.
          </p>
          <div style={styles.projectGrid}>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                style={styles.projectCard}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <div>
                  <div style={styles.iconChip}>
                    <Code2 size={18} />
                  </div>
                  <div style={styles.projectTitle}>{project.title}</div>
                  <div style={styles.projectText}>{project.description}</div>
                  <div style={styles.stack}>
                    {project.stack.map((item) => (
                      <span key={item} style={styles.tag}>{item}</span>
                    ))}
                  </div>
                </div>
                <a href={project.link} style={styles.linkBtn}>
                  View Project <ExternalLink size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          style={{ ...styles.glass, ...styles.contactBox }}
          id="contact"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div>
            <p style={{ color: "#67e8f9", margin: "0 0 8px", fontWeight: 700 }}>Available for opportunities</p>
            <h2 style={styles.contactTitle}>Let’s build something strong together.</h2>
            <p style={{ ...styles.muted, margin: "10px 0 0" }}>
              I’m open to internships, junior backend roles, and project collaborations.
            </p>
          </div>
          <a href="mailto:youremail@email.com" style={styles.primaryBtn}>
            <Mail size={18} /> Send Email
          </a>
        </motion.section>

        <div style={styles.footer}>Designed and built by Raheem Ajibona.</div>
      </div>
    </div>
  );
}
