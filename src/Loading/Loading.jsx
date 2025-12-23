import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
      {/* Tailwind CSS Spinner */}
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-orange-600"></div>
      <h2 className="mt-4 text-xl font-semibold text-gray-700">
        Loading coffee...
      </h2>
    </div>
  );
};

export default Loading;
