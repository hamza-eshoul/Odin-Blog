const WorkPosition = ({ workTitle, workPosition, workDate, svgLogo }) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <div className="border-[1px] border-zinc-100 w-11 h-11 rounded-full bg-white p-1 flex justify-center items-center dark:bg-zinc-800/90 dark:border-zinc-700">
          {svgLogo}
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-sm font-semibold dark:text-white">
            {" "}
            {workTitle}{" "}
          </h2>
          <h3 className="text-[13px] text-zinc-600/90 dark:text-zinc-400">
            {" "}
            {workPosition}{" "}
          </h3>
        </div>
      </div>

      <p className="text-[13px] text-zinc-400/90"> {workDate}</p>
    </div>
  );
};

export default WorkPosition;
