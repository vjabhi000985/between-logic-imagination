import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowDownRight, ArrowUpRight, ArrowRight, Menu, X, Sun, Moon,
  Code2, BookOpen, Camera, Music2, Sparkles, Github, Instagram,
  Linkedin, Mail, ExternalLink, Quote, Play, Image as ImageIcon
} from 'lucide-react'
import './styles.css'

const projects = [
  { title: 'Regex Matching Web App', type: 'Web Development', description: 'A browser-based workspace for testing regular expressions and validating email patterns.', stack: 'Flask · Python · Bootstrap', status: 'Project to add details' },
  { title: 'Data Exploration Notebooks', type: 'Data Analytics', description: 'Practical analysis workflows using structured datasets, aggregation and visualization.', stack: 'Python · Pandas · SQL', status: 'Project to add details' },
  { title: 'Workflow & CRM Concepts', type: 'Automation', description: 'Exploring reliable record-keeping, call tracking and operational workflows for teams.', stack: 'Apps Script · JavaScript · Sheets', status: 'Project to add details' },
]
const categories = ['All', 'Web Development', 'Data Analytics', 'Automation']
const skills = ['Python', 'React', 'JavaScript', 'Flask', 'FastAPI', 'Node.js', 'MySQL', 'MongoDB', 'Pandas', 'Scikit-learn', 'Generative AI', 'APIs']

