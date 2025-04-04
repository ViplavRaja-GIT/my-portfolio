import React from 'react';
import { Github, Linkedin, Mail ,ExternalLink, ChevronDown, Briefcase, GraduationCap } from 'lucide-react';
import { projects } from './data/projects';
import { experience, education } from './data/experience';
import { SkillsBelt } from './components/SkillsBelt';

function App() {
  return (
    <div className="min-h-screen text-gray-300">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-24 mx-auto relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] 
                        opacity-5 bg-cover bg-center bg-no-repeat"></div>
        <div className="relative">
          <p className="text-[#674cff] mb-4 font-mono">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-100 mb-4 ">
            Viplav Raja
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#9333ea]">
          I prototype, develop, and ensure quality software while collaborating with clients.
          </h2>
          <p className="max-w-2xl text-gray-400 text-lg mb-8">
          I'm a software engineer specializing in prototyping, developing, and delivering high-quality, reliable software. 
          Currently focused on building efficient, user-centric solutions with seamless collaboration.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/ViplavRaja-GIT" target="_blank" rel="noopener noreferrer" 
               className="text-[#674cff] hover:text-[#9333ea] transition-colors"
               aria-label="GitHub Profile">
              <Github className="w-6 h-6" aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/viplav-raja/" target="_blank" rel="noopener noreferrer"
               className="text-[#674cff] hover:text-[#9333ea] transition-colors"
               aria-label="LinkedIn Profile">
              <Linkedin className="w-6 h-6" aria-hidden="true" />
            </a>
            <a href="mailto:viplavraja2@gmail.com"
               className="text-[#674cff] hover:text-[#9333ea] transition-colors"
               aria-label="Email Contact">
              <Mail className="w-6 h-6" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="flex items-center flex-col absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-center">
            <a href="/my-portfolio/assets/Viplav-Raja's-Resume.pdf" 
              className="inline-block px-8 py-2 border-2 mb-2 border-[#674cff] text-[#674cff] rounded-lg
                        hover:bg-gradient-to-r hover:from-[#674cff] hover:to-[#9333ea] hover:text-white
                        hover:border-transparent transition-all duration-300" download>
              Get CV
            </a>
          </div>
          <ChevronDown className="text-[#674cff] w-8 h-8" aria-hidden="true" />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-8 md:px-24 max-w-7xl mx-auto py-20">
        <div className="flex items-center gap-4 mb-12">
          <Briefcase className="text-[#674cff] w-8 h-8" aria-hidden="true" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
            Experience
          </h2>
        </div>
        <div className="space-y-12">
          {experience.map((job, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-[#1a1f35] hover:border-[#674cff] transition-colors">
              <div className="absolute w-4 h-4 bg-gradient-to-r from-[#674cff] to-[#9333ea] rounded-full -left-[9px] top-0"></div>
              <div className="glass-card p-6 rounded-lg space-y-2 neon-border">
                <span className="text-[#674cff] text-sm font-mono">{job.period}</span>
                <h3 className="text-xl font-bold text-gray-100">{job.title}</h3>
                <p className="text-gray-400">{job.company}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  {job.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="px-8 md:px-24 max-w-7xl mx-auto py-20">
        <div className="flex items-center gap-4 mb-12">
          <GraduationCap className="text-[#674cff] w-8 h-8" aria-hidden="true" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
            Education
          </h2>
        </div>
        <div className="space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-[#1a1f35] hover:border-[#674cff] transition-colors">
              <div className="absolute w-4 h-4 bg-gradient-to-r from-[#674cff] to-[#9333ea] rounded-full -left-[9px] top-0"></div>
              <div className="glass-card p-6 rounded-lg space-y-2 neon-border">
                <span className="text-[#674cff] text-sm font-mono">{edu.period}</span>
                <h3 className="text-xl font-bold text-gray-100">{edu.degree}</h3>
                <p className="text-gray-400">{edu.school}</p>
                <p className="text-gray-400">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="px-8 md:px-24 max-w-7xl mx-auto py-20">
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={`${project.title}-${index}`} className="glass-card rounded-lg p-6 hover:translate-y-[-10px] transition-all duration-300 neon-border">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#674cff] to-[#9333ea] rounded-lg flex items-center justify-center">
                  {React.cloneElement(project.icon, { className: 'text-white', 'aria-hidden': true })}
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" 
                     className="text-[#674cff] hover:text-[#9333ea] transition-colors"
                     aria-label={`Visit ${project.title} project`}>
                    <ExternalLink className="w-5 h-5" aria-hidden="true" />
                  </a>
                )}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-100">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={`${tech}-${techIndex}`} className="text-sm bg-[#1a1f35] px-3 py-1 rounded-full text-[#674cff]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="className=px-8 md:px-24 max-w-7xl mx-auto py-20">
        <div className="w-full">
          <SkillsBelt />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 md:px-24 max-w-7xl mx-auto py-20">
        <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-center text-gray-400 max-w-xl mx-auto mb-8">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </p>
        <div className="text-center">
          <a href="mailto:viplavraja2@gmail.com" 
             className="inline-block px-8 py-4 border-2 border-[#674cff] text-[#674cff] rounded-lg
                      hover:bg-gradient-to-r hover:from-[#674cff] hover:to-[#9333ea] hover:text-white
                      hover:border-transparent transition-all duration-300">
            Say Hello
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;