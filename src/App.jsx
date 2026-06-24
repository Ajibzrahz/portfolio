import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Terminal, Circle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function App() {
  const reduce = useReducedMotion();

  const projects = [
    {
      index: "01",
      title: "Expense Tracker",
      status: "in progress",
      description:
        "A full-stack personal finance app: track transactions, set monthly budgets, and surface spending analytics. Next.js client on Vercel, REST API for transactions, budgets, and reporting.",
      stack: ["Next.js", "Node.js", "Express", "MongoDB", "Vercel"],
      link: "#",
    },
    {
      index: "02",
      title: "Livestock Intelligence Cost Estimator",
      status: "shipped",
      description:
        "A data-driven platform that helps livestock farmers estimate startup and operational costs, compare farm scales, and make smarter financial decisions. Pairs an Express API with a Python ML service.",
      stack: ["Node.js", "Express", "MongoDB", "FastAPI", "Render"],
      link: "https://github.com/Ajibzrahz/livestock-cost-estimator-backend",
    },
    {
      index: "03",
      title: "Smart Mart Backend API",
      status: "shipped",
      description:
        "A scalable backend powering an e-commerce workflow — authentication, product handling, and a clean structure ready for frontend integration.",
      stack: ["Node.js", "Express", "MongoDB"],
      link: "#",
    },
    {
      index: "04",
      title: "Authentication System",
      status: "shipped",
      description:
        "A secure auth flow built for real application use cases: JWT, email verification, HTTP-only cookies, and password reset logic.",
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
    "Next.js",
    "Git & GitHub",
    "Render",
    "Vercel",
    "Postman",
  ];

  const ease = [0.22, 1, 0.36, 1];
  const fade = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.6, ease, delay },
        };

  return (
    <div className="page">
      <style>{css}</style>

      <div className="wrap">
        {/* ---- top bar ---- */}
        <header className="bar">
          <div className="brand">
            <Terminal size={15} strokeWidth={2.4} />
            <span>raheem@dev</span>
            <span className="cursor" aria-hidden="true" />
          </div>
          <nav className="nav">
            <a href="#about">about</a>
            <a href="#work">work</a>
            <a href="#contact">contact</a>
          </nav>
        </header>

        {/* ---- hero ---- */}
        <section className="hero">
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
            <p className="eyebrow">
              <Circle size={7} fill="currentColor" /> Backend developer ·
              Nigeria
            </p>
            <h1>
              I build the
              <br />
              <span className="accent">systems</span> behind
              <br />
              the screen.
            </h1>
            <p className="lede">
              I’m Raheem Ajibona — I design and ship APIs, auth flows, and
              data-driven backends with Node.js, Express, and MongoDB.
              Final-year Computer Science, focused on services that hold up in
              production.
            </p>
            <div className="cta-row">
              <a href="#work" className="btn btn-primary">
                See the work <ArrowUpRight size={16} strokeWidth={2.4} />
              </a>
              <a
                href="mailto:ajibonaraheem@gmail.com"
                className="btn btn-ghost"
              >
                <Mail size={15} strokeWidth={2.2} /> Get in touch
              </a>
            </div>
          </motion.div>

          <motion.aside
            className="card"
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, y: 24 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.7, ease, delay: 0.12 },
                })}
          >
            <div className="card-head">
              <span className="dot r" />
              <span className="dot y" />
              <span className="dot g" />
              <span className="card-file">profile.json</span>
            </div>
            <div className="portrait">
              <img src="/picture.png" alt="Raheem Ajibona" />
            </div>
            <div className="card-body">
              <div className="name">Raheem Ajibona</div>
              <div className="role">Backend Developer</div>
              <div className="loc">
                <MapPin size={13} strokeWidth={2.2} /> Abeokuta, Nigeria
              </div>
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
                <a href="mailto:ajibonaraheem@gmail.com" aria-label="Email">
                  <Mail size={17} strokeWidth={2} />
                </a>
              </div>
            </div>
          </motion.aside>
        </section>

        {/* ---- about + skills ---- */}
        <section id="about" className="split">
          <motion.div className="block" {...fade()}>
            <p className="label">About</p>
            <p className="prose">
              I’m a Computer Science student who likes the part of a product
              nobody sees but everybody depends on. I’ve built REST APIs, auth
              workflows, database-backed apps, and deployed services on Render
              and Vercel — usually owning the backend while a frontend takes
              shape alongside it.
            </p>
          </motion.div>

          <motion.div className="block" {...fade(0.08)}>
            <p className="label">Stack</p>
            <ul className="chips">
              {skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* ---- work ---- */}
        <section id="work" className="work">
          <motion.div className="work-head" {...fade()}>
            <p className="label">Selected work</p>
            <h2>Things I’ve built</h2>
          </motion.div>

          <ul className="projects">
            {projects.map((p, i) => {
              const live = p.link !== "#";
              return (
                <motion.li key={p.title} className="proj" {...fade(i * 0.06)}>
                  <a
                    className="proj-link"
                    href={p.link}
                    {...(live ? {} : { "aria-disabled": "true", tabIndex: -1 })}
                    onClick={(e) => !live && e.preventDefault()}
                  >
                    <span className="proj-no">{p.index}</span>
                    <div className="proj-main">
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
                    <span className="proj-arrow" aria-hidden="true">
                      <ArrowUpRight size={20} strokeWidth={2.2} />
                    </span>
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </section>

        {/* ---- contact ---- */}
        <motion.section id="contact" className="contact" {...fade()}>
          <p className="label">Contact</p>
          <h2>
            Open to internships, junior backend roles,
            <br />
            and collaborations.
          </h2>
          <a href="mailto:ajibonaraheem@gmail.com" className="mailto">
            ajibonaraheem@gmail.com <ArrowUpRight size={18} strokeWidth={2.2} />
          </a>
        </motion.section>

        <footer className="foot">
          <span>© {new Date().getFullYear()} Raheem Ajibona</span>
          <span>Built with React · Vite</span>
        </footer>
      </div>
    </div>
  );
}

const css = `
  *, *::before, *::after { box-sizing: border-box; }

  :root {
    --bg: #1b1f27;
    --panel: #232833;
    --panel-2: #2a303c;
    --line: #353b48;
    --line-soft: #2c323d;
    --ink: #eef0f3;
    --ink-dim: #a8aeb9;
    --ink-faint: #6b7280;
    --accent: #4ade80;
    --accent-dim: #3a9e66;
    --amber: #fbbf24;
    --red: #f87171;
    --mono: "JetBrains Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace;
    --sans: "Inter", system-ui, -apple-system, sans-serif;
  }

  .page {
    background:
      radial-gradient(900px 500px at 85% -5%, rgba(74,222,128,0.06), transparent 60%),
      var(--bg);
    color: var(--ink);
    font-family: var(--sans);
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  .wrap {
    max-width: 1040px;
    margin: 0 auto;
    padding: 0 28px 96px;
  }

  /* top bar */
  .bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 26px 0;
    position: sticky;
    top: 0;
    background: rgba(27,31,39,0.78);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--line-soft);
    z-index: 20;
  }
  .brand {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--mono);
    font-size: 14px;
    color: var(--ink);
    font-weight: 500;
  }
  .brand svg { color: var(--accent); }
  .cursor {
    width: 8px; height: 16px;
    background: var(--accent);
    display: inline-block;
    animation: blink 1.1s steps(1) infinite;
  }
  @keyframes blink { 50% { opacity: 0; } }
  .nav { display: flex; gap: 4px; }
  .nav a {
    font-family: var(--mono);
    font-size: 13px;
    color: var(--ink-dim);
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 7px;
    transition: color .18s, background .18s;
  }
  .nav a:hover { color: var(--accent); background: var(--line-soft); }

  /* hero */
  .hero {
    display: grid;
    grid-template-columns: 1.35fr 0.85fr;
    gap: 48px;
    align-items: center;
    padding: 92px 0 88px;
  }
  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    font-family: var(--mono);
    font-size: 12.5px;
    letter-spacing: 0.02em;
    color: var(--ink-dim);
    margin: 0 0 26px;
  }
  .eyebrow svg { color: var(--accent); }
  h1 {
    font-family: var(--sans);
    font-size: clamp(2.7rem, 6.4vw, 4.4rem);
    line-height: 1.02;
    letter-spacing: -0.035em;
    font-weight: 600;
    margin: 0 0 26px;
    color: var(--ink);
  }
  h1 .accent {
    font-family: var(--mono);
    font-weight: 500;
    color: var(--accent);
    letter-spacing: -0.02em;
  }
  .lede {
    color: var(--ink-dim);
    font-size: 17px;
    line-height: 1.7;
    max-width: 520px;
    margin: 0 0 34px;
  }
  .cta-row { display: flex; flex-wrap: wrap; gap: 12px; }
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--mono);
    font-size: 13.5px;
    text-decoration: none;
    padding: 13px 18px;
    border-radius: 9px;
    transition: transform .16s, background .18s, border-color .18s;
  }
  .btn-primary {
    background: var(--accent);
    color: #07140c;
    font-weight: 600;
  }
  .btn-primary:hover { transform: translateY(-2px); background: #5ee892; }
  .btn-ghost {
    color: var(--ink);
    border: 1px solid var(--line);
    background: var(--panel);
  }
  .btn-ghost:hover { border-color: var(--accent-dim); color: var(--accent); }

  /* profile card */
  .card {
    background: var(--panel);
    border: 1px solid var(--line);
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 24px 60px rgba(0,0,0,0.42);
  }
  .card-head {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 14px;
    border-bottom: 1px solid var(--line);
    background: var(--panel-2);
  }
  .dot { width: 11px; height: 11px; border-radius: 50%; }
  .dot.r { background: #ff5f57; }
  .dot.y { background: #febc2e; }
  .dot.g { background: #28c840; }
  .card-file {
    font-family: var(--mono);
    font-size: 12px;
    color: var(--ink-faint);
    margin-left: 8px;
  }
  .portrait {
    aspect-ratio: 1 / 1;
    background: #07080a;
    border-bottom: 1px solid var(--line);
  }
  .portrait img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .card-body { padding: 18px; }
  .name { font-size: 19px; font-weight: 600; color: var(--ink); }
  .role { font-family: var(--mono); font-size: 12.5px; color: var(--accent); margin-top: 3px; }
  .loc {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: 13px; color: var(--ink-dim); margin-top: 12px;
  }
  .socials { display: flex; gap: 10px; margin-top: 16px; }
  .socials a {
    width: 38px; height: 38px;
    display: inline-flex; align-items: center; justify-content: center;
    border: 1px solid var(--line);
    border-radius: 9px;
    color: var(--ink-dim);
    background: var(--panel-2);
    font-size: 16px;
    transition: color .18s, border-color .18s, transform .16s;
  }
  .socials a:hover { color: var(--accent); border-color: var(--accent-dim); transform: translateY(-2px); }

  /* labels */
  .label {
    font-family: var(--mono);
    font-size: 12.5px;
    color: var(--accent-dim);
    margin: 0 0 14px;
    letter-spacing: 0.01em;
  }

  /* split (about) */
  .split {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 48px;
    padding: 40px 0;
    border-top: 1px solid var(--line-soft);
  }
  .prose { color: var(--ink-dim); font-size: 16px; line-height: 1.78; margin: 0; }
  .chips { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 8px; }
  .chips li {
    font-family: var(--mono);
    font-size: 12.5px;
    color: var(--ink);
    padding: 7px 12px;
    border: 1px solid var(--line);
    border-radius: 7px;
    background: var(--panel);
  }

  /* work */
  .work { padding: 64px 0 24px; border-top: 1px solid var(--line-soft); }
  .work-head h2 {
    font-size: clamp(1.9rem, 4vw, 2.6rem);
    font-weight: 600;
    letter-spacing: -0.03em;
    color: var(--ink);
    margin: 0;
  }
  .projects { list-style: none; margin: 36px 0 0; padding: 0; }
  .proj { border-top: 1px solid var(--line); }
  .proj:last-child { border-bottom: 1px solid var(--line); }
  .proj-link {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 24px;
    align-items: start;
    padding: 28px 8px;
    text-decoration: none;
    color: inherit;
    transition: background .2s, padding-left .2s;
  }
  .proj-link:hover { background: var(--panel); padding-left: 18px; }
  .proj-link[aria-disabled="true"] { cursor: default; }
  .proj-no {
    font-family: var(--mono);
    font-size: 13px;
    color: var(--ink-faint);
    padding-top: 5px;
  }
  .proj-top { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }
  .proj-main h3 {
    font-size: 21px;
    font-weight: 600;
    color: var(--ink);
    margin: 0;
    letter-spacing: -0.01em;
  }
  .status {
    font-family: var(--mono);
    font-size: 11px;
    padding: 3px 9px;
    border-radius: 999px;
    letter-spacing: 0.02em;
  }
  .status.done { color: var(--accent); background: rgba(74,222,128,0.1); border: 1px solid var(--accent-dim); }
  .status.wip { color: var(--amber); background: rgba(251,191,36,0.1); border: 1px solid rgba(251,191,36,0.4); }
  .proj-desc { color: var(--ink-dim); font-size: 15px; line-height: 1.65; margin: 12px 0 0; max-width: 600px; }
  .proj-stack { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 16px; }
  .proj-stack span {
    font-family: var(--mono);
    font-size: 11.5px;
    color: var(--ink-faint);
    padding: 4px 9px;
    border: 1px solid var(--line);
    border-radius: 6px;
  }
  .proj-arrow { color: var(--ink-faint); padding-top: 4px; transition: color .2s, transform .2s; }
  .proj-link:hover .proj-arrow { color: var(--accent); transform: translate(3px, -3px); }
  .proj-link[aria-disabled="true"] .proj-arrow { opacity: 0.25; }

  /* contact */
  .contact { padding: 80px 0 56px; border-top: 1px solid var(--line-soft); text-align: left; }
  .contact h2 {
    font-size: clamp(1.7rem, 3.6vw, 2.4rem);
    font-weight: 600;
    letter-spacing: -0.03em;
    line-height: 1.18;
    color: var(--ink);
    margin: 0 0 28px;
  }
  .mailto {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: var(--mono);
    font-size: clamp(1rem, 2.4vw, 1.4rem);
    color: var(--accent);
    text-decoration: none;
    border-bottom: 1px solid var(--accent-dim);
    padding-bottom: 6px;
    transition: gap .2s;
  }
  .mailto:hover { gap: 16px; }

  /* footer */
  .foot {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    padding-top: 28px;
    border-top: 1px solid var(--line-soft);
    font-family: var(--mono);
    font-size: 12px;
    color: var(--ink-faint);
  }

  /* focus */
  a:focus-visible, .btn:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 3px;
    border-radius: 6px;
  }

  /* responsive */
  @media (max-width: 880px) {
    .hero { grid-template-columns: 1fr; gap: 40px; padding: 56px 0; }
    .card { max-width: 360px; }
    .split { grid-template-columns: 1fr; gap: 32px; }
  }
  @media (max-width: 600px) {
    .wrap { padding: 0 18px 72px; }
    .nav a { padding: 8px 9px; }
    .proj-link { grid-template-columns: 1fr; gap: 10px; padding: 22px 6px; }
    .proj-arrow { display: none; }
    .proj-no { padding-top: 0; }
    .foot { justify-content: flex-start; }
  }

  @media (prefers-reduced-motion: reduce) {
    .cursor { animation: none; }
    * { transition: none !important; }
  }
`;
