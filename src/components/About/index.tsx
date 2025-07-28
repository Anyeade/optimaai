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

            <div className="w-full px-4 lg:w-1/2 flex items-center justify-center">
              <div className="relative w-full h-[400px] md:h-[540px] lg:h-[500px] xl:h-[600px] max-w-xl rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#181c2a]">
                <Image
                  src="/demo/screenshortappfront.jpg"
                  alt="Trio Agent App Screenshot"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
