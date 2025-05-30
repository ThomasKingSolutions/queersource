"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiBookmark, FiBookOpen, FiUsers } from "react-icons/fi";
import { IoShieldOutline } from "react-icons/io5";
import { AiFillContacts } from "react-icons/ai";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Card from "@/components/Card";

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.7, ease: "easeIn" } },
};

const scaleUp = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { scale: 0.9, opacity: 0, transition: { duration: 0.6, ease: "easeIn" } },
};

export default function QueersourceHome() {

  const [showCustomAlert, setShowCustomAlert] = React.useState(false);
  return (
    <motion.main
      className="font-sans text-gray-800 bg-white"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Navbar />

      <motion.section
        className="w-full flex flex-col-reverse md:flex-row items-center justify-center bg-gradient-to-b from-white via-[#fff0f7] to-[#fcedf3] py-16 md:py-28 px-4"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <section className="md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start gap-6">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-2 text-pink-700 drop-shadow-sm"
            variants={slideUp}
          >
            Support for the LGBTQ+ Community
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl max-w-2xl mb-4 text-gray-700"
            variants={slideUp}
          >
            Queersource provides resources, support, and community for LGBTQ+ teens and adults who need help. You are not alone.
          </motion.p>
          <motion.section
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            variants={slideUp}
          >
            <Button text="Get Support Now" primary onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} />
            <Button text="Browse Resources" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} />
          </motion.section>
        </section>

        <motion.div
          className="md:w-1/2 flex justify-center items-center"
          variants={scaleUp}
        >
          <div className="rounded-3xl shadow-xl bg-white/80 p-4">
            <Image
              src="/Queersource.svg"
              alt="Queersource logo"
              width={380}
              height={380}
              className="max-w-full h-auto rounded-2xl"
              priority
            />
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        className="container mx-auto py-20 px-4 text-center"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-3xl font-extrabold mb-4 text-pink-700 drop-shadow-sm"
          variants={slideUp}
          id="services"
        >
          How We Can Help
        </motion.h1>
        <motion.p
          className="mb-12 max-w-3xl mx-auto text-gray-700"
          variants={slideUp}
        >
          Queersource offers a variety of resources and support services for the LGBTQ+ community.
        </motion.p>

        <motion.section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              symbol: <FiBookOpen className="text-pink-600 text-3xl mb-2" />,
              title: "Educational Resources",
              description:
                "Access guides, articles, and information about LGBTQ+ identities, coming out, health, and more.",
              button: "Browse Resources",
            },
            {
              symbol: <FiBookmark className="text-pink-600 text-3xl mb-2" />,
              title: "Resource Directory",
              description:
                "Find LGBTQ+ friendly organizations, hotlines, and support services in your area through our comprehensive directory.",
              button: "Browse Directory",
            },
            {
              symbol: <FiUsers className="text-pink-600 text-3xl mb-2" />,
              title: "Community Forums",
              description:
                "Connect with others in the LGBTQ+ community to share experiences, ask questions, and find support.",
              button: "Join Community",
            },
          ].map((card, idx) => (
            <Card key={idx} {...card} />
          ))}
        </motion.section>
      </motion.section>

      <motion.section
        className="bg-gray-50 py-20 px-4"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <section className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl gap-10">
          <section className="md:w-1/2 text-center md:text-left flex flex-col gap-6">
            <motion.h1
              className="text-3xl md:text-5xl font-extrabold mb-2 text-pink-700 drop-shadow-sm"
              variants={slideUp}
              id="resources"
            >
              Find Local Resources
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl max-w-2xl mb-4 text-gray-700"
              variants={slideUp}
            >
              We&apos;ve compiled a directory of trusted LGBTQ+ friendly organizations, community centers, and support groups across the country.
            </motion.p>
            <Button text="Get Support Now" primary onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} />
          </section>

          <motion.div
            className="md:w-1/2 flex justify-center items-center"
            variants={scaleUp}
          >
            <div className="rounded-3xl shadow-xl bg-white/80 p-4">
              <Image
                src="/400x400Picture.svg"
                alt="LGBTQ+ support illustration"
                width={380}
                height={380}
                className="max-w-full h-auto rounded-2xl"
                priority
              />
            </div>
          </motion.div>
        </section>
      </motion.section>

      <motion.section
        className="container mx-auto py-20 px-4 text-center"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-3xl font-extrabold mb-4 text-pink-700 drop-shadow-sm"
          variants={slideUp}
          id="get-involved"
        >
          Get Involved
        </motion.h1>
        <motion.p
          className="mb-12 max-w-3xl mx-auto text-gray-700"
          variants={slideUp}
        >
          Help us grow Queersource and make a difference in the LGBTQ+ community.
        </motion.p>

        <motion.section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              symbol: <IoMdHeartEmpty className="text-pink-600 text-3xl mb-2" />,
              title: "Volunteer",
              description:
                "Share your skills and time to help build our resource library, moderate forums, or contribute to our website.",
              button: "Learn More",
            },
            {
              symbol: <IoShieldOutline className="text-pink-600 text-3xl mb-2" />,
              title: "Become an Ally",
              description:
                "Learn how to be a better ally to the LGBTQ+ community and help create safe, inclusive spaces.",
              button: "Get Resources",
            },
            {
              symbol: <AiFillContacts className="text-pink-600 text-3xl mb-2" />,
              title: "Submit Resources",
              description:
                "Help us expand our directory by submitting LGBTQ+ friendly resources, organizations, and events in your area.",
              button: "Join Community",
            },
          ].map((card, idx) => (
            <Card key={idx} {...card} />
          ))}
        </motion.section>
      </motion.section>

      <motion.section
        className="bg-[#fcedf3] py-20 px-4 text-center"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <section className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-3xl text-pink-700 font-extrabold mb-4 drop-shadow-sm"
            variants={slideUp}
            id="community"
          >
            Join Our Community
          </motion.h2>
          <motion.p
            className="mb-8 text-gray-700 max-w-2xl mx-auto"
            variants={slideUp}
          >
            Be part of building a supportive space for the LGBTQ+ community. Sign up for updates as we grow.
          </motion.p>
            <motion.section
              className="flex flex-wrap justify-center gap-4"
              variants={slideUp}
            >
              <Button
              text="Sign Up for Updates"
              primary
              onClick={() => setShowCustomAlert(true)}
              />
              <Button
              text="Learn More"
              onClick={() =>
                document
                .getElementById('get-involved')
                ?.scrollIntoView({ behavior: 'smooth' })
              }
              />
            </motion.section>
            {showCustomAlert && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40">
              <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full text-center">
                <h3 className="text-xl font-bold mb-2 text-pink-700">Thank you for your interest!</h3>
                <p className="mb-4 text-gray-700">
                Sign up for updates will be available soon. Stay tuned!
                </p>
                <Button text="Close" onClick={() => setShowCustomAlert(false)} primary />
              </div>
              </div>
            )}
        </section>
      </motion.section>

      <footer className="bg-white border-t text-gray-500 text-sm py-6 border-gray-200">
        <section className="container mx-auto flex flex-col md:flex-row justify-between items-center w-full max-w-6xl px-4 gap-4">
          <motion.section
            className="flex items-center gap-2"
            variants={fadeIn}
          >
            <IoMdHeartEmpty className="text-pink-600 text-2xl" />
            <span className="text-sm font-bold text-pink-700">
              &copy; 2025 Thomas King. All rights reserved.
            </span>
          </motion.section>

          <motion.section
            className="flex items-center gap-2 text-sm"
            variants={fadeIn}
          >
            <a href="#" className="underline hover:text-pink-600 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="underline hover:text-pink-600 transition-colors">Terms of Service</a>
            <span>|</span>
            <a href="#" className="underline hover:text-pink-600 transition-colors">Contact Us</a>
          </motion.section>
        </section>
      </footer>
    </motion.main>
  );
}