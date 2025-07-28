import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  About Trio Agent: Build Anything by Chatting with AI
                </h2>
                <p className="mb-6 text-base leading-relaxed text-body-color dark:text-dark-6">
                  <strong>Trio Agent</strong> lets you create apps and websites just by describing your idea in plain language. No code, no design skills, no technical barriers—just chat, and AI builds it for you. <br /><br />
                  <strong>Optima AI</strong> is a solo founder company on a mission to make AI radically accessible, private, and empowering. Trio Agent is local-first, privacy-by-default, and gives you full-stack extensibility with a 2 million token context window.
                </p>

                {/* Value grid for clarity and user resonance */}
                <div className="mb-8 grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg bg-white p-5 shadow dark:bg-dark-2">
                    <h3 className="mb-2 text-lg font-semibold text-dark dark:text-white">Chat-to-Build</h3>
                    <p className="text-body-color dark:text-dark-6">Describe your vision—Trio Agent instantly turns your words into a working app or website. No forms, no templates, just conversation.</p>
                  </div>
                  <div className="rounded-lg bg-white p-5 shadow dark:bg-dark-2">
                    <h3 className="mb-2 text-lg font-semibold text-dark dark:text-white">Zero Learning Curve</h3>
                    <p className="text-body-color dark:text-dark-6">No code, no design skills, no problem. If you can describe it, you can build it. Iterate and launch in minutes.</p>
                  </div>
                  <div className="rounded-lg bg-white p-5 shadow dark:bg-dark-2">
                    <h3 className="mb-2 text-lg font-semibold text-dark dark:text-white">Empowering Everyone</h3>
                    <p className="text-body-color dark:text-dark-6">From solo founders to teams, Trio Agent is your creative partner—ready to help you build, grow, and innovate 24/7.</p>
                  </div>
                  <div className="rounded-lg bg-white p-5 shadow dark:bg-dark-2">
                    <h3 className="mb-2 text-lg font-semibold text-dark dark:text-white">Private & Local-First</h3>
                    <p className="text-body-color dark:text-dark-6">Your data stays on your machine. No cloud lock-in, no data mining—just pure, blazing-fast intelligence on your own terms.</p>
                  </div>
                  <div className="rounded-lg bg-white p-5 shadow dark:bg-dark-2 md:col-span-2">
                    <div className="flex items-center gap-4 mb-2">
                      <Image src="https://logo.clearbit.com/supabase.com" alt="Supabase" width={32} height={32} className="object-contain" />
                      <Image src="https://logo.clearbit.com/github.com" alt="GitHub" width={32} height={32} className="object-contain" />
                      <Image src="https://logo.clearbit.com/vercel.com" alt="Vercel" width={32} height={32} className="object-contain" />
                      <h3 className="ml-2 text-lg font-semibold text-dark dark:text-white">Fullstack Power: Supabase, GitHub & Vercel Integrations</h3>
                    </div>
                    <p className="text-body-color dark:text-dark-6">
                      Build real fullstack apps with Trio Agent: instantly generate a backend powered by <strong>Supabase</strong> (PostgreSQL DB & Edge Functions), connect and sync your codebase with <strong>GitHub</strong> for version control and collaboration, and deploy live to <strong>Vercel</strong>—all from inside the app. Push, install, and synchronize your code to GitHub, then deploy instantly to Vercel for a seamless, production-ready workflow.
                    </p>
                  </div>
                </div>
                <div className="mb-8 rounded-lg bg-primary/10 p-5 text-sm text-primary dark:bg-primary/20">
                  <strong>Founder’s Note:</strong> <br />
                  "I built Optima AI and Trio Agent because I believe everyone deserves AI that works for them—not the other way around. No cloud lock-in, no data mining, just pure, blazing-fast intelligence on your own terms."
                  <br />
                  <span className="mt-2 block font-semibold">— Hans Ade (Anye Happiness Ade)</span>
                </div>

                <div className="mb-8">
                  <h3 className="mb-3 text-xl font-semibold text-dark dark:text-white">Press & Mentions</h3>
                  <div className="flex flex-wrap items-center gap-6">
                    <a href="https://techcrunch.com/" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="https://logo.clearbit.com/techcrunch.com"
                        alt="TechCrunch"
                        width={100}
                        height={32}
                        className="object-contain grayscale hover:grayscale-0 transition"
                      />
                    </a>
                    <a href="https://thenextweb.com/" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="https://logo.clearbit.com/thenextweb.com"
                        alt="The Next Web"
                        width={100}
                        height={32}
                        className="object-contain grayscale hover:grayscale-0 transition"
                      />
                    </a>
                    <a href="https://producthunt.com/" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="https://logo.clearbit.com/producthunt.com"
                        alt="Product Hunt"
                        width={100}
                        height={32}
                        className="object-contain grayscale hover:grayscale-0 transition"
                      />
                    </a>
                    <a href="https://dev.to/" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="https://logo.clearbit.com/dev.to"
                        alt="DEV Community"
                        width={100}
                        height={32}
                        className="object-contain grayscale hover:grayscale-0 transition"
                      />
                    </a>
                  </div>
                  <p className="mt-4 text-base text-body-color dark:text-dark-6">
                    Featured in leading tech media and loved by the developer community worldwide.
                  </p>
                </div>
                <Link
                  href="mailto:hello@optimaai.cc"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white duration-300 hover:bg-primary/90 mb-8"
                >
                  Contact the Founder
                </Link>

                <div className="mb-8">
                  <h3 className="mb-3 text-xl font-semibold text-dark dark:text-white">Core Values</h3>
                  <ul className="list-disc pl-6 text-base text-body-color dark:text-dark-6 space-y-1">
                    <li><strong>Privacy-first:</strong> Your data, your machine, your rules.</li>
                    <li><strong>Local-first:</strong> No cloud lock-in. Full control, always.</li>
                    <li><strong>Transparency:</strong> Open, honest, and community-driven.</li>
                    <li><strong>Empowerment:</strong> AI should amplify your creativity, not replace it.</li>
                    <li><strong>Relentless improvement:</strong> Built by a solo founder, but shaped by real user feedback.</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="mb-3 text-xl font-semibold text-dark dark:text-white">Our Journey</h3>
                  <ol className="relative border-l border-primary/30 pl-6">
                    <li className="mb-6 ml-4">
                      <div className="absolute -left-2 mt-1.5 h-3 w-3 rounded-full bg-primary"></div>
                      <span className="font-semibold">2023:</span> Hans Ade starts building Optima AI and the first Trio Agent prototype.
                    </li>
                    <li className="mb-6 ml-4">
                      <div className="absolute -left-2 mt-1.5 h-3 w-3 rounded-full bg-primary"></div>
                      <span className="font-semibold">2024:</span> Launches Trio Agent with 2M context window and local-first privacy.
                    </li>
                    <li className="mb-6 ml-4">
                      <div className="absolute -left-2 mt-1.5 h-3 w-3 rounded-full bg-primary"></div>
                      <span className="font-semibold">2025:</span> Community grows, new features, and more developers join the movement for private, powerful AI.
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div
                    className={`relative mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px] `}
                  >
                    <Image
                      src="/demo/trioatwork.jpg"
                      alt="Trio AI at work"
                      fill
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>

                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="relative mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                    <Image
                      src="/demo/triosettingspage.png"
                      alt="Trio AI settings"
                      fill
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-primary px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8">
                    <div>
                      <span className="block text-5xl font-extrabold text-white">
                        09
                      </span>
                      <span className="block text-base font-semibold text-white">
                        We have
                      </span>
                      <span className="block text-base font-medium text-white text-opacity-70">
                        Years of experience
                      </span>
                    </div>
                    <div>
                      <span className="absolute left-0 top-0 -z-10">
                        <svg
                          width="106"
                          height="144"
                          viewBox="0 0 106 144"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.1"
                            x="-67"
                            y="47.127"
                            width="113.378"
                            height="131.304"
                            transform="rotate(-42.8643 -67 47.127)"
                            fill="url(#paint0_linear_1416_214)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_1416_214"
                              x1="-10.3111"
                              y1="47.127"
                              x2="-10.3111"
                              y2="178.431"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="white" />
                              <stop
                                offset="1"
                                stopColor="white"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <span className="absolute right-0 top-0 -z-10">
                        <svg
                          width="130"
                          height="97"
                          viewBox="0 0 130 97"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.1"
                            x="0.86792"
                            y="-6.67725"
                            width="155.563"
                            height="140.614"
                            transform="rotate(-42.8643 0.86792 -6.67725)"
                            fill="url(#paint0_linear_1416_215)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_1416_215"
                              x1="78.6495"
                              y1="-6.67725"
                              x2="78.6495"
                              y2="133.937"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="white" />
                              <stop
                                offset="1"
                                stopColor="white"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <span className="absolute bottom-0 right-0 -z-10">
                        <svg
                          width="175"
                          height="104"
                          viewBox="0 0 175 104"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.1"
                            x="175.011"
                            y="108.611"
                            width="101.246"
                            height="148.179"
                            transform="rotate(137.136 175.011 108.611)"
                            fill="url(#paint0_linear_1416_216)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_1416_216"
                              x1="225.634"
                              y1="108.611"
                              x2="225.634"
                              y2="256.79"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="white" />
                              <stop
                                offset="1"
                                stopColor="white"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
