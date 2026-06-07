import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Home", "About", "Projects", "Skills", "Achievements", "Contact"];

const PROJECTS = [
  {
    name: "GrocerEase",
    subtitle: "AI-Powered Grocery Delivery",
    stack: ["React 18", "Node.js", "Express", "MongoDB", "Redis", "Socket.IO", "Stripe", "JWT", "Cloudinary"],
    highlights: [
      "Full-stack grocery delivery with real-time GPS driver tracking",
      "In-browser AI recommendation chatbot",
      "Redis-cached live location: 70% database load reduction",
      "Multi-role portals: Users, Admins, Drivers",
      "80% checkout friction reduction",
    ],
    color: "#10b981",
    icon: "🛒",
    tag: "Full Stack",
  },
  {
    name: "ECHO",
    subtitle: "Empathetic Conversation Hub",
    stack: ["Next.js 15", "React 19", "TypeScript 5", "Convex", "Clerk", "OpenAI", "Vapi AI"],
    highlights: [
      "Multi-tenant AI chatbot platform with RAG-powered responses",
      "Voice AI via Vapi, embeddable widget architecture",
      "Turborepo monorepo with isolated tenant workspaces",
      "60%+ AI-focused dependency graph",
      "37 backend TypeScript modules with multi-model inference",
    ],
    color: "#8b5cf6",
    icon: "🤖",
    tag: "AI Platform",
  },
  {
    name: "NagarMitra",
    subtitle: "A City Friend",
    stack: ["React 19", "Vite 7", "Leaflet", "GSAP", "AOS", "Vanilla CSS"],
    highlights: [
      "Citizens report civic issues with interactive map & location pinning",
      "8 core issue categories with resolution tracking",
      "Community upvoting system with live feed",
      "Admin dashboard for 100% issue management",
      "Citizens ↔ Admins two-way connection",
    ],
    color: "#f59e0b",
    icon: "🏙️",
    tag: "Civic Tech",
  },
];

const SKILLS = {
  Languages: ["C++", "Python", "JavaScript", "HTML", "CSS", "Java", "SQL"],
  Frontend: ["ReactJS", "NextJS", "TypeScript", "Tailwind CSS", "GSAP", "AOS"],
  Backend: ["Node.js", "Express.js", "REST APIs", "Socket.IO", "JWT"],
  Databases: ["MongoDB", "Firebase", "MySQL", "Redis", "Firestore"],
  "ML / Data": ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Supervised Learning"],
  Tools: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Cloudinary"],
};

const ACHIEVEMENTS = [
  { icon: "🏆", text: "Oracle Certified — Generative AI & Data Science" },
  { icon: "⚡", text: "Shortlisted for Amazon HackOn 48-hour Virtual Hackathon" },
  { icon: "🎯", text: "National-level Quiz Competitions & Olympiad Certificates" },
  { icon: "🚀", text: "Social Media Team Lead @ INNOVATION-JIIT (July'25 – May'26)" },
  { icon: "💡", text: "Key organizer of Innovate 3.0 Ideathon & RideHack'25 Hackathon" },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function Navbar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="nav-container" style={{
      background: scrolled || menuOpen ? "rgba(6,6,18,0.96)" : "transparent",
      backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
      borderBottom: scrolled || menuOpen ? "1px solid rgba(139,92,246,0.2)" : "none",
    }}>
      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#a78bfa", letterSpacing: "-0.5px" }}>
        AG<span style={{ color: "#fff" }}>.</span>
      </span>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        {menuOpen ? "✕" : "☰"}
      </button>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map(link => (
          <button key={link} onClick={() => scrollTo(link)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: active === link ? "#a78bfa" : "rgba(255,255,255,0.65)",
              fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.85rem", fontWeight: 500,
              padding: "0.4rem 0.75rem", borderRadius: "6px",
              transition: "color 0.2s",
              letterSpacing: "0.3px",
              textAlign: "left"
            }}
          >{link}</button>
        ))}
      </div>
    </nav>
  );
}

