import React from "react";
import Image from "next/image";
import { IoMdHeartEmpty  } from "react-icons/io";
import { FiBookmark, FiBookOpen, FiUsers } from "react-icons/fi";
import { IoShieldOutline } from "react-icons/io5";
import { AiFillContacts } from "react-icons/ai";




export default function QueersourceHome() {
  return (
    <main className="font-sans text-gray-800">
      <nav className="bg-white shadow-md p-4">
        <section className="flex flex-wrap justify-between items-center gap-y-4">
          <section className="flex items-center gap-2">
            <IoMdHeartEmpty className="text-pink-600 text-2xl" />
            <span className="text-2xl font-bold text-black">Queersource</span>
          </section>

          <section className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-gray-800">
            <a href="#services" className="hover:text-pink-600">Services</a>
            <a href="#resources" className="hover:text-pink-600">Resources</a>
            <a href="#community" className="hover:text-pink-600">Community</a>
            <a href="#get-involved" className="hover:text-pink-600">Get Involved</a>
          </section>

          <section className="flex flex-wrap gap-2">
            <button className="bg-white border border-gray-300 px-4 py-2 rounded-md text-sm">
              Log In
            </button>
            <button className="bg-pink-600 text-white font-semibold px-4 py-2 rounded-md text-sm">
              Get Help Now
            </button>
          </section>
        </section>
      </nav>

      <section className="flex flex-col-reverse md:flex-row justify-between items-center bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,235,242,1)_70%)] p-10">
        <section className="text-center md:text-left py-10 md:py-20 px-6 md:pr-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-black">
            Support for the LGBTQ+ Community
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-600 mx-auto md:mx-0">
            Queersource provides resources, support, and community for LGBTQ+ teens and adults who need help. You are not alone.
          </p>
          <section className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="bg-pink-600 text-white font-semibold px-6 py-3 rounded-md">
              Get Support Now
            </button>
            <button className="bg-white border border-gray-300 px-6 py-3 rounded-md">
              Browse Resources
            </button>
          </section>
        </section>

        <Image
          src="/400x400Picture.svg"
          alt="400x400"
          width={400}
          height={400}
          className="mb-10 md:mb-0 max-w-full h-auto"
        />
      </section>

      <section className="py-20 bg-white px-6 text-center">
        <h1 className="text-3xl font-bold mb-4 text-black">How We Can Help</h1>
        <p className="mb-12 max-w-3xl mx-auto text-gray-600">
          Queersource offers a variety of resources and support services for the LGBTQ+ community.
        </p>

        <section className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              symbol: <FiBookOpen className="text-pink-600 text-2xl" />,
              title: "Educational Resources",
              description:
                "Access guides, articles, and information about LGBTQ+ identities, coming out, health, and more.",
              button: "Browse Resources",
            },
            {
              symbol: <FiBookmark className="text-pink-600 text-2xl" />,
              title: "Resource Directory",
              description:
                "Find LGBTQ+ friendly organizations, hotlines, and support services in your area through our comprehensive directory.",
              button: "Browse Directory",
            },
            {
              symbol: <FiUsers className="text-pink-600 text-2xl" />,
              title: "Community Forums",
              description:
                "Connect with others in the LGBTQ+ community to share experiences, ask questions, and find support.",
              button: "Join Community",
            },
          ].map((card, idx) => (
            <section key={idx} className="bg-white rounded-xl shadow p-6">
              <section className="flex items-center justify-center gap-2 mb-4">
                <span className="text-pink-600 text-2xl flex items-center">{card.symbol}</span>
                <h3 className="text-xl font-bold leading-none">{card.title}</h3>
              </section>
              
              <p className="mb-6">{card.description}</p>
              <button className="text-black font-semibold">{card.button}</button>
            </section>
          ))}
        </section>
      </section>

        {/* Local resources section */}
      <section className="bg-gray-100 py-20 px-6 ml-6">
        <section className="flex flex-col-reverse md:flex-row justify-between items-center max-w-6xl mx-auto">
          <section className="text-center md:text-left py-10 md:py-20 px-6 md:pr-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-black">
              Find Local Resources
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-600 mx-auto md:mx-0">
              We&apos;ve compiled a directory of trusted LGBTQ+ friendly organizations, community centers, and support groups across the country.
            </p>
            <button className="bg-pink-600 text-white font-semibold px-6 py-3 rounded-md">
              Get Support Now
            </button>
          </section>

          <Image
            src="/400x400Picture.svg"
            alt="400x400"
            width={400}
            height={400}
            className="mb-10 md:mb-0 max-w-full h-auto"
          />
        </section>
      </section>

      <section className="py-20 bg-white px-6 text-center">
      <h1 className="text-3xl font-bold mb-4 text-black">Get Involved</h1>
      <p className="mb-12 max-w-3xl mx-auto text-gray-600">
        Help us grow Queersource and make a difference in the LGBTQ+ community.
      </p>

      <section className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              symbol: <IoMdHeartEmpty className="text-pink-600 text-2xl" />,
              title: "Volunteer",
              description:
                " Share your skills and time to help build our resource library, moderate forums, or contribute to our website.",
              button: "Learn More",
            },
            {
              symbol: <IoShieldOutline className="text-pink-600 text-2xl" />,
              title: "Become an Ally",
              description:
                " Learn how to be a be er ally to the LGBTQ+ community and help create safe, inclusive spaces.",
              button: "Get Resources",
            },
            {
              symbol: <AiFillContacts className="text-pink-600 text-2xl" />,
              title: "Submit Resources",
              description:
                " Help us expand our directory by submitting LGBTQ+ friendly resources, organizations, and events in your area.",
              button: "Join Community",
            },
          ].map((card, idx) => (
            <section key={idx} className="bg-white rounded-xl shadow p-6">
              <section className="flex items-center justify-center gap-2 mb-4">
                <span className="text-pink-600 text-2xl flex items-center">{card.symbol}</span>
                <h3 className="text-xl font-bold leading-none">{card.title}</h3>
              </section>
              
              <p className="mb-6">{card.description}</p>
              <button className="text-black font-semibold">{card.button}</button>
            </section>
          ))}
        </section>
      </section>


      {/* Community section */}
      <section className="bg-[#fcedf3] py-20 px-6 text-center ml-6">
        <section className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-black font-bold mb-4">Join Our Community</h2>
          <p className="mb-8 text-gray-600 max-w-2xl mx-auto">
            Be part of building a supportive space for the LGBTQ+ community. Sign up for updates as we grow.
          </p>
          <section className="flex flex-wrap justify-center gap-4">
            <button className="bg-pink-600 text-white font-semibold px-6 py-3 rounded-md">
              Sign Up for Updates
            </button>
            <button className="bg-white border font-bold border-gray-300 px-6 py-3 rounded-md">
              Learn More
            </button>
          </section>
        </section>
      </section>

      <footer className="bg-white border-t text-gray-600 text-sm py-6 border-gray-300">
        <section className="flex justify-between items-center w-full max-w-6xl mx-auto px-4">
          
          <section className="flex items-center gap-2">
            <IoMdHeartEmpty className="text-pink-600 text-2xl" />
            <span className="text-sm font-bold text-black">
              &copy; 2025 Thomas King. All rights reserved.
            </span>
          </section>

          <section className="flex items-center gap-2 text-sm">
            <a href="#" className="underline">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="underline">Terms of Service</a>
            <span>|</span>
            <a href="#" className="underline">Contact Us</a>
          </section>

        </section>
      </footer>


    </main>
  );
}
