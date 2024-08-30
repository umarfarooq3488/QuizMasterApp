import React from "react";

const Loader = () => {
  return (
    <div>
      <div className="loaderParent flex justify-center items-center animate-ping rounded-full w-10 h-10 bg-black dark:bg-white">
        <div className="loader w-7 h-7 rounded-full bg-black dark:bg-white"></div>
      </div>
    </div>
  );
};

export default Loader;
