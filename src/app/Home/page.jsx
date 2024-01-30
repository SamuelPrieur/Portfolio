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
        <div className="grid  grid-cols-10 gap-4 gap-y-96 w-full">
          <section className="col-span-10 grid  grid-cols-10 gap-4 w-full">
            <nav className="text-xl px-4  col-span-10 bg-Block bg-noise-pattern rounded-full flex place-items-center justify-between h-20">
              <ul className="flex place-items-center justify-between w-full">
                <div className="m-auto grid grid-cols-8 text-center place-items-center w-full">
                  <a className="col-start-1 portail" href="/Home">
                    samuel prieur.
                  </a>

                  <a className="col-start-6 portail" href="/Home">
                    home.
                  </a>
                  <a
                    className="col-start-7 portail text-SmText hover:text-Text  "
                    href="/Home"
                  >
                    works.
                  </a>
                  <a
                    className="col-start-8 portail text-SmText hover:text-Text  "
                    href="/Home"
                  >
                    contact.
                  </a>
                </div>
              </ul>
            </nav>

            <section className="Block Ghidden bg-noise-pattern col-span-6">
              <Image
                className="grayscale p-4"
                src="/sam.webp"
                width={250}
                height={250}
                priority={false}
                alt="Photo de Samuel Prieur"
              />
              <h1 className="text-6xl">
                Samuel Prieur is a second year junior developper
                <span className="text-SmText"> currently in BUT MMI.</span>
              </h1>
            </section>

            <section className="Block Dhidden bg-noise-pattern col-span-4">
              <h2 className="text-6xl">Skills As</h2>
              <br />
              <h3 className="text-4xl">a Web Developper</h3>
              <br />
              <div className=" font-competence flex justify-center flex-wrap">
                <p className="text-Highlights border-Highlights border p-2 m-1 rounded-md text-xl">
                  HTML
                </p>
                <p className="text-Highlights border-Highlights border p-2 m-1 rounded-md text-xl">
                  CSS
                </p>
                <p className="text-Highlights border-Highlights border p-2 m-1 rounded-md text-xl">
                  Javascript
                </p>
                <p className="text-Highlights border-Highlights border p-2 m-1 rounded-md text-xl">
                  PHP
                </p>
                <p className="text-Highlights border-Highlights border p-2 m-1 rounded-md text-xl">
                  SQL
                </p>
                <p className="text-Highlights border-Highlights border p-2 m-1 rounded-md text-xl">
                  SASS
                </p>
                <p className="text-Highlights border-Highlights border p-2 m-1 rounded-md text-xl">
                  React
                </p>
                <p className="text-Highlights border-Highlights border p-2 m-1 rounded-md text-xl">
                  NextJs
                </p>
                <p className="text-Highlights border-Highlights border p-2 m-1 rounded-md text-xl">
                  Python
                </p>
                <p className="text-Highlights border-Highlights border p-2 m-1 rounded-md text-xl">
                  Gsap
                </p>
                <p className="text-Highlights border-Highlights border p-2 m-1 rounded-md text-xl">
                  AnimeJs
                </p>
                <p className="text-Highlights border-Highlights border p-2 m-1 rounded-md text-xl">
                  Git
                </p>
                <p className="text-Highlights border-Highlights border p-2 m-1 rounded-md text-xl">
                  Linux
                </p>
                <p className="text-Highlights border-Highlights border p-2 m-1 rounded-md text-xl">
                  More...
                </p>
              </div>
              <br />
              <h3 className="text-4xl">a UI Designer</h3>
              <br />
              <div className="font-competence flex justify-center flex-wrap">
                <p className="text-Highlights border-Highlights border p-2 m-1 rounded-md text-xl">
                  Ai
                </p>
                <p className="text-Highlights border-Highlights border p-2 m-1 rounded-md text-xl">
                  Ps
                </p>
                <p className="text-Highlights border-Highlights border p-2 m-1 rounded-md text-xl">
                  Pr
                </p>
                <p className="text-Highlights border-Highlights border p-2 m-1 rounded-md text-xl">
                  Xd
                </p>
                <p className="text-Highlights border-Highlights border p-2 m-1 rounded-md text-xl">
                  Figma
                </p>
                <p className="text-Highlights border-Highlights border p-2 m-1 rounded-md text-xl">
                  Au
                </p>
                <p className="text-Highlights border-Highlights border p-2 m-1 rounded-md text-xl">
                  Ae
                </p>
                <p className="text-Highlights border-Highlights border p-2 m-1 rounded-md text-xl">
                  More...
                </p>
              </div>
            </section>

            <section className="grid auto-rows-auto lg:grid-cols-4 md:grid-cols-2 xsm:grid-cols-2 gap-4 col-span-10">
              <a
                href="tel:+33603000197"
                className="Block Ghidden bg-noise-pattern portail justify-center flex items-center lg:col-start-1 text-xl rounded-full lg:p-4 md:p-3 xsm:p-7"
              >
                <p>Call me</p>
              </a>
              <a
                href="https://www.linkedin.com/in/samuel-prieur/"
                target="_blank"
                className="Block Ghidden bg-noise-pattern portail justify-center flex items-center lg:col-start-2 text-xl rounded-full lg:p-4 md:p-3 xsm:p-7"
              >
                <p>Linkedin</p>
              </a>
              <a
                href="https://github.com/SamuelPrieur"
                target="_blank"
                className="Block Dhidden bg-noise-pattern portail justify-center flex items-center lg:col-start-3 text-xl rounded-full lg:p-4 md:p-3 xsm:p-7"
              >
                Github
              </a>
              <a className="Block Dhidden bg-noise-pattern portail justify-center flex items-center lg:col-start-4 text-xl rounded-full lg:p-4 md:p-3 xsm:p-7">
                Access My CV
              </a>
            </section>
          </section>
          <section className="Block Ghidden bg-noise-pattern col-span-4">
            <Image
              className="grayscale rounded-2xl"
              src="/GIGI.webp"
              width={500}
              height={600}
              priority={false}
              alt="Photo de Samuel Prieur"
            />
          </section>

          <section className="Block Dhidden bg-noise-pattern portail col-span-6 text-6xl p-4">
            <h2>
              My strength lies in merging creative design with advanced
              development skills. My objective ? <br />
              <span className="text-SmText">
                Create unique and impactful experiences. Explore my portfolio
                and let's consider bringing your web ideas to life together.
              </span>
            </h2>
          </section>

          <section className="Block Ghidden bg-noise-pattern portail col-span-10 p-4">
            Slider en cours de construction !
          </section>

          <section className="Block Ghidden bg-noise-pattern col-span-10 text-wrap ">
            <h1 className="text-5xl">My Journey.</h1>
            <div className="justify-evenly flex items-center m-10">
              <div className="my-12  p-2 rounded-2xl">
                <h2 className="text-2xl my-1">High School</h2>
                <h3 className="text-xl text-SmText my-2">
                  General BAC with honors
                </h3>
                <p className="text-lg text-SmText">
                  Introduction to programmation with Python and "Programmer
                  reflexion"
                </p>
              </div>
              <hr className="w-1 h-36 mx-8 bg-Text rounded-full "></hr>
              <div className="my-12  p-2 rounded-2xl">
                <h2 className="text-2xl my-1">IUT Rouen</h2>
                <h3 className="text-xl text-SmText my-2">
                  2nd year of BUT MMI
                </h3>
                <p className="text-lg text-SmText">
                  FullStack Web development, UX/UI, Digital Communication and
                  much more...
                </p>
              </div>
              <hr className="w-1 h-36 mx-8 bg-Text rounded-full "></hr>
              <div className="my-12  p-2 rounded-2xl">
                <h2 className="text-2xl my-1">CÉGEP Matane</h2>
                <h3 className="text-xl text-SmText my-2">
                  Double Degree I Hope
                </h3>
                <p className="text-lg text-SmText">
                  New Culture, Experiences, and a lot of Poutine
                </p>
              </div>
            </div>
          </section>

          <section className="Block Dhidden bg-noise-pattern col-span-10 text-wrap grid grid-cols-10 Projects">
            <h1 className="text-5xl col-start-1 col-span-3 pb-10">
              DashBoard.
              <br />
              <span className="text-SmText text-2xl">
                Analysis of a French department.
              </span>
            </h1>
            <h2 className="text-2xl col-start-6 col-span-3">
              I had to build a dashboard to monitor consumption and production
              in the Meurthe et Moselle department.
            </h2>

            <Image
              className="portail view h-28 col-start-10 fleche"
              src="/arrow.svg"
              width={200}
              height={200}
              priority={false}
              alt="logo de flèche"
            />
            <Image
              className="grayscale rounded-2xl duration-500 hover:grayscale-0 h-full col-span-10"
              src="/projects/DashBoard.webp"
              width={1470}
              height={919.5}
              priority={false}
              alt="photo du DashBoard"
            />
          </section>

          <section className="Block Ghidden bg-noise-pattern col-span-10 text-wrap grid grid-cols-10 Projects">
            <h1 className="text-5xl col-start-1 col-span-3 pb-10">
              Bug Tracker.
              <br />
              <span className="text-SmText text-2xl">
                Communication Plateform.
              </span>
            </h1>
            <h2 className="text-2xl col-start-6 col-span-3 ">
              I had to create a platform for game developers to communicate with
              their game testers.
            </h2>
            <Image
              className="portail view h-28 col-start-10 fleche"
              width={200}
              height={200}
              priority={false}
              src="/arrow.svg"
              alt="logo de flèche"
            />
            <Image
              className="grayscale rounded-2xl duration-500 hover:grayscale-0 h-full col-span-10"
              width={1470}
              height={919.5}
              priority={false}
              src="/projects/BugTracker.webp"
              alt="photo du Bug Tracker"
            />
          </section>

          <section className="Block Dhidden bg-noise-pattern col-span-10 text-wrap grid grid-cols-10 Projects">
            <h1 className="text-5xl col-start-1 col-span-3 pb-10">
              Portfolio.
              <br />
              <span className="text-SmText text-2xl">
                My Favourite Project so far.
              </span>
            </h1>
            <h2 className="text-2xl col-start-6 col-span-3 pb-10">
              I had to create a Portfolio to present me, myself and I.
            </h2>
            <Image
              className="portail view h-28 col-start-10 fleche"
              width={200}
              height={200}
              priority={false}
              src="/arrow.svg"
              alt="logo de flèche"
            />
            <Image
              className="grayscale rounded-2xl duration-500 hover:grayscale-0 h-full col-span-10"
              width={1470}
              height={919.5}
              priority={false}
              src="/projects/BugTracker.webp"
              alt="photo de mon Portfolio"
            />
          </section>

          <section className="Block Ghidden bg-noise-pattern col-span-5 text-wrap grid grid-cols-4 Projects">
            <h1 className="text-5xl col-start-1 col-span-3 pb-10">
              MMI Poster.
              <br />
              <span className="text-SmText text-2xl">
                Introduction to Photography.
              </span>
            </h1>
            <Image
              className="portail view h-28 col-start-4 fleche"
              width={200}
              height={200}
              priority={false}
              src="/arrow.svg"
              alt="logo de flèche"
            />
            <Image
              className="grayscale rounded-2xl duration-500 hover:grayscale-0 h-full col-span-4"
              width={866}
              height={1208.67}
              priority={false}
              src="/projects/AfficheS1.webp"
              alt="Affiche MMI"
            />
          </section>

          <section className="Block Dhidden bg-noise-pattern col-span-5 text-wrap grid grid-cols-4 Projects">
            <h1 className="text-5xl col-start-1 col-span-3 pb-10">
              El Camino.
              <br />
              <span className="text-SmText text-2xl">
                Introduction to Photoshop.
              </span>
            </h1>
            <Image
              className="portail view h-28 col-start-4 fleche"
              width={200}
              height={200}
              priority={false}
              src="/arrow.svg"
              alt="logo de flèche"
            />
            <Image
              className="grayscale rounded-2xl duration-500 hover:grayscale-0 h-full col-span-4"
              width={866}
              height={1208.67}
              priority={false}
              src="/projects/ElCamino.webp"
              alt="Affiche du film El Camino"
            />
          </section>

          <section className="Block Ghidden bg-noise-pattern col-span-5 text-wrap grid grid-cols-4 Projects">
            <h1 className="text-5xl col-start-1 col-span-3 pb-10">
              Spine SkatePark.
              <br />
              <span className="text-SmText text-2xl">
                Creation of an Identity.
              </span>
            </h1>
            <Image
              className="portail view h-28 col-start-4 fleche"
              width={200}
              height={200}
              priority={false}
              src="/arrow.svg"
              alt="logo de flèche"
            />
            <Image
              className="grayscale rounded-2xl duration-500 hover:grayscale-0 h-full col-span-4"
              width={866}
              height={1208.67}
              priority={false}
              src="/projects/SpineSkatePark.webp"
              alt="Affiche de Spine SkatePark"
            />
          </section>

          <section className="Block Dhidden bg-noise-pattern col-span-5 text-wrap grid grid-cols-4 Projects">
            <h1 className="text-5xl col-start-1 col-span-3 pb-10">
              Museum Poster.
              <br />
              <span className="text-SmText text-2xl">
                Promotion of a fictional exposition.
              </span>
            </h1>
            <Image
              className="portail view h-28 col-start-4 fleche"
              width={200}
              height={200}
              priority={false}
              src="/arrow.svg"
              alt="logo de flèche"
            />
            <Image
              className="grayscale rounded-2xl duration-500 hover:grayscale-0 h-full col-span-4"
              width={866}
              height={1208.67}
              priority={false}
              src="/projects/SNCF.webp"
              alt="Affiche de promotion d'un faux musée"
            />
          </section>

          <section className="Block Ghidden bg-noise-pattern col-span-5 text-wrap grid grid-cols-4 Projects">
            <h1 className="text-5xl col-start-1 col-span-3 pb-10">
              MMI LightBulb.
              <br />
              <span className="text-SmText text-2xl">
                Promotion of BUT MMI.
              </span>
            </h1>
            <Image
              className="portail view h-28 col-start-4 fleche"
              width={200}
              height={200}
              priority={false}
              src="/arrow.svg"
              alt="logo de flèche"
            />
            <Image
              className="grayscale rounded-2xl duration-500 hover:grayscale-0 h-full col-span-4"
              width={866}
              height={1208.67}
              priority={false}
              src="/projects/Ampoule.webp"
              alt="Affiche Ampoule MMI"
            />
          </section>

          <section className="Block Dhidden bg-noise-pattern justify-center flex items-center col-span-5">
            <h1 className="text-5xl col-start-1 col-span-3 pb-10">
              More to come.
            </h1>
          </section>
          <section className="col-span-10">
            <section className="Block Bhidden bg-noise-pattern justify-center flex items-center flex-col p-4 mb-4 self-center text-center text-5xl ">
              <Image
                className="m-8"
                src="/logo.svg"
                width={200}
                height={200}
                priority={false}
                alt="Logo de Samuel Prieur"
              />
              <h2 className="text-7xl m-8">
                Have a Job <br /> For me?
              </h2>
              <a
                href="mailto:sprieurpro@gmail.com?subject=I need you for ..."
                className="bloc portail justify-center flex w-full items-center col-span-8 rounded-full bg-Highlights m-8 p-7"
              >
                sprieurpro@gmail.com
              </a>
            </section>
            <nav className="text-xl  bg-Block bg-noise-pattern rounded-full flex place-items-center justify-between px-4 h-20">
              <ul className="flex place-items-center justify-between w-full">
                <div className="m-auto grid grid-cols-8 text-center place-items-center w-full">
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
