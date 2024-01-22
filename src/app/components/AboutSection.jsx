"use client";
import Image from "next/image";
import React, { useTransition, useState } from "react";

import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-teal-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

const TAB_DATA = [
  {
    title: "Skill",
    id: "skill",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML, CSS, JavaScript</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Laravel</li>
        <li>SQL</li>
        <li>Java OOP</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: "Pendidikan",
    id: "pendidikan",
    content: (
      <ul className="list-disc pl-2">
        <li>Vocational High School 1 Pogalan</li>
        <li>State Polytechnic of Malang</li>
      </ul>
    ),
  },
  {
    title: "Sertifikat",
    id: "sertifikat",
    content: (
      <ul className="list-disc pl-2">
        <li>Junior Network Administrator - BSNP</li>
        <li>Junior Web Developer - BSNP</li>
      </ul>
    ),
  },
  {
    title: "Course",
    id: "course",
    content: (
        <ul className="list-disc pl-2">
            <li>Basic Data Visualization - Dicoding</li>
            <li>Basic JavaScript Programming - Dicoding</li>
            <li>Basic JavaScript - Skillvul</li>
            <li>Cloud Practitioner Essentials - Dicoding</li>
            <li>Getting Started Programming in Python - Dicoding</li>
            <li>Machine Learning for Beginners - Dicoding</li>
            <li>Create Back-End Applications for Beginners - Dicoding</li>
            <li>Basic C# - Skillvul</li>
        </ul>
    ),
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skill");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white lg:pb-8 lg:mb-20" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-justify py-8 px-8 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about.png" width={500} height={500} 
            style={{
                marginTop: '100px',
                marginRight: '65px',
                paddingRight: '25px',
            }}/>
        <div className="md:mt-0 text-left flex flex-col h-full"
            style = {{
                marginTop: '100px',
            }}>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm an Informatic Engineering student specializing in web development, proficient in HTML, CSS, and JavaScript. I've Built responsive websites and explored frameworks like Express and Laravel, eager to contribute to innovative projects. My combination of pendidikan and passion makes me a valuable asset in the dynamic tech industry.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skill")}
              active={tab === "skill"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("pendidikan")}
              active={tab === "pendidikan"}
            >
              {" "}
              Educations{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("sertifikat")}
              active={tab === "sertifikat"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("course")}
              active={tab === "course"}
            >
              {" "}
              Courses{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;