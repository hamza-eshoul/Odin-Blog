import { GoMail } from "react-icons/go";

const MockEmailing = ({ toggleToastNotification }) => {
  return (
    <div className="flex flex-col gap-3 rounded-xl border-[1px] border-zinc-100 p-6 dark:border-zinc-700 ">
      <div className="flex items-center gap-3">
        <GoMail className="text-xl text-zinc-600" />
        <h2 className="text-sm font-semibold dark:text-white">
          {" "}
          Stay up to date
        </h2>
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 ">
        {" "}
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="flex gap-3">
        <input
          type="email"
          placeholder="Email address"
          className="w-[90%] rounded-md border-[1px] border-zinc-100 p-2 text-sm shadow-sm outline-offset-0 outline-teal-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-600 dark:outline-teal-400"
        />
        <button
          className="rounded-lg bg-black px-3 py-2.5 text-center text-sm text-white transition hover:bg-black/70"
          onClick={toggleToastNotification}
        >
          {" "}
          Join{" "}
        </button>
      </div>
    </div>
  );
};

export default MockEmailing;
