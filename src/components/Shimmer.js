const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="w-72 m-4 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="h-40 bg-gray-200 animate-pulse"></div>
          <div className="p-6">
            <div className="h-4 bg-gray-200 w-1/2 mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 w-3/4 mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-200 w-1/4 animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
