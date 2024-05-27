import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!!!</h1>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {err.status}: {err.statusText}
      </h3>
      <p className="text-lg text-gray-600 mb-8">Something went wrong....</p>
    </div>
  );
};

export default Error;
