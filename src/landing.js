import React, { useState } from "react";
import "./Landing.css";
import { Link, animateScroll as scroll } from "react-scroll";
import "./analysis.css";
import abiram from "./images/abiram.jpeg";
import karthik from "./images/karthik.png";
function LandingPage() {
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const handleCardButtonClick = (index) => {
    if (activeCardIndex === index) {
      // If the same button is clicked again, close the iframe
      setActiveCardIndex(null);
    } else {
      setActiveCardIndex(index);
      scrollToCards(2420);
    }
  };
  const scrollToCards = (dest) => {
    window.scrollTo({
      top: dest, // Adjust the value to where the cards section starts
      behavior: "smooth", // Add smooth scrolling effect
    }); // Adjust the value to where the cards section starts
  };
  const cardData = [
    {
      title: "STAMP REGISTRATION",
      body: "INSIGHTS FROM FY2019-FY2022",
      iframeSrc:
        "https://app.powerbi.com/view?r=eyJrIjoiNjg4MzI2M2MtMTA2MC00NTZjLThkY2ItZDVmNmYxMjMzZDQyIiwidCI6IjY4M2ZiZDUwLTQyNWUtNDJkMC1hYjg1LTVkNDVjZjFmYjgyMyJ9",
    },
    {
      title: "TRANSPORTATION",
      body: "INSIGHTS FROM FY2019-FY2022",
      iframeSrc:
        "https://app.powerbi.com/view?r=eyJrIjoiN2YzYzMwNTctZWFmNC00MDk0LTljM2YtNWZlZmVlYzk1MjAyIiwidCI6IjY4M2ZiZDUwLTQyNWUtNDJkMC1hYjg1LTVkNDVjZjFmYjgyMyJ9",
    },
    {
      title: "TS-IPASS",
      body: "INSIGHTS FROM FY2019-FY2022",
      iframeSrc:
        "https://app.powerbi.com/view?r=eyJrIjoiMjNjZGY2YjYtZmIyYy00ZThmLWFhYWMtODI0MGQ1NDAwYTRhIiwidCI6IjY4M2ZiZDUwLTQyNWUtNDJkMC1hYjg1LTVkNDVjZjFmYjgyMyJ9",
    },
  ];
  return (
    <>
      <header>
        <h2>
          <a href="">Telangana Growth Development</a>
        </h2>
        <nav>
          <li>
            <a href="#" onClick={() => scrollToCards(1800)}>
              Analysis
            </a>
          </li>
          <li>
            <a href="#" onClick={() => scrollToCards(2500)}>
              About
            </a>
          </li>
          <li>
            <a href="#" onClick={() => scrollToCards(3500)}>
              Contact
            </a>
          </li>
        </nav>
      </header>

      <section class="hero">
        <div class="background-image"></div>
        <div class="hero-content-area">
          <h1>Telangana Growth Analysis</h1>
          <h3>
            DISCOVER THE STORY OF TELANGANA'S GROWTH ANALYSIS. THE OBJECTIVE OF
            THIS PROJECT IS TO ANALYZE AND GAIN INSIGHTS FROM THE STAMP
            REGISTRATION, TRANSPORTATION, AND TS-IPASS DATASETS IN ORDER TO
            UNDERSTAND VARIOUS GROWTH TRENDS, OPPORTUNITIES, AND CHALLENGES
            WITHIN DIFFERENT SECTORS IN THE STATE OF TELANGANA. BY EXPLORING
            THESE DATASETS AND CONDUCTING AN IN-DEPTH ANALYSIS, WE AIM TO
            PROVIDE VALUABLE INSIGHTS THAT CAN GUIDE DECISION-MAKING, FOSTER
            ECONOMIC GROWTH, AND ADDRESS AREAS THAT REQUIRE ATTENTION.
          </h3>
          <button onClick={() => scrollToCards(1850)}>
            {" "}
            DISCOVER INSIGHTS !
          </button>
        </div>
      </section>

      <section class="destinations">
        <h3 class="title">Telangana</h3>
        <p>
          Telangana is a state located in southern India. It was officially
          formed as the 29th state of India on June 2, 2014, after a
          long-standing demand for its separate identity from the combined
          Andhra Pradesh state. The region has a rich historical and cultural
          heritage, and its capital city is Hyderabad, which also serves as the
          joint capital for the neighboring state of Andhra Pradesh for a period
          of time after the bifurcation.
        </p>
        <hr />

        <ul class="grid">
          <li class="small image-1"></li>
          <li class="large image-2"></li>
          <li class="large image-3"></li>
          <li class="small image-4"></li>
        </ul>
      </section>
      <div className="card-container">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-details">
              <p className="text-title">{card.title}</p>
              <p className="text-body">{card.body}</p>
            </div>
            <button
              className="card-button"
              onClick={() => handleCardButtonClick(index)}
            >
              Detailed Statistics
            </button>
          </div>
        ))}
      </div>

      {/* Iframe */}
      {activeCardIndex !== null && (
        <div className="iframe-overlay">
          <iframe
            title={`Detailed Statistics ${activeCardIndex}`}
            className="iframe-content"
            src={cardData[activeCardIndex].iframeSrc}
            frameBorder="0"
            allowFullScreen={true}
          ></iframe>
        </div>
      )}

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-2 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
              OUR TEAM
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              We teamed up for the "Telangana Growth Analysis" project, uniting
              Web-Development and Data Analysis expertise to analyze Stamp
              Registration, Transportation, and Ts-iPASS datasets. Our
              collaboration revealed trends, correlations, and growth prospects
              across Telangana's sectors. We provided actionable recommendations
              by examining revenue variations, vehicle sales trends, and
              investment patterns. Our insights, supported by supplemental
              research on commercial property and policy impact, offer a
              comprehensive guide for Telangana's sustainable development
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src={karthik}
                />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Basupally Karthik Reddy
                  </h2>
                  <h3 class="text-gray-500 mb-3">Website Developer</h3>
                  <p class="mb-4">
                    Final Year ECE major's student from VIT University.
                  </p>
                  <span class="inline-flex">
                    <a class="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src={abiram}
                />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Subrahmanya Abhiram
                  </h2>
                  <h3 class="text-gray-500 mb-3">Data Analsyt</h3>
                  <p class="mb-4">
                    Final Year CSE major's student from VIT University.
                  </p>
                  <span class="inline-flex">
                    <a class="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="contact">
        <h3 class="title">Learn more </h3>
        <p>
          The "Telangana Growth Analysis" project will harness data-driven
          insights to empower the government with a deeper understanding of
          various sectors within the state. By identifying growth opportunities
          and highlighting successful policies, the project aims to contribute
          to Telangana's continued progress and development.
        </p>
      </section>

      <footer class="text-gray-600 body-font">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span class="ml-3 text-xl">Telangana Growth Analysis</span>
          </a>
          <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 Karthik Reddy —
            <a
              href="https://github.com/karthikreddy-7"
              class="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @karthikreddy
            </a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a class="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;
