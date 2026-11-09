import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  FileText,
  Home,
  User,
  Briefcase,
  Server,
  Database,
  Zap,
  Code2,
  ShieldCheck,
  Workflow,
  TestTube2,
  GraduationCap,
  BriefcaseBusiness,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function App() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState("home");
  const [filter, setFilter] = useState("All");

  const nav = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About Me", icon: User },
    { id: "portfolio", label: "Projects", icon: Briefcase },
    { id: "experience", label: "Experience", icon: GraduationCap },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const services = [
    {
      icon: Server,
      title: "Backend Development",
      body: "Designing and implementing scalable REST APIs with Node.js, Express, and clean service/controller architecture.",
    },
    {
      icon: Database,
      title: "Database Architecture",
      body: "Modeling and optimizing data storage and retrieval with MongoDB and Mongoose, plus pagination and indexing.",
    },
    {
      icon: Code2,
      title: "Auth & Security",
      body: "Building secure auth flows: JWT, HTTP-only cookies, email verification, and password-reset logic.",
    },
    {
      icon: Zap,
      title: "Deployment & Integration",
      body: "Shipping services to Render and Vercel, wiring up frontends, webhooks, and third-party APIs end to end.",
    },
  ];

  const facts = [
    { n: "40", label: "HostelFix automated tests" },
    { n: "4", label: "Featured projects" },
    { n: "API", label: "Backend engineering focus" },
    { n: "2026", label: "Computer Science graduate" },
  ];

  const projects = [
    {
      title: "HostelFix",
      status: "live",
      tag: "Backend",
      description:
        "A hostel maintenance platform built around a complete ticket lifecycle. Students can report and track issues, while staff and admins manage assignment and resolution through role-based access controls. Includes ownership checks, duplicate-ticket prevention, and 40 automated tests.",
      stack: [
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "Jest",
      ],
      highlights: [
        "Role-based permissions",
        "Ticket ownership checks",
        "Duplicate-ticket prevention",
        "Automated workflow tests",
      ],
      repo: "https://github.com/Ajibzrahz/HostelFix",
      live: "https://hostelfix-pink.vercel.app",
    },
    {
      title: "LINKFOLD",
      status: "shipped",
      tag: "Fullstack",
      description:
        "A link-in-bio platform with click analytics and Pro subscriptions. Built with Supabase authentication, Google OAuth, and Stripe; Stripe webhooks are the source of truth for subscription status.",
      stack: ["Node.js", "Express", "MongoDB", "React", "Supabase", "Stripe"],
      highlights: [
        "Google OAuth",
        "Stripe subscription webhooks",
        "Click analytics",
      ],
      repo: "https://github.com/Ajibzrahz/LINKFOLD",
      live: "https://linkfold-ft.vercel.app",
    },
    {
      title: "Expense Tracker",
      status: "shipped",
      tag: "Fullstack",
      description:
        "A personal finance app for tracking transactions, setting monthly budgets, and reviewing spending analytics. Its REST API serves a Next.js client with transaction, budget, and reporting features.",
      stack: ["Node.js", "Express", "MongoDB", "Next.js"],
      highlights: [
        "Transaction tracking",
        "Monthly budgets",
        "Spending analytics",
      ],
      repo: "https://github.com/Ajibzrahz/Expense-Tracker-FE",
      live: "https://expense-tracker-navy-chi-55.vercel.app/",
    },
    {
      title: "Livestock Cost Estimator (LIES)",
      status: "shipped",
      tag: "Fullstack",
      description:
        "A data-driven platform that helps livestock farmers estimate startup and operating costs and compare farm scales. It combines an Express API with a Python machine-learning service.",
      stack: ["Node.js", "Express", "MongoDB", "FastAPI"],
      highlights: [
        "Farm cost estimation",
        "Data-driven calculations",
        "Python service integration",
      ],
      repo: "https://github.com/Ajibzrahz/livestock-cost-estimator-backend",
      live: "https://livestock-cost-estimator.vercel.app/",
    },
  ];

  const filters = ["All", "Fullstack", "Backend"];
  const shown =
    filter === "All" ? projects : projects.filter((p) => p.tag === filter);

  useEffect(() => {
    const ids = nav.map((n) => n.id);
    const onScroll = () => {
      let current = "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 180) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el)
      el.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "start",
      });
  };

  const ease = [0.22, 1, 0.36, 1];
  const fade = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.6, ease, delay },
        };

  const SectionTitle = ({ children }) => (
    <div className="sec-title">
      <span className="sec-dot" />
      <span className="sec-line" />
      <h2>{children}</h2>
    </div>
  );

  return (
    <div className="shell">
      <style>{css}</style>

      {/* ---------- sidebar ---------- */}
      <aside className="sidebar">
        <div className="side-photo">
          <img src="/picture.png" alt="Portrait of Raheem Ajibona" />
        </div>
        <nav className="side-nav" aria-label="Main navigation">
          {nav.map((n) => (
            <button
              key={n.id}
              className={active === n.id ? "side-link on" : "side-link"}
              onClick={() => go(n.id)}
            >
              {n.label}
            </button>
          ))}
        </nav>
        <div className="side-foot">
          © {new Date().getFullYear()} Raheem Ajibona
        </div>
      </aside>

      {/* ---------- right dot nav ---------- */}
      <div className="dots">
        {nav.map((n) => {
          const Icon = n.icon;
          return (
            <button
              key={n.id}
              className={active === n.id ? "dot on" : "dot"}
              onClick={() => go(n.id)}
              aria-label={n.label}
            >
              <Icon size={16} strokeWidth={2.2} />
            </button>
          );
        })}
      </div>

      {/* ---------- main ---------- */}
      <main className="main">
        {/* hero */}
        <section id="home" className="hero">
          <motion.div
            className="hero-copy"
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, y: 24 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.7, ease },
                })}
          >
            <span className="hi">HI THERE!</span>
            <h1>
              I'M
              <br />
              RAHEEM
            </h1>
            <span className="role-tag">Backend Developer | API Engineer</span>
            <span className="ready">BACKEND ENGINEERING · API DEVELOPMENT</span>
            <p className="lede">
              I design and ship APIs, auth flows, and data-driven backends with
              Node.js, TypeScript, Express, and MongoDB. Computer Science
              graduate from FUNAAB, focused on building reliable services and
              backend systems that hold up in production.
            </p>
            <div className="cta-row">
              <button
                className="btn btn-primary"
                onClick={() => go("portfolio")}
              >
                Explore Projects <ArrowRight size={17} strokeWidth={2.4} />
              </button>
              <button className="btn btn-ghost" onClick={() => go("contact")}>
                Contact Me
              </button>
            </div>
            <div className="hero-socials">
              <a
                href="https://github.com/Ajibzrahz"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> GitHub <ArrowUpRight size={13} />
              </a>
              <a
                href="https://www.linkedin.com/in/raheem-ajibona-489bb4270/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin /> LinkedIn <ArrowUpRight size={13} />
              </a>
              <span className="availability">
                <span /> Open to junior backend opportunities
              </span>
            </div>
          </motion.div>

          <motion.div
            className="hero-photo"
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, scale: 0.94 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.7, ease, delay: 0.12 },
                })}
          >
            <img src="/picture.png" alt="Portrait of Raheem Ajibona" />
          </motion.div>
        </section>

        {/* about */}
        <section id="about" className="about">
          <motion.div {...fade()}>
            <SectionTitle>ABOUT ME</SectionTitle>
            <p className="about-lede">
              I'm <strong>Raheem Ajibona</strong>, a Computer Science graduate
              from the Federal University of Agriculture, Abeokuta (FUNAAB),
              focused on backend engineering. I enjoy turning application
              requirements into dependable APIs, clear data models, secure
              authentication flows, and maintainable services. My current stack
              is Node.js, TypeScript, Express, and MongoDB.
            </p>
          </motion.div>

          <motion.div className="skills-strip" {...fade(0.04)}>
            <p className="mini-head">
              <span className="bar" />
              Core Technologies
            </p>
            <div className="skill-groups">
              <div>
                <strong>Languages</strong>
                <span>JavaScript · TypeScript · Python</span>
              </div>
              <div>
                <strong>Backend</strong>
                <span>Node.js · Express.js · REST APIs</span>
              </div>
              <div>
                <strong>Data</strong>
                <span>MongoDB · Mongoose</span>
              </div>
              <div>
                <strong>Auth & testing</strong>
                <span>JWT · OAuth · Jest</span>
              </div>
              <div>
                <strong>Tools & deployment</strong>
                <span>Git · GitHub · Docker · Render · Vercel</span>
              </div>
            </div>
          </motion.div>

          <div className="about-grid">
            <motion.div className="about-col" {...fade(0.05)}>
              <p className="mini-head">
                <span className="bar" />
                What I Do
              </p>
              <div className="cards">
                {services.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div className="card" key={s.title}>
                      <span className="card-ic">
                        <Icon size={20} strokeWidth={2} />
                      </span>
                      <div>
                        <h3>{s.title}</h3>
                        <p>{s.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div className="about-col" {...fade(0.12)}>
              <p className="mini-head">
                <span className="bar" />
                Fun Facts
              </p>
              <div className="facts">
                {facts.map((f) => (
                  <div className="fact" key={f.label}>
                    <span className="fact-n">{f.n}</span>
                    <span className="fact-l">{f.label}</span>
                  </div>
                ))}
              </div>
              <div className="edu">
                Computer Science Graduate · Federal University of Agriculture,
                Abeokuta (FUNAAB) · 2026
              </div>
            </motion.div>
          </div>
        </section>

        {/* portfolio */}
        <section id="portfolio" className="portfolio">
          <motion.div {...fade()}>
            <SectionTitle>PORTFOLIO</SectionTitle>
          </motion.div>

          <div className="filters">
            {filters.map((f) => (
              <button
                key={f}
                className={filter === f ? "pill on" : "pill"}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="proj-grid">
            {shown.map((p, i) => (
              <motion.article
                className="proj"
                key={p.title}
                {...fade(i * 0.05)}
              >
                <div className="proj-body">
                  <div className="proj-top">
                    <h3>{p.title}</h3>
                    <span className="status done">
                      {p.status === "live" ? "LIVE" : "SHIPPED"}
                    </span>
                  </div>
                  <p className="proj-desc">{p.description}</p>
                  {p.highlights && (
                    <ul className="proj-highlights">
                      {p.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  <div className="proj-stack">
                    {p.stack.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="proj-actions">
                  <a href={p.live} target="_blank" rel="noreferrer">
                    Live Demo <ArrowUpRight size={15} strokeWidth={2.2} />
                  </a>
                  <a href={p.repo} target="_blank" rel="noreferrer">
                    <FaGithub size={16} /> Repository
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="hostelfix-case">
            <div className="case-heading">
              <span className="case-kicker">
                FEATURED ENGINEERING CASE STUDY
              </span>
              <h3>HostelFix: designing a complete ticket workflow</h3>
              <p>
                Beyond building endpoints, I focused on the rules that keep a
                multi-role application predictable and secure.
              </p>
            </div>
            <div className="case-points">
              <div>
                <ShieldCheck />
                <strong>Access control</strong>
                <span>
                  Student, staff, and admin permissions with ownership checks.
                </span>
              </div>
              <div>
                <Workflow />
                <strong>Workflow design</strong>
                <span>
                  Tickets move through clear states from reporting to
                  resolution.
                </span>
              </div>
              <div>
                <TestTube2 />
                <strong>Automated tests</strong>
                <span>
                  40 tests covering important authentication and ticket
                  workflows.
                </span>
              </div>
            </div>
            <a
              className="case-link"
              href="https://github.com/Ajibzrahz/HostelFix"
              target="_blank"
              rel="noreferrer"
            >
              Explore the implementation <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        {/* engineering approach */}
        <section className="principles">
          <motion.div {...fade()}>
            <SectionTitle>HOW I BUILD</SectionTitle>
            <p className="about-lede">
              I care about more than getting an endpoint to return a response. I
              aim to build backends that are understandable, secure, testable,
              and practical to maintain.
            </p>
          </motion.div>
          <div className="principle-grid">
            <article className="principle-card">
              <ShieldCheck />
              <h3>Security first</h3>
              <p>
                Authentication, authorization, input validation, and careful
                handling of user-owned resources.
              </p>
            </article>
            <article className="principle-card">
              <Workflow />
              <h3>Clear architecture</h3>
              <p>
                Separation of routes, controllers, services, models, and
                middleware so responsibilities stay clear.
              </p>
            </article>
            <article className="principle-card">
              <TestTube2 />
              <h3>Test important flows</h3>
              <p>
                Automated checks for business rules, permissions, and failure
                cases—not just happy paths.
              </p>
            </article>
          </div>
        </section>

        {/* experience */}
        <section id="experience" className="experience">
          <motion.div {...fade()}>
            <SectionTitle>EXPERIENCE & EDUCATION</SectionTitle>
          </motion.div>
          <div className="timeline">
            <article className="timeline-item">
              <span className="timeline-mark">
                <BriefcaseBusiness size={18} />
              </span>
              <div className="timeline-content">
                <div className="timeline-meta">
                  APRIL 2025 — SEPTEMBER 2025 · IT INTERNSHIP
                </div>
                <h3>IT Intern</h3>
                <h4>Jubaili Bros Engineering Limited</h4>
                <p>
                  Worked with Windows Server, Active Directory, Remote Desktop
                  Services, network devices, shared printers, and end-user
                  technical support. Also gained exposure to Microsoft Azure,
                  DevOps practices, and cloud storage.
                </p>
              </div>
            </article>
            <article className="timeline-item">
              <span className="timeline-mark">
                <GraduationCap size={18} />
              </span>
              <div className="timeline-content">
                <div className="timeline-meta">2026 · EDUCATION</div>
                <h3>Computer Science Graduate</h3>
                <h4>Federal University of Agriculture, Abeokuta (FUNAAB)</h4>
                <p>
                  Built a foundation in computing and software development, with
                  a growing focus on backend engineering, API design, databases,
                  and cloud deployment.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* contact */}
        <section id="contact" className="contact">
          <motion.div {...fade()}>
            <SectionTitle>CONTACT</SectionTitle>
            <p className="about-lede">
              I'm open to junior backend developer and backend engineering
              opportunities, where I can contribute to reliable APIs and
              production software using Node.js, TypeScript, and MongoDB. I'm
              also open to meaningful engineering collaborations.
            </p>
          </motion.div>

          <div className="contact-grid contact-grid-simple">
            <motion.div className="contact-info" {...fade(0.05)}>
              <a className="info" href="mailto:ajibonaraheem@gmail.com">
                <span className="info-ic">
                  <Mail size={18} strokeWidth={2} />
                </span>
                <span>
                  <span className="info-l">Email</span>
                  <span className="info-v">ajibonaraheem@gmail.com</span>
                </span>
              </a>
              <div className="info">
                <span className="info-ic">
                  <MapPin size={18} strokeWidth={2} />
                </span>
                <span>
                  <span className="info-l">Location</span>
                  <span className="info-v">Abeokuta, Nigeria</span>
                </span>
              </div>
              <a
                className="info"
                href="https://www.linkedin.com/in/raheem-ajibona-489bb4270/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="info-ic">
                  <FaLinkedin />
                </span>
                <span>
                  <span className="info-l">LinkedIn</span>
                  <span className="info-v">Connect professionally</span>
                </span>
                <ArrowUpRight className="info-arrow" size={17} />
              </a>
              <div className="socials">
                <a
                  href="https://github.com/Ajibzrahz"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/raheem-ajibona-489bb4270/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </motion.div>
            <motion.div className="contact-panel" {...fade(0.1)}>
              <span className="case-kicker">LET'S CONNECT</span>
              <h3>Have a backend role or a project in mind?</h3>
              <p>
                I'm interested in junior backend developer and backend
                engineering opportunities where I can contribute to APIs,
                data-driven applications, and reliable services.
              </p>
              <a
                className="btn btn-primary"
                href="mailto:ajibonaraheem@gmail.com?subject=Backend%20Engineering%20Opportunity"
              >
                Email me <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </div>
        </section>
        <footer className="site-footer">
          <span>© {new Date().getFullYear()} Raheem Ajibona</span>
          <span>Backend development · API engineering · Reliable software</span>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              go("home");
            }}
          >
            Back to top ↑
          </a>
        </footer>
      </main>
    </div>
  );
}

const css = `
  *, *::before, *::after { box-sizing: border-box; }

  :root {
    --bg: #f1f2f4;
    --side: #2f3033;
    --side-2: #3a3b3f;
    --panel: #ffffff;
    --line: #e6e8ec;
    --ink: #14151a;
    --ink-dim: #5b6270;
    --ink-faint: #9aa1ad;
    --accent: #7c3aed;
    --accent-soft: #ede9fe;
    --accent-deep: #6d28d9;
    --green: #16a34a;
    --display: "Archivo", "Inter", system-ui, sans-serif;
    --sans: "Inter", system-ui, -apple-system, sans-serif;
    --mono: "JetBrains Mono", ui-monospace, Menlo, monospace;
  }

  .shell {
    min-height: 100vh;
    background: var(--bg);
    color: var(--ink);
    font-family: var(--sans);
    -webkit-font-smoothing: antialiased;
    padding-left: 280px;
  }

  /* sidebar */
  .sidebar {
    position: fixed;
    top: 0; left: 0; bottom: 0;
    width: 280px;
    background: var(--side);
    display: flex;
    flex-direction: column;
    padding: 36px 28px 28px;
    z-index: 40;
  }
  .side-photo {
    width: 150px; height: 150px;
    margin: 0 auto 40px;
    border-radius: 50%;
    padding: 5px;
    border: 2px solid var(--accent);
    box-shadow: 0 0 0 4px rgba(124,58,237,0.18);
  }
  .side-photo img {
    width: 100%; height: 100%;
    object-fit: cover; border-radius: 50%;
    display: block;
  }
  .side-nav { display: flex; flex-direction: column; gap: 6px; }
  .side-link {
    text-align: left;
    font-family: var(--sans);
    font-size: 16px;
    font-weight: 500;
    color: #d6d8dd;
    background: transparent;
    border: none;
    padding: 14px 18px;
    border-radius: 12px;
    cursor: pointer;
    transition: background .18s, color .18s;
  }
  .side-link:hover { color: #fff; background: var(--side-2); }
  .side-link.on {
    background: var(--accent);
    color: #ffffff;
    font-weight: 700;
  }
  .side-foot {
    margin-top: auto;
    padding-top: 22px;
    border-top: 1px solid rgba(255,255,255,0.10);
    font-size: 12.5px;
    color: #8a8d94;
  }

  /* right dot nav */
  .dots {
    position: fixed;
    right: 22px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 14px;
    z-index: 40;
  }
  .dots::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 8px; bottom: 8px;
    width: 2px;
    background: #d9dce1;
    transform: translateX(-50%);
    z-index: -1;
  }
  .dot {
    width: 42px; height: 42px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid var(--line);
    color: var(--ink-dim);
    display: inline-flex;
    align-items: center; justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 14px rgba(20,21,26,0.08);
    transition: transform .18s, background .18s, color .18s;
  }
  .dot:hover { transform: scale(1.08); color: var(--ink); }
  .dot.on { background: var(--accent); color: #ffffff; border-color: var(--accent); }

  /* main layout */
  .main { max-width: 1080px; margin: 0 auto; padding: 0 90px 0 56px; }

  /* hero */
  .hero {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    align-items: center;
    gap: 48px;
    padding: 60px 0;
  }
  .hi {
    display: inline-block;
    font-family: var(--mono);
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.06em;
    color: var(--accent-deep);
    background: var(--accent-soft);
    padding: 8px 18px;
    border-radius: 999px;
    margin-bottom: 22px;
  }
  h1 {
    font-family: var(--display);
    font-weight: 900;
    font-size: clamp(3.2rem, 8vw, 6rem);
    line-height: 0.92;
    letter-spacing: -0.02em;
    color: var(--ink);
    margin: 0 0 22px;
  }
  .role-tag {
    display: inline-block;
    font-family: var(--display);
    font-weight: 700;
    font-size: clamp(1.05rem, 2.4vw, 1.5rem);
    color: #ffffff;
    background: var(--accent);
    padding: 8px 16px;
    margin-bottom: 14px;
  }
  .ready {
    display: block;
    width: fit-content;
    font-family: var(--mono);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.04em;
    color: var(--accent);
    background: #161616;
    padding: 9px 16px;
    margin-bottom: 26px;
  }
  .lede {
    color: var(--ink-dim);
    font-size: 17px;
    line-height: 1.75;
    max-width: 480px;
    margin: 0 0 32px;
  }
  .cta-row { display: flex; flex-wrap: wrap; gap: 14px; }
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    font-family: var(--sans);
    font-size: 15.5px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    padding: 14px 26px;
    border-radius: 999px;
    transition: transform .16s, background .18s, box-shadow .18s;
  }
  .btn-primary { background: var(--accent); color: #ffffff; box-shadow: 0 8px 20px rgba(124,58,237,0.30); }
  .btn-primary:hover { transform: translateY(-2px); background: var(--accent-deep); }
  .btn-ghost { background: #fff; color: var(--ink); border: 1.5px solid #d4d7dd; }
  .btn-ghost:hover { border-color: var(--ink); }

  .hero-photo {
    width: 100%;
    max-width: 420px;
    aspect-ratio: 1 / 1;
    margin-left: auto;
    border-radius: 50%;
    padding: 8px;
    border: 3px solid #fff;
    box-shadow: 0 24px 60px rgba(20,21,26,0.18);
    background: #fff;
  }
  .hero-photo img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; display: block; }

  /* section title */
  .sec-title { display: flex; align-items: center; gap: 18px; margin-bottom: 30px; }
  .sec-dot {
    width: 56px; height: 56px;
    flex-shrink: 0;
    border-radius: 50%;
    background: var(--accent);
    position: relative;
  }
  .sec-dot::after {
    content: ""; position: absolute;
    inset: 0; margin: auto;
    width: 16px; height: 16px;
    border-radius: 50%;
    background: #161616;
  }
  .sec-line { width: 70px; height: 3px; background: #d9dce1; flex-shrink: 0; }
  .sec-title h2 {
    font-family: var(--display);
    font-weight: 900;
    font-size: clamp(2.4rem, 6vw, 4rem);
    letter-spacing: -0.02em;
    color: var(--ink);
    margin: 0;
  }

  /* about */
  .about { padding: 100px 0; scroll-margin-top: 24px; }
  .portfolio, .contact, .experience { scroll-margin-top: 24px; }
  .about-lede {
    font-size: 19px;
    line-height: 1.7;
    color: var(--ink-dim);
    max-width: 820px;
    margin: 0 0 56px;
  }
  .about-lede strong { color: var(--ink); font-weight: 700; }
  .skills-strip { margin: 30px 0 38px; }
  .skill-groups { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
  .skill-groups > div { display: flex; flex-direction: column; gap: 5px; padding: 14px 16px; border: 1px solid var(--line); border-radius: 12px; background: #fff; }
  .skill-groups strong { color: var(--ink); font-size: 12px; }
  .skill-groups span { color: var(--ink-dim); font-size: 12.5px; line-height: 1.5; }
  .about-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 44px; align-items: start; }
  .mini-head {
    display: flex; align-items: center; gap: 12px;
    font-family: var(--display);
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--ink);
    margin: 0 0 22px;
  }
  .mini-head .bar { width: 34px; height: 3px; background: var(--accent); }
  .cards { display: flex; flex-direction: column; gap: 16px; }
  .card {
    display: flex; gap: 16px;
    background: var(--panel);
    border: 1px solid var(--line);
    border-radius: 16px;
    padding: 22px;
    box-shadow: 0 6px 18px rgba(20,21,26,0.04);
    transition: transform .18s, box-shadow .18s;
  }
  .card:hover { transform: translateY(-3px); box-shadow: 0 14px 30px rgba(20,21,26,0.08); }
  .card-ic {
    flex-shrink: 0;
    width: 46px; height: 46px;
    border-radius: 12px;
    background: var(--accent-soft);
    color: var(--accent-deep);
    display: inline-flex; align-items: center; justify-content: center;
  }
  .card h3 { font-size: 17px; font-weight: 700; color: var(--ink); margin: 2px 0 7px; }
  .card p { font-size: 14.5px; line-height: 1.6; color: var(--ink-dim); margin: 0; }

  .facts { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .fact {
    background: var(--panel);
    border: 2px solid var(--accent);
    border-radius: 18px;
    padding: 24px 16px;
    text-align: center;
    box-shadow: 0 6px 18px rgba(124,58,237,0.12);
  }
  .fact-n { display: block; font-family: var(--display); font-weight: 800; font-size: 2rem; color: var(--accent-deep); }
  .fact-l { display: block; font-size: 13px; color: var(--ink-dim); margin-top: 4px; }
  .edu {
    margin-top: 22px;
    font-family: var(--mono);
    font-size: 12.5px;
    line-height: 1.6;
    color: var(--ink-dim);
    border-left: 3px solid var(--accent);
    padding-left: 14px;
  }

  /* portfolio */
  .portfolio { padding: 60px 0 100px; }
  .filters { display: flex; flex-wrap: wrap; gap: 10px; margin: 0 0 32px; }
  .pill {
    font-family: var(--sans);
    font-size: 14.5px;
    font-weight: 600;
    color: var(--ink-dim);
    background: #fff;
    border: 1px solid var(--line);
    padding: 10px 24px;
    border-radius: 999px;
    cursor: pointer;
    transition: background .18s, color .18s;
  }
  .pill:hover { color: var(--ink); }
  .pill.on { background: var(--accent); color: #ffffff; border-color: var(--accent); }

  .proj-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 22px; }
  .proj {
    display: flex; flex-direction: column;
    background: var(--panel);
    border: 1px solid var(--line);
    border-radius: 18px;
    padding: 26px;
    box-shadow: 0 6px 18px rgba(20,21,26,0.04);
    transition: transform .18s, box-shadow .18s;
  }
  .proj:hover { transform: translateY(-4px); box-shadow: 0 18px 36px rgba(20,21,26,0.10); }
  .proj-top { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 10px; }
  .proj-top h3 { font-size: 19px; font-weight: 700; color: var(--ink); margin: 0; }
  .status {
    font-family: var(--mono);
    font-size: 10.5px;
    font-weight: 600;
    padding: 3px 10px;
    border-radius: 999px;
    letter-spacing: 0.02em;
  }
  .status.done { color: var(--green); background: rgba(22,163,74,0.10); }
  .status.wip { color: var(--accent-deep); background: var(--accent-soft); }
  .proj-desc { font-size: 14.5px; line-height: 1.65; color: var(--ink-dim); margin: 0 0 18px; flex: 1; }
  .proj-highlights { display: grid; grid-template-columns: 1fr 1fr; gap: 7px 14px; padding: 0; margin: 0 0 18px; list-style: none; }
  .proj-highlights li { position: relative; padding-left: 14px; color: var(--ink-dim); font-size: 12px; line-height: 1.45; }
  .proj-highlights li::before { content: ""; position: absolute; left: 0; top: .48em; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }
  .proj-stack { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 20px; }
  .proj-stack span {
    font-family: var(--mono);
    font-size: 11.5px;
    color: var(--accent-deep);
    background: var(--accent-soft);
    padding: 4px 11px;
    border-radius: 999px;
  }
  .proj-actions { display: flex; flex-wrap: wrap; gap: 10px; }
  .proj-actions a {
    min-height: 40px; padding: 0 14px;
    border-radius: 10px;
    background: #1f2024;
    color: #fff;
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
    font-size: 12px; font-weight: 600;
    text-decoration: none;
    transition: transform .16s, background .18s;
  }
  .proj-actions a:hover { transform: translateY(-2px); background: var(--accent); color: #ffffff; }

  /* contact */
  .contact { padding: 60px 0 120px; }
  .contact-grid { display: grid; grid-template-columns: 0.85fr 1.15fr; gap: 28px; align-items: start; }
  .contact-info { display: flex; flex-direction: column; gap: 16px; }
  .info {
    display: flex; align-items: center; gap: 16px;
    background: var(--panel);
    border: 1px solid var(--line);
    border-radius: 16px;
    padding: 20px;
    text-decoration: none;
    box-shadow: 0 6px 18px rgba(20,21,26,0.04);
    transition: transform .16s;
  }
  a.info:hover { transform: translateY(-2px); }
  .info-ic {
    flex-shrink: 0;
    width: 46px; height: 46px;
    border-radius: 50%;
    background: var(--accent-soft);
    color: var(--accent-deep);
    display: inline-flex; align-items: center; justify-content: center;
  }
  .info-l { display: block; font-size: 12.5px; color: var(--ink-faint); }
  .info-v { display: block; font-size: 15px; font-weight: 600; color: var(--ink); margin-top: 2px; }
  .socials { display: flex; gap: 12px; margin-top: 4px; }
  .socials a {
    width: 46px; height: 46px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid var(--line);
    color: var(--ink-dim);
    display: inline-flex; align-items: center; justify-content: center;
    font-size: 18px;
    text-decoration: none;
    transition: transform .16s, color .18s, border-color .18s;
  }
  .socials a:hover { color: var(--accent-deep); border-color: var(--accent); transform: translateY(-2px); }

  .contact-form {
    background: var(--panel);
    border: 1px solid var(--line);
    border-radius: 20px;
    padding: 30px;
    display: flex; flex-direction: column; gap: 18px;
    box-shadow: 0 10px 30px rgba(20,21,26,0.06);
  }
  .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  .contact-form label {
    display: flex; flex-direction: column; gap: 8px;
    font-size: 14px; font-weight: 600; color: var(--ink);
  }
  .contact-form input,
  .contact-form textarea {
    font-family: var(--sans);
    font-size: 14.5px;
    color: var(--ink);
    background: #f7f8fa;
    border: 1px solid var(--line);
    border-radius: 11px;
    padding: 13px 15px;
    font-weight: 400;
    resize: vertical;
    transition: border-color .18s, background .18s;
  }
  .contact-form input::placeholder,
  .contact-form textarea::placeholder { color: var(--ink-faint); }
  .contact-form input:focus,
  .contact-form textarea:focus {
    outline: none;
    border-color: var(--accent);
    background: #fff;
  }
  .contact-form .btn { align-self: flex-start; margin-top: 4px; }

  /* hero refinements */
  .hero-socials { display: flex; flex-wrap: wrap; align-items: center; gap: 18px; margin-top: 24px; }
  .hero-socials a { display: inline-flex; align-items: center; gap: 7px; color: var(--ink-dim); font-size: 13px; font-weight: 650; text-decoration: none; }
  .hero-socials a:hover { color: var(--accent-deep); }
  .availability { display: inline-flex; align-items: center; gap: 8px; color: var(--ink-dim); font-size: 12px; }
  .availability span { width: 8px; height: 8px; border-radius: 50%; background: #16a34a; box-shadow: 0 0 0 4px rgba(22,163,74,.12); }

  /* technical case study */
  .hostelfix-case { margin-top: 34px; padding: 30px; border: 1px solid #ddd6fe; border-radius: 20px; background: linear-gradient(135deg, #faf9ff, #fff 65%); }
  .case-kicker { display: inline-block; color: var(--accent-deep); font: 600 11px var(--mono); letter-spacing: .08em; }
  .case-heading h3, .contact-panel h3 { margin: 12px 0 8px; color: var(--ink); font: 800 clamp(1.35rem, 2.5vw, 1.8rem) var(--display); letter-spacing: -.025em; }
  .case-heading p, .contact-panel p { margin: 0; max-width: 760px; color: var(--ink-dim); font-size: 14.5px; line-height: 1.7; }
  .case-points { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 24px 0; }
  .case-points > div { display: flex; flex-direction: column; align-items: flex-start; gap: 8px; padding: 17px; border: 1px solid var(--line); border-radius: 14px; background: #fff; }
  .case-points svg { width: 21px; height: 21px; color: var(--accent-deep); }
  .case-points strong { color: var(--ink); font-size: 14px; }
  .case-points span { color: var(--ink-dim); font-size: 12.5px; line-height: 1.55; }
  .case-link { display: inline-flex; align-items: center; gap: 8px; color: var(--accent-deep); font-size: 13px; font-weight: 700; text-decoration: none; }
  .case-link:hover { text-decoration: underline; }

  /* engineering principles */
  .principles { padding: 70px 0 90px; }
  .principle-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
  .principle-card { padding: 24px; border: 1px solid var(--line); border-radius: 18px; background: #fff; box-shadow: 0 6px 18px rgba(20,21,26,.035); }
  .principle-card > svg { width: 24px; height: 24px; color: var(--accent-deep); }
  .principle-card h3 { margin: 17px 0 8px; font-size: 16px; }
  .principle-card p { margin: 0; color: var(--ink-dim); font-size: 13.5px; line-height: 1.65; }

  /* experience timeline */
  .experience { padding: 60px 0 90px; }
  .timeline { position: relative; display: grid; gap: 18px; max-width: 850px; }
  .timeline::before { content: ""; position: absolute; left: 22px; top: 25px; bottom: 25px; width: 2px; background: #ddd6fe; }
  .timeline-item { position: relative; display: grid; grid-template-columns: 46px 1fr; gap: 18px; }
  .timeline-mark { z-index: 1; display: grid; place-items: center; width: 46px; height: 46px; border: 1px solid #ddd6fe; border-radius: 50%; background: #f5f3ff; color: var(--accent-deep); }
  .timeline-content { padding: 20px 22px; border: 1px solid var(--line); border-radius: 16px; background: #fff; }
  .timeline-meta { color: var(--accent-deep); font: 600 10.5px var(--mono); letter-spacing: .04em; }
  .timeline-content h3 { margin: 9px 0 3px; color: var(--ink); font-size: 17px; }
  .timeline-content h4 { margin: 0 0 10px; color: var(--ink-dim); font-size: 13.5px; font-weight: 650; }
  .timeline-content p { margin: 0; color: var(--ink-dim); font-size: 13.5px; line-height: 1.65; }

  /* contact without a fake form backend */
  .contact-grid-simple { grid-template-columns: 1fr 1fr; }
  .contact-panel { min-height: 100%; padding: 30px; border: 1px solid #ddd6fe; border-radius: 20px; background: #faf9ff; }
  .contact-panel .btn { margin-top: 22px; text-decoration: none; }
  .info-arrow { margin-left: auto; color: var(--ink-faint); }
  .site-footer { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px; padding: 24px 0 30px; border-top: 1px solid var(--line); color: var(--ink-faint); font-size: 11.5px; }
  .site-footer a { color: var(--accent-deep); font-weight: 650; text-decoration: none; }

  /* focus */
  button:focus-visible, a:focus-visible {
    outline: 2px solid var(--accent-deep);
    outline-offset: 3px;
    border-radius: 8px;
  }

  /* responsive */
  @media (max-width: 1080px) {
    .main { padding: 0 70px 0 40px; }
    .hero { grid-template-columns: 1fr; gap: 36px; padding: 100px 0 60px; }
    .hero-photo { max-width: 320px; margin: 0; }
    .about-grid { grid-template-columns: 1fr; gap: 40px; }
    .contact-grid { grid-template-columns: 1fr; }
    .case-points, .principle-grid { grid-template-columns: 1fr 1fr; }
    .skill-groups { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 840px) {
    .shell { padding-left: 0; padding-bottom: 80px; }
    .sidebar {
      position: static;
      width: 100%;
      flex-direction: row;
      align-items: center;
      padding: 14px 18px;
      gap: 16px;
      overflow-x: auto;
    }
    .side-photo { width: 48px; height: 48px; margin: 0; }
    .side-nav { flex-direction: row; gap: 4px; }
    .side-link { padding: 8px 14px; font-size: 14px; white-space: nowrap; }
    .side-foot { display: none; }
    .dots { display: none; }
    .main { padding: 0 22px; max-width: 100%; }
    .proj-grid { grid-template-columns: 1fr; }
    .field-row { grid-template-columns: 1fr; }
    .case-points, .principle-grid, .contact-grid-simple, .skill-groups { grid-template-columns: 1fr; }
    .hero-socials { gap: 13px; }
    .hostelfix-case, .contact-panel { padding: 22px; }
    .site-footer { flex-direction: column; }
  }
  @media (max-width: 480px) {
    .facts { grid-template-columns: 1fr 1fr; }
  }

  @media (prefers-reduced-motion: reduce) {
    * { transition: none !important; }
  }
`;
