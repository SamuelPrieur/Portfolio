"use client";
import Image from "next/image";
import Cursor from "../cursor/page";
import { useState, useEffect, useRef } from "react";

function Home() {
  useEffect(() => {
    const Gobserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("Gshow");
        } else {
          entry.target.classList.remove("Gshow");
        }
      });
    });
    const Dobserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("Dshow");
        } else {
          entry.target.classList.remove("Dshow");
        }
      });
    });
    const Bobserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("Bshow");
        } else {
          entry.target.classList.remove("Bshow");
        }
      });
    });

    const GhiddenElements = document.querySelectorAll(".Ghidden");
    const DhiddenElements = document.querySelectorAll(".Dhidden");
    const BhiddenElements = document.querySelectorAll(".Bhidden");
    BhiddenElements.forEach((el) => Bobserver.observe(el));
    GhiddenElements.forEach((el) => Gobserver.observe(el));
    DhiddenElements.forEach((el) => Dobserver.observe(el));
  }, []);

  return (
    <main className="font-text text-Text leading-normal cursor-none bg-Background overflow-hidden">
      <Cursor />
      <div className="flex justify-center items-center p-7 h-full ">
        <div className="grid lg:grid-cols-10 md:grid-cols-1 sm:grid-cols-1 xsm:grid-cols-1 gap-4 gap-y-96 w-full">
          <section className="lg:col-span-10 md:col-span-1 sm:md:col-span-1  sm:col-span-1 xsm:col-span-1 grid lg:grid-cols-10 md:grid-cols-1 sm:grid-cols-1 xsm:grid-cols-1 gap-4 w-full">
            <nav className="lg:text-xl md:text-xl sm:text-md xsm:text-md px-4 lg:col-span-10 md:col-span-1 sm:md:col-span-1 xsm:col-span-1 bg-Block bg-noise-pattern rounded-full flex place-items-center justify-between h-20">
              <ul className="flex place-items-center justify-between w-full">
                <div className="m-auto grid grid-cols-8 text-center place-items-center w-full">
                  <a className="col-start-1 portail" href="/Home">
                    samuel prieur.
                  </a>

                  <a
                    className="lg:block md:block sm:hidden xsm:hidden col-start-7 portail"
                    href="/Home"
                  >
                    home.
                  </a>
                  <a
                    className=" col-start-8 portail lg:text-SmText lg:hover:text-Text md:text-SmText md:hover:text-Text sm:text-Text xsm:text-Text "
                    href="#contact"
                  >
                    contact.
                  </a>
                </div>
              </ul>
            </nav>

            <section className="Block Ghidden bg-noise-pattern lg:col-span-6 md:col-span-1 sm:md:col-span-1 xsm:col-span-1">
              <Image
                className="grayscale p-4"
                src="/sam.webp"
                width={250}
                height={250}
                priority={false}
                quality={80}
                alt="Photo de Samuel Prieur"
              />
              <h1 className="portail lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl">
                Samuel Prieur is a second year junior developper
                <span className="text-SmText"> currently in BUT MMI.</span>
              </h1>
            </section>

            <section className="Block Dhidden bg-noise-pattern lg:col-span-4 md:col-span-1 sm:md:col-span-1 xsm:col-span-1">
              <h2 className="lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl">
                Skills As
              </h2>
              <br />
              <h3 className="lg:text-4xl md:text-3xl sm:text-2xl xsm:text-2xl">
                a Web Developper
              </h3>
              <br />
              <div className=" font-competence flex justify-center flex-wrap">
                <p className="text-Highlights border-Highlights border p-2 px-5 m-1 rounded-md lg:text-xl md:text-xl sm:text-md xsm:text-md">
                  HTML
                </p>
                <p className="text-Highlights border-Highlights border p-2 px-5 m-1 rounded-md lg:text-xl md:text-xl sm:text-md xsm:text-md">
                  CSS
                </p>
                <p className="text-Highlights border-Highlights border p-2 px-5 m-1 rounded-md lg:text-xl md:text-xl sm:text-md xsm:text-md">
                  Javascript
                </p>
                <p className="text-Highlights border-Highlights border p-2 px-5 m-1 rounded-md lg:text-xl md:text-xl sm:text-md xsm:text-md">
                  PHP
                </p>
                <p className="text-Highlights border-Highlights border p-2 px-5 m-1 rounded-md lg:text-xl md:text-xl sm:text-md xsm:text-md">
                  SQL
                </p>
                <p className="text-Highlights border-Highlights border p-2 px-5 m-1 rounded-md lg:text-xl md:text-xl sm:text-md xsm:text-md">
                  SASS
                </p>
                <p className="text-Highlights border-Highlights border p-2 px-5 m-1 rounded-md lg:text-xl md:text-xl sm:text-md xsm:text-md">
                  React
                </p>
                <p className="text-Highlights border-Highlights border p-2 px-5 m-1 rounded-md lg:text-xl md:text-xl sm:text-md xsm:text-md">
                  NextJs
                </p>
                <p className="text-Highlights border-Highlights border p-2 px-5 m-1 rounded-md lg:text-xl md:text-xl sm:text-md xsm:text-md">
                  Python
                </p>
                <p className="text-Highlights border-Highlights border p-2 px-5 m-1 rounded-md lg:text-xl md:text-xl sm:text-md xsm:text-md">
                  Gsap
                </p>
                <p className="text-Highlights border-Highlights border p-2 px-5 m-1 rounded-md lg:text-xl md:text-xl sm:text-md xsm:text-md">
                  AnimeJs
                </p>
                <p className="text-Highlights border-Highlights border p-2 px-5 m-1 rounded-md lg:text-xl md:text-xl sm:text-md xsm:text-md">
                  Git
                </p>
                <p className="text-Highlights border-Highlights border p-2 px-5 m-1 rounded-md lg:text-xl md:text-xl sm:text-md xsm:text-md">
                  Linux
                </p>
                <p className="text-Highlights border-Highlights border p-2 px-5 m-1 rounded-md lg:text-xl md:text-xl sm:text-md xsm:text-md">
                  More...
                </p>
              </div>
              <br />
              <h3 className="text-4xl">a UI Designer</h3>
              <br />
              <div className="font-competence flex justify-center flex-wrap">
                <p className="text-Highlights border-Highlights border p-2 px-5 m-1 rounded-md lg:text-xl md:text-xl sm:text-md xsm:text-md">
                  Ai
                </p>
                <p className="text-Highlights border-Highlights border p-2 px-5 m-1 rounded-md lg:text-xl md:text-xl sm:text-md xsm:text-md">
                  Ps
                </p>
                <p className="text-Highlights border-Highlights border p-2 px-5 m-1 rounded-md lg:text-xl md:text-xl sm:text-md xsm:text-md">
                  Pr
                </p>
                <p className="text-Highlights border-Highlights border p-2 px-5 m-1 rounded-md lg:text-xl md:text-xl sm:text-md xsm:text-md">
                  Xd
                </p>
                <p className="text-Highlights border-Highlights border p-2 px-5 m-1 rounded-md lg:text-xl md:text-xl sm:text-md xsm:text-md">
                  Figma
                </p>
                <p className="text-Highlights border-Highlights border p-2 px-5 m-1 rounded-md lg:text-xl md:text-xl sm:text-md xsm:text-md">
                  Au
                </p>
                <p className="text-Highlights border-Highlights border p-2 px-5 m-1 rounded-md lg:text-xl md:text-xl sm:text-md xsm:text-md">
                  Ae
                </p>
                <p className="text-Highlights border-Highlights border p-2 px-5 m-1 rounded-md lg:text-xl md:text-xl sm:text-md xsm:text-md">
                  More...
                </p>
              </div>
            </section>

            <section className="grid auto-rows-auto lg:grid-cols-4 md:grid-cols-2 xsm:grid-cols-2 gap-4 lg:col-span-10 md:col-span-1 sm:md:col-span-1 xsm:col-span-1">
              <a
                href="tel:+33603000197"
                className="Block Ghidden bg-noise-pattern portail justify-center flex items-center lg:col-start-1 lg:text-xl md:text-xl sm:text-md xsm:text-md rounded-full lg:p-4 md:p-3 xsm:p-7"
              >
                <p>Call me</p>
              </a>
              <a
                href="https://www.linkedin.com/in/samuel-prieur/"
                target="_blank"
                className="Block Ghidden bg-noise-pattern portail justify-center flex items-center lg:col-start-2 lg:text-xl md:text-xl sm:text-md xsm:text-md rounded-full lg:p-4 md:p-3 xsm:p-7"
              >
                <p>Linkedin</p>
              </a>
              <a
                href="https://github.com/SamuelPrieur"
                target="_blank"
                className="Block Dhidden bg-noise-pattern portail justify-center flex items-center lg:col-start-3 lg:text-xl md:text-xl sm:text-md xsm:text-md rounded-full lg:p-4 md:p-3 xsm:p-7"
              >
                Github
              </a>
              <a className="Block Dhidden bg-noise-pattern portail justify-center flex items-center lg:col-start-4 lg:text-xl md:text-xl sm:text-md xsm:text-md rounded-full lg:p-4 md:p-3 xsm:p-7">
                Access My CV
              </a>
            </section>
          </section>
          <section className="Block lg:block md:hidden sm:hidden xsm:hidden flex justify-center items-center Ghidden bg-noise-pattern lg:col-span-4 md:col-span-1 sm:md:col-span-1 xsm:col-span-1">
            <Image
              className="grayscale rounded-2xl"
              src="/GIGI.webp"
              width={350}
              height={450}
              priority={false}
              quality={80}
              alt="Photo de Samuel Prieur"
            />
          </section>

          <section className="Block Dhidden bg-noise-pattern portail lg:col-span-6 md:col-span-1 sm:md:col-span-1 xsm:col-span-1 lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl p-4">
            <h2>
              My strength lies in merging creative design with advanced
              development skills. My objective ? <br />
              <span className="text-SmText">
                Create unique and impactful experiences. Explore my portfolio
                and let's consider bringing your web ideas to life together.
              </span>
            </h2>
          </section>

          <section className="Block Dhidden bg-noise-pattern lg:col-span-10 md:col-span-1 sm:md:col-span-1 xsm:col-span-1 text-wrap ">
            <h1 className="lg:text-6xl md:text-5xl sm:text-3xl xsm:text-3xl">
              My Journey.
            </h1>
            <div className="justify-evenly flex lg:flex-row md:flex-col sm:flex-col xsm:flex-col items-center m-10">
              <div className="my-12  p-2 rounded-2xl">
                <h2 className="lg:text-2xl md:text-2xl sm:text-xl xsm:text-xl my-1">
                  High School
                </h2>
                <h3 className="lg:text-xl md:text-xl sm:text-md xsm:text-md text-SmText my-2">
                  General BAC with honors
                </h3>
                <p className="text-lg text-SmText">
                  Introduction to programmation with Python and "Programmer
                  reflexion"
                </p>
              </div>
              <hr className="lg:w-1 lg:h-36 lg:mx-8 md:h-1 md:w-36 md:my-8 sm:h-1 sm:w-36 sm:my-8 xsm:h-1 xsm:w-36 xsm:my-8 bg-Text rounded-full "></hr>
              <div className="my-12  p-2 rounded-2xl">
                <h2 className="lg:text-2xl md:text-2xl sm:text-xl xsm:text-xl my-1">
                  IUT Rouen
                </h2>
                <h3 className="lg:text-xl md:text-xl sm:text-md xsm:text-md text-SmText my-2">
                  2nd year of BUT MMI
                </h3>
                <p className="text-lg text-SmText">
                  FullStack Web development, UX/UI, Digital Communication and
                  much more...
                </p>
              </div>
              <hr className="lg:w-1 lg:h-36 lg:mx-8 md:h-1 md:w-36 md:my-8 sm:h-1 sm:w-36 sm:my-8 xsm:h-1 xsm:w-36 xsm:my-8 bg-Text rounded-full "></hr>
              <div className="my-12  p-2 rounded-2xl">
                <h2 className="lg:text-2xl md:text-2xl sm:text-xl xsm:text-xl my-1">
                  CÉGEP Matane
                </h2>
                <h3 className="lg:text-xl md:text-xl sm:text-md xsm:text-md text-SmText my-2">
                  Double Degree I Hope
                </h3>
                <p className="text-lg text-SmText">
                  New Culture, Experiences, and a lot of Poutine
                </p>
              </div>
            </div>
          </section>

          <section className="Ghidden bg-noise-pattern lg:col-span-8 md:col-span-1 sm:md:col-span-1 xsm:col-span-1 lg:col-start-2 md:col-start-1 sm:col-start-1 xsm:col-start-1 text-wrap grid lg:grid-cols-10 md:grid-cols-1 sm:grid-cols-1 xsm:grid-cols-1 Projects">
            <h1 className=" mt-3 lg:text-6xl md:text-5xl sm:text-3xl xsm:text-3xl col-start-1 lg:col-span-3 md:col-span-10 sm:col-span-10 xsm:col-span-10 pb-10">
              DashBoard.
              <br />
              <span className="text-SmText text-2xl">
                Analysis of a French department.
              </span>
            </h1>
            <h2 className="mt-3 text-2xl col-start-6 lg:block md:hidden sm:hidden xsm:hidden col-span-3">
              I had to build a dashboard to monitor consumption and production
              in the Meurthe et Moselle department.
            </h2>

            <Image
              className="portail lg:block md:hidden sm:hidden xsm:hidden view col-start-10 fleche"
              src="/arrow.svg"
              width={200}
              height={200}
              priority={false}
              quality={80}
              alt="logo de flèche"
            />
            <Image
              className="grayscale rounded-2xl duration-500 hover:grayscale-0 h-full col-span-10 "
              src="/projects/DashBoard.webp"
              width={1470}
              height={919.5}
              priority={false}
              quality={80}
              alt="photo du DashBoard"
            />
          </section>

          <section className="Dhidden bg-noise-pattern lg:col-span-8 md:col-span-1 sm:md:col-span-1 xsm:col-span-1 lg:col-start-2 md:col-start-1 sm:col-start-1 xsm:col-start-1 text-wrap grid lg:grid-cols-10 md:grid-cols-1 sm:grid-cols-1 xsm:grid-cols-1 Projects">
            <h1 className=" mt-3 lg:text-6xl md:text-5xl sm:text-3xl xsm:text-3xl col-start-1 lg:col-span-3 md:col-span-10 sm:col-span-10 xsm:col-span-10 pb-10">
              Bug Tracker.
              <br />
              <span className="text-SmText text-2xl">
                Communication Plateform.
              </span>
            </h1>
            <h2 className="mt-3 text-2xl col-start-6 lg:block md:hidden sm:hidden xsm:hidden col-span-3">
              I had to create a platform for game developers to communicate with
              their game testers.
            </h2>

            <Image
              className="portail lg:block md:hidden sm:hidden xsm:hidden view col-start-10 fleche"
              src="/arrow.svg"
              width={200}
              height={200}
              priority={false}
              quality={80}
              alt="logo de flèche"
            />
            <Image
              className="grayscale rounded-2xl duration-500 hover:grayscale-0 h-full col-span-10 "
              src="/projects/BugTracker.webp"
              width={1470}
              height={919.5}
              priority={false}
              quality={80}
              alt="photo du BugTracker"
            />
          </section>

          <section className="Ghidden bg-noise-pattern lg:col-span-8 md:col-span-1 sm:md:col-span-1 xsm:col-span-1 lg:col-start-2 md:col-start-1 sm:col-start-1 xsm:col-start-1 text-wrap grid lg:grid-cols-10 md:grid-cols-1 sm:grid-cols-1 xsm:grid-cols-1 Projects">
            <h1 className=" mt-3 lg:text-6xl md:text-5xl sm:text-3xl xsm:text-3xl col-start-1 lg:col-span-3 md:col-span-10 sm:col-span-10 xsm:col-span-10 pb-10">
              Portfolio.
              <br />
              <span className="text-SmText text-2xl">
                My Favourite Project so far.
              </span>
            </h1>
            <h2 className="mt-3 text-2xl col-start-6 lg:block md:hidden sm:hidden xsm:hidden col-span-3">
              I had to create a Portfolio to present me, myself and I.
            </h2>

            <Image
              className="portail lg:block md:hidden sm:hidden xsm:hidden view col-start-10 fleche"
              src="/arrow.svg"
              width={200}
              height={200}
              priority={false}
              quality={80}
              alt="logo de flèche"
            />
            <Image
              className="grayscale rounded-2xl duration-500 hover:grayscale-0 h-full col-span-10 "
              width={1470}
              height={919.5}
              priority={false}
              quality={80}
              src="/projects/Portfolio.webp"
              alt="photo de mon Portfolio"
            />
          </section>

          <section className="Ghidden bg-noise-pattern lg:col-span-4 md:col-span-1 sm:md:col-span-1 xsm:col-span-1 lg:col-start-2 md:col-start-1 sm:col-start-1 xsm:col-start-1 text-wrap grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 xsm:grid-cols-1 Projects">
            <h1 className=" mt-3 lg:text-6xl md:text-5xl sm:text-3xl xsm:text-3xl col-start-1 lg:col-span-3 md:col-span-4 sm:col-span-4 xsm:col-span-4 pb-10">
              MMI Poster.
              <br />
              <span className="text-SmText text-2xl">
                Introduction to Photography.
              </span>
            </h1>

            <Image
              className="portail lg:block md:hidden sm:hidden xsm:hidden view col-start-4 fleche"
              src="/arrow.svg"
              width={200}
              height={200}
              priority={false}
              quality={80}
              alt="logo de flèche"
            />
            <Image
              className="grayscale rounded-2xl duration-500 hover:grayscale-0 w-full col-span-10 "
              width={866}
              height={1208.67}
              priority={false}
              quality={80}
              src="/projects/AfficheS1.webp"
              alt="Affiche MMI"
            />
          </section>

          <section className="Dhidden bg-noise-pattern lg:col-span-4 md:col-span-1 sm:md:col-span-1 xsm:col-span-1 text-wrap grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 xsm:grid-cols-1 Projects">
            <h1 className=" mt-3 lg:text-6xl md:text-5xl sm:text-3xl xsm:text-3xl col-start-1 lg:col-span-3 md:col-span-4 sm:col-span-4 xsm:col-span-4 pb-10">
              El Camino.
              <br />
              <span className="text-SmText text-2xl">
                Introduction to Photoshop.
              </span>
            </h1>

            <Image
              className="portail lg:block md:hidden sm:hidden xsm:hidden view col-start-4 fleche"
              src="/arrow.svg"
              width={200}
              height={200}
              priority={false}
              quality={80}
              alt="logo de flèche"
            />
            <Image
              className="grayscale rounded-2xl duration-500 hover:grayscale-0 w-full col-span-10 "
              width={866}
              height={1208.67}
              priority={false}
              quality={80}
              src="/projects/ElCamino.webp"
              alt="Affiche du film El Camino"
            />
          </section>

          <section className="Ghidden bg-noise-pattern lg:col-span-4 md:col-span-1 sm:md:col-span-1 xsm:col-span-1 lg:col-start-2 md:col-start-1 sm:col-start-1 xsm:col-start-1 text-wrap grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 xsm:grid-cols-1 Projects">
            <h1 className=" mt-3 lg:text-6xl md:text-5xl sm:text-3xl xsm:text-3xl col-start-1 lg:col-span-3 md:col-span-4 sm:col-span-4 xsm:col-span-4 pb-10">
              Spine SkatePark.
              <br />
              <span className="text-SmText text-2xl">
                Creation of an Identity.
              </span>
            </h1>

            <Image
              className="portail lg:block md:hidden sm:hidden xsm:hidden view col-start-4 fleche"
              src="/arrow.svg"
              width={200}
              height={200}
              priority={false}
              quality={80}
              alt="logo de flèche"
            />
            <Image
              className="grayscale rounded-2xl duration-500 hover:grayscale-0 w-full col-span-10 "
              width={866}
              height={1208.67}
              priority={false}
              quality={80}
              src="/projects/SpineSkatePark.webp"
              alt="Affiche de Spine SkatePark"
            />
          </section>

          <section className="Dhidden bg-noise-pattern lg:col-span-4 md:col-span-1 sm:md:col-span-1 xsm:col-span-1 text-wrap grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 xsm:grid-cols-1 Projects">
            <h1 className=" mt-3 lg:text-6xl md:text-5xl sm:text-3xl xsm:text-3xl col-start-1 lg:col-span-3 md:col-span-4 sm:col-span-4 xsm:col-span-4 pb-10">
              Museum Poster.
              <br />
              <span className="text-SmText text-2xl">
                Promotion of a fictional exposition.
              </span>
            </h1>

            <Image
              className="portail lg:block md:hidden sm:hidden xsm:hidden view col-start-4 fleche"
              src="/arrow.svg"
              width={200}
              height={200}
              priority={false}
              quality={80}
              alt="logo de flèche"
            />
            <Image
              className="grayscale rounded-2xl duration-500 hover:grayscale-0 w-full col-span-10 "
              width={866}
              height={1208.67}
              priority={false}
              quality={80}
              src="/projects/SNCF.webp"
              alt="Affiche de promotion d'un faux musée"
            />
          </section>

          <section className="Ghidden bg-noise-pattern lg:col-span-4 md:col-span-1 sm:md:col-span-1 xsm:col-span-1 lg:col-start-2 md:col-start-1 sm:col-start-1 xsm:col-start-1 text-wrap grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 xsm:grid-cols-1 Projects">
            <h1 className=" mt-3 lg:text-6xl md:text-5xl sm:text-3xl xsm:text-3xl col-start-1 lg:col-span-3 md:col-span-4 sm:col-span-4 xsm:col-span-4 pb-10">
              MMI LightBulb.
              <br />
              <span className="text-SmText text-2xl">
                Promotion of BUT MMI.
              </span>
            </h1>

            <Image
              className="portail lg:block md:hidden sm:hidden xsm:hidden view col-start-4 fleche"
              src="/arrow.svg"
              width={200}
              height={200}
              priority={false}
              quality={80}
              alt="logo de flèche"
            />
            <Image
              className="grayscale rounded-2xl duration-500 hover:grayscale-0 w-full col-span-10 "
              width={866}
              height={1208.67}
              priority={false}
              quality={80}
              src="/projects/Ampoule.webp"
              alt="Affiche Ampoule MMI"
            />
          </section>

          <section className="Block lg:flex md:hidden sm:hidden xsm:hidden Dhidden bg-noise-pattern justify-center  items-center h-full col-span-4 ">
            <h1 className="text-6xl col-start-1 col-span-3 pb-10">
              More to come.
            </h1>
          </section>
          <section className="lg:col-span-10 md:col-span-1 sm:md:col-span-1 xsm:col-span-1">
            <section
              id="contact"
              className="Block Bhidden bg-noise-pattern justify-center flex items-center flex-col p-4 mb-4 self-center text-center lg:text-7xl md:text-5xl sm:text-3xl xsm:text-xl "
            >
              <Image
                className="m-8"
                src="/logo.svg"
                width={200}
                height={200}
                priority={false}
                quality={80}
                alt="Logo de Samuel Prieur"
              />
              <h2 className="lg:text-7xl md:text-5xl sm:text-3xl xsm:text-xl m-8">
                Have a Job <br /> For me?
              </h2>
              <a
                href="mailto:sprieurpro@gmail.com?subject=I need you for ..."
                className="bloc portail justify-center flex w-full items-center lg:col-span-8 md:col-span-1 sm:md:col-span-1 xsm:col-span-1 rounded-full bg-Highlights m-8 p-7"
              >
                sprieurpro@gmail.com
              </a>
            </section>
            <nav className="lg:text-xl md:text-xl sm:text-md xsm:text-md  bg-Block bg-noise-pattern rounded-full flex place-items-center justify-between px-4 h-20">
              <ul className="flex place-items-center justify-between w-full">
                <div className="m-auto px-4 grid grid-cols-8 place-items-center w-full">
                  <a className="col-start-1 portail" href="/Home">
                    samuel prieur.
                  </a>
                  <p className="col-start-7 text-SmText col-span-2 portail">
                    All Rights Reserved @2024
                  </p>
                </div>
              </ul>
            </nav>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Home;
