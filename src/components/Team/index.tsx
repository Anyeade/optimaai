import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Anye Happiness Ade (Hans Ade)",
    designation: "CEO, Founder & Creator",
    image: "/founder.png",
    facebookLink: "https://github.com/Hansade2005",
    twitterLink: "https://twitter.com/HansCadx",
    instagramLink: "mailto:hello@optimaai.cc",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Founder"
            title="Meet the Creator of Optima AI & Trio Agent"
            paragraph="Hans Ade (Anye Happiness Ade) is the solo founder, CEO, and creator behind Optima AI and the Trio Agent platform. Building the future of private, local-first AI—one line of code at a time."
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((team, i) => (
            <SingleTeam key={i} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
