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
  FaArrowUp,
  FaCode,
  FaDatabase,
  FaCloud,
  FaTerminal,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiHibernate,
  SiDjango,
  SiJavascript,
  SiRedis,
  SiMongodb,
} from "react-icons/si";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { TbBrandReactNative } from "react-icons/tb";
import profile from "./assets/profile.jpeg";

export default function App() {

  const skills = [
    { name: "Java", icon: <FaJava className="text-orange-500 text-6xl" />, category: "backend" },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-500 text-6xl" />, category: "backend" },
    { name: "Hibernate", icon: <SiHibernate className="text-yellow-500 text-6xl" />, category: "backend" },
    { name: "Node.js", icon: <FaNodeJs className="text-green-400 text-6xl" />, category: "backend" },
    { name: "React", icon: <FaReact className="text-cyan-400 text-6xl" />, category: "frontend" },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-6xl" />, category: "frontend" },
     {name: "React Native", icon: <TbBrandReactNative className="text-cyan-400 text-6xl" />, category: "mobile" },
    { name: "Android", icon: <FaAndroid className="text-green-500 text-6xl" />, category: "mobile" },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400 text-6xl" />, category: "database" },
    { name: "MySQL", icon: <SiMysql className="text-blue-500 text-6xl" />, category: "database" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-6xl" />, category: "database" },
    { name: "Redis", icon: <SiRedis className="text-red-500 text-6xl" />, category: "database" },
    { name: "Docker", icon: <FaDocker className="text-blue-400 text-6xl" />, category: "devops" },
    { name: "Git", icon: <FaGitAlt className="text-orange-400 text-6xl" />, category: "devops" },
    { name: "Django", icon: <SiDjango className="text-green-300 text-6xl" />, category: "backend" },
  ];

  const categories = {
    backend: { icon: <FaTerminal />, label: "Backend", color: "from-green-500 to-emerald-500" },
    frontend: { icon: <FaCode />, label: "Frontend", color: "from-cyan-500 to-blue-500" },
    mobile: { icon: <TbBrandReactNative />, label: "Mobile", color: "from-purple-500 to-pink-500" },
    database: { icon: <FaDatabase />, label: "Database", color: "from-yellow-500 to-orange-500" },
    devops: { icon: <FaCloud />, label: "DevOps", color: "from-indigo-500 to-purple-500" },
  };

  const projects = [
    {
      title: "Gestion de Réclamation",
      description: "Intégration d'une nouvelle service de réclamation dans une plateforme existante",
      tech: ["Spring Boot", "React", "PostgreSQL"],
      location: "YAS Madagascar",
      gradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
      title: "Suivi des vie de coupon",
      description: "Création d'une application de suivi de vie de coupon d'argent",
      tech: ["Spring Boot", "React"],
      location: "YAS Madagascar",
      gradient: "from-emerald-500/20 to-teal-500/20",
    },
    {
      title: "Gestion de Suivi de vaccination",
      description: "Application mobile pour suivre les périodes de vaccinations des zébus",
      tech: ["Java", "Android Studio"],
      location: "AVEMA Fianarantsoa",
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Backend d'une gestion d'association",
      description: "Développement du côté backend d'une application web de gestion d'association",
      tech: ["Java", "Spring Boot"],
      location: "Fianarantsoa",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Animation */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/30 blur-[100px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700/30 blur-[100px] rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 blur-[100px] rounded-full animate-pulse delay-700" />
      </div>

      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-xl sticky top-0 z-50 bg-black/50">
        <div className="group cursor-pointer" onClick={scrollToTop}>
          <h1 className="text-2xl font-bold tracking-widest bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            SAFIDY<span className="text-cyan-400">.DEV</span>
          </h1>
          <div className="h-0.5 w-0 group-hover:w-full bg-cyan-400 transition-all duration-300" />
        </div>

        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group hover:text-cyan-400 transition"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 relative">
        {/* Animated Border Profile */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-spin-slow" />
          <div className="absolute inset-[3px] rounded-full bg-black" />
          <div className="w-40 h-40 rounded-full relative overflow-hidden">
            <img src={profile} alt="profile" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="mt-10 space-y-4">
          <h2 className="text-5xl md:text-7xl font-extrabold">
            Full Stack
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Developpeur Java
            </span>
          </h2>

          <div className="flex justify-center gap-3">
            {["Backend", "Frontend", "Mobile", "DevOps"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p className="max-w-2xl text-zinc-400 mt-6 text-lg leading-relaxed">
          Passionné par le développement backend, frontend, mobile et DevOps.
          Je développe des applications modernes avec Java, Spring Boot, React,
          Node.js et PostgreSQL.
        </p>

        <div className="flex flex-wrap gap-4 mt-10 justify-center">
          <a
            href="/cv_safidy.pdf"
            download
            className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition text-black font-bold shadow-lg shadow-cyan-500/30 inline-flex items-center gap-2"
          >
            <HiOutlineDocumentDownload className="text-xl group-hover:animate-bounce" />
            Télécharger CV
          </a>

          <a
            href="https://wa.me/261349764038"
            target="_blank"
            className="px-8 py-4 rounded-2xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition inline-flex items-center gap-2"
          >
            <FaWhatsapp className="text-xl" />
            Me contacter
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 md:px-20 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl hover:border-cyan-400/30 transition-all duration-500">
            <h3 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              A propos de moi
            </h3>
            <p className="text-zinc-300 leading-8 text-lg">
              Je suis un développeur passionné spécialisé dans le développement
              d'applications web, mobile et backend. J'aime concevoir des
              architectures modernes, créer des interfaces élégantes et déployer
              des solutions robustes avec Docker.
            </p>
            <div className="mt-6 flex gap-4 text-cyan-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>3+ ans d'expérience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <span>10+ projets réalisés</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with Categories */}
      <section id="skills" className="px-6 md:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technologies & Competences
          </h3>
          <p className="text-center text-zinc-400 mb-16">Les outils que j'utilise au quotidien</p>

          {Object.entries(categories).map(([key, cat]) => (
            <div key={key} className="mb-12">
              <div className={`flex items-center gap-2 mb-6 text-xl font-semibold bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
                {cat.icon}
                <span>{cat.label}</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {skills
                  .filter((s) => s.category === key)
                  .map((skill, index) => (
                    <div
                      key={index}
                      className="group bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center hover:scale-105 hover:-translate-y-1 hover:border-cyan-400 transition-all duration-300 backdrop-blur-xl hover:shadow-xl hover:shadow-cyan-500/20"
                    >
                      <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <p className="text-center font-semibold text-zinc-200 text-sm">
                        {skill.name}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 md:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Projets Réalisés
          </h3>
          <p className="text-center text-zinc-400 mb-16">Quelques réalisations récentes</p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative p-8">
                  <div className="h-52 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-700/20 border border-white/10 mb-6 flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-500">
                    <div className="animate-float">💻</div>
                  </div>

                  <h4 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition">
                    {project.title}
                  </h4>

                  <p className="text-zinc-400 leading-7 mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-2 text-zinc-500 text-sm">
                    <FaGithub className="text-cyan-400" />
                    {project.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-20 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-xl rounded-3xl p-12 text-center shadow-2xl">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
              Restons en contact
            </h3>

            <p className="text-zinc-400 text-lg mb-12 leading-8">
              Disponible pour des projets, collaborations et opportunités
              de stage ou développement. N'hésitez pas à me contacter !
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="group bg-black/30 rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/40 transition">
                  <FaEnvelope className="text-2xl text-cyan-400" />
                </div>
                <p className="text-zinc-400 text-sm">Email</p>
                <p className="font-semibold text-sm break-all">
                  randrianomentsoasafidy@gmail.com
                </p>
              </div>

              <a
                href="https://github.com/SafidyAlp"
                target="_blank"
                className="group bg-black/30 rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all hover:-translate-y-1 block"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/40 transition">
                  <FaGithub className="text-2xl text-cyan-400" />
                </div>
                <p className="text-zinc-400 text-sm">GitHub</p>
                <p className="font-semibold text-sm">github.com/SafidyAlp</p>
              </a>

              <a
                href="https://wa.me/261349764038"
                target="_blank"
                className="group bg-black/30 rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all hover:-translate-y-1 block"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/40 transition">
                  <FaWhatsapp className="text-2xl text-cyan-400" />
                </div>
                <p className="text-zinc-400 text-sm">WhatsApp</p>
                <p className="font-semibold text-sm">+261 34 97 640 38</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center shadow-lg shadow-cyan-500/30 hover:scale-110 transition-all duration-300"
      >
        <FaArrowUp />
      </button>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-zinc-500 text-sm">
        <p>© 2026 Safidy Developer Portfolio</p>
        <p className="mt-2 text-xs">Built with React & Tailwind CSS</p>
      </footer>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}