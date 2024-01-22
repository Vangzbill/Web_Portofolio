"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projectsData = () => [
    {
        id: 1,
        title: "PDAM Complaint Website",
        description: "This website was created for the purposes of the final project of the Advanced Web Programming course. This website is used for customers to state their complaints against the PDAM and the PDAM can respond to them.",
        gitUrl: "https://github.com/JLUNGOOD/Proyek1_K4",
        tag: "All, Web",
        images: "./images/projects/pdam.jpg",
    },
    {   
        id: 2,
        title: "VSGA Test Website",
        description: "This website was created for the purpose of VSGA training final project. This project contains the functions of create read update and delete BPSDMP activities using PHP.",
        gitUrl: "https://github.com/Vangzbill/vsga/tree/master/159_SabillaLuthfi",
        tag: "All, Web",
        images: "./images/projects/vsga.jpg",
    },
    {
        id: 3,
        title: "Game Sales Data Visualization",
        description: "This Project was created for the purpose of the final project of the Business Intelligence course. The main function of this project is to visualise and analyse video game sales data.",
        gitUrl: "https://github.com/Vangzbill/Business-Intelligence",
        tag: "All, Backend",
        images: "./images/projects/game.png",
    },
    {
        id: 4,
        title: "Moora Method Decision Calculation",
        description: "This website was created for the purposes of the final project of the Decision Support System course. This project uses the calculation of the Moora method to take the decision results.",
        gitUrl: "",
        tag: "All, Web",
        images: "./images/projects/spk.jpg",
    },
    {
        id: 5,
        title: "Employee Attendance API",
        description: "This project was created for internship test cases. Where I created an employee attendance API using Express with several functions in it.",
        gitUrl: "https://github.com/Vangzbill/ADS_TestCase",
        tag: "All, Backend",
        images: "./images/projects/absensi.jpg",
    },
    {
        id: 6,
        title: "API Bookshelf",
        description: "This project was created for the purposes of the final class assignment from Dicoding. Where I create a book lending API using Express with several functions in it that have been adjusted to the provisions of Dicoding.",
        gitUrl: "https://github.com/Vangzbill/API_Bookshelf",
        tag: "All, Backend",
        images: "./images/projects/bookshelf.jpg",
    },
];

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData().filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-16 mb-4 md:mb-8">
            My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
            />
            <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
            />
            <ProjectTag
            onClick={handleTagChange}
            name="Backend"
            isSelected={tag === "Backend"}
            />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project, index) => (
            <motion.li
                key={index}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.4 }}
            >
                <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.images}
                gitUrl={project.gitUrl}
                />
            </motion.li>
            ))}
        </ul>
        </section>
    );
};

export default ProjectSection;