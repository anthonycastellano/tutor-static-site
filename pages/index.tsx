import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Head from "next/head";

// constants
const HACKER_TEXT_INTERVAL = 50;
const ARROW_SCROLL_LIMIT = 150;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface DownArrowProps {
  shown: boolean;
}
const DownArrow = ({ shown }: DownArrowProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className={`w-8 h-8 text-white animate-bounce md:hidden transition-opacity duration-300 ease-in-out${shown ? "" : " opacity-0"}`}
  >
    <path
      d="M26.29 20.29 18 28.59V0h-2v28.59l-8.29-8.3-1.42 1.42 10 10a1 1 0 0 0 1.41 0l10-10z"
      data-name="2-Arrow Down"
      fill="white"
    />
  </svg>
);

export default function Home() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [showArrow, setShowArrow] = useState(true); // state to toggle arrow visibility

  // on page load, animate heading text
  useEffect(() => {
    const headingElement = headingRef.current;
    const headingElementValue = headingElement?.dataset.value;
    if (!headingElement || !headingElementValue) return;

    const letters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let iteration: number = 0;

    const interval: NodeJS.Timeout = setInterval(() => {
      headingElement.innerText = headingElement.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration || letter === ' ') {
            return headingElementValue[index];
          }

          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration >= headingElementValue.length) {
        clearInterval(interval);
      }

      iteration += 1;
    }, HACKER_TEXT_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  // scroll listener to hide arrow
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > ARROW_SCROLL_LIMIT) { // hide after scrolling 100px
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable}
      flex flex-col items-center justify-center min-h-screen 
      p-8 pb-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <Head>
        <title>Castellano Coding</title>
      </Head>
      <header className="w-full text-white py-4">
        <div className="max-w-3xl mx-auto px-6 items-center justify-center flex flex-row text-center">
          <h1 ref={headingRef} data-value="Castellano Coding" className="text-5xl font-bold max-w-xs md:max-w-xl">Castellano Coding</h1>
        </div>
      </header>

      <Image className="w-48 h-48 rounded-full overflow-hidden object-cover" src="headshot.jpg" alt="Tutor portrait"></Image>

      <main className="text-center px-6 py-12 max-w-3xl">
        <h1 className="text-4xl md:text-4xl font-bold mb-4">
          Personalized Tutoring for Every Learner
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          Unlock your potential with one-on-one lessons tailored to your goals.
        </p>
        <Link
          href="/signup"
          className="inline-block bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          Get Started
        </Link>
      </main>

      <div className={`md:hidden transition-opacity duration-300 ease-in-out${showArrow ? "" : " opacity-0"}`}>Or scroll for details</div>
      <DownArrow shown={showArrow} />

      <section className="flex flex-col md:flex-row gap-8 px-6 py-12 text-center">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">Custom Plans</h3>
          <p className="text-gray-400">Lessons designed for each student, no matter the skill level.</p>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">Wide Range of Subjects</h3>
          <p className="text-gray-400">Learn to code, build apps, and create websites.</p>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">Expert Tutor</h3>
          <p className="text-gray-400">One-on-one guidance from an experienced professional.</p>
        </div>
      </section>

      <section className="w-full max-w-3xl px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <div className="bg-gray-300 p-6 rounded-lg shadow-sm text-gray-700">
          <p className="mb-4">
            Hi, I’m Anthony Castellano, a seasoned software developer with nearly 10 years of experience building innovative solutions.
            I hold a Bachelor of Science in Computer Science from the University of South Carolina (Magna Cum Laude, 2021) and currently
            work as a Technical Solution Consultant at IBM, where I design and deploy cutting-edge tools like AI chatbots, machine learning
            models, and high-speed data systems. My passion for coding drives me to help the next generation master these skills.
          </p>
          <p className="mb-4">
            I’ve spent years tutoring young learners through Coding4Youth, guiding kids in my community to create their first programs, games,
            and websites. Whether it’s Python, JavaScript, or Scratch, I break down complex concepts into fun, hands-on lessons tailored to
            each student. My professional toolkit—spanning JavaScript, Java, Python, and cloud platforms like AWS and Azure—lets me teach 
            real-world development skills that spark creativity and problem-solving.
          </p>
          <p>
            When I’m not coding or tutoring, I’m exploring new tech, earning credentials (like CompTIA Security+ and Red Hat OpenShift), or 
            tinkering with side projects. I’m here in Miami to help your kids turn their curiosity into coding confidence—let’s build 
            something awesome together!
          </p>
        </div>
      </section>
    </div>
  );
}
