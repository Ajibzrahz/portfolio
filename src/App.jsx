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
  Menu,
  X,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function App() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState("home");
  const [filter, setFilter] = useState("All");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setMobileMenuOpen(false);
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
    <div className={`shell${sidebarCollapsed ? " sidebar-collapsed" : ""}${mobileMenuOpen ? " mobile-menu-open" : ""}`}>
      <style>{css}</style>

      {/* ---------- compact, collapsible navigation ---------- */}
      <aside className="sidebar">
        <div className="sidebar-top">
          <div className="side-photo">
            <img src="/picture.png" alt="Portrait of Raheem Ajibona" />
          </div>
          <button
            className="nav-toggle desktop-toggle"
            type="button"
            onClick={() => setSidebarCollapsed((value) => !value)}
            aria-label={sidebarCollapsed ? "Expand navigation" : "Collapse navigation"}
            title={sidebarCollapsed ? "Expand navigation" : "Collapse navigation"}
          >
            {sidebarCollapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
          </button>
          <button
            className="nav-toggle mobile-toggle"
            type="button"
            onClick={() => setMobileMenuOpen((value) => !value)}
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <nav className="side-nav" aria-label="Main navigation">
          {nav.map((n) => {
            const Icon = n.icon;
            return (
              <button
                key={n.id}
                className={active === n.id ? "side-link on" : "side-link"}
                onClick={() => go(n.id)}
                title={sidebarCollapsed ? n.label : undefined}
                aria-label={n.label}
              >
                <Icon className="side-link-icon" size={18} strokeWidth={2} />
                <span className="side-link-label">{n.label}</span>
              </button>
            );
          })}
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
              <a
                className="btn btn-cv"
                href="/resume.pdf"
                download="Raheem-Ajibona-CV.pdf"
                aria-label="Download Raheem Ajibona's CV as a PDF"
              >
                <FileText size={16} strokeWidth={2.2} /> Download CV
              </a>
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
    --bg:#f4f6f5; --panel:#fff; --ink:#142321; --ink-dim:#60706d;
    --ink-faint:#899692; --line:#e1e8e5; --side:#102522; --side-2:#193a34;
    --accent:#0d8b72; --accent-dark:#08715d; --accent-soft:#e2f3ed;
    --mint:#b7ead8; --green:#16845f; --display:'Manrope',sans-serif;
    --sans:'DM Sans',sans-serif; --mono:'DM Mono',monospace;
  }
  html { scroll-behavior:smooth; scroll-padding-top:28px; }
  body { margin:0; background:var(--bg); color:var(--ink); font-family:var(--sans); -webkit-font-smoothing:antialiased; }
  a { color:inherit; }
  .shell { min-height:100vh; padding-left:224px; background:linear-gradient(120deg,#f8faf9 0%,#f1f5f2 100%);transition:padding-left .28s ease; }
  .sidebar { position:fixed; inset:0 auto 0 0; width:224px; z-index:50; display:flex; flex-direction:column; padding:28px 17px 22px; color:#e8f3ef; background:radial-gradient(circle at 15% 8%,rgba(34,112,91,.32),transparent 32%),var(--side); border-right:1px solid rgba(255,255,255,.06);transition:width .28s ease,padding .28s ease; }
  .sidebar-top { display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:30px; }
  .nav-toggle { width:36px;height:36px;flex:0 0 36px;display:grid;place-items:center;border:1px solid rgba(255,255,255,.14);border-radius:9px;background:rgba(255,255,255,.06);color:#d8e9e2;cursor:pointer;transition:background .2s,color .2s; }
  .nav-toggle:hover { background:rgba(255,255,255,.13);color:#fff; }
  .mobile-toggle { display:none; }
  .sidebar-collapsed { padding-left:76px; }
  .sidebar-collapsed .sidebar { width:76px;padding:22px 12px; }
  .sidebar-collapsed .sidebar-top { flex-direction:column;gap:18px;margin-bottom:28px; }
  .sidebar-collapsed .side-photo { width:42px;height:42px;margin:0;padding:2px;border-radius:12px; }
  .sidebar-collapsed .side-photo img { border-radius:9px; }
  .sidebar-collapsed .side-nav { align-items:center; }
  .sidebar-collapsed .side-link { justify-content:center;padding:12px 0; }
  .sidebar-collapsed .side-link-label,.sidebar-collapsed .side-link::before,.sidebar-collapsed .side-foot { display:none; }
  .sidebar-collapsed .side-link-icon { display:block; }
  .side-photo { width:76px;height:76px;flex:0 0 76px;margin:0;padding:3px;border:1px solid rgba(183,234,216,.45);border-radius:20px;background:rgba(255,255,255,.05); }
  .side-photo img { width:100%;height:100%;display:block;object-fit:cover;object-position:center 30%;border-radius:16px; }
  .side-nav { display:flex;flex-direction:column;gap:5px; }
  .side-link { display:flex;align-items:center;gap:12px;width:100%;padding:11px 12px;border:1px solid transparent;border-radius:10px;background:transparent;color:#b7c9c3;text-align:left;font:600 13px var(--sans);cursor:pointer;transition:.2s ease; }
  .side-link-icon { flex:0 0 auto;opacity:.85; }
  .side-link-label { white-space:nowrap; }
  .side-link::before { content:'';width:6px;height:6px;border-radius:50%;background:#55766c;transition:.2s ease; }
  .side-link:hover { color:#fff;background:rgba(255,255,255,.06); }
  .side-link.on { color:#fff;background:linear-gradient(100deg,rgba(13,139,114,.28),rgba(13,139,114,.08));border-color:rgba(123,210,183,.17); }
  .side-link.on::before { background:#65d5b1;box-shadow:0 0 0 4px rgba(101,213,177,.12); }
  .side-foot { margin-top:auto;padding-top:20px;border-top:1px solid rgba(255,255,255,.11);color:#829a91;font:11px var(--mono);letter-spacing:.02em; }
  .dots { position:fixed;right:20px;top:50%;transform:translateY(-50%);z-index:40;display:flex;flex-direction:column;gap:10px; }
  .dots::before { content:'';position:absolute;top:15px;bottom:15px;left:50%;width:1px;background:#cbd8d2;z-index:-1; }
  .dot { width:36px;height:36px;border:1px solid var(--line);border-radius:11px;background:#fff;color:#73817d;display:grid;place-items:center;cursor:pointer;box-shadow:0 4px 12px rgba(20,40,34,.06);transition:.2s; }
  .dot:hover,.dot.on { color:#fff;background:var(--accent);border-color:var(--accent);transform:translateX(-2px); }
  .main { max-width:1200px;margin:0 auto;padding:0 78px 0 64px; }
  .hero { position:relative;min-height:760px;min-height:100svh;display:grid;grid-template-columns:1.08fr .92fr;align-items:center;gap:48px;padding:76px 0 80px; }
  .hero::before { content:'';position:absolute;top:11%;right:0;width:42%;height:70%;border-radius:36px;background:linear-gradient(145deg,rgba(13,139,114,.08),rgba(13,139,114,0));pointer-events:none; }
  .hero-copy { position:relative;z-index:1; }
  .hi { display:inline-flex;align-items:center;gap:9px;margin-bottom:25px;padding:8px 12px;border:1px solid #cce6dc;border-radius:6px;background:#e9f5ef;color:var(--accent-dark);font:500 11px var(--mono);letter-spacing:.12em; }
  .hi::before { content:'';width:7px;height:7px;border-radius:50%;background:var(--accent); }
  h1 { margin:0 0 20px;color:#102522;font:800 clamp(3.8rem,7.4vw,6.7rem)/.91 var(--display);letter-spacing:-.075em; }
  h1::first-line { color:#102522; }
  .role-tag { display:inline-block;margin:0 0 15px;padding:8px 12px;border-left:3px solid var(--accent);background:#e5f2ed;color:#20584b;font:700 clamp(1rem,2vw,1.2rem) var(--display); }
  .ready { display:block;margin:0 0 22px;color:#7c8c86;font:500 10px var(--mono);letter-spacing:.14em; }
  .lede { max-width:510px;margin:0 0 28px;color:#586a65;font-size:16px;line-height:1.85; }
  .cta-row { display:flex;flex-wrap:wrap;gap:11px; }
  .btn { display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:48px;padding:0 20px;border:1px solid transparent;border-radius:8px;font:700 13px var(--sans);text-decoration:none;cursor:pointer;transition:transform .2s,box-shadow .2s,background .2s; }
  .btn:hover { transform:translateY(-2px); }
  .btn-primary { color:#fff;background:var(--accent);box-shadow:0 9px 20px rgba(13,139,114,.2); }
  .btn-primary:hover { background:var(--accent-dark);box-shadow:0 12px 25px rgba(13,139,114,.25); }
  .btn-ghost { color:var(--ink);background:#fff;border-color:#d8e2dd; }
  .btn-ghost:hover { border-color:var(--accent);color:var(--accent-dark); }
  .hero-socials { display:flex;flex-wrap:wrap;align-items:center;gap:17px;margin-top:27px; }
  .hero-socials a { display:inline-flex;align-items:center;gap:7px;color:#52645e;font-size:12px;font-weight:700;text-decoration:none; }
  .hero-socials a:hover { color:var(--accent); }
  .availability { display:inline-flex;align-items:center;gap:8px;color:#62736d;font-size:11px; }
  .availability span { width:7px;height:7px;border-radius:50%;background:#20a475;box-shadow:0 0 0 4px rgba(32,164,117,.12); }
  .hero-photo { position:relative;z-index:1;width:min(100%,390px);aspect-ratio:4/5;margin:0 auto;background:transparent;overflow:visible; }
  .hero-photo::before { content:"";position:absolute;inset:18px -12px -12px 18px;border-radius:28px;background:linear-gradient(145deg,#dcece4,#c8ded3);transform:rotate(3deg);z-index:-1; }
  .hero-photo img { position:relative;width:100%;height:100%;display:block;object-fit:cover;object-position:center 25%;border:1px solid rgba(28,73,57,.08);border-radius:22px;box-shadow:0 14px 34px rgba(18,49,40,.11); }
  .sec-title { display:flex;align-items:center;gap:15px;margin-bottom:26px; }
  .sec-dot { position:relative;width:9px;height:9px;flex-shrink:0;border-radius:2px;background:var(--accent);transform:rotate(45deg); }
  .sec-line { width:42px;height:1px;flex-shrink:0;background:#a9c8bc; }
  .sec-title h2 { margin:0;color:#17332c;font:800 clamp(1.8rem,4vw,2.65rem)/1.1 var(--display);letter-spacing:-.055em; }
  .about,.portfolio,.principles,.experience,.contact { scroll-margin-top:26px; }
  .about { padding:92px 0 80px; }
  .about-lede { max-width:850px;margin:0 0 35px;color:#5b6c66;font-size:17px;line-height:1.85; }
  .about-lede strong { color:#16362d; }
  .mini-head { display:flex;align-items:center;gap:10px;margin:0 0 18px;color:#203c33;font:800 16px var(--display); }
  .mini-head .bar { width:22px;height:3px;border-radius:3px;background:var(--accent); }
  .skills-strip { margin:35px 0 46px;padding:24px;border:1px solid #dfe9e4;border-radius:14px;background:rgba(255,255,255,.76);box-shadow:0 10px 28px rgba(28,63,51,.035); }
  .skill-groups { display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px; }
  .skill-groups>div { display:flex;flex-direction:column;gap:7px;min-height:88px;padding:14px;border:1px solid #e7eeea;border-radius:9px;background:#fbfdfc; }
  .skill-groups strong { color:#285348;font:700 11px var(--mono);text-transform:uppercase;letter-spacing:.05em; }
  .skill-groups span { color:#667770;font-size:12px;line-height:1.55; }
  .about-grid { display:grid;grid-template-columns:1.1fr .9fr;gap:40px;align-items:start; }
  .cards { display:flex;flex-direction:column;gap:11px; }
  .card { display:flex;gap:15px;padding:18px;border:1px solid var(--line);border-radius:12px;background:#fff;transition:.2s; }
  .card:hover { transform:translateY(-3px);border-color:#b8d9cc;box-shadow:0 12px 28px rgba(24,65,50,.07); }
  .card-ic { display:grid;place-items:center;flex-shrink:0;width:42px;height:42px;border-radius:10px;background:var(--accent-soft);color:var(--accent-dark); }
  .card h3 { margin:1px 0 6px;color:#1b3830;font-size:14px;font-weight:800; }
  .card p { margin:0;color:#687871;font-size:12.5px;line-height:1.65; }
  .facts { display:grid;grid-template-columns:1fr 1fr;gap:11px; }
  .fact { min-height:112px;padding:19px 13px;border:1px solid #dce8e2;border-radius:12px;background:linear-gradient(145deg,#fff,#f5faf7);text-align:left; }
  .fact-n { display:block;color:var(--accent-dark);font:800 27px var(--display);letter-spacing:-.05em; }
  .fact-l { display:block;margin-top:5px;color:#687871;font-size:11px;line-height:1.4; }
  .edu { margin-top:15px;padding:15px 17px;border-left:3px solid var(--accent);border-radius:0 8px 8px 0;background:#e9f3ee;color:#536a61;font:11px/1.7 var(--mono); }
  .portfolio { padding:70px 0 90px; }
  .filters { display:flex;flex-wrap:wrap;gap:8px;margin:0 0 23px; }
  .pill { padding:9px 16px;border:1px solid #dce6e0;border-radius:7px;background:#fff;color:#65756e;font:600 12px var(--sans);cursor:pointer;transition:.2s; }
  .pill:hover,.pill.on { color:#fff;background:#173c32;border-color:#173c32; }
  .proj-grid { display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:15px; }
  .proj { position:relative;display:flex;flex-direction:column;min-height:100%;padding:23px;border:1px solid #dfe8e3;border-radius:14px;background:#fff;box-shadow:0 7px 22px rgba(24,60,47,.035);transition:transform .22s,border-color .22s,box-shadow .22s; }
  .proj::before { content:'';position:absolute;top:0;left:23px;width:36px;height:3px;border-radius:0 0 3px 3px;background:#86cbb3; }
  .proj:hover { transform:translateY(-5px);border-color:#b7d9cc;box-shadow:0 18px 38px rgba(24,60,47,.09); }
  .proj-top { display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin:5px 0 13px; }
  .proj-top h3 { margin:0;color:#17362d;font:800 18px var(--display);letter-spacing:-.035em; }
  .status { padding:5px 8px;border-radius:5px;font:500 9px var(--mono);letter-spacing:.08em; }
  .status.done { color:#167452;background:#e6f5ed; }
  .status.wip { color:#8a651b;background:#fbf1d9; }
  .proj-desc { flex:1;margin:0 0 15px;color:#63736c;font-size:13px;line-height:1.75; }
  .proj-highlights { display:grid;grid-template-columns:1fr 1fr;gap:8px 12px;margin:0 0 17px;padding:0;list-style:none; }
  .proj-highlights li { position:relative;padding-left:13px;color:#51675e;font-size:11px;line-height:1.5; }
  .proj-highlights li::before { content:'';position:absolute;left:0;top:.55em;width:5px;height:5px;border-radius:50%;background:#2ca17e; }
  .proj-stack { display:flex;flex-wrap:wrap;gap:6px;margin:0 0 18px; }
  .proj-stack span { padding:5px 8px;border:1px solid #e1ece6;border-radius:5px;background:#f5faf7;color:#507166;font:10px var(--mono); }
  .proj-actions { display:flex;flex-wrap:wrap;gap:8px;margin-top:auto;padding-top:14px;border-top:1px solid #edf1ee; }
  .proj-actions a { display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:36px;padding:0 12px;border:1px solid #dce7e1;border-radius:7px;background:#fff;color:#25483d;font-size:11px;font-weight:800;text-decoration:none;transition:.2s; }
  .proj-actions a:first-child { color:#fff;background:#173c32;border-color:#173c32; }
  .proj-actions a:hover { color:#fff;background:var(--accent);border-color:var(--accent); }
  .hostelfix-case { margin-top:22px;padding:27px;border:1px solid #cfe4d9;border-radius:15px;background:linear-gradient(125deg,#eaf5ef 0%,#fff 72%); }
  .case-kicker { display:inline-block;color:var(--accent-dark);font:500 10px var(--mono);letter-spacing:.12em; }
  .case-heading h3,.contact-panel h3 { margin:11px 0 8px;color:#17372e;font:800 clamp(1.35rem,2.4vw,1.8rem)/1.2 var(--display);letter-spacing:-.045em; }
  .case-heading p,.contact-panel p { max-width:750px;margin:0;color:#64766e;font-size:13px;line-height:1.75; }
  .case-points { display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:22px 0; }
  .case-points>div { display:flex;flex-direction:column;align-items:flex-start;gap:8px;padding:16px;border:1px solid #dfebe4;border-radius:10px;background:rgba(255,255,255,.85); }
  .case-points svg { width:21px;height:21px;color:var(--accent); }
  .case-points strong { color:#23463a;font-size:12px; }
  .case-points span { color:#687970;font-size:11px;line-height:1.6; }
  .case-link { display:inline-flex;align-items:center;gap:8px;color:var(--accent-dark);font-size:12px;font-weight:800;text-decoration:none; }
  .case-link:hover { text-decoration:underline; }
  .principles { padding:60px 0 85px; }
  .principle-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:12px; }
  .principle-card { padding:22px;border:1px solid #dfe8e3;border-radius:12px;background:#fff;transition:.2s; }
  .principle-card:hover { transform:translateY(-3px);border-color:#b9d9cc; }
  .principle-card>svg { width:23px;height:23px;color:var(--accent); }
  .principle-card h3 { margin:15px 0 7px;color:#234239;font-size:14px; }
  .principle-card p { margin:0;color:#687970;font-size:12px;line-height:1.7; }
  .experience { padding:55px 0 85px; }
  .timeline { position:relative;display:grid;gap:13px;max-width:850px; }
  .timeline::before { content:'';position:absolute;left:20px;top:28px;bottom:28px;width:1px;background:#b9d8ca; }
  .timeline-item { position:relative;display:grid;grid-template-columns:42px 1fr;gap:14px; }
  .timeline-mark { z-index:1;display:grid;place-items:center;width:42px;height:42px;border:1px solid #c9e1d5;border-radius:12px;background:#e9f5ee;color:var(--accent-dark); }
  .timeline-content { padding:19px 21px;border:1px solid #dfe8e3;border-radius:11px;background:#fff; }
  .timeline-meta { color:var(--accent-dark);font:500 9px var(--mono);letter-spacing:.1em; }
  .timeline-content h3 { margin:8px 0 3px;color:#1c3b31;font:800 16px var(--display); }
  .timeline-content h4 { margin:0 0 9px;color:#63736c;font-size:12px;font-weight:700; }
  .timeline-content p { margin:0;color:#687970;font-size:12px;line-height:1.7; }
  .contact { padding:55px 0 90px; }
  .contact-grid,.contact-grid-simple { display:grid;grid-template-columns:1fr 1fr;gap:17px;align-items:stretch; }
  .contact-info { display:flex;flex-direction:column;gap:10px; }
  .info { display:flex;align-items:center;gap:13px;padding:15px;border:1px solid #dfe8e3;border-radius:10px;background:#fff;text-decoration:none;transition:.2s; }
  a.info:hover { transform:translateX(3px);border-color:#b7d9cc; }
  .info-ic { display:grid;place-items:center;flex-shrink:0;width:39px;height:39px;border-radius:9px;background:#e7f4ed;color:var(--accent-dark); }
  .info-l { display:block;color:#87948e;font-size:10px; }
  .info-v { display:block;margin-top:3px;color:#203d33;font-size:12px;font-weight:800; }
  .info-arrow { margin-left:auto;color:#94a29b; }
  .socials { display:flex;gap:8px;margin-top:5px; }
  .socials a { display:grid;place-items:center;width:40px;height:40px;border:1px solid #dfe8e3;border-radius:9px;background:#fff;color:#365a4d;font-size:17px;text-decoration:none;transition:.2s; }
  .socials a:hover { color:#fff;background:var(--accent);border-color:var(--accent); }
  .contact-panel { display:flex;flex-direction:column;align-items:flex-start;justify-content:center;min-height:100%;padding:29px;border:1px solid #cfe4d9;border-radius:14px;background:linear-gradient(145deg,#eaf5ef,#f9fcfa); }
  .contact-panel .btn { margin-top:21px;text-decoration:none; }
  .btn-cv { border:1px solid #cbded5;background:#fff;color:#17372e;text-decoration:none; }
  .btn-cv:hover { border-color:var(--accent);background:var(--accent-soft);color:var(--accent-dark);transform:translateY(-2px); }
  .site-footer { display:flex;flex-wrap:wrap;justify-content:space-between;gap:10px;padding:20px 0 25px;border-top:1px solid #dce6e0;color:#84928c;font:10px var(--mono); }
  .site-footer a { color:var(--accent-dark);font-weight:600;text-decoration:none; }
  button:focus-visible,a:focus-visible { outline:3px solid #55b99a;outline-offset:3px;border-radius:7px; }
  @media(max-width:1120px) { .main{padding:0 58px 0 42px}.hero{gap:30px}.hero-photo{max-width:340px}.skill-groups{grid-template-columns:repeat(2,1fr)} }
  @media(max-width:850px) { .shell,.sidebar-collapsed{padding-left:0;padding-bottom:20px}.sidebar,.sidebar-collapsed .sidebar{position:sticky;top:0;inset:auto;width:100%;height:auto;min-height:64px;flex-direction:row;align-items:center;gap:14px;padding:9px 16px;box-shadow:0 5px 18px rgba(12,39,30,.12)}.sidebar-top,.sidebar-collapsed .sidebar-top{flex-direction:row;align-items:center;justify-content:space-between;gap:12px;width:100%;margin:0}.side-photo,.sidebar-collapsed .side-photo{width:42px;height:42px;flex:0 0 42px;margin:0;border-radius:12px;padding:2px}.side-photo img,.sidebar-collapsed .side-photo img{border-radius:9px}.desktop-toggle{display:none}.mobile-toggle{display:grid;margin-left:auto}.side-nav{display:none;position:absolute;top:calc(100% + 1px);left:0;right:0;flex-direction:column;gap:4px;padding:12px 16px 16px;background:var(--side);box-shadow:0 14px 24px rgba(12,39,30,.18)}.mobile-menu-open .side-nav{display:flex}.side-link,.sidebar-collapsed .side-link{width:100%;justify-content:flex-start;white-space:nowrap;padding:12px 13px;font-size:13px}.side-link::before,.sidebar-collapsed .side-link::before{display:block}.side-link-label,.sidebar-collapsed .side-link-label{display:inline}.side-foot,.dots{display:none}.main{max-width:100%;padding:0 25px}.hero{min-height:auto;grid-template-columns:1fr 250px;gap:25px;padding:75px 0 65px}.hero-photo{max-width:250px}.about{padding:65px 0}.proj-grid{grid-template-columns:1fr 1fr}.contact-grid-simple{grid-template-columns:1fr 1fr} }
  @media(max-width:620px) { .main{padding:0 18px}.hero{grid-template-columns:1fr;gap:28px;padding:55px 0 48px}.hero-copy{order:1}.hero-photo{order:0;width:190px;margin:0 auto 8px}.hero-photo::before{inset:12px -8px -8px 12px;border-radius:20px}.hero-photo img{border-radius:16px}.hi{margin-bottom:18px}h1{font-size:clamp(3.6rem,17vw,5.2rem)}.lede{font-size:14px}.hero-socials{gap:13px}.availability{flex-basis:100%}.sec-title{gap:10px}.sec-line{width:25px}.sec-title h2{font-size:1.8rem}.about,.portfolio,.principles,.experience,.contact{padding-top:48px;padding-bottom:55px}.about-lede{font-size:14px}.skill-groups,.about-grid,.proj-grid,.case-points,.principle-grid,.contact-grid-simple{grid-template-columns:1fr}.skills-strip{padding:16px}.skill-groups>div{min-height:0}.proj{padding:20px}.hostelfix-case{padding:20px}.facts{gap:8px}.fact{min-height:95px;padding:14px}.timeline-item{grid-template-columns:36px 1fr;gap:10px}.timeline-mark{width:36px;height:36px}.timeline::before{left:17px}.timeline-content{padding:16px}.site-footer{flex-direction:column} }
  @media(prefers-reduced-motion:reduce) { *,*::before,*::after{scroll-behavior:auto!important;animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important} }
`;