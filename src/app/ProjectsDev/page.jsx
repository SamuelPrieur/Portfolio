"use client";
import { useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Cursor from "../cursor/page";

function ProjectsDev() {
  const root = useRef();
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
      }, root);

      return () => ctx.revert();
    }
  }, [root]);
  return (
    <main className="font-text text-text">
      <Cursor />
      <div className="page-header"></div>
      <div
        className="flex justify-center items-center xsm:p-4 sm:p-7 md:p-7 lg:p-7 h-screen"
        ref={root}
      >
        <div className="grid justify-center auto-rows-auto lg:grid-cols-8 md:grid-cols-8 xsm:grid-cols-1 lg:col-span-1 md:col-span-2 lg:gap-4 md:gap-2 xsm:gap-3 h-full">
          <Link
            href={"/Home"}
            className="h-14 portail rounded-full lg:col-span-2 md:col-span-2 xsm:col-span-2 shadow-custom flex flex-row justify-center items-center text-secondary bg-text hiddenEffect bg-noise-pattern grid-item-retour"
          >
            <img
              className="h-11 mr-3 inline-block"
              src="/arrow.svg"
              alt="Flèche de Retour"
            />
            <p className="text-2xl">Go Back</p>
          </Link>
          <section className="col-start-2 row-start-2 grid grid-cols-subgrid place-content-center col-span-6 gap-4">
            <div className="bloc shadow-custom transition-fade rounded-xl lg:col-span-3 md:col-span-2 bg-secondary hiddenEffect bg-noise-pattern flex justify-center items-center">
              <img src="/test.jpg" alt="" />
            </div>
            <div className="bloc shadow-custom transition-fade rounded-xl lg:col-span-3 md:col-span-2 bg-secondary hiddenEffect bg-noise-pattern flex justify-center items-center">
              <img src="/test.jpg" alt="" />
            </div>
            <div className="bloc shadow-custom transition-fade rounded-xl lg:col-span-3 md:col-span-2 bg-secondary hiddenEffect bg-noise-pattern flex justify-center items-center">
              <img src="/test.jpg" alt="" />
            </div>
            <div className="bloc shadow-custom transition-fade rounded-xl lg:col-span-3 md:col-span-2 bg-secondary hiddenEffect bg-noise-pattern flex justify-center items-center">
              <img src="/test.jpg" alt="" />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default ProjectsDev;
