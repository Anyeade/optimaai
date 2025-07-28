import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Alex Kim",
    designation: "Indie Developer",
    content:
      "Trio Agent is a game-changer. I built and shipped my own AI-powered app in a weekend—no cloud, no privacy worries, just pure speed and control.",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Priya S.",
    designation: "CTO, SaaS Startup",
    content:
      "The 2M context window in Optima's Trio Model lets our team collaborate on huge codebases with zero lag. Local-first means our IP stays safe.",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Jordan Lee",
    designation: "AI Researcher",
    content:
      "Finally, an AI builder that respects privacy and actually runs on my machine. Trio Agent is fast, reliable, and the best tool for rapid prototyping.",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="What Our Users Say"
          paragraph="Real stories from developers, founders, and teams using Trio Agent and Optima AI's Trio Model to build, ship, and scale AI apps—privately and at lightning speed."
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
