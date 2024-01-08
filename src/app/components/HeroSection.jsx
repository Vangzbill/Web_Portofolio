"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
    return (
      <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mr-9 mt-0 lg:mt-0 mb-4" 
          >
            <div className="rounded-full bg-[#222222] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
              <Image
                src="/images/foto.png"
                alt="foto diri"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={300}
                height={300}
                style={{ borderRadius: '50%' }}
              />
            </div>
          </motion.div>
  
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start ml-9 mt-0" 
          >
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Sabilla Luthfi R",
                1000,
                "Web Developer",
                1000,
                "Backend Engineer",
                1000,
                "Data Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          I'm an Informatic Engineering student specializing in web development, proficient in HTML, CSS, and JavaScript. I've Built responsive websites and explored frameworks like Express and Laravel, eager to contribute to innovative projects. My combination of education and passion makes me a valuable asset in the dynamic tech industry.
          </p>
          <div>
            <Link href="/doc/Sabilla_Luthfi_Rahmadhan-CV.pdf" passHref>
                <span className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-black mt-3">
                <span className="block bg-[#52D3D8] hover:bg-slate-800 hover:text-white rounded-full px-5 py-2">
                    Download CV
                </span>
                </span>
            </Link>
          </div>


          </motion.div>
        </div>
      </section>
    );
  };
  
export default HeroSection;