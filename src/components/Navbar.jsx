import React, { useState, useEffect } from "react";
import Toggletheme from "./Toggletheme";

const Navbar = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl" href="/">
            Profile Mapper
          </a>
        </div>
        <div className="flex gap-2">
          <div className="form-control flex flex-row items-center gap-4">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered rounded-md w-20 md:w-auto"
            />
            <Toggletheme theme={theme} setTheme={setTheme} />

            {/* Dropdown Menu */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="profile"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">Dashboard</a>
                </li>
                <li>
                  <a className="text-red-500 hover:text-red-700">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
