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
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function App() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState("home");
  const [filter, setFilter] = useState("All");

  const nav = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About Me", icon: User },
    { id: "portfolio", label: "Portfolio", icon: Briefcase },
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
    { n: "10+", label: "Projects Built" },
    { n: "4+", label: "Deployed Apps" },
    { n: "100%", label: "Backend Focus" },
    { n: "2026", label: "B.Sc. CS" },
  ];

  const projects = [
    {
      title: "Expense Tracker",
      status: "shipped",
      tag: "Fullstack",
      description:
        "A full-stack personal finance app: track transactions, set monthly budgets, and surface spending analytics. REST API for transactions, budgets, and reporting, served to a Next.js client.",
      stack: ["Node.js", "Express", "MongoDB", "Next.js"],
      repo: "https://github.com/Ajibzrahz/Expense-Tracker-FE",
      live: "https://expense-tracker-navy-chi-55.vercel.app/",
    },
    {
      title: "Livestock Cost Estimator",
      status: "shipped",
      tag: "Fullstack",
      description:
        "A data-driven platform that helps livestock farmers estimate startup and operational costs and compare farm scales. Pairs an Express API with a Python ML service.",
      stack: ["Node.js", "Express", "MongoDB", "FastAPI"],
      repo: "https://github.com/Ajibzrahz/livestock-cost-estimator-backend",
      live: "https://livestock-cost-estimator.vercel.app/",
    },
    {
      title: "Smart Mart Backend API",
      status: "shipped",
      tag: "Backend",
      description:
        "A scalable backend powering an e-commerce workflow — authentication, product handling, and a clean structure ready for frontend integration.",
      stack: ["Node.js", "Express", "MongoDB"],
      repo: "https://github.com/Ajibzrahz/Mart",
      live: null,
    },
    {
      title: "Authentication System",
      status: "shipped",
      tag: "Backend",
      description:
        "A secure auth flow built for real application use cases: JWT, email verification, HTTP-only cookies, and password reset logic.",
      stack: ["Node.js", "JWT", "MongoDB", "Nodemailer"],
      repo: "https://github.com/Ajibzrahz/Authetication",
      live: null,
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
    if (el) el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
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
          <img src="/picture.png" alt="Raheem Ajibona" />
        </div>
        <nav className="side-nav">
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
            <span className="ready">READY TO BUILD YOUR BACKEND</span>
            <p className="lede">
              I design and ship APIs, auth flows, and data-driven backends with
              Node.js, Express, and MongoDB. Final-year Computer Science,
              focused on services that hold up in production.
            </p>
            <div className="cta-row">
              <button
                className="btn btn-primary"
                onClick={() => go("portfolio")}
              >
                View Projects <ArrowRight size={17} strokeWidth={2.4} />
              </button>
              <button className="btn btn-ghost" onClick={() => go("contact")}>
                Contact Me
              </button>
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
            <img src="/picture.png" alt="Raheem Ajibona" />
          </motion.div>
        </section>

        {/* about */}
        <section id="about" className="about">
          <motion.div {...fade()}>
            <SectionTitle>ABOUT ME</SectionTitle>
            <p className="about-lede">
              I'm <strong>Raheem Ajibona</strong>, a backend developer who likes
              the part of a product nobody sees but everybody depends on. I
              build REST APIs, auth workflows, and database-backed apps, and
              deploy services on Render and Vercel — usually owning the backend
              while a frontend takes shape alongside it.
            </p>
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
                B.Sc. Computer Science · Federal University of Agriculture,
                Abeokuta · 2026
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
                    <span
                      className={`status ${
                        p.status === "in progress" ? "wip" : "done"
                      }`}
                    >
                      {p.status}
                    </span>
                  </div>
                  <p className="proj-desc">{p.description}</p>
                  <div className="proj-stack">
                    {p.stack.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="proj-actions">
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Code"
                  >
                    <FaGithub size={17} />
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live demo"
                    >
                      <ArrowUpRight size={17} strokeWidth={2.2} />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* contact */}
        <section id="contact" className="contact">
          <motion.div {...fade()}>
            <SectionTitle>CONTACT</SectionTitle>
            <p className="about-lede">
              Open to internships, junior backend roles, and collaborations.
              Feel free to reach out — I'm always happy to talk through a
              project.
            </p>
          </motion.div>

          <div className="contact-grid">
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
                href="/resume.PDF"
                target="_blank"
                rel="noreferrer"
              >
                <span className="info-ic">
                  <FileText size={18} strokeWidth={2} />
                </span>
                <span>
                  <span className="info-l">Resume</span>
                  <span className="info-v">View / download PDF</span>
                </span>
              </a>
              <div className="socials">
                <a href="https://github.com/Ajibzrahz" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/raheem-ajibona-489bb4270/"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </motion.div>

            <motion.form
              className="contact-form"
              {...fade(0.1)}
              action="mailto:ajibonaraheem@gmail.com"
              method="post"
              encType="text/plain"
            >
              <div className="field-row">
                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                  />
                </label>
              </div>
              <label>
                Subject
                <input
                  type="text"
                  name="subject"
                  placeholder="How can I help?"
                />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                />
              </label>
              <button type="submit" className="btn btn-primary">
                Send Message <ArrowRight size={17} strokeWidth={2.4} />
              </button>
            </motion.form>
          </div>
        </section>
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
  .about { padding: 100px 0; }
  .about-lede {
    font-size: 19px;
    line-height: 1.7;
    color: var(--ink-dim);
    max-width: 820px;
    margin: 0 0 56px;
  }
  .about-lede strong { color: var(--ink); font-weight: 700; }
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
  .proj-stack { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 20px; }
  .proj-stack span {
    font-family: var(--mono);
    font-size: 11.5px;
    color: var(--accent-deep);
    background: var(--accent-soft);
    padding: 4px 11px;
    border-radius: 999px;
  }
  .proj-actions { display: flex; gap: 10px; }
  .proj-actions a {
    width: 42px; height: 42px;
    border-radius: 50%;
    background: #1f2024;
    color: #fff;
    display: inline-flex; align-items: center; justify-content: center;
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
  }
  @media (max-width: 480px) {
    .facts { grid-template-columns: 1fr 1fr; }
  }

  @media (prefers-reduced-motion: reduce) {
    * { transition: none !important; }
  }
`;
