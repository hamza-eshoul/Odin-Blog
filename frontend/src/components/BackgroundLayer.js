const BackgroundLayer = () => {
  return (
    <div className="fixed inset-0 flex justify-center lg:px-16">
      {" "}
      <div className="flex w-full max-w-7xl">
        <div className="w-full border-x-[1px] border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900"></div>
      </div>{" "}
    </div>
  );
};

export default BackgroundLayer;
