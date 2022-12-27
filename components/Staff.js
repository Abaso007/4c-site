import React, { useState } from "react";
import GetStaff from "./GetStaff";
import Users from "./Users";

// import staff data
import staff from "../content/staff.json";
import Title from "./Title";
import { FilterUsers } from "../utils/filterUsers";

const Staff = () => {
  const [tab] = useState("Staff");
  //state for currentUsers
  const [currentUsers, setCurrentUsers] = useState(staff.profiles);

  // filter handler
  const searchHandler = (event) => {
    event.preventDefault();
    const filterdUsers = FilterUsers(staff.profiles, event.target.value);
    setCurrentUsers(filterdUsers);
  };
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-start justify-start mt-[3em] max-w-bodyContainer">
        <section className="flex-1 font-bold text-center text-white">
          <Title heading="Staff" />
          <div className="flex items-center justify-center ">
            <div className="relative flex self-center m-auto break:w[500px] max-w-[800px] bigScreen:w-[800px] laptop:w-[600px] mobile:mx-10">
              <input
                placeholder="Search here"
                className="w-full h-10 px-5 py-3 text-black outline-none contrast-more:border-slate-400 contrast-more:placeholder-slate-500 border-slate-200 placeholder-slate-700"
                onInput={searchHandler}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute w-5 h-5 text-white right-3 top-1/2 -translate-y-1/2 rotate-90 sm:text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center pt-5 pb-4 m-2 overflow-y-auto gap-[1.8rem]">
            {tab === "Staff" ? (
              <GetStaff users={currentUsers} />
            ) : (
              <Users users={currentUsers} />
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Staff;
