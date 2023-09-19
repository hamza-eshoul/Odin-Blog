const Error = ({ error, errorHeight }) => {
  return (
    <div className={`flex ${errorHeight} w-full items-center justify-center `}>
      <p className="text-center text-xl font-bold text-red-600">
        {" "}
        Error : {error}{" "}
      </p>
    </div>
  );
};

export default Error;
