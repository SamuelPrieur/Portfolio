"use client";
import { useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Cursor from "../cursor/page";

function Language() {
  const root = useRef();

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      let ctx = gsap.context(() => {
        gsap.from(".hiddenEffectUp", {
          opacity: 0,
          y: -100,
          duration: 2,
        });

        gsap.from(".hiddenEffectDown", {
          opacity: 0,
          y: 100,
          duration: 2,
        });
      }, root);

      return () => ctx.revert();
    }
  }, [root]);
  return (
    <main className="font-text text-text">
      <Cursor />
      <div
        className="flex justify-center items-center xsm:p-4 sm:p-7 md:p-7 lg:p-7 h-screen"
        ref={root}
      >
        <div className="grid place-content-center justify-center auto-rows-auto grid-cols-1 lg:gap-16 md:gap-16 xsm:gap-16 h-full">
          <Link
            href={{
              pathname: "/Home",
              query: {
                lang: "en",
              },
            }}
            className="text-center lg:text-8xl md:text-7xl sm:text-7xl xsm:text-6xl portail hiddenEffectUp"
          >
            Hello
          </Link>
          <Link
            href={{
              pathname: "/Home",
              query: {
                lang: "fr",
              },
            }}
            className="text-center lg:text-8xl md:text-7xl sm:text-7xl xsm:text-6xl portail hiddenEffectDown"
          >
            Bonjour
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Language;
