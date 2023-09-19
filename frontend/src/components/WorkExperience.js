// icons
import { MdWorkOutline } from "react-icons/md";

// svgs
import { ReactComponent as PlaneteriaLogo } from "../assets/svg/Planetaria.svg";
import { ReactComponent as AirbnbLogo } from "../assets/svg/Airbnb.svg";
import { ReactComponent as FacebookLogo } from "../assets/svg/Facebook.svg";
import { ReactComponent as StarbucksLogo } from "../assets/svg/Starbucks.svg";

// components
import WorkPosition from "./WorkPosition";

const workPositions = [
  {
    workTitle: "Planeteria",
    workPosition: "CEO",
    workDate: "2019 - Present",
    svgLogo: PlaneteriaLogo,
  },
  {
    workTitle: "Airbnb",
    workPosition: "Product Designer",
    workDate: "2014 - 2019",
    svgLogo: AirbnbLogo,
  },
  {
    workTitle: "Facebook",
    workPosition: "iOS Software Engineer",
    workDate: "2011 - 2014",
    svgLogo: FacebookLogo,
  },
  {
    workTitle: "Starbucks",
    workPosition: "Shift Supervisor",
    workDate: "2008 - 2011",
    svgLogo: StarbucksLogo,
  },
];

const WorkExperience = ({ toggleToastNotification }) => {
  return (
    <div className="mt-6 flex flex-col gap-3 rounded-xl border-[1px] border-zinc-100 p-6 dark:border-zinc-700">
      <div className="flex items-center gap-3">
        <MdWorkOutline className="text-xl text-zinc-600" />
        <h2 className="text-sm font-semibold dark:text-white"> Work</h2>
      </div>

      <div className="flex flex-col gap-6">
        {workPositions.map((workPosition) => (
          <WorkPosition
            key={workPosition.workTitle}
            workTitle={workPosition.workTitle}
            workPosition={workPosition.workPosition}
            workDate={workPosition.workDate}
            svgLogo={<workPosition.svgLogo />}
          />
        ))}
      </div>

      <button
        className="rounded-lg bg-zinc-100/50 p-3 text-sm transition hover:bg-zinc-100 dark:bg-zinc-800/90 dark:text-white dark:hover:bg-zinc-800"
        onClick={toggleToastNotification}
      >
        {" "}
        Download CV
      </button>
    </div>
  );
};

export default WorkExperience;
