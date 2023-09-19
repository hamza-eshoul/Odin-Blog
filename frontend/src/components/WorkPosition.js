const WorkPosition = ({ workTitle, workPosition, workDate, svgLogo }) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border-[1px] border-zinc-100 bg-white p-1 dark:border-zinc-700 dark:bg-zinc-800/90">
          {svgLogo}
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold dark:text-white">
            {" "}
            {workTitle}{" "}
          </span>
          <span className="text-[13px] text-zinc-600/90 dark:text-zinc-400">
            {" "}
            {workPosition}{" "}
          </span>
        </div>
      </div>

      <span className="text-[13px] text-zinc-400/90"> {workDate}</span>
    </div>
  );
};

export default WorkPosition;
