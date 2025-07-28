import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#10141f] pt-[120px] md:pt-[130px] lg:pt-[160px] min-h-[80vh] flex items-center"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-12 h-full min-h-[520px]">
            {/* Left: Text Content */}
            <div className="flex-1 max-w-xl text-left flex flex-col justify-center h-full">
            <div className="mb-6">
              <span className="inline-block rounded bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white mb-4">Optima AI Solutions</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                Create Stunning Apps & Websites <br />
                <span className="text-blue-400">by Chatting with AI</span>
              </h1>
              <p className="text-lg text-white/80 mb-6">
                <span className="font-semibold text-blue-400">Trio Agent</span> lets you build beautiful, production-ready apps and websites just by having a conversation. Describe your idea, chat with AI, and watch your vision come to life—no code required.
              </p>
              <p className="text-base text-white/60 mb-4">
                Fast, private, and fully under your control. Powered by a massive 2 million context window and built for creators who want the best AI experience on their own machine.
              </p>
              <ul className="mb-8 space-y-2">
              <li className="flex items-center text-white/80"><span className="mr-2 text-blue-400">•</span> AI Web Search & Suggestions</li>
              <li className="flex items-center text-white/80"><span className="mr-2 text-blue-400">•</span> Local-first, Private, No Lock-in</li>
              <li className="flex items-center text-white/80"><span className="mr-2 text-blue-400">•</span> Cross-platform (Windows/Mac/Linux)</li>
              <li className="flex items-center text-white/80"><span className="mr-2 text-blue-400">•</span> Real-Time Collaboration & Analytics</li>
              </ul>
              <div className="flex gap-4">
                <Link
                  href="/trio-download"
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-7 py-3 text-base font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:bg-blue-700"
                >
                  Download Trio
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-md border border-white/20 px-7 py-3 text-base font-semibold text-white/80 hover:text-white hover:border-blue-400 transition duration-300"
                  target="_blank"
                >
                  Learn More
                </Link>
              </div>
              {/* Core Integrations Row */}
              <div className="flex items-center gap-4 mt-6">
                <Image src="https://logo.clearbit.com/supabase.com" alt="Supabase" width={32} height={32} className="object-contain" />
                <Image src="https://logo.clearbit.com/github.com" alt="GitHub" width={32} height={32} className="object-contain" />
                <Image src="https://logo.clearbit.com/vercel.com" alt="Vercel" width={32} height={32} className="object-contain" />
                <span className="text-white/80 text-sm ml-2">Fullstack backend, code sync, and instant deployment—powered by Supabase, GitHub & Vercel</span>
              </div>
            </div>
            </div>
            {/* Right: Video Card */}
            <div className="flex-1 flex items-stretch justify-center w-full md:w-auto h-full">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#181c2a] p-2 w-full max-w-xl h-full flex items-stretch justify-center">
                <video
                  src="/demo/trioappdemo.mp4"
                  controls
                  poster="/demo/screenshortappfront.jpg"
                  className="rounded-xl w-full h-full object-cover bg-black"
                  autoPlay={false}
                  loop
                  muted
                />
              </div>
            </div>
        </div>
      </div>

      {/* Background SVG Decorations */}
      <div className="absolute -left-9 bottom-0 z-[-1]">
        <svg
          width="134"
          height="106"
          viewBox="0 0 134 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="1.66667" cy="104" r="1.66667" transform="rotate(-90 1.66667 104)" fill="white" />
          <circle cx="16.3333" cy="104" r="1.66667" transform="rotate(-90 16.3333 104)" fill="white" />
          <circle cx="31" cy="104" r="1.66667" transform="rotate(-90 31 104)" fill="white" />
          <circle cx="45.6667" cy="104" r="1.66667" transform="rotate(-90 45.6667 104)" fill="white" />
          <circle cx="60.3333" cy="104" r="1.66667" transform="rotate(-90 60.3333 104)" fill="white" />
          <circle cx="88.6667" cy="104" r="1.66667" transform="rotate(-90 88.6667 104)" fill="white" />
          <circle cx="117.667" cy="104" r="1.66667" transform="rotate(-90 117.667 104)" fill="white" />
          <circle cx="74.6667" cy="104" r="1.66667" transform="rotate(-90 74.6667 104)" fill="white" />
          <circle cx="103" cy="104" r="1.66667" transform="rotate(-90 103 104)" fill="white" />
          <circle cx="132" cy="104" r="1.66667" transform="rotate(-90 132 104)" fill="white" />
          <circle cx="1.66667" cy="89.3333" r="1.66667" transform="rotate(-90 1.66667 89.3333)" fill="white" />
          <circle cx="16.3333" cy="89.3333" r="1.66667" transform="rotate(-90 16.3333 89.3333)" fill="white" />
          <circle cx="31" cy="89.3333" r="1.66667" transform="rotate(-90 31 89.3333)" fill="white" />
          <circle cx="45.6667" cy="89.3333" r="1.66667" transform="rotate(-90 45.6667 89.3333)" fill="white" />
          <circle cx="60.3333" cy="89.3338" r="1.66667" transform="rotate(-90 60.3333 89.3338)" fill="white" />
          <circle cx="88.6667" cy="89.3338" r="1.66667" transform="rotate(-90 88.6667 89.3338)" fill="white" />
          <circle cx="117.667" cy="89.3338" r="1.66667" transform="rotate(-90 117.667 89.3338)" fill="white" />
          <circle cx="74.6667" cy="89.3338" r="1.66667" transform="rotate(-90 74.6667 89.3338)" fill="white" />
          <circle cx="103" cy="89.3338" r="1.66667" transform="rotate(-90 103 89.3338)" fill="white" />
          <circle cx="132" cy="89.3338" r="1.66667" transform="rotate(-90 132 89.3338)" fill="white" />
          <circle cx="1.66667" cy="74.6673" r="1.66667" transform="rotate(-90 1.66667 74.6673)" fill="white" />
          <circle cx="1.66667" cy="31.0003" r="1.66667" transform="rotate(-90 1.66667 31.0003)" fill="white" />
          <circle cx="16.3333" cy="74.6668" r="1.66667" transform="rotate(-90 16.3333 74.6668)" fill="white" />
          <circle cx="16.3333" cy="31.0003" r="1.66667" transform="rotate(-90 16.3333 31.0003)" fill="white" />
          <circle cx="31" cy="74.6668" r="1.66667" transform="rotate(-90 31 74.6668)" fill="white" />
          <circle cx="31" cy="31.0003" r="1.66667" transform="rotate(-90 31 31.0003)" fill="white" />
          <circle cx="45.6667" cy="74.6668" r="1.66667" transform="rotate(-90 45.6667 74.6668)" fill="white" />
          <circle cx="45.6667" cy="31.0003" r="1.66667" transform="rotate(-90 45.6667 31.0003)" fill="white" />
          <circle cx="60.3333" cy="74.6668" r="1.66667" transform="rotate(-90 60.3333 74.6668)" fill="white" />
          <circle cx="60.3333" cy="31.0001" r="1.66667" transform="rotate(-90 60.3333 31.0001)" fill="white" />
          <circle cx="88.6667" cy="74.6668" r="1.66667" transform="rotate(-90 88.6667 74.6668)" fill="white" />
          <circle cx="88.6667" cy="31.0001" r="1.66667" transform="rotate(-90 88.6667 31.0001)" fill="white" />
          <circle cx="117.667" cy="74.6668" r="1.66667" transform="rotate(-90 117.667 74.6668)" fill="white" />
          <circle cx="117.667" cy="31.0001" r="1.66667" transform="rotate(-90 117.667 31.0001)" fill="white" />
          <circle cx="74.6667" cy="74.6668" r="1.66667" transform="rotate(-90 74.6667 74.6668)" fill="white" />
          <circle cx="74.6667" cy="31.0001" r="1.66667" transform="rotate(-90 74.6667 31.0001)" fill="white" />
          <circle cx="103" cy="74.6668" r="1.66667" transform="rotate(-90 103 74.6668)" fill="white" />
          <circle cx="103" cy="31.0001" r="1.66667" transform="rotate(-90 103 31.0001)" fill="white" />
          <circle cx="132" cy="74.6668" r="1.66667" transform="rotate(-90 132 74.6668)" fill="white" />
          <circle cx="132" cy="31.0001" r="1.66667" transform="rotate(-90 132 31.0001)" fill="white" />
          <circle cx="1.66667" cy="60.0003" r="1.66667" transform="rotate(-90 1.66667 60.0003)" fill="white" />
          <circle cx="1.66667" cy="16.3336" r="1.66667" transform="rotate(-90 1.66667 16.3336)" fill="white" />
          <circle cx="16.3333" cy="60.0003" r="1.66667" transform="rotate(-90 16.3333 60.0003)" fill="white" />
          <circle cx="16.3333" cy="16.3336" r="1.66667" transform="rotate(-90 16.3333 16.3336)" fill="white" />
          <circle cx="31" cy="60.0003" r="1.66667" transform="rotate(-90 31 60.0003)" fill="white" />
          <circle cx="31" cy="16.3336" r="1.66667" transform="rotate(-90 31 16.3336)" fill="white" />
          <circle cx="45.6667" cy="60.0003" r="1.66667" transform="rotate(-90 45.6667 60.0003)" fill="white" />
          <circle cx="45.6667" cy="16.3336" r="1.66667" transform="rotate(-90 45.6667 16.3336)" fill="white" />
          <circle cx="60.3333" cy="60.0003" r="1.66667" transform="rotate(-90 60.3333 60.0003)" fill="white" />
          <circle cx="60.3333" cy="16.3336" r="1.66667" transform="rotate(-90 60.3333 16.3336)" fill="white" />
          <circle cx="88.6667" cy="60.0003" r="1.66667" transform="rotate(-90 88.6667 60.0003)" fill="white" />
          <circle cx="88.6667" cy="16.3336" r="1.66667" transform="rotate(-90 88.6667 16.3336)" fill="white" />
          <circle cx="117.667" cy="60.0003" r="1.66667" transform="rotate(-90 117.667 60.0003)" fill="white" />
          <circle cx="117.667" cy="16.3336" r="1.66667" transform="rotate(-90 117.667 16.3336)" fill="white" />
          <circle cx="74.6667" cy="60.0003" r="1.66667" transform="rotate(-90 74.6667 60.0003)" fill="white" />
          <circle cx="74.6667" cy="16.3336" r="1.66667" transform="rotate(-90 74.6667 16.3336)" fill="white" />
          <circle cx="103" cy="60.0003" r="1.66667" transform="rotate(-90 103 60.0003)" fill="white" />
          <circle cx="103" cy="16.3336" r="1.66667" transform="rotate(-90 103 16.3336)" fill="white" />
          <circle cx="132" cy="60.0003" r="1.66667" transform="rotate(-90 132 60.0003)" fill="white" />
          <circle cx="132" cy="16.3336" r="1.66667" transform="rotate(-90 132 16.3336)" fill="white" />
          <circle cx="1.66667" cy="45.3336" r="1.66667" transform="rotate(-90 1.66667 45.3336)" fill="white" />
          <circle cx="1.66667" cy="1.66683" r="1.66667" transform="rotate(-90 1.66667 1.66683)" fill="white" />
          <circle cx="16.3333" cy="45.3336" r="1.66667" transform="rotate(-90 16.3333 45.3336)" fill="white" />
          <circle cx="16.3333" cy="1.66683" r="1.66667" transform="rotate(-90 16.3333 1.66683)" fill="white" />
          <circle cx="31" cy="45.3336" r="1.66667" transform="rotate(-90 31 45.3336)" fill="white" />
          <circle cx="31" cy="1.66683" r="1.66667" transform="rotate(-90 31 1.66683)" fill="white" />
          <circle cx="45.6667" cy="45.3336" r="1.66667" transform="rotate(-90 45.6667 45.3336)" fill="white" />
          <circle cx="45.6667" cy="1.66683" r="1.66667" transform="rotate(-90 45.6667 1.66683)" fill="white" />
          <circle cx="60.3333" cy="45.3338" r="1.66667" transform="rotate(-90 60.3333 45.3338)" fill="white" />
          <circle cx="60.3333" cy="1.66707" r="1.66667" transform="rotate(-90 60.3333 1.66707)" fill="white" />
          <circle cx="88.6667" cy="45.3338" r="1.66667" transform="rotate(-90 88.6667 45.3338)" fill="white" />
          <circle cx="88.6667" cy="1.66707" r="1.66667" transform="rotate(-90 88.6667 1.66707)" fill="white" />
          <circle cx="117.667" cy="45.3338" r="1.66667" transform="rotate(-90 117.667 45.3338)" fill="white" />
          <circle cx="117.667" cy="1.66707" r="1.66667" transform="rotate(-90 117.667 1.66707)" fill="white" />
          <circle cx="74.6667" cy="45.3338" r="1.66667" transform="rotate(-90 74.6667 45.3338)" fill="white" />
          <circle cx="74.6667" cy="1.66707" r="1.66667" transform="rotate(-90 74.6667 1.66707)" fill="white" />
          <circle cx="103" cy="45.3338" r="1.66667" transform="rotate(-90 103 45.3338)" fill="white" />
          <circle cx="103" cy="1.66707" r="1.66667" transform="rotate(-90 103 1.66707)" fill="white" />
          <circle cx="132" cy="45.3338" r="1.66667" transform="rotate(-90 132 45.3338)" fill="white" />
          <circle cx="132" cy="1.66707" r="1.66667" transform="rotate(-90 132 1.66707)" fill="white" />
        </svg>
      </div>
      <div className="absolute -right-6 -top-6 z-[-1]">
        <svg
          width="134"
          height="106"
          viewBox="0 0 134 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="1.66667" cy="104" r="1.66667" transform="rotate(-90 1.66667 104)" fill="white" />
          <circle cx="16.3333" cy="104" r="1.66667" transform="rotate(-90 16.3333 104)" fill="white" />
          <circle cx="31" cy="104" r="1.66667" transform="rotate(-90 31 104)" fill="white" />
          <circle cx="45.6667" cy="104" r="1.66667" transform="rotate(-90 45.6667 104)" fill="white" />
          <circle cx="60.3333" cy="104" r="1.66667" transform="rotate(-90 60.3333 104)" fill="white" />
          <circle cx="88.6667" cy="104" r="1.66667" transform="rotate(-90 88.6667 104)" fill="white" />
          <circle cx="117.667" cy="104" r="1.66667" transform="rotate(-90 117.667 104)" fill="white" />
          <circle cx="74.6667" cy="104" r="1.66667" transform="rotate(-90 74.6667 104)" fill="white" />
          <circle cx="103" cy="104" r="1.66667" transform="rotate(-90 103 104)" fill="white" />
          <circle cx="132" cy="104" r="1.66667" transform="rotate(-90 132 104)" fill="white" />
          <circle cx="1.66667" cy="89.3333" r="1.66667" transform="rotate(-90 1.66667 89.3333)" fill="white" />
          <circle cx="16.3333" cy="89.3333" r="1.66667" transform="rotate(-90 16.3333 89.3333)" fill="white" />
          <circle cx="31" cy="89.3333" r="1.66667" transform="rotate(-90 31 89.3333)" fill="white" />
          <circle cx="45.6667" cy="89.3333" r="1.66667" transform="rotate(-90 45.6667 89.3333)" fill="white" />
          <circle cx="60.3333" cy="89.3338" r="1.66667" transform="rotate(-90 60.3333 89.3338)" fill="white" />
          <circle cx="88.6667" cy="89.3338" r="1.66667" transform="rotate(-90 88.6667 89.3338)" fill="white" />
          <circle cx="117.667" cy="89.3338" r="1.66667" transform="rotate(-90 117.667 89.3338)" fill="white" />
          <circle cx="74.6667" cy="89.3338" r="1.66667" transform="rotate(-90 74.6667 89.3338)" fill="white" />
          <circle cx="103" cy="89.3338" r="1.66667" transform="rotate(-90 103 89.3338)" fill="white" />
          <circle cx="132" cy="89.3338" r="1.66667" transform="rotate(-90 132 89.3338)" fill="white" />
          <circle cx="1.66667" cy="74.6673" r="1.66667" transform="rotate(-90 1.66667 74.6673)" fill="white" />
          <circle cx="1.66667" cy="31.0003" r="1.66667" transform="rotate(-90 1.66667 31.0003)" fill="white" />
          <circle cx="16.3333" cy="74.6668" r="1.66667" transform="rotate(-90 16.3333 74.6668)" fill="white" />
          <circle cx="16.3333" cy="31.0003" r="1.66667" transform="rotate(-90 16.3333 31.0003)" fill="white" />
          <circle cx="31" cy="74.6668" r="1.66667" transform="rotate(-90 31 74.6668)" fill="white" />
          <circle cx="31" cy="31.0003" r="1.66667" transform="rotate(-90 31 31.0003)" fill="white" />
          <circle cx="45.6667" cy="74.6668" r="1.66667" transform="rotate(-90 45.6667 74.6668)" fill="white" />
          <circle cx="45.6667" cy="31.0003" r="1.66667" transform="rotate(-90 45.6667 31.0003)" fill="white" />
          <circle cx="60.3333" cy="74.6668" r="1.66667" transform="rotate(-90 60.3333 74.6668)" fill="white" />
          <circle cx="60.3333" cy="31.0001" r="1.66667" transform="rotate(-90 60.3333 31.0001)" fill="white" />
          <circle cx="88.6667" cy="74.6668" r="1.66667" transform="rotate(-90 88.6667 74.6668)" fill="white" />
          <circle cx="88.6667" cy="31.0001" r="1.66667" transform="rotate(-90 88.6667 31.0001)" fill="white" />
          <circle cx="117.667" cy="74.6668" r="1.66667" transform="rotate(-90 117.667 74.6668)" fill="white" />
          <circle cx="117.667" cy="31.0001" r="1.66667" transform="rotate(-90 117.667 31.0001)" fill="white" />
          <circle cx="74.6667" cy="74.6668" r="1.66667" transform="rotate(-90 74.6667 74.6668)" fill="white" />
          <circle cx="74.6667" cy="31.0001" r="1.66667" transform="rotate(-90 74.6667 31.0001)" fill="white" />
          <circle cx="103" cy="74.6668" r="1.66667" transform="rotate(-90 103 74.6668)" fill="white" />
          <circle cx="103" cy="31.0001" r="1.66667" transform="rotate(-90 103 31.0001)" fill="white" />
          <circle cx="132" cy="74.6668" r="1.66667" transform="rotate(-90 132 74.6668)" fill="white" />
          <circle cx="132" cy="31.0001" r="1.66667" transform="rotate(-90 132 31.0001)" fill="white" />
          <circle cx="1.66667" cy="60.0003" r="1.66667" transform="rotate(-90 1.66667 60.0003)" fill="white" />
          <circle cx="1.66667" cy="16.3336" r="1.66667" transform="rotate(-90 1.66667 16.3336)" fill="white" />
          <circle cx="16.3333" cy="60.0003" r="1.66667" transform="rotate(-90 16.3333 60.0003)" fill="white" />
          <circle cx="16.3333" cy="16.3336" r="1.66667" transform="rotate(-90 16.3333 16.3336)" fill="white" />
          <circle cx="31" cy="60.0003" r="1.66667" transform="rotate(-90 31 60.0003)" fill="white" />
          <circle cx="31" cy="16.3336" r="1.66667" transform="rotate(-90 31 16.3336)" fill="white" />
          <circle cx="45.6667" cy="60.0003" r="1.66667" transform="rotate(-90 45.6667 60.0003)" fill="white" />
          <circle cx="45.6667" cy="16.3336" r="1.66667" transform="rotate(-90 45.6667 16.3336)" fill="white" />
          <circle cx="60.3333" cy="60.0003" r="1.66667" transform="rotate(-90 60.3333 60.0003)" fill="white" />
          <circle cx="60.3333" cy="16.3336" r="1.66667" transform="rotate(-90 60.3333 16.3336)" fill="white" />
          <circle cx="88.6667" cy="60.0003" r="1.66667" transform="rotate(-90 88.6667 60.0003)" fill="white" />
          <circle cx="88.6667" cy="16.3336" r="1.66667" transform="rotate(-90 88.6667 16.3336)" fill="white" />
          <circle cx="117.667" cy="60.0003" r="1.66667" transform="rotate(-90 117.667 60.0003)" fill="white" />
          <circle cx="117.667" cy="16.3336" r="1.66667" transform="rotate(-90 117.667 16.3336)" fill="white" />
          <circle cx="74.6667" cy="60.0003" r="1.66667" transform="rotate(-90 74.6667 60.0003)" fill="white" />
          <circle cx="74.6667" cy="16.3336" r="1.66667" transform="rotate(-90 74.6667 16.3336)" fill="white" />
          <circle cx="103" cy="60.0003" r="1.66667" transform="rotate(-90 103 60.0003)" fill="white" />
          <circle cx="103" cy="16.3336" r="1.66667" transform="rotate(-90 103 16.3336)" fill="white" />
          <circle cx="132" cy="60.0003" r="1.66667" transform="rotate(-90 132 60.0003)" fill="white" />
          <circle cx="132" cy="16.3336" r="1.66667" transform="rotate(-90 132 16.3336)" fill="white" />
          <circle cx="1.66667" cy="45.3336" r="1.66667" transform="rotate(-90 1.66667 45.3336)" fill="white" />
          <circle cx="1.66667" cy="1.66683" r="1.66667" transform="rotate(-90 1.66667 1.66683)" fill="white" />
          <circle cx="16.3333" cy="45.3336" r="1.66667" transform="rotate(-90 16.3333 45.3336)" fill="white" />
          <circle cx="16.3333" cy="1.66683" r="1.66667" transform="rotate(-90 16.3333 1.66683)" fill="white" />
          <circle cx="31" cy="45.3336" r="1.66667" transform="rotate(-90 31 45.3336)" fill="white" />
          <circle cx="31" cy="1.66683" r="1.66667" transform="rotate(-90 31 1.66683)" fill="white" />
          <circle cx="45.6667" cy="45.3336" r="1.66667" transform="rotate(-90 45.6667 45.3336)" fill="white" />
          <circle cx="45.6667" cy="1.66683" r="1.66667" transform="rotate(-90 45.6667 1.66683)" fill="white" />
          <circle cx="60.3333" cy="45.3338" r="1.66667" transform="rotate(-90 60.3333 45.3338)" fill="white" />
          <circle cx="60.3333" cy="1.66707" r="1.66667" transform="rotate(-90 60.3333 1.66707)" fill="white" />
          <circle cx="88.6667" cy="45.3338" r="1.66667" transform="rotate(-90 88.6667 45.3338)" fill="white" />
          <circle cx="88.6667" cy="1.66707" r="1.66667" transform="rotate(-90 88.6667 1.66707)" fill="white" />
          <circle cx="117.667" cy="45.3338" r="1.66667" transform="rotate(-90 117.667 45.3338)" fill="white" />
          <circle cx="117.667" cy="1.66707" r="1.66667" transform="rotate(-90 117.667 1.66707)" fill="white" />
          <circle cx="74.6667" cy="45.3338" r="1.66667" transform="rotate(-90 74.6667 45.3338)" fill="white" />
          <circle cx="74.6667" cy="1.66707" r="1.66667" transform="rotate(-90 74.6667 1.66707)" fill="white" />
          <circle cx="103" cy="45.3338" r="1.66667" transform="rotate(-90 103 45.3338)" fill="white" />
          <circle cx="103" cy="1.66707" r="1.66667" transform="rotate(-90 103 1.66707)" fill="white" />
          <circle cx="132" cy="45.3338" r="1.66667" transform="rotate(-90 132 45.3338)" fill="white" />
          <circle cx="132" cy="1.66707" r="1.66667" transform="rotate(-90 132 1.66707)" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