function App() {
  const [dark, setDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('All')
  const [activePhoto, setActivePhoto] = useState(null)
  const [activeTab, setActiveTab] = useState('Words')
  const visibleProjects = filter === 'All' ? projects : projects.filter(p => p.type === filter)

  const nav = [
    ['About', '#about'], ['Work', '#work'], ['Teaching', '#teaching'],
    ['Creative studio', '#studio'], ['Journal', '#journal'], ['Contact', '#contact']
  ]

  return (
    <div className={dark ? 'app dark' : 'app'}>
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Back to top"><span className="brand-mark">B.</span><span>BETWEEN LOGIC<br/>& IMAGINATION</span></a>
        <nav className="desktop-nav">{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
        <div className="nav-actions">
          <button className="icon-button" onClick={() => setDark(!dark)} aria-label="Toggle color theme">{dark ? <Sun size={17}/> : <Moon size={17}/>}</button>
          <button className="icon-button mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
          <a className="nav-contact" href="#contact">Let's talk <ArrowUpRight size={14}/></a>
        </div>
      </header>
      <AnimatePresence>
        {menuOpen && <motion.nav className="mobile-nav" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}}>
          {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={15}/></a>)}
        </motion.nav>}
      </AnimatePresence>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-kicker"><span className="status-dot"/> A PERSONAL SPACE · INDIA</div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">TECHNOLOGY / EDUCATION / CREATIVE EXPRESSION</p>
              <h1>Building with<br/><em>logic.</em><br/>Creating with<br/><em>imagination.</em></h1>
              <p className="hero-lede">I'm someone who enjoys building things, understanding how they work, and finding different ways to express ideas.</p>
              <div className="hero-buttons"><a className="button button-dark" href="#work">Explore my work <ArrowUpRight size={16}/></a><a className="text-link" href="#about">A little about me <ArrowDownRight size={16}/></a></div>
            </div>
            <div className="hero-art">
              <div className="hero-image">
                <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85" alt="Quiet creative workspace with a desk and natural light"/>
                <div className="image-label"><span>FIG. 01</span><span>THOUGHTS IN PROGRESS</span></div>
              </div>
              <div className="orbit-note note-one">curiosity<br/>in motion ↗</div>
              <div className="orbit-note note-two">CODE × STORIES × SOUND</div>
            </div>
          </div>
          <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line"></span><span>01 — 07</span></div>
        </section>

        <section className="intro-band">
          <div className="section-shell intro-inner">
            <span className="eyebrow">A NOTE TO BEGIN</span>
            <p>Some things I build with code. Some I capture through a lens. Some I put into words. And some I simply turn into music.</p>
            <span className="intro-signature">— Welcome to my little corner of the internet.</span>
          </div>
        </section>

        <section id="about" className="section-shell section-pad">
          <div className="section-heading"><span className="eyebrow">01 / THE PERSON BEHIND THE WORK</span><span className="side-note">A little context</span></div>
          <div className="about-grid">
            <h2>Curious by nature.<br/><em>Multidisciplinary</em><br/>by choice.</h2>
            <div className="about-text">
              <p className="large-copy">By profession, I explore technology, software development, data and education. Beyond that, I make room for stories, photographs, music and ideas that don't always fit into a job title.</p>
              <p>I enjoy moving between structured problem-solving and open-ended creative exploration. One day that might mean shaping a database or building an application; another, finding a story in an ordinary moment or learning a few more chords on the guitar.</p>
              <a className="under-link" href="#contact">More about my journey <ArrowUpRight size={15}/></a>
            </div>
          </div>
          <div className="pillars">
            <div><Code2/><span>01</span><h3>Build</h3><p>Turning problems and ideas into useful digital things.</p></div>
            <div><BookOpen/><span>02</span><h3>Teach</h3><p>Making complex ideas easier to understand and use.</p></div>
            <div><Camera/><span>03</span><h3>Notice</h3><p>Finding details, stories and beauty in everyday moments.</p></div>
            <div><Music2/><span>04</span><h3>Create</h3><p>Exploring expression through words, images and sound.</p></div>
          </div>
        </section>

        <section id="work" className="work-section section-pad">
          <div className="section-shell">
            <div className="section-heading"><span className="eyebrow">02 / SELECTED WORK</span><span className="side-note">A growing collection</span></div>
            <div className="work-title-row"><h2>Things I've been<br/><em>building.</em></h2><p>Some projects are complete, some are experiments, and some are still taking shape. This space will grow as I document the work.</p></div>
            <div className="filter-row">{categories.map(c => <button key={c} onClick={() => setFilter(c)} className={filter === c ? 'filter active' : 'filter'}>{c}</button>)}</div>
            <div className="project-list">{visibleProjects.map((p, i) => <article className="project-row" key={p.title}><div className="project-number">0{i+1}</div><div className="project-main"><span className="eyebrow">{p.type}</span><h3>{p.title}</h3><p>{p.description}</p><span className="project-stack">{p.stack}</span></div><div className="project-end"><span>{p.status}</span><ArrowUpRight size={20}/></div></article>)}</div>
            <p className="small-note">Project descriptions are starter content. Replace them with verified details, screenshots and links before publishing.</p>
          </div>
        </section>

        <section id="teaching" className="section-shell section-pad teaching">
          <div className="section-heading"><span className="eyebrow">03 / TEACHING & KNOWLEDGE</span><span className="side-note">Learning is a shared process</span></div>
          <div className="teaching-grid">
            <div><h2>Make the complex<br/><em>feel simple.</em></h2><p className="large-copy">I enjoy helping people understand technology—not just what to type, but why it works.</p></div>
            <div className="teaching-note"><Quote size={27}/><p>Good teaching doesn't make a subject smaller. It finds a clearer way into something deep.</p><span>MY TEACHING PHILOSOPHY</span></div>
          </div>
          <div className="teaching-bottom"><div><span className="eyebrow">AREAS I EXPLORE</span><div className="skill-cloud">{['Programming fundamentals','Python','Web development','Databases & SQL','Data analytics','AI & machine learning','Practical projects','Problem solving'].map(s => <span key={s}>{s}</span>)}</div></div><div className="teaching-aside"><p>As a Lead IT Trainer, I work across technical learning and practical application. I value clear explanations, hands-on exercises and the confidence that comes from making something work yourself.</p><a className="under-link" href="#contact">Discuss teaching & collaboration <ArrowUpRight size={15}/></a></div></div>
        </section>

        <section id="studio" className="studio-section section-pad">
          <div className="section-shell">
            <div className="section-heading"><span className="eyebrow">04 / THE CREATIVE STUDIO</span><span className="side-note">A different kind of playground</span></div>
            <div className="studio-heading"><div><span className="eyebrow">UNDER THE HANDLE</span><h2>baaya_<em>nedil.</em></h2></div><div><p>A home for the things I make outside the usual lines—words, frames, sounds and experiments. It doesn't need to be a full gallery to be a meaningful beginning.</p><a className="social-link" href="https://www.instagram.com/baaya_nedil/" target="_blank" rel="noreferrer"><Instagram size={16}/> @baaya_nedil <ArrowUpRight size={15}/></a></div></div>
            <div className="studio-tabs">{['Words','Frames','Sounds','Experiments'].map(t => <button className={activeTab === t ? 'studio-tab active' : 'studio-tab'} onClick={() => setActiveTab(t)} key={t}>{t}</button>)}</div>
            <div className="studio-content">
              {activeTab === 'Words' && <div className="words-panel"><div className="word-art">“</div><div><span className="eyebrow">STORIES / POETRY / REFLECTIONS</span><h3>Some feelings<br/>find their way<br/><em>into words.</em></h3><p>A quiet shelf for short stories, poems, lyrics and personal reflections. Add a piece whenever it feels ready.</p><span className="coming-label">A JOURNAL IN THE MAKING</span></div></div>}
              {activeTab === 'Frames' && <div className="photo-grid"><button onClick={() => setActivePhoto('Light, texture and the everyday')}><img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80" alt="Mountain landscape reflected in a lake"/><span>01 / OUTDOORS</span></button><button onClick={() => setActivePhoto('A study in light and architecture')}><img src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=80" alt="Architectural lines and geometric forms"/><span>02 / STRUCTURE</span></button><button onClick={() => setActivePhoto('A moment worth keeping')}><img src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=80" alt="Golden morning sunlight over a landscape"/><span>03 / MOMENTS</span></button></div>}
              {activeTab === 'Sounds' && <div className="empty-studio"><Music2 size={34}/><h3>Learning the language<br/><em>of sound.</em></h3><p>Guitar practice, musical sketches and original recordings can live here as they take shape.</p><span className="coming-label">RECORDINGS TO COME</span></div>}
              {activeTab === 'Experiments' && <div className="empty-studio"><Sparkles size={34}/><h3>Curiosity, with<br/><em>new tools.</em></h3><p>A space for AI-assisted visuals, creative workflows and experiments that blur the lines between technology and art.</p><span className="coming-label">EXPERIMENTS IN PROGRESS</span></div>}
            </div>
            <div className="studio-foot"><span>CREATIVE IDENTITY / 01</span><span>Small beginnings are still beginnings.</span></div>
          </div>
        </section>

        <section id="journal" className="section-shell section-pad journal">
          <div className="section-heading"><span className="eyebrow">05 / NOTES & JOURNAL</span><span className="side-note">Ideas, as they arrive</span></div>
          <div className="journal-grid"><h2>A place to leave<br/><em>a thought.</em></h2><div><p className="large-copy">Not everything needs to become a project. Some things are worth writing down simply because they made me think.</p><div className="journal-placeholder"><span className="eyebrow">THE JOURNAL IS OPEN</span><p>Technical notes, learning reflections, creative writing and little observations will find their way here over time.</p><span className="coming-label">FIRST ENTRY: WHEN IT'S READY</span></div></div></div>
        </section>

        <section id="contact" className="contact-section section-pad">
          <div className="section-shell contact-inner">
            <span className="eyebrow">06 / OPEN TO GOOD CONVERSATIONS</span>
            <h2>Have an idea?<br/><em>Let's make something.</em></h2>
            <p>For thoughtful collaborations, teaching opportunities, project conversations or simply to say hello.</p>
            <a className="button button-light" href="mailto:princeabhi00985@gmail.com">Write me a note <ArrowUpRight size={16}/></a>
            <div className="contact-socials"><a href="https://www.instagram.com/baaya_nedil/" target="_blank" rel="noreferrer"><Instagram size={16}/> Instagram</a><a href="https://github.com/vjabhi000985" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a><a href="https://www.linkedin.com/in/pandey-abhishek-nath-roy/" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a></div>
            <div className="contact-bottom"><span>BETWEEN LOGIC & IMAGINATION</span><span>MADE WITH CURIOSITY · © {new Date().getFullYear()}</span><a href="#top">BACK TO TOP ↑</a></div>
          </div>
        </section>
      </main>
      <AnimatePresence>{activePhoto && <motion.div className="lightbox" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setActivePhoto(null)}><button aria-label="Close image"><X/></button><p>{activePhoto}</p></motion.div>}</AnimatePresence>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
