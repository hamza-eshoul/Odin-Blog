import { GoMail } from "react-icons/go";

const MockEmailing = ({ toggleToastNotification }) => {
  return (
    <div className="border-[1px] border-zinc-100 rounded-xl flex flex-col gap-3 p-6 dark:border-zinc-700 ">
      <div className="flex gap-3 items-center">
        <GoMail className="text-xl text-zinc-600" />
        <h2 className="text-sm font-semibold dark:text-white">
          {" "}
          Stay up to date
        </h2>
      </div>

      <p className="text-zinc-600 text-sm dark:text-zinc-400 ">
        {" "}
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Email address"
          className="border-[1px] border-zinc-100 dark:border-zinc-600 rounded-md shadow-sm p-2 text-sm w-[90%] outline-teal-500 dark:bg-zinc-800 dark:text-zinc-600 dark:outline-teal-400 outline-offset-0"
        />
        <button
          className="px-3 py-2.5 bg-black text-white text-center text-sm rounded-lg hover:bg-black/70 transition"
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
