import React from "react";
import Image from "next/image";

export default function QueersourceHome() {
  return (
    <main className="font-sans text-gray-800">
      <nav>
        <section className="flex justify-between items-center bg-white shadow-md p-4">
          <section className="text-2xl font-bold text-black-600">Queersource</section>
          <section className="flex space-x-6 text-gray-800 align-center content-center items-center">
            <p><a href="#services" className="hover:text-pink-600">Services</a></p>
            <p><a href="#resources" className="hover:text-pink-600">Resources</a></p>
            <p><a href="#community" className="hover:text-pink-600">Community</a></p>
            <p><a href="#get-involved" className="hover:text-pink-600">Get Involved</a></p>
          </section>
          <section className="flex text-gray-800 align-center content-center items-center">
          <button className="bg-white border border-gray-300 px-6 py-3 rounded-md scale-80">Log In</button>
            <button className="bg-pink-600 text-white font-semibold px-6 py-3 rounded-md scale-80">Get Help Now</button>
          </section>
        </section>
      </nav>

      <section className="flex justify-between items-center bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,235,242,1)_70%)] p-10">
        <section className="py-20 text-center px-6 pr-4 mt-25 mb-25">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Support for the LGBTQ+ Community</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-600">
            Queersource provides resources, support, and community for LGBTQ+ teens and adults who need help. You are not alone.
          </p>
          <section className="space-x-4">
            <button className="bg-pink-600 text-white font-semibold px-6 py-3 rounded-md">Get Support Now</button>
            <button className="bg-white border border-gray-300 px-6 py-3 rounded-md">Browse Resources</button>
          </section>
        </section>

        <Image
        src="/400x400Picture.svg"
        alt="400x400"
        width={400}
        height={400}
        className="mb-25 mt-25"
        />

      </section>


      <section className="py-20 bg-white px-6 text-center">
        <h1 className="text-3xl font-bold mb-2 text-black">How We Can Help</h1>
        <p className="mb-10 max-w-3xl mx-auto text-gray-600 mb-12">
          Queersource o ers a variety of resources and support services for the LGBTQ+ community.
        </p>

        <section className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Educational Resources",
              description:
                "Access guides, articles, and information about LGBTQ+ identities, coming out, health, and more.",
              button: "Browse Resources",
            },
            {
              title: "Resource Directory",
              description:
                "Find LGBTQ+ friendly organizations, hotlines, and support services in your area through our comprehensive directory.",
              button: "Browse Directory",
            },
            {
              title: "Community Forums",
              description:
                "Connect with others in the LGBTQ+ community to share experiences, ask questions, and find support.",
              button: "Join Community",
            },
          ].map((card, idx) => (
            <section key={idx} className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <p className="mb-6">{card.description}</p>
              <button className="text-black-600 font-semibold">{card.button}</button>
            </section>
          ))}
        </section>
      </section>

      <section className="flex justify-between items-center bg-gray-100 p-10">
        <section className="py-20 text-center px-6 pr-4 mt-25 mb-25">
          <h1 className="text-left text-4xl md:text-5xl font-bold mb-4 text-black">
            Find Local Resources
          </h1>
          <p className="text-left text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-600">
            We&apos;ve compiled a directory of trusted LGBTQ+ friendly<br />
            organizations, community centers, and support groups across the country
          </p>
          <section className="text-left max-w-2xl mx-auto">
            <button className="bg-pink-600 text-white font-semibold px-6 py-3 rounded-md">
              Get Support Now
            </button>
          </section>
        </section>


        <Image
        src="/400x400Picture.svg"
        alt="400x400"
        width={400}
        height={400}
        className="mb-25 mt-25"
        />

      </section>

      <section className="py-20 bg-white px-6 text-center">
        <h1 className="text-3xl font-bold mb-2 text-black">Get Involved</h1>
        <p className="mb-10 max-w-3xl mx-auto text-gray-600 mb-12">
          Help us grow Queersource and make a di erence in the LGBTQ+ community.
        </p>

        <section className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Educational Resources",
              description:
                "Access guides, articles, and information about LGBTQ+ identities, coming out, health, and more.",
              button: "Browse Resources",
            },
            {
              title: "Resource Directory",
              description:
                "Find LGBTQ+ friendly organizations, hotlines, and support services in your area through our comprehensive directory.",
              button: "Browse Directory",
            },
            {
              title: "Community Forums",
              description:
                "Connect with others in the LGBTQ+ community to share experiences, ask questions, and find support.",
              button: "Join Community",
            },
          ].map((card, idx) => (
            <section key={idx} className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <p className="mb-6">{card.description}</p>
              <button className="text-black-600 font-semibold">{card.button}</button>
            </section>
          ))}
        </section>
      </section>

      <section className="bg-[#fcedf3] py-20 px-6 text-center">
        <h2 className="text-3xl text-black font-bold mb-4">Join Our Community</h2>
        <p className="mb-8 text-gray-600 max-w-2xl mx-auto">
          Be part of building a supportive space for the LGBTQ+ community. Sign up for updates as we grow.
        </p>
        <section className="space-x-4">
          <button className="bg-pink-600 text-white font-semibold px-6 py-3 rounded-md">Sign Up for Updates</button>
          <button className="bg-white border font-bold border-gray-300 px-6 py-3 rounded-md">Learn More</button>
        </section>
      </section>

      <footer className="bg-white border text-gray-600 text-sm text-center py-6 border-gray-300">
        <p>
          &copy; 2025 Thomas King. All rights reserved. &nbsp;
          <a href="#" className="underline">Privacy Policy</a> &nbsp;|&nbsp; <a href="#" className="underline">Terms of Service</a> &nbsp;|&nbsp;
          <a href="#" className="underline">Contact Us</a>
        </p>
      </footer>
    </main>
  );
}
