import React from "react";

const Header = () => {
  return (
    <>
      <ul class="flex">
        <li class="mr-6">
          <a class="text-blue-500 hover:text-blue-800" href="#">
            Home
          </a>
        </li>
        <li class="mr-6">
          <a class="text-blue-500 hover:text-blue-800" href="#">
            Portfolio
          </a>
        </li>
        <li class="mr-6">
          <a class="text-blue-500 hover:text-blue-800" href="#">
            Contact
          </a>
        </li>
        <li class="mr-6">
          <a class="text-blue-500 hover:text-blue-800" href="#">
            Resume
          </a>
        </li>
      </ul>
    </>
  );
};

export default Header;
