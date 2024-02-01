"use client";
import Image from "next/image";
import Cursor from "@/app/cursor/page";
import { useParams } from "next/navigation";
import { useEffect } from "react";
export default function ProjectDetails() {
  let params = useParams();
  useEffect(() => {
    // Récupérer l'ID passé dans l'URL
    const { id } = params;
  }, [params]);
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
    const Sobserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("Sshow");
        } else {
          entry.target.classList.remove("Sshow");
        }
      });
    });

    const GhiddenElements = document.querySelectorAll(".Ghidden");
    const DhiddenElements = document.querySelectorAll(".Dhidden");
    const BhiddenElements = document.querySelectorAll(".Bhidden");
    const ShiddenElements = document.querySelectorAll(".Shidden");
    ShiddenElements.forEach((el) => Sobserver.observe(el));
    BhiddenElements.forEach((el) => Bobserver.observe(el));
    GhiddenElements.forEach((el) => Gobserver.observe(el));
    DhiddenElements.forEach((el) => Dobserver.observe(el));
  }, []);
  const id = params.Projectid;

  const projects = [
    {
      id: 1,
      lien: "",
      titre: "Dashboard.",
      theme: ["HTML", "CSS", "PHP", "Javascript", "Tailwind", "ChartJs", "SQL"],
      texte:
        "The Dashboard represents an intuitive interface for visualizing and dynamically analyzing data. My main objective was to create an accessible and functional tool that provides a smooth user experience while integrating key features for in-depth data analysis. Among the skills I implemented for this project, I specifically utilized a method for transmitting data between PHP and JavaScript, leveraging the AJAX technique. This approach allowed me to efficiently synchronize server-side data with real-time user interactions, providing an interactive and responsive experience. The Dashboard's design involved creating dynamic graphs that intersect relevant data to facilitate understanding and interpretation of information. I also ensured that the visual aesthetics were polished by working on the graphical aspect to ensure both information clarity and visual appeal of the interface.",

      img1: "/projects/DashBoard.webp",
      img1alt: "Capture d'écran du Dashboard",
      imgSup: ["/projects/DashBoard2.webp"],
      imgSrc: ["Deuxième page du Dashboard"],
    },
    {
      id: 2,
      lien: "",
      titre: "Bug Tracker.",
      theme: ["HTML", "SCSS", "PHP", "Javascript", "ChartJs", "SQL"],
      texte:
        "For this project, I had to produce a bug tracker in order to allow developers of a video game to communicate with its testers to be able to check and correct future problems. so I used HTML as well as Sass, and of course SQL and PHP. I worked with a database in which I stored user messages, issues, ids. This allowed me to make a form to allow developers to connect as well as store messages to create a sort of discussion, as you might find in a forum for example.",

      img1: "/projects/BugTracker.webp",
      img1alt: "Capture d'écran du BugTracker",
      imgSup: [
        "/projects/Formulaire.webp",
        "/projects/Connexion.webp",
        "/projects/Admin.webp",
        "/projects/Probleme.webp",
      ],
      imgSrc: [
        "Capture d'écran du Formulaire à Problème",
        "Capture d'écran de la connexion pour les administrateurs",
        "Capture d'écran de la page admin",
        "Capture d'écran d'un problème, avec une discussion",
      ],
    },
    {
      id: 3,
      lien: "",
      titre: "Portfolio.",
      theme: [
        "HTML",
        "CSS",
        "Tailwind",
        "NextJs",
        "Javascript",
        "React",
        "Gsap",
      ],
      texte:
        "To create this portfolio, I chose to work with Next JS to be able to consolidate my knowledge in the field, I had already worked with react and I wanted to continue with this project. And I also chose to work with such which I greatly appreciate. In this portfolio I decided to showcase my skills and style. I chose the Bento box design, which was popularized by Apple. This design is then very concise to keep the information as clear and concise as possible. Finally I tried my hand at tools like Gsap and anime JS for my personal knowledge. This work was a pleasure for me, and I want to test new formats.",

      img1: "/projects/Portfolio.webp",
      img1alt: "Capture d'écran du Portfolio",
      imgSup: [],
      imgSrc: [],
    },
    {
      id: 4,
      lien: "",
      titre: "MMI Poster.",
      theme: ["Photography", "Editing", "Photoshop", "LightRoom"],
      texte:
        "This first work in photography allowed me to develop my skills, in staging, composition, framing as well as all the parameters making up the camera. The poster is simple, but I am very satisfied with the photos I was able to take.",

      img1: "/projects/AfficheS1.webp",
      img1alt: "Affiche MMI fait en première année",
      imgSup: [
        "/projects/Phototp1.webp",
        "/projects/Phototp2.webp",
        "/projects/Phototp3.webp",
        "/projects/Phototp4.webp",
        "/projects/Phototp5.webp",
        "/projects/Phototp6.webp",
        "/projects/Phototp7.webp",
      ],
      imgSrc: [
        "Photo Théo dos 1",
        "Photo Théo dos 2",
        "Photo Théo face rouge",
        "Photo Main Lumière",
        "Photo Antoine",
        "babyfoot 1",
        "babyfoot 2",
      ],
    },
    {
      id: 5,
      lien: "",
      titre: "El Camino.",
      theme: ["Editing", "Photoshop"],
      texte:
        "This poster is my real first work on PhotoShop, so the instructions were to create a poster on the film of our choice while respecting the margins that had to be placed around our creation. I chose El camino by taking the design of the official poster by changing, Jesse, by working on a superposition of two images on his head.",

      img1: "/projects/ElCamino.webp",
      img1alt: "Affiche pour le film El Camino",
      imgSup: [],
      imgSrc: [],
    },
    {
      id: 6,
      lien: "",
      titre: "Spine SkatePark.",
      theme: ["Editing", "Photoshop", "Illustrator"],
      texte:
        "For this project, I aimed to create a graphic approach for an imaginary Skatepark. For this, I worked with tools like PhotoShop and Illustrator to create posters and a logo. I chose a skeleton as my mascot. The graphic approach of this skatepark is therefore a skeleton head, with a 'glitch' effect, which is found in each of the posters.",

      img1: "/projects/SpineSkatePark.webp",
      img1alt: "Affiche pour Spine SkatePark",
      imgSup: ["/projects/Spine.webp", "/projects/Spine2.webp"],
      imgSrc: ["Affiche 2 Spine Skatepark", "Affiche 3 Spine Skatepark"],
    },
    {
      id: 7,
      lien: "",
      titre: "Museum Poster.",
      theme: ["Editing", "Photoshop", "Illustrator", "Project Management"],
      texte:
        "In this one, I had to produce visuals as a team for a station project converted into a museum. We therefore produced posters to present the station, as well as maps on the ground which would lead future visitors to it. The old rehabilitated station is therefore that of Elbeuf, and the markings on the ground represent the old metro lines. As I noted above, we also had to deal with project management in order to assess whether the project is possible. You will also see the video that accompanies this project below.",

      img1: "/projects/SNCF.webp",
      img1alt: "Affiche Gare ferroviaire d'Elbeuf",
      imgSup: ["/projects/Gare2.webp"],
      imgSrc: ["Affiche 2 Gare ferroviaire d'Elbeuf"],
    },
    {
      id: 8,
      lien: "",
      titre: "MMI LightBulb.",
      theme: ["Illustrator"],
      texte:
        "In this project, my goal was to create a poster showcasing my MMI (Multimedia and Internet Professions) program. As you can see, there was an issue with the color export, but despite that, the poster still conveys its intended message. The artwork features an MMI student in a hot air balloon shaped like lightbulbs, with the fuse forming the letters MMI. The clouds surrounding her take the form of the most crucial skills cultivated in this program. The message is that this program allows us to reach a new level of knowledge and elevate ourselves professionally.",

      img1: "/projects/Ampoule.webp",
      img1alt: "Affiche MMI Ampoule",
      imgSup: [],
      imgSrc: [],
    },
    {
      id: 9,
      lien: "https://resources.ciklab.com/fr/import-resultats-analyses",
      titre: "CIKLab.",
      theme: ["Motion Design", "After Effect", "Illustrator"],
      texte:
        "In this highly enriching project, our group was tasked with creating a motion design for CIKLab. We divided the responsibilities to individually create assets and then assembled the motion design collectively. This project was both rewarding and fascinating, marking my initial steps into the professional world.",

      img1: "/projects/CIKLab.webp",
      img1alt: "Capture d'écran du site CIKLab",
      imgSup: [],
      imgSrc: [],
    },
    {
      id: 10,
      lien: "https://www.youtube.com/watch?v=M39cgWkT0hA",
      titre: "Film Noir.",
      theme: ["Acting", "Premiere Pro", "Editing"],
      texte:
        "In this short film, I had the opportunity to take on the role of the main actor, portraying a detective in a film noir scenario. This experience was highly enriching and taught me how to better handle stress in front of an audience. We were not only facing the camera but also the entire team. The editing of this short film was an individual effort, and I completed it using Premiere Pro.",

      img1: "/projects/FilmNoir.webp",
      img1alt: "Capture d'écran du Film Noir",
      imgSup: [],
      imgSrc: [],
    },
    {
      id: 11,
      lien: "https://youtu.be/WInzKDL0nUY",
      titre: "Museum Presentation.",
      theme: ["Premiere Pro", "Editing"],
      texte:
        "Here is the video that complements the poster seen above. This video served as a support for an oral presentation accompanying all the graphic projects. I hope you will enjoy it.",

      img1: "/projects/Gare.webp",
      img1alt: "Capture d'écran de la vidéo gare",
      imgSup: [],
      imgSrc: [],
    },
    {
      id: 12,
      lien: "https://www.youtube.com/watch?v=wXYYzm-Bf2U",
      titre: "Crescendo Video.",
      theme: [
        "Premiere Pro",
        "Editing",
        "Audition",
        "Mastering",
        "Composition",
      ],
      texte:
        "The topic assigned for this short film course was to create a fast-paced short film set to music composed by myself. I composed a piece predominantly featuring drums, as it seemed the most practical to achieve an interesting tonality and maintain an equally engaging tempo. I coordinated the visuals with the sound. The objective was to represent the constructivism of our institution, depicting repetitive days, work, and scenarios.",

      img1: "/projects/Crescendo.webp",
      img1alt: "Capture d'écran du Crescendo",
      imgSup: [],
      imgSrc: [],
    },
    {
      id: 13,
      lien: "https://www.youtube.com/watch?v=RzQBill14oU",
      titre: "Interview.",
      theme: ["Premiere Pro", "Editing"],
      texte:
        "This short film is the first one I've directed, and for this one, I took on the roles of directing, planning the shots, and handling the editing. This project was very enriching, and I gained a lot of pleasure and experience from it. The editing and lighting may not be perfect, but my memories of it certainly are.",

      img1: "/projects/Carotte.webp",
      img1alt: "Capture d'écran de l'interview Carotte",
      imgSup: [],
      imgSrc: [],
    },
  ];

  const selectedProject = projects.find(
    (project) => project.id.toString() === id
  );
  // Vérifier si un projet correspondant à l'ID a été trouvé
  if (!selectedProject) {
    return <p>Aucun projet trouvé pour cet id.</p>;
  }

  return (
    <main className="font-text text-Text leading-normal cursor-none bg-Background overflow-hidden">
      {/* <p>{selectedProject.year}</p> */}
      <Cursor />
      <div className="flex justify-center items-center p-7 h-full ">
        <div className="grid lg:grid-cols-10 md:grid-cols-1 sm:grid-cols-1 xsm:grid-cols-1 gap-4 w-full">
          <section className="lg:col-span-10 md:col-span-1 sm:md:col-span-1  sm:col-span-1 xsm:col-span-1 grid lg:grid-cols-10 md:grid-cols-1 sm:grid-cols-1 xsm:grid-cols-1 gap-4 w-full">
            <nav className="lg:text-xl md:text-xl sm:text-md xsm:text-md px-4 lg:col-span-10 md:col-span-1 sm:md:col-span-1 xsm:col-span-1 bg-Block bg-noise-pattern rounded-full flex place-items-center justify-between h-20">
              <div className="flex place-items-center justify-between w-full">
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
              </div>
            </nav>
          </section>
          <section className="bg-noise-pattern lg:col-span-10 md:col-span-1 text-center flex flex-col place-items-center justify-center  sm:md:col-span-1 xsm:col-span-1 Block Ghidden">
            <h1 className="lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl">
              {selectedProject.titre}
            </h1>
            <ul className="flex flex-wrap justify-center p-10">
              {selectedProject.theme.map((themeItem, index) => (
                <li
                  key={index}
                  className="text-Highlights portail border-Highlights border p-2 px-5 m-1 rounded-md lg:text-xl md:text-xl sm:text-md xsm:text-md"
                >
                  {themeItem}
                </li>
              ))}
            </ul>

            <img
              className="portail rounded-2xl"
              src={selectedProject.img1}
              alt={selectedProject.img1alt}
            />
          </section>

          <section className="bg-noise-pattern Dhidden Block lg:col-span-10 md:col-span-1 sm:md:col-span-1 xsm:col-span-1">
            <h3 className="lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl">
              Resume.
            </h3>
            <br />
            <p className="p-10 text-lg">{selectedProject.texte}</p>
            {selectedProject.lien && (
              <div>
                <a
                  className="lg:text-4xl md:text-3xl sm:text-2xl xsm:text-2xl portail view justify-center flex items-center rounded-full bg-Highlights m-3 p-3"
                  href={selectedProject.lien}
                >
                  Link to the project.
                </a>
              </div>
            )}
          </section>

          {selectedProject.imgSup.length > 0 &&
            selectedProject.imgSup.map((imgSrc, index) => (
              <section
                key={`${imgSrc}-${index}`}
                className="lg:col-span-8 md:col-span-1 sm:md:col-span-1 xsm:col-span-1 lg:col-start-2 md:col-start-1 sm:col-start-1 xsm:col-start-1"
              >
                <img
                  src={imgSrc}
                  alt={`Image ${index + 1}`}
                  className={`portail rounded-2xl w-full Shidden`}
                />
              </section>
            ))}

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
