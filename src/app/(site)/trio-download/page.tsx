import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Trio Agent | Optima AI Solutions",
  description: "Get the latest version of Trio Agent for Windows, Mac, and Linux. Fast, private, and fully under your control.",
};

const downloads = [
  {
    os: "Windows",
    icon: "https://logo.clearbit.com/microsoft.com",
    url: "https://drive.google.com/file/d/1NRk4jR7zZ90W0SNdFULUX4iaeHLx6JAp/view?usp=drive_link",
    label: "Download for Windows",
    available: true,
  },
  {
    os: "Mac",
    icon: "https://logo.clearbit.com/apple.com",
    url: "#",
    label: "Coming Soon for Mac OS",
    available: false,
  },
  {
    os: "Linux",
    icon: "https://logo.clearbit.com/linux.org",
    url: "https://drive.google.com/file/d/1KmF2Ox0hxIClP9OrPVzSk-oKeF-T9YqS/view?usp=drive_link",
    label: "Download for Linux",
    available: true,
  },
];

const TrioDownloadPage = () => {
  return (
    <main>
      <Breadcrumb pageName="Download Trio Agent" />
      <section className="container mx-auto max-w-2xl py-16 text-center">
        <h1 className="mb-4 text-3xl font-bold text-dark dark:text-white">Download Trio Agent</h1>
        <p className="mb-8 text-lg text-body-color dark:text-dark-6">
          Get the latest version of Trio Agent for your platform. Fast, private, and fully under your control.
        </p>
        <div className="flex flex-col gap-6">
          {downloads.map((dl) => (
            dl.available ? (
              <Link
                key={dl.os}
                href={dl.url}
                className="flex items-center justify-center gap-4 rounded-lg bg-primary px-8 py-5 text-lg font-semibold text-white shadow-lg transition hover:bg-primary/90"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={dl.icon} alt={dl.os} width={32} height={32} />
                {dl.label}
              </Link>
            ) : (
              <button
                key={dl.os}
                className="flex items-center justify-center gap-4 rounded-lg bg-gray-400/60 px-8 py-5 text-lg font-semibold text-white shadow-lg cursor-not-allowed opacity-70"
                disabled
                aria-disabled="true"
              >
                <Image src={dl.icon} alt={dl.os} width={32} height={32} />
                {dl.label}
              </button>
            )
          ))}
        </div>
        <p className="mt-8 text-sm text-body-color dark:text-dark-6">
          Looking for previous versions or source code? <a href="https://github.com/Hansade2005/dyad/releases" className="underline" target="_blank" rel="noopener noreferrer">See all releases on GitHub</a>.
        </p>
      </section>
    </main>
  );
};

export default TrioDownloadPage;
