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
    <div className="border-[1px] border-zinc-100 rounded-xl flex flex-col gap-3 p-6 mt-6 dark:border-zinc-700">
      <div className="flex gap-3 items-center">
        <MdWorkOutline className="text-xl text-zinc-600" />
        <h2 className="text-sm font-semibold dark:text-white"> Work</h2>
      </div>

      <div className="flex flex-col gap-6">
        {workPositions.map((workPosition) => (
          <WorkPosition
            workTitle={workPosition.workTitle}
            workPosition={workPosition.workPosition}
            workDate={workPosition.workDate}
            svgLogo={<workPosition.svgLogo />}
          />
        ))}
      </div>

      <button
        className="text-sm bg-zinc-100/50 hover:bg-zinc-100 transition p-3 rounded-lg dark:text-white dark:bg-zinc-800/90 dark:hover:bg-zinc-800"
        onClick={toggleToastNotification}
      >
        {" "}
        Download CV
      </button>
    </div>
  );
};

export default WorkExperience;
