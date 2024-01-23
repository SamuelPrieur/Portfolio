"use client";
import { useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

function Home() {
  const root = useRef();
  const [name, setName] = useState("");
  const [request, setRequest] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nom:", name);
    console.log("Demande:", request);
    console.log("Adresse mail:", email);
  };

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      let ctx = gsap.context(() => {
        gsap.from(".hiddenEffect", {
          opacity: 0,
          y: 10,
          x: -10,
          duration: 0.8,
          stagger: 0.2,
        });

        gsap.from(".hiddenEffectFast", {
          opacity: 0,
          delay: 0.8,
          y: 10,
          duration: 0.8,
          stagger: 0.15,
        });
      }, root);

      return () => ctx.revert();
    }
  }, [root]);
  return (
    <main className="font-text text-text">
      <div
        className="flex justify-center items-center xsm:p-4 sm:p-7 md:p-7 lg:p-7 h-screen"
        ref={root}
      >
        <div className="grid auto-rows-auto lg:grid-cols-5 md:grid-cols-5 xsm:grid-cols-1 lg:gap-4 md:gap-2 xsm:gap-3 h-full">
          <section className="border border-border hover:border-important shadow-custom flex flex-col xsm:justify-center xsm:items-center sm:justify-center sm:items-center lg:flex-row lg:col-span-2 md:col-span-2 rounded-xl bg-secondary hiddenEffect bg-noise-pattern grid-item-sam p-4">
            <img
              className=" h-44 lg:m-6 sm:m-6 xsm:m-2 md:m-6 inline-block"
              src="/sam.png"
              alt="moi"
            />
            <h1 className="lg:text-3xl sm:text-2xl xsm:text-2xl">
              <span className="text-important">Samuel Prieur</span>
              <br />
              is a second year student in
              <span className="text-important"> full-stack</span> web
              developpement
            </h1>
          </section>

          <section className="grid auto-rows-auto grid-cols-3 lg:gap-5 md:gap-2 xsm:gap-3 h-full lg:col-span-3 md:col-span-3">
            <div className="border border-border shadow-custom place-content-center flex items-center rounded-xl lg:col-start-1 md:col-start-1 col-span-3 bg-secondary hiddenEffect bg-noise-pattern ">
              <div>
                <h2 className="lg:text-2xl xsm:text-3xl m-2 text-center">
                  Web developpement skills
                </h2>
                <div className="flex justify-center flex-wrap">
                  <img
                    className="h-16 m-2 imageHover hiddenEffectFast "
                    src="./dev/logo-HTML.png"
                    alt="logo HTML"
                  />
                  <img
                    className="h-16 m-2 imageHover hiddenEffectFast "
                    src="./dev/logo-CSS.png"
                    alt="logo CSS"
                  />
                  <img
                    className="h-16 m-2 imageHover hiddenEffectFast "
                    src="./dev/logo-JS.png"
                    alt="logo JS"
                  />
                  <img
                    className="h-16 m-2 imageHover hiddenEffectFast "
                    src="./dev/logo-PHP.png"
                    alt="logo PHP"
                  />
                  <img
                    className="h-16 m-2 imageHover hiddenEffectFast "
                    src="./dev/logo-REACT.png"
                    alt="logo REACT"
                  />
                  <img
                    className="h-16 m-2 imageHover hiddenEffectFast "
                    src="./dev/logo-NEXT.png"
                    alt="logo NEXT"
                  />
                  <img
                    className="h-16 m-2 imageHover hiddenEffectFast "
                    src="./dev/logo-SQL.png"
                    alt="logo SQL"
                  />
                  <img
                    className="h-16 m-2 imageHover hiddenEffectFast "
                    src="./dev/logo-SASS.png"
                    alt="logo SASS"
                  />
                  <img
                    className="h-16 m-2 imageHover hiddenEffectFast "
                    src="./dev/logo-PYTHON.png"
                    alt="logo PYTHON"
                  />
                </div>
              </div>
            </div>
            <div className="border border-border shadow-custom place-content-center flex items-center rounded-xl lg:col-start-1 md:col-start-1 col-span-3 bg-secondary hiddenEffect bg-noise-pattern ">
              <div>
                <h2 className="lg:text-2xl xsm:text-2xl m-2 text-center">
                  Digital design skills
                </h2>

                <div className="flex justify-center flex-wrap">
                  <img
                    className="h-16 m-2 imageHover hiddenEffectFast  hover:invert-100 duration-0"
                    src="./crea/logo-AI.png"
                    alt="logo Adobe Illustrator"
                  />
                  <img
                    className="h-16 m-2 imageHover hiddenEffectFast "
                    src="./crea/logo-PS.png"
                    alt="logo Photoshop"
                  />
                  <img
                    className="h-16 m-2 imageHover hiddenEffectFast "
                    src="./crea/logo-PR.png"
                    alt="logo Premiere Pro"
                  />
                  <img
                    className="h-16 m-2 imageHover hiddenEffectFast "
                    src="./crea/logo-XD.png"
                    alt="logo X Design"
                  />
                  <img
                    className="h-16 m-2 imageHover hiddenEffectFast "
                    src="./crea/logo-FIGMA.png"
                    alt="logo Figma"
                  />
                  <img
                    className="h-16 m-2 imageHover hiddenEffectFast "
                    src="./crea/logo-AU.png"
                    alt="logo Audition"
                  />
                  <img
                    className="h-16 m-2 imageHover hiddenEffectFast "
                    src="./crea/logo-AE.png"
                    alt="logo After Effect"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="grid auto-rows-auto lg:grid-cols-5 md:grid-cols-2 xsm:grid-cols-2 lg:gap-5 md:gap-2 xsm:gap-3 h-full lg:col-span-5 md:col-span-5">
            <a
              href="mailto:sprieurpro@gmail.com?subject=Je prend contact depuis ton portfolio !"
              className="justify-center flex items-center lg:col-start-1 lg:text-lg md:lg:text-2xl sm:text-2xl xsm:text-xl  col-span-1 rounded-xl bg-secondary border border-border hover:border-important shadow-custom hiddenEffect bg-noise-pattern  lg:p-2 md:p-3 xsm:p-7"
            >
              <p>Email me</p>
            </a>
            <a
              href="tel:+33603000197"
              className="justify-center flex items-center lg:col-start-2 lg:text-lg md:lg:text-2xl sm:text-2xl xsm:text-xl  col-span-1 rounded-xl bg-secondary border border-border hover:border-important shadow-custom hiddenEffect bg-noise-pattern  lg:p-2 md:p-3 xsm:p-7"
            >
              <p>Call me</p>
            </a>
            <a
              href="https://www.linkedin.com/in/samuel-prieur/"
              target="_blank"
              className="justify-center flex items-center lg:col-start-3 lg:text-lg md:lg:text-2xl sm:text-2xl xsm:text-xl  col-span-1 rounded-xl bg-secondary border border-border hover:border-important shadow-custom hiddenEffect bg-noise-pattern  lg:p-2 md:p-3 xsm:p-7"
            >
              <p>Linkedin</p>
            </a>
            <a
              href="https://github.com/SamuelPrieur"
              target="_blank"
              className="justify-center flex items-center lg:col-start-4 lg:text-lg md:lg:text-2xl sm:text-2xl xsm:text-xl  col-span-1 rounded-xl bg-secondary border border-border hover:border-important shadow-custom hiddenEffect bg-noise-pattern  lg:p-2 md:p-3 xsm:p-7"
            >
              <p>Github</p>
            </a>
            <button className="lg:col-start-5 lg:text-lg md:lg:text-2xl xsm:text-2xl lg:col-span-1 md:col-span-2 xsm:col-span-2 rounded-xl  inline bg-secondary border border-border hover:border-important shadow-custom hiddenEffect bg-noise-pattern  lg:p-2 md:p-3 xsm:p-7">
              Access my CV
            </button>
          </section>

          <section className="border border-border hover:border-important shadow-custom lg:col-span-3 md:col-span-3 rounded-xl  inline bg-secondary hiddenEffect bg-noise-pattern  p-5">
            <h1 className="lg:text-2xl xsm:text-2xl text-center">Parcours</h1>
          </section>
          <Link
            id="swup"
            className="border border-border hover:border-important shadow-custom transition-fade rounded-xl lg:col-span-2 md:col-span-2  bg-secondary hiddenEffect bg-noise-pattern  "
            href={"/projetDev"}
          >
            <h1 className="text-center lg:text-2xl xsm:text-2xl ">
              Projet Developpement <br />
              Projet Developpement <br />
              Projet Developpement <br />
              Projet Developpement <br />
              Projet Developpement <br />
              Projet Developpement <br />
            </h1>
          </Link>

          <section className="border border-border hover:border-important shadow-custom rounded-xl lg:col-span-2 md:col-span-2  inline bg-secondary hiddenEffect bg-noise-pattern ">
            <h1 className="text-center lg:text-2xl xsm:text-2xl ">
              Création Numérique <br />
              Création Numérique <br />
              Création Numérique <br />
              Création Numérique <br />
              Création Numérique <br />
              Création Numérique <br />
            </h1>
          </section>
          <section className=" grid auto-rows-auto grid-cols-2 lg:gap-5 md:gap-2 xsm:gap-3 h-full lg:col-span-3 md:col-span-3 xsm:col-span-1">
            <form
              className="border border-border shadow-customp-2 col-span-2 rounded-xl lg:text-2xl xsm:text-2xl inline bg-secondary hiddenEffect bg-noise-pattern "
              onSubmit={handleSubmit}
            >
              <h1 className="text-center">Contact</h1>
              <p>
                Salut Samuel! Je suis [
                <input
                  className="w-28 border-none bg-secondary bg-noise-pattern  text-important placeholder:text-important"
                  type="text"
                  placeholder=" ton nom"
                  value={name}
                  /* onInput={handleInput} */
                  onChange={(e) => setName(e.target.value)}
                  maxLength="40"
                  required
                />
                ] et je souhaite [
                <input
                  className="border-none w-36 bg-secondary bg-noise-pattern  text-important placeholder:text-important"
                  type="text"
                  placeholder=" ta demande"
                  value={request}
                  /* onInput={handleInput} */
                  onChange={(e) => setRequest(e.target.value)}
                  maxLength="100"
                  required
                />
                ]. Tu peux me contacter sur mon adresse mail [
                <input
                  className="w-48 object-contain  border-none bg-secondary bg-noise-pattern  text-important placeholder:text-important"
                  type="text"
                  placeholder=" ton adresse mail"
                  value={email}
                  /* onInput={handleInput} */
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength="40"
                  required
                />
                ]
              </p>
              <div className="flex m-5 place-content-center">
                <button>Valider</button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Home;
