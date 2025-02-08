"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dockerImage from "@/public/images/dockerlogo.png";
import linuxImage from "@/public/images/linuxlogo.png";
import k8sImage from "@/public/images/k8slogo.png";
import nextjsImage from "@/public/images/nextjslogo.png";
import pythonImage from "@/public/images/pythonlogo.png";
import litellmImage from "@/public/images/litellmlogo.png";
import langfuseImage from "@/public/images/langfuselogo.png";
import milvusImage from "@/public/images/milvuslogo.png";
import postgresImage from "@/public/images/postgreslogo.png";
import redisImage from "@/public/images/redislogo.png";
import langchainImage from "@/public/images/langchainlogo.png";
import langgraphImage from "@/public/images/langchainlogo.png";
import flowiseImage from "@/public/images/flowiselogo.png";
import openwebuiImage from "@/public/images/oilogo.png";
import homepageImage from "@/public/images/homepagelogo.png";
import openaiImage from "@/public/images/openailogo.png";
import llamaImage from "@/public/images/metalogo.png";
import deepseekImage from "@/public/images/deepseeklogo.png";
import continueDevImage from "@/public/images/continuelogo.png";
import profilelogo from "@/public/images/profile.png";

export default function Home() {
  const coreSkills = [
    { name: "Linux", level: "Medium", image: linuxImage },
    { name: "Docker", level: "Advanced", image: dockerImage },
    { name: "Kubernetes", level: "Beginner", image: k8sImage },
    { name: "Next.js", level: "Prompt Playground", image: nextjsImage },
    { name: "Python", level: "GenAI Coding", image: pythonImage },
  ];

  const genAITools = [
    { name: "litellm", image: litellmImage },
    { name: "langfuse", image: langfuseImage },
    { name: "milvus", image: milvusImage },
    { name: "Postgres", image: postgresImage },
    { name: "Redis", image: redisImage },
    { name: "LangChain", image: langchainImage },
    { name: "LangGraph", image: langgraphImage },
    { name: "Flowise", image: flowiseImage },
    { name: "openwebui", image: openwebuiImage },
    { name: "Homepage", image: homepageImage },
    { name: "OpenAI", image: openaiImage },
    { name: "Llama", image: llamaImage },
    { name: "Deepseek", image: deepseekImage },
    { name: "continue.dev", image: continueDevImage },
  ];

  return (
    <>
      {/* Fixed Navigation Header */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed top-0 left-0 w-full z-50 p-4 bg-gray-900 bg-opacity-75 backdrop-blur-md"
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            {/* Replace /profile.jpg with your actual profile image */}
            <Image
              src={profilelogo}
              alt="Ruskin Wadia"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-white">Ruskin Wadia</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#home" className="text-white hover:text-indigo-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white hover:text-indigo-400">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-white hover:text-indigo-400">
                  Skills
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 relative"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-4"
        >
          {/* Circular profile image with a subtle scale animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            className="mx-auto mb-6 w-32 h-32 rounded-full overflow-hidden border-4 border-white"
          >
            <Image
              src={profilelogo}
              alt="Ruskin Wadia"
              width={128}
              height={128}
              objectFit="cover"
            />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Ruskin Wadia
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-200">
            Data Scientist &amp; Generative AI Specialist
          </p>
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-8 inline-block px-6 py-3 border border-white rounded-full text-white hover:bg-white hover:text-gray-900 transition-colors"
          >
            Discover More
          </motion.a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <motion.div
          className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="flex-shrink-0">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-48 h-48 rounded-full overflow-hidden border-4 border-indigo-400"
            >
              <Image
                src={profilelogo}
                alt="Ruskin Wadia"
                width={192}
                height={192}
                objectFit="cover"
              />
            </motion.div>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
            <p className="text-lg text-gray-300">
              I’m a data scientist passionate about generative AI and creative
              problem-solving. I build innovative solutions by leveraging modern
              tools and technologies, always pushing the boundaries of what's
              possible.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Technical Skills
          </h2>

          {/* Core Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-indigo-400 text-center">
              Core Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
              {coreSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center"
                >
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={64}
                    height={64}
                    className="mx-auto"
                  />
                  <p className="mt-2 text-gray-300 text-center text-sm">
                    {skill.name}
                  </p>
                  <p className="text-xs text-gray-400">{skill.level}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Generative AI Tools */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6 text-indigo-400 text-center">
              Generative AI Tools
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
              {genAITools.map((tool, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center"
                >
                  <Image
                    src={tool.image}
                    alt={tool.name}
                    width={64}
                    height={64}
                    className="mx-auto"
                  />
                  <p className="mt-2 text-gray-300 text-center text-sm">
                    {tool.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900">
        <div className="container mx-auto px-4 text-center text-gray-500">
          © {new Date().getFullYear()} Ruskin Wadia. All rights reserved.
        </div>
      </footer>
    </>
  );
}
