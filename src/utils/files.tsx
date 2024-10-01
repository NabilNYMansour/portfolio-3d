export const stylesCss = `
body {
  margin: 0;
  padding: 0;
}
`.trim();

export const nextjs = `
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '/utils/projects';
import { styles } from '/utils/styles';
export default function Portfolio() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.name}>Nabil Mansour</h1>
        <p style={styles.title}>Full-Stack Developer</p>
      </header>
      <main>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Next JS</h2>
          <p style={styles.aboutText}>
            Next is the most recent technology I've been working with. It's a great framework for building server-rendered React applications.
            This sandbox is running React only though to save on loading time, but I tried to make the layout fit Vercel's design system.
          </p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Projects built with Next JS</h2>
          <div style={styles.projectsGrid}>
            {projects.map((project) => (
              <div key={project.name} style={styles.projectCard}>
                <div style={styles.projectContent}>
                  <h3 style={styles.projectTitle}>{project.name}</h3>
                  <p style={styles.projectDescription}>{project.description}</p>
                  <div style={styles.techStack}>
                    {project.technologies.map((tech) => (
                      <span key={tech} style={styles.techBadge}>{tech}</span>
                    ))}
                  </div>
                  <div style={styles.projectLinks}>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" style={styles.button}>
                      <FaExternalLinkAlt style={{ marginRight: '8px' }} /> View Project
                    </a>
                    {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
                      <FaGithub />
                    </a>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
`.trim();

export const projectsNext = `
export const projects = [
  {
    name: "ExcaliHub",
    description: "A platform for creating and sharing Excalidraw drawings.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "MantineUI",
      "Drizzle",
      "better-sqlite3"
    ],
    url: "https://excalihub.dev/",
    github: "https://github.com/NabilNYMansour/excalihub",
  },
  {
    name: "Medium to Markdown",
    description: "A web app that converts medium articles to markdown files.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "MantineUI"
    ],
    url: "https://medium2md.nabilmansour.com/",
    github: "https://github.com/NabilNYMansour/medium-to-markdown",
  },
  {
    name: "My Portfolio",
    description: "My personal portfolio website. The one you saw at the beginning of this website",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "MantineUI",
      "Strapi",
    ],
    url: "https://nabilmansour.com/",
  },
];
`.trim();

export const stylesNext = `
export const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  name: {
    fontSize: '2.5em',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  title: {
    fontSize: '1.5em',
    color: '#666',
  },
  section: {
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: '2em',
    color: '#333',
    marginBottom: '20px',
  },
  aboutText: {
    fontSize: '1.1em',
    lineHeight: '1.6',
    color: '#444',
    maxWidth: '800px',
  },
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '10px 15px',
    backgroundColor: '#000000',
    color: '#fff',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '1em',
    transition: 'background-color 0.3s',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  projectCard: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  projectContent: {
    padding: '20px',
  },
  projectTitle: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    color: '#333',
    marginTop: '0px',
    marginBottom: '10px',
  },
  projectDescription: {
    fontSize: '1em',
    color: '#666',
    marginBottom: '15px',
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '15px',
  },
  techBadge: {
    padding: '5px 10px',
    backgroundColor: '#e0e0e0',
    color: '#333',
    borderRadius: '15px',
    fontSize: '0.9em',
  },
  projectLinks: {
    display: 'flex',
    gap: '10px',
    alignItems: 'flex-end',
  },
  iconLink: {
    color: '#000000',
    fontSize: '1.5em',
    transition: 'color 0.3s',
  },
  footer: {
    textAlign: 'center',
    marginTop: '40px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
};
`.trim();

