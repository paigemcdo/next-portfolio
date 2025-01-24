'use client';

import { motion } from "framer-motion";
import Image from "next/image";  // Uncommented Image import

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-gray-900 dark:to-slate-900">
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/70 dark:bg-black/70 p-6">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">
            Paige McDougall
          </h1>
          <div className="flex gap-6">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-violet-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-20 space-y-32">
        {/* Hero Section */}
        <motion.section 
          id="about"
          initial="initial"
          animate="animate"
          className="flex flex-col sm:flex-row items-center gap-12"
        >
          <motion.div className="flex-1 space-y-6" variants={fadeInUp}>
            <h2 className="text-5xl font-bold">
              Software Engineer
              <span className="block text-violet-600">Building the Future</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Hello! I&apos;m a Computer Engineering student at the University of Toronto with over three years of experience in various fields including object-oriented programming (C, C++), embedded systems (FPGA, Verilog). I am currently seeking a 4-16 month Software or Hardware Engineering co-op starting in May 2025.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="/resume_PaigeMcDougall.pdf"
                target="_blank"
                className="px-6 py-3 border border-violet-600 text-violet-600 rounded-full hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-colors"
              >
                View Resume
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square rounded-full bg-gradient-to-tr from-violet-500 to-indigo-500 opacity-20 absolute -inset-4 blur-3xl" />
            <Image
              src="/headshot.png"
              alt="Profile picture of Paige McDougall"
              width={400}
              height={400}
              className="rounded-full relative"
              priority
            />
          </motion.div>
        </motion.section>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          {...fadeInUp}
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Education</h3>
            <div className="space-y-2">
              <p className="font-semibold">Bachelor of Applied Science in Computer Engineering</p>
              <p className="text-gray-600 dark:text-gray-300">University of Toronto | Expected 2027</p>
              <p className="text-gray-600 dark:text-gray-300"></p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>Edward S Rogers Sr. Admission Scholarship (2021)</li>
                <li>Dean&apos;s Merit Award (2021)</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Aspirations</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Full-Stack Development</p>
                <p className="text-gray-600 dark:text-gray-300">I am passionate about full-stack development, with hands-on experience in JavaScript, Python, C++, and frameworks like React. My interests involve designing sleek, user-focused front-end interfaces and building efficient, scalable back-end systems. I thrive on creating seamless, end-to-end solutions that leave a lasting impact. I&apos;m excited to bring my blend of technical skills and creativity to innovative projects.</p>
              </div>
              <div>
                <p className="font-semibold">Embedded Systems</p>
                <p className="text-gray-600 dark:text-gray-300">I am passionate about embedded systems and hardware development, with experience in C++, Verilog, and FPGA design. I enjoy working at the intersection of hardware and software, creating efficient, low-level systems that bring innovative ideas to life. From optimizing performance to tackling complex design challenges, I thrive on building reliable solutions that seamlessly integrate technology.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.section 
          id="projects" 
          className="space-y-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold text-center"
            {...fadeInUp}
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 gap-16">
            {[
              {
                title: "Detecting Eeveelutions",
                description: "A deep learning object detection model that can identify different Pokémon Eeveelutions within images. Built using TensorFlow and trained on a custom dataset using transfer learning on Densenet, this project demonstrates the application of computer vision techniques in a fun and engaging way.",
                tech: ["Python", "TensorFlow", "Computer Vision", "Deep Learning"],
                image: "/detectingEeveelutions.png",
                demo: "https://github.com/paigemcdo/eeveelutions",
                icon: "🤖"
              },
              {
                title: "FPGA Donkey Kong",
                description: "A reimagining of the classic arcade game Donkey Kong implemented on an FPGA platform. Features custom hardware design, real-time signal processing and graphics rendering, and reactive audio. This project showcases the intersection of digital design and gaming.",
                tech: ["C", "FPGA", "Digital Design", "Game Development"],
                image: "/donkeyKong.png",
                demo: "https://github.com/paigemcdo/fpga-dk",
                icon: "🎮"
              },
              {
                title: "Zenith - GIS Development",
                description: "Developed a route-finding map application using C++ and OpenStreetMaps API. Implemented various pathfinding algorithms including Dijkstra, A*, and Greedy algorithm with 3-/4-OPT optimization for efficient route calculation across multiple cities.",
                tech: ["C++", "OpenStreetMaps API", "Algorithms", "Data Structures"],
                image: "/zenith.png",
                demo: "https://github.com/paigemcdo/zenith",
                icon: "🗺️"
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className="flex flex-col md:flex-row gap-8 items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="w-full md:w-1/2 aspect-video relative overflow-hidden rounded-xl group bg-gray-200 dark:bg-gray-700">
                  <div className="absolute inset-0 flex items-center justify-center text-4xl">
                    <Image
                      src={project.image}
                      alt="Project Image"
                      width={700}
                      height={500}
                    />
                  </div>
                  
                  {/* __image demo button__
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-violet-100 transition-colors"
                      >
                        View Project →
                      </a>
                    </div>
                  </div> */}
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{project.icon}</span>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          id="skills" 
          className="space-y-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold text-center"
            {...fadeInUp}
          >
            Technical Skills
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            {...fadeInUp}
          >
            {[
              { title: "Languages", icon: "💻", skills: ["Python", "C/C++", "C#", "VHDL", "JavaScript", "HTML/CSS", "Verilog", "MATLAB"] },
              { title: "Technologies", icon: "⚙️", skills: ["TensorFlow", "PyTorch", "Git", "Linux", "AutoCAD", "React", "ModelSim"] },
              { title: "Hardware", icon: "🔧", skills: ["FPGA", "Microcontrollers", "Digital Design", "PCB Design"] },
            ].map((category) => (
              <motion.div
                key={category.title}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:scale-105 transition-transform"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-gray-600 dark:text-gray-300">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          id="contact" 
          className="text-center space-y-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold"
            {...fadeInUp}
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300"
            {...fadeInUp}
          >
            Looking for 4-16 month internship opportunities starting in May 2025!
          </motion.p>
          <motion.div 
            className="flex justify-center gap-6"
            {...fadeInUp}
          >
            <a
              href="mailto:paige.mcdougall@mail.utoronto.ca"
              className="px-6 py-3 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors"
            >
              Email Me
            </a>
            <a
              href="tel:+16048496248"
              className="px-6 py-3 border border-violet-600 text-violet-600 rounded-full hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-colors"
            >
              Call Me
            </a>
          </motion.div>
        </motion.section>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 p-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p>© 2024 Paige McDougall</p>
          <div className="flex gap-6">
            <a href="https://github.com/paigemcdo" className="hover:text-violet-600 transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/paigemcdougall" className="hover:text-violet-600 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
