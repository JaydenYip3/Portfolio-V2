"use client";

import { TypeAnimation } from "react-type-animation";
import ExperienceCard from "./components/ExperienceCard";

export default function Home() {
    return (
        <>
            <header className="fixed top-0 left-0 right-0 px-8 py-6 flex justify-end gap-8 text-sm">
                <a
                    href="#"
                    className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                >
                    Resume
                </a>
                <a
                    href="#"
                    className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                >
                    LinkedIn
                </a>
                <a
                    href="mailto:"
                    className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                >
                    Email
                </a>
                <a
                    href="#"
                    className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                >
                    GitHub
                </a>
            </header>
            <main className="min-h-screen flex items-center justify-center px-6 py-16">
                <div className="max-w-md w-full text-center">

                    {/* Name */}
                    <TypeAnimation
                        sequence={["Jayden Yip"]}
                        wrapper="h1"
                        speed={50}
                        className="text-3xl font-light tracking-wide mb-2 blinking-cursor"
                        cursor={false}
                    />

                    {/* Title/Role */}
                    <p className="text-[var(--muted)] text-sm uppercase tracking-widest mb-8">
                        Software Engineer
                    </p>

                    {/* Bio */}
                    <p className="text-base leading-relaxed mb-12 text-[var(--foreground)] opacity-80">
                        Hello my name is Jayden. I am a student at the University of Toronto studying Machine Learning and Data Science!
                        <br />
                        And I use Neovim btw... :)
                    </p>

                    {/* Experiences */}
                    <h2 className="text-lg font-light tracking-wide mb-6 text-[var(--muted)]">
                        Experiences
                    </h2>
                    <div className="flex flex-col gap-4">
                        <ExperienceCard
                            title="Software Engineer Intern"
                            company="Wattpad"
                            period="2025 - Present"
                            description="Worked on ads and web related stuff"
                            url="https://www.wattpad.com"
                            index={0}
                        />
                        <ExperienceCard
                            title="Software Engineer"
                            company="GenAI Genesis"
                            period="2024 - Present"
                            description="Created platform to manage admission and other logistics "
                            url="https://genaigenesis.ca"
                            index={1}
                        />
                        <ExperienceCard
                            title="Director of Technology"
                            company="Google Developer Group"
                            period="2024 - Present"
                            description="Developed program for club postings"
                            url="https://www.gdgutsc.ca/"
                            index={2}
                        />
                        <ExperienceCard
                            title="VP of Operations"
                            company="Data Science and Statistics Society (DS3)"
                            period="2024 - Present"
                            description="Organized and ran club events"
                            url="https://ds3utsc.com/"
                            index={3}
                        />
                    </div>
                </div>
            </main>
        </>
    );
}
