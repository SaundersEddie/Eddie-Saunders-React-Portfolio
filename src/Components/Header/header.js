import React from "react";

const Header = () => {
  return (
    <>
      <div className="sticky top-0 bg-gray-600">
        <div className="flex mb-4">
          <div className="w-1/5">
            <h1>email me</h1>
          </div>
          <div className="w-1/5">
            <h1>Facebook</h1>
          </div>
          <div className="w-1/5">
            <h1>GitHub</h1>
          </div>
          <div className="w-1/5">
            <h1>LinkedIn</h1>
          </div>
          <div className="w-1/5">
            <h1>Resume</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