function HeroSection() {
  const [typed, setTyped] = useState("");
  const titles = ["Full Stack Developer", "AI Enthusiast", "CS @ JIIT Noida"];
  const [ti, setTi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = titles[ti];
    let timeout;
    if (!del && ci < current.length) {
      timeout = setTimeout(() => { setTyped(current.slice(0, ci + 1)); setCi(ci + 1); }, 60);
    } else if (!del && ci === current.length) {
      timeout = setTimeout(() => setDel(true), 1800);
    } else if (del && ci > 0) {
      timeout = setTimeout(() => { setTyped(current.slice(0, ci - 1)); setCi(ci - 1); }, 35);
    } else {
      setDel(false); setTi((ti + 1) % titles.length);
    }
    return () => clearTimeout(timeout);
  }, [typed, ci, del, ti]);

  return (
    <section id="home" style={{
      minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden", padding: "2rem",
      background: "linear-gradient(135deg, #06061a 0%, #0d0d2b 50%, #06061a 100%)",
    }}>
      {/* Animated bg orbs */}
      {[
        { w: 400, h: 400, top: "10%", left: "5%", c: "rgba(139,92,246,0.12)" },
        { w: 300, h: 300, top: "60%", right: "8%", c: "rgba(16,185,129,0.08)" },
        { w: 200, h: 200, top: "30%", right: "30%", c: "rgba(245,158,11,0.06)" },
      ].map((o, i) => (
        <div key={i} style={{
          position: "absolute", width: o.w, height: o.h,
          top: o.top, left: o.left, right: o.right,
          borderRadius: "50%", background: `radial-gradient(circle, ${o.c}, transparent 70%)`,
          animation: `float${i} ${6 + i * 2}s ease-in-out infinite alternate`,
        }} />
      ))}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@400;700;800&display=swap');
        @keyframes float0 { from{transform:translate(0,0)} to{transform:translate(20px,30px)} }
        @keyframes float1 { from{transform:translate(0,0)} to{transform:translate(-25px,20px)} }
        @keyframes float2 { from{transform:translate(0,0)} to{transform:translate(15px,-20px)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes spin { to{transform:rotate(360deg)} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
      `}</style>

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 700 }}>
        {/* Avatar */}
        <div style={{
          width: 110, height: 110, borderRadius: "50%", margin: "0 auto 2rem",
          background: "linear-gradient(135deg, #8b5cf6, #10b981)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "2.5rem", fontWeight: 800, color: "#fff",
          fontFamily: "'Syne', sans-serif", boxShadow: "0 0 40px rgba(139,92,246,0.4)",
          animation: "fadeUp 0.8s ease both",
        }}>AG</div>

        <p style={{ color: "#a78bfa", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: "0.9rem", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "0.75rem", animation: "fadeUp 0.8s 0.1s ease both", opacity: 0, animationFillMode: "forwards" }}>
          Hello, I'm
        </p>
        <h1 style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 4rem)",
          color: "#fff", margin: "0 0 1rem", lineHeight: 1.1,
          animation: "fadeUp 0.8s 0.2s ease both", opacity: 0, animationFillMode: "forwards",
        }}>Aman Gupta</h1>

        <div style={{ height: "2rem", marginBottom: "1.5rem", animation: "fadeUp 0.8s 0.35s ease both", opacity: 0, animationFillMode: "forwards" }}>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.2rem", fontWeight: 500,
            background: "linear-gradient(90deg, #a78bfa, #34d399, #fbbf24, #a78bfa)",
            backgroundSize: "200%",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            animation: "shimmer 4s linear infinite",
          }}>{typed}</span>
          <span style={{ color: "#a78bfa", animation: "pulse 1s step-end infinite", fontWeight: 300 }}>|</span>
        </div>

        <p style={{
          color: "rgba(255,255,255,0.55)", fontFamily: "'Space Grotesk', sans-serif", fontSize: "1rem", lineHeight: 1.7,
          maxWidth: 520, margin: "0 auto 2.5rem",
          animation: "fadeUp 0.8s 0.5s ease both", opacity: 0, animationFillMode: "forwards",
        }}>
          Building intelligent full-stack systems at JIIT Noida. Passionate about AI-powered products, real-time architectures, and clean code that ships.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", animation: "fadeUp 0.8s 0.65s ease both", opacity: 0, animationFillMode: "forwards" }}>
          <a href="mailto:amangupta.05ob@gmail.com" style={{
            padding: "0.75rem 1.75rem", borderRadius: "999px", background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
            color: "#fff", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.9rem",
            textDecoration: "none", boxShadow: "0 4px 20px rgba(139,92,246,0.4)", transition: "transform 0.2s, box-shadow 0.2s",
          }} onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 30px rgba(139,92,246,0.5)"; }} onMouseLeave={e => { e.target.style.transform = ""; e.target.style.boxShadow = "0 4px 20px rgba(139,92,246,0.4)"; }}>
            Get in Touch
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" style={{
            padding: "0.75rem 1.75rem", borderRadius: "999px", background: "transparent",
            border: "1px solid rgba(167,139,250,0.5)", color: "#a78bfa",
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.9rem",
            textDecoration: "none", transition: "all 0.2s",
          }} onMouseEnter={e => { e.target.style.background = "rgba(139,92,246,0.15)"; }} onMouseLeave={e => { e.target.style.background = "transparent"; }}>
            GitHub ↗
          </a>
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", marginTop: "3.5rem", flexWrap: "wrap", animation: "fadeUp 0.8s 0.8s ease both", opacity: 0, animationFillMode: "forwards" }}>
          {[["3+", "Projects Built"], ["7.52", "CGPA"], ["2+", "Certifications"]].map(([n, l]) => (
            <div key={l} style={{ textAlign: "center", minWidth: "120px" }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.8rem", color: "#a78bfa" }}>{n}</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", letterSpacing: "1px" }}>{l.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const [ref, inView] = useInView();
  return (
    <section id="about" ref={ref} className="section-padding" style={{
      background: "#08081f",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <div className="grid-2col" style={{ maxWidth: 900, width: "100%" }}>
        {/* Left */}
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateX(-30px)", transition: "all 0.8s ease" }}>
          <span style={{ color: "#a78bfa", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: "0.8rem", letterSpacing: "3px", textTransform: "uppercase" }}>About Me</span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "2.5rem", color: "#fff", margin: "0.5rem 0 1.5rem", lineHeight: 1.2 }}>
            Crafting Digital<br /><span style={{ color: "#a78bfa" }}>Experiences</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.95rem" }}>
            I'm a Computer Science student at <strong style={{ color: "#a78bfa" }}>Jaypee Institute of Information Technology, Noida</strong>, building full-stack applications that blend AI with great UX.
          </p>
          <p style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.8, fontSize: "0.95rem" }}>
            From real-time grocery delivery platforms to multi-tenant AI chatbot systems, I love tackling complex engineering challenges and shipping products that make a real impact.
          </p>
          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {["📍 Lucknow, UP", "🎓 JIIT Noida (2023–Present)", "📧 amangupta.05ob@gmail.com"].map(t => (
              <span key={t} style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.3)", borderRadius: "999px", padding: "0.4rem 1rem", color: "#c4b5fd", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.8rem" }}>{t}</span>
            ))}
          </div>
        </div>
        {/* Right: Education cards */}
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateX(30px)", transition: "all 0.8s 0.2s ease" }}>
          {[
            { school: "Jaypee Institute of Information Technology", deg: "B.Tech — Computer Science", score: "CGPA: 7.52 / 10", period: "2023 – Present", color: "#8b5cf6" },
            { school: "City Montessori School", deg: "Higher Secondary (10+2)", score: "Score: 94.5%", period: "2021 – 2022", color: "#10b981" },
          ].map((ed, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
              borderLeft: `3px solid ${ed.color}`, borderRadius: "12px", padding: "1.5rem", marginBottom: "1rem",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#fff", margin: 0, fontSize: "0.95rem" }}>{ed.school}</h3>
                <span style={{ color: ed.color, fontSize: "0.75rem", fontFamily: "'Space Grotesk', sans-serif", marginLeft: "auto" }}>{ed.period}</span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.85rem", margin: "0 0 0.25rem" }}>{ed.deg}</p>
              <span style={{ background: `${ed.color}22`, color: ed.color, fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.75rem", padding: "0.2rem 0.6rem", borderRadius: "999px" }}>{ed.score}</span>
            </div>
          ))}
          {/* Coursework */}
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "1rem 1.25rem" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.75rem" }}>Coursework</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {["DSA", "OOP", "DBMS", "OS", "Computer Networks", "Software Engineering", "DAA"].map(c => (
                <span key={c} style={{ background: "rgba(167,139,250,0.1)", color: "#c4b5fd", borderRadius: "4px", padding: "0.25rem 0.5rem", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.75rem" }}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView();

  return (
    <section id="projects" ref={ref} className="section-padding" style={{ background: "#06061a" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)", transition: "all 0.7s ease" }}>
          <span style={{ color: "#a78bfa", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: "0.8rem", letterSpacing: "3px", textTransform: "uppercase" }}>Portfolio</span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "2.5rem", color: "#fff", margin: "0.5rem 0 0" }}>Featured Projects</h2>
        </div>

        {/* Tab selector */}
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
          {PROJECTS.map((p, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              background: active === i ? p.color : "transparent",
              border: `1px solid ${active === i ? p.color : "rgba(255,255,255,0.15)"}`,
              color: active === i ? "#000" : "rgba(255,255,255,0.6)",
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.85rem",
              padding: "0.5rem 1.25rem", borderRadius: "999px", cursor: "pointer", transition: "all 0.3s",
              display: "flex", alignItems: "center", gap: "0.5rem",
            }}>
              {p.icon} {p.name}
            </button>
          ))}
        </div>

        {/* Active Project */}
        {PROJECTS.map((p, i) => (
          <div key={i} className="project-grid" style={{
            display: active === i ? "grid" : "none",
            animation: "fadeUp 0.5s ease both",
          }}>
            {/* Left */}
            <div style={{
              background: "rgba(255,255,255,0.03)", border: `1px solid ${p.color}33`,
              borderTop: `3px solid ${p.color}`, borderRadius: "16px", padding: "2rem",
            }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{p.icon}</div>
              <span style={{ background: `${p.color}22`, color: p.color, fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", padding: "0.3rem 0.75rem", borderRadius: "999px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 600 }}>{p.tag}</span>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "2rem", color: "#fff", margin: "0.75rem 0 0.25rem" }}>{p.name}</h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.95rem", marginBottom: "1.5rem" }}>{p.subtitle}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {p.stack.map(s => (
                  <span key={s} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.72rem", padding: "0.25rem 0.6rem", borderRadius: "6px" }}>{s}</span>
                ))}
              </div>
            </div>
            {/* Right */}
            <div>
              <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "1rem" }}>Key Features</h4>
              {p.highlights.map((h, j) => (
                <div key={j} style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: p.color, marginTop: "0.55rem", flexShrink: 0 }} />
                  <p style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{h}</p>
                </div>
              ))}
              <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.75rem" }}>
                <a href="https://github.com" target="_blank" rel="noreferrer" style={{
                  padding: "0.65rem 1.5rem", background: `${p.color}22`, border: `1px solid ${p.color}55`,
                  color: p.color, borderRadius: "8px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.85rem",
                  textDecoration: "none", transition: "all 0.2s",
                }} onMouseEnter={e => e.target.style.background = `${p.color}44`} onMouseLeave={e => e.target.style.background = `${p.color}22`}>
                  View Code →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  const [ref, inView] = useInView();
  const colors = ["#8b5cf6", "#10b981", "#f59e0b", "#3b82f6", "#ec4899", "#06b6d4"];

  return (
    <section id="skills" ref={ref} className="section-padding" style={{ background: "#08081f" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem", opacity: inView ? 1 : 0, transition: "all 0.7s ease" }}>
          <span style={{ color: "#a78bfa", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: "0.8rem", letterSpacing: "3px", textTransform: "uppercase" }}>What I Know</span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "2.5rem", color: "#fff", margin: "0.5rem 0 0" }}>Technical Skills</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
          {Object.entries(SKILLS).map(([cat, items], i) => (
            <div key={cat} style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
              borderTop: `2px solid ${colors[i % colors.length]}`,
              borderRadius: "14px", padding: "1.5rem",
              opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)",
              transition: `all 0.6s ${i * 0.08}s ease`,
            }}>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: colors[i % colors.length], fontSize: "0.85rem", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "1rem" }}>{cat}</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {items.map(skill => (
                  <span key={skill} style={{
                    background: `${colors[i % colors.length]}15`, border: `1px solid ${colors[i % colors.length]}30`,
                    color: "rgba(255,255,255,0.8)", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.78rem",
                    padding: "0.3rem 0.7rem", borderRadius: "6px", transition: "all 0.2s", cursor: "default",
                  }}
                    onMouseEnter={e => { e.target.style.background = `${colors[i % colors.length]}35`; e.target.style.color = "#fff"; }}
                    onMouseLeave={e => { e.target.style.background = `${colors[i % colors.length]}15`; e.target.style.color = "rgba(255,255,255,0.8)"; }}
                  >{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementsSection() {
  const [ref, inView] = useInView();
  return (
    <section id="achievements" className="section-padding" style={{ background: "#06061a" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span style={{ color: "#a78bfa", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: "0.8rem", letterSpacing: "3px", textTransform: "uppercase" }}>Recognition</span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "2.5rem", color: "#fff", margin: "0.5rem 0 0" }}>Achievements & Roles</h2>
        </div>
        <div ref={ref}>
          {ACHIEVEMENTS.map((a, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: "1.5rem",
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "12px", padding: "1.25rem 1.5rem", marginBottom: "0.75rem",
              opacity: inView ? 1 : 0, transform: inView ? "none" : "translateX(-20px)",
              transition: `all 0.6s ${i * 0.1}s ease`,
            }}>
              <span style={{ fontSize: "1.75rem", flexShrink: 0 }}>{a.icon}</span>
              <p style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.95rem", margin: 0, lineHeight: 1.5 }}>{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [aiReply, setAiReply] = useState("");
  const [ref, inView] = useInView();

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) { alert("Please fill all fields."); return; }
    setStatus("loading"); setAiReply("");
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: "You are Aman Gupta's portfolio assistant. A visitor has sent a contact message through Aman's portfolio website. Reply warmly and professionally on behalf of Aman, acknowledging their message, expressing interest, and mentioning Aman will get back to them soon. Keep it under 100 words. Do not say you are an AI in your reply — just be friendly and professional.",
          messages: [{ role: "user", content: `From: ${form.name} (${form.email})\nMessage: ${form.message}` }],
        }),
      });
      const data = await res.json();
      const reply = data.content?.find(b => b.type === "text")?.text || "Thank you for reaching out! Aman will get back to you shortly.";
      setAiReply(reply); setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" ref={ref} className="section-padding" style={{ background: "#08081f" }}>
      <div style={{ maxWidth: 680, margin: "0 auto", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(30px)", transition: "all 0.8s ease" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span style={{ color: "#a78bfa", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: "0.8rem", letterSpacing: "3px", textTransform: "uppercase" }}>Let's Connect</span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "2.5rem", color: "#fff", margin: "0.5rem 0 0.75rem" }}>Get In Touch</h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.95rem" }}>
            Your message is handled by an AI assistant that replies instantly on Aman's behalf.
          </p>
        </div>

        <div className="contact-card">
          {["name", "email", "message"].map(field => (
            <div key={field} style={{ marginBottom: "1.25rem" }}>
              <label style={{ display: "block", color: "rgba(255,255,255,0.5)", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.8rem", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "0.5rem" }}>{field}</label>
              {field === "message" ? (
                <textarea value={form[field]} onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))} rows={4} placeholder={`Your ${field}...`} style={{
                  width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px", padding: "0.85rem 1rem", color: "#fff", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.95rem",
                  resize: "vertical", outline: "none", boxSizing: "border-box", transition: "border-color 0.2s",
                }} onFocus={e => e.target.style.borderColor = "rgba(139,92,246,0.6)"} onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
              ) : (
                <input type={field === "email" ? "email" : "text"} value={form[field]} onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))} placeholder={`Your ${field}...`} style={{
                  width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px", padding: "0.85rem 1rem", color: "#fff", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.95rem",
                  outline: "none", boxSizing: "border-box", transition: "border-color 0.2s",
                }} onFocus={e => e.target.style.borderColor = "rgba(139,92,246,0.6)"} onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
              )}
            </div>
          ))}

          <button onClick={handleSubmit} disabled={status === "loading"} style={{
            width: "100%", padding: "1rem", borderRadius: "10px",
            background: status === "loading" ? "rgba(139,92,246,0.4)" : "linear-gradient(135deg, #8b5cf6, #6d28d9)",
            border: "none", color: "#fff", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1rem",
            cursor: status === "loading" ? "not-allowed" : "pointer", transition: "all 0.2s",
          }}>
            {status === "loading" ? "Sending via AI…" : "Send Message ✉"}
          </button>

          {status === "success" && aiReply && (
            <div style={{ marginTop: "1.5rem", background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: "12px", padding: "1.25rem" }}>
              <p style={{ color: "#34d399", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "0.5rem" }}>✓ AI Reply from Aman's Assistant</p>
              <p style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{aiReply}</p>
            </div>
          )}
          {status === "error" && (
            <div style={{ marginTop: "1rem", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: "10px", padding: "1rem", color: "#f87171", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.85rem" }}>
              Something went wrong. Please try emailing directly at amangupta.05ob@gmail.com
            </div>
          )}
        </div>

        {/* Social links */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
          {[["📧", "Email", "mailto:amangupta.05ob@gmail.com"], ["💼", "LinkedIn", "https://linkedin.com"], ["🐙", "GitHub", "https://github.com"]].map(([ic, label, href]) => (
            <a key={label} href={href} style={{
              display: "flex", alignItems: "center", gap: "0.5rem",
              color: "rgba(255,255,255,0.5)", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.85rem",
              textDecoration: "none", padding: "0.5rem 1rem", borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.08)", transition: "all 0.2s",
            }} onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(167,139,250,0.4)"; e.currentTarget.style.color = "#a78bfa"; }} onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}>
              {ic} {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#04040f", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "2rem", textAlign: "center" }}>
      <p style={{ color: "rgba(255,255,255,0.25)", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.85rem", margin: 0 }}>
        © 2025 Aman Gupta · Built with React + AI
      </p>
    </footer>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.getElementById(l.toLowerCase()));
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1)); });
    }, { threshold: 0.4 });
    sections.forEach(s => s && obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ background: "#06061a", minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@400;700;800&display=swap" rel="stylesheet" />
      <Navbar active={active} setActive={setActive} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