export const react = `
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '/utils/projects';
import { styles } from '/utils/styles';
export default function Portfolio() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.name}>Nabil Mansour</h1>
          <p style={styles.title}>Front-End Developer</p>
        </div>
      </header>
      <main style={styles.main}>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>React JS</h2>
          <p style={styles.aboutText}>
            Been working with React for a long time now, and I've built a lot of projects with it and worked on a lot of production apps both as an intern
            and a software engineer. This sandbox is running React right now and I tried to make the layout fit React's website design. Below you'll find some
            projects that are still live.
          </p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Projects built with React JS</h2>
          <div style={styles.projectsGrid}>
            {projects.map((project) => (
              <div key={project.name} style={styles.projectCard}>
                <div style={styles.projectContent}>
                  <h3 style={styles.projectTitle}>{project.name}</h3>
                  <p style={styles.projectDescription}>{project.description}</p>
                  <div style={styles.techStack}>
                    {project.technologies.map((tech) => (
                      <span key={tech} style={styles.techBadge}>{tech}</span>
                    ))}
                  </div>
                  <div style={styles.projectLinks}>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" style={styles.projectButton}>
                      <FaExternalLinkAlt style={{ marginRight: '0.5rem' }} /> View Project
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" style={styles.githubButton}>
                      <FaGithub style={{ marginRight: '0.5rem' }} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
`.trim();

export const projectsReact = `
export const projects = [
  {
    name: "Three.js Ray Marcher",
    description: "A ray marching web app where you can edit and render SDFs.",
    technologies: [
      "TypeScript",
      "React",
      "Three.js",
      "MUI"
    ],
    url: "https://nabilmansour.com/ThreeJSRayMarcher/",
    github: "https://github.com/NabilNYMansour/ThreeJS-RayMarcher",
  },
  {
    name: "Perlin Viewer",
    description: "A web app made with React and R3F to showcase 3D Perlin noise generation.",
    technologies: [
      "TypeScript",
      "React",
      "R3F",
      "MUI"
    ],
    url: "https://nabilmansour.com/PerlinViewer/",
    github: "https://github.com/NabilNYMansour/Perlin-Viewer",
  },
];
`.trim();

export const stylesReact = `
export const styles = {
  container: {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
    backgroundColor: '#ffffff',
    color: '#23272F',
    lineHeight: 1.5,
    margin: 0,
    padding: 0,
  },
  header: {
    backgroundColor: '#23272F',
    color: '#ffffff',
    padding: '2rem 0',
    textAlign: 'center',
  },
  headerContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  name: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  title: {
    fontSize: '1.25rem',
    color: '#8F9BAF',
  },
  main: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '2rem 1rem',
  },
  section: {
    marginBottom: '3rem',
  },
  sectionTitle: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: '#23272F',
  },
  aboutText: {
    fontSize: '1.125rem',
    color: '#404756',
    maxWidth: '800px',
  },
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    backgroundColor: '#087EA4',
    color: '#ffffff',
    borderRadius: '0.375rem',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'background-color 0.2s',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  projectCard: {
    backgroundColor: '#F6F7F9',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    transition: 'box-shadow 0.3s',
  },
  projectContent: {
    padding: '1.5rem',
  },
  projectTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#23272F',
    marginBottom: '0.75rem',
  },
  projectDescription: {
    fontSize: '1rem',
    color: '#404756',
    marginBottom: '1rem',
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1rem',
  },
  techBadge: {
    padding: '0.25rem 0.5rem',
    backgroundColor: '#E6E7EB',
    color: '#23272F',
    borderRadius: '1rem',
    fontSize: '0.875rem',
  },
projectLinks: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '0.75rem',
  },
  projectButton: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    backgroundColor: '#23272F',
    color: '#ffffff',
    borderRadius: '0.375rem',
    textDecoration: 'none',
    fontSize: '0.875rem',
    fontWeight: '500',
    transition: 'background-color 0.2s',
  },
  githubButton: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    backgroundColor: '#E6E7EB',
    color: '#23272F',
    borderRadius: '0.375rem',
    textDecoration: 'none',
    fontSize: '0.875rem',
    fontWeight: '500',
    transition: 'background-color 0.2s',
  },
};
`.trim();