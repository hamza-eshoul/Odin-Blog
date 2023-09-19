import { getYear, format } from "date-fns";

const formatDate = (date) => {
  const formattedDate =
    format(new Date(date), "LLLL") +
    " " +
    format(new Date(date), "co") +
    ", " +
    getYear(new Date(date));
  return formattedDate;
};

export default formatDate;
