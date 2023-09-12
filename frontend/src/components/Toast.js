import { AiOutlineInfoCircle } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const Toast = ({
  bgColor,
  textColor,
  elementType,
  toastNotification,
  setToastNotification,
}) => {
  return (
    <>
      {toastNotification && (
        <div
          className={`flex gap-4 items-center absolute right-1/3 bottom-6  ${bgColor} ${textColor} p-4 rounded-lg shadow-2xl border-[1px] border-primaryGray to-zinc-100 z-10`}
        >
          <AiOutlineInfoCircle className="text-xl" />
          <div>
            <h2 className="font-semibold">
              {" "}
              {elementType.charAt(0).toUpperCase() + elementType.slice(1)}{" "}
              Notification
            </h2>
            <p>This {elementType} is used for decoration purposes only </p>
          </div>
          <RxCross1
            className="cursor-pointer"
            onClick={() => setToastNotification(null)}
          />
        </div>
      )}
    </>
  );
};

export default Toast;
