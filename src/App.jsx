import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaAndroid,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import profile from "./assets/profile.jpeg";

import { FaDownload } from "react-icons/fa";

import {
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiHibernate,
  SiDjango,
  SiJavascript,
} from "react-icons/si";

export default function App() {
  const skills = [
    {
      name: "Java",
      icon: <FaJava className="text-orange-500 text-6xl" />,
    },
    {
      name: "Spring Boot",
      icon: <SiSpringboot className="text-green-500 text-6xl" />,
    },
    {
      name: "React",
      icon: <FaReact className="text-cyan-400 text-6xl" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-400 text-6xl" />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-blue-400 text-6xl" />,
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-blue-500 text-6xl" />,
    },
    {
      name: "Docker",
      icon: <FaDocker className="text-blue-400 text-6xl" />,
    },
    {
      name: "Hibernate",
      icon: <SiHibernate className="text-yellow-500 text-6xl" />,
    },
    {
      name: "Django API",
      icon: <SiDjango className="text-green-300 text-6xl" />,
    },
    {
      name: "Android",
      icon: <FaAndroid className="text-green-500 text-6xl" />,
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-orange-400 text-6xl" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400 text-6xl" />,
    }
  ];

  const projects = [
    {
      title: "Gestion de Réclamation",
      description:
        "Intégration d'une nouvelle service de reclamation dans une plateforme existant",
      tech: "Spring Boot • React • PostgreSQL",
      location: "YAS Madagascar"
    },
    {
      title: "Suivi des vie de coupon",
      description:
        "DCréation d'un application de suivi de vie de coupon d'argent",
      tech: "Spring Boot • React ",
      location: "YAS Madagascar"
    },
    {
      title: "Gestion de Suivi de vaccination",
      description:
        "Projet Application mobile pour suivre les périodes de vaccinations des zébus du Pharmashop.",
      tech: "Java • Android Studio ",
      location: "AVEMA Fianarantsoa"
    },
    {
      title: "Backend d'une gestion d'association",
      description:
        "Developpement du coté backend d'une application web de gestion d'une association",
      tech: "Java • Spring boot ",
      location: "Fianarantsoa"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Blur */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700/20 blur-3xl rounded-full" />
      </div>

      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-md sticky top-0 z-50 bg-black/40">
        <h1 className="text-2xl font-bold tracking-widest">
          SAFIDY<span className="text-cyan-400">.DEV</span>
        </h1>

        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6">
        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 to-blue-700 p-1 shadow-2xl shadow-cyan-500/30">
          <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 flex items-center justify-center">
  <img
    src={profile}
    alt="profile"
    className="w-full h-full object-cover"
  />
</div>
        </div>

        <h2 className="text-5xl md:text-7xl font-extrabold mt-10 leading-tight">
          Full Stack
          <span className="block text-cyan-400">
            Java Developer
          </span>
        </h2>

        <p className="max-w-2xl text-zinc-400 mt-6 text-lg leading-relaxed">
          Passionné par le développement backend, frontend, mobile
          et DevOps. Je développe des applications modernes avec
          Java, Spring Boot, React, Node.js et PostgreSQL.
        </p>

        <div className="flex flex-wrap gap-4 mt-10 justify-center">
          <a
  href="/cv_safidy.pdf"
  download
  className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold shadow-lg shadow-cyan-500/30 inline-flex items-center gap-2"
>
  <FaDownload /> Télécharger CV
</a>

          <a
  href="https://wa.me/261349764038"
  target="_blank"
  className="px-8 py-4 rounded-2xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition inline-block"
>
  Contact Me
</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 md:px-20 py-24">
        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">
          <h3 className="text-4xl font-bold mb-8 text-cyan-400">
            About Me
          </h3>

          <p className="text-zinc-300 leading-8 text-lg">
            Je suis un développeur passionné spécialisé dans le
            développement d’applications web, mobile et backend.
            J’aime concevoir des architectures modernes, créer des
            interfaces élégantes et déployer des solutions robustes
            avec Docker.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 md:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16 text-cyan-400">
            Technologies & Skills
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-110 hover:-translate-y-2 hover:border-cyan-400 transition duration-300 backdrop-blur-xl shadow-xl"
              >
                <div className="mb-4">
                  {skill.icon}
                </div>

                <p className="text-center font-semibold text-zinc-200">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 md:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16 text-cyan-400">
            Featured Projects
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 shadow-2xl"
              >
                <div className="h-52 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-700/20 border border-white/10 mb-6 flex items-center justify-center text-6xl">
                  💻
                </div>

                <h4 className="text-2xl font-bold mb-4">
                  {project.title}
                </h4>

                <p className="text-zinc-400 leading-7 mb-6">
                  {project.description}
                </p>

                <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm">
                  {project.tech}
                </div>

                <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm ml-[50px]">
                  {project.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-20 py-24">
        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 text-center shadow-2xl">
          <h3 className="text-4xl font-bold text-cyan-400 mb-8">
            Contact
          </h3>

          <p className="text-zinc-400 text-lg mb-10 leading-8">
            Disponible pour des projets, collaborations et
            opportunités de stage ou développement.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black/30 rounded-2xl p-6 border border-white/10">
              <FaEnvelope className="text-4xl mx-auto mb-4 text-cyan-400" />

              <p className="text-zinc-400">Email</p>

              <p className="font-semibold">
                randrianomentsoasafidy@gmail.com
              </p>
            </div>

            <div className="bg-black/30 rounded-2xl p-6 border border-white/10">
              <FaGithub className="text-4xl mx-auto mb-4 text-cyan-400" />

              <p className="text-zinc-400">GitHub</p>

              <p className="font-semibold">
                github.com/SafidyAlp
              </p>
            </div>

            <div className="bg-black/30 rounded-2xl p-6 border border-white/10">
              <FaWhatsapp className="text-4xl mx-auto mb-4 text-cyan-400" />

              <p className="text-zinc-400">WhatsApp</p>

              <p className="font-semibold">
                +261 34 97 640 38
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-zinc-500 text-sm">
        © 2026 Safidy Developer Portfolio. All rights reserved.
      </footer>
    </div>
  );
}