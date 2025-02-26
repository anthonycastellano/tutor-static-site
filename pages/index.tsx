import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useRef, SyntheticEvent } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const HACKER_TEXT_INTERVAL: number = 35;

export default function Home() {
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef && headingRef.current) {
      const letters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let iteration: number = 0;

      let interval: NodeJS.Timeout = setInterval(() => {
        headingRef.current.innerText = headingRef.current.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration || letter === ' ') {
              return headingRef.current.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("");

      if (iteration >= headingRef.current.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1;
      }, HACKER_TEXT_INTERVAL);
    }
  }, []);

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <header className="w-full text-white py-4">
        <div className="max-w-3xl mx-auto px-6 items-center justify-center flex flex-row text-center">
          <h1 ref={headingRef} data-value="Castellano Coding" className="text-5xl font-bold max-w-xs md:max-w-xl">Castellano Coding</h1>
        </div>
      </header>
      
      <main className="text-center px-6 py-12 max-w-3xl">
        <h1 className="text-4xl md:text-4xl font-bold mb-4">
          Personalized Tutoring for Every Learner
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          Unlock your potential with one-on-one lessons tailored to your goals.
        </p>
        <a
          href="/signup"
          className="inline-block bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          Get Started
        </a>
      </main>

      <section className="flex flex-col md:flex-row gap-8 px-6 py-12 text-center">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
          <p className="text-gray-400">Learn at your pace, on your time.</p>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">Expert Tutors</h3>
          <p className="text-gray-400">Guidance from experienced professionals.</p>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">Custom Plans</h3>
          <p className="text-gray-400">Lessons designed just for you.</p>
        </div>
      </section>

      <section className="w-full max-w-3xl px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <div className="bg-gray-300 p-6 rounded-lg shadow-sm text-gray-700">
          <p className="mb-4">
            Hi, I’m Anthony Castellano, a passionate educator with over 10 years of experience helping students
            succeed. I specialize in [your subjects, e.g., math, science, or language arts], and I
            believe every learner has the potential to shine with the right guidance.
          </p>
          <p className="mb-4">
            My journey started when I noticed how one-size-fits-all teaching left so many students
            behind. That’s why I focus on personalized plans—whether you’re catching up, aiming for
            top grades, or preparing for exams like the SAT or ACT. I’ve worked with students of all
            ages, from elementary to college level, and I’m proud to see them grow in confidence and
            skill.
          </p>
          <p>
            When I’m not tutoring, you’ll find me [your hobbies, e.g., reading, hiking, or playing
            chess], always learning something new myself. Let’s work together to reach your goals!
          </p>
        </div>
      </section>

      <footer className="text-gray-500 text-sm py-6">
        <p>&copy; 2025 Tutoring Services. All rights reserved.</p>
      </footer>
    </div>
  );
}
