import React, { useEffect, useRef, useState } from "react";
import Flatpickr from "react-flatpickr";
import jagriti from "../../assests/img/jagriti.png";
const CustomInput = ({ value, defaultValue, inputRef, ...props }) => {
  return (
    <input
      className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
      placeholder=""
      {...props}
      defaultValue={defaultValue}
      ref={inputRef}
      value={props.reference}
    />
  );
};

function Attendance() {
  const [selectTeam, setSelectTeam] = useState("php");
  return (
    <>
      <div className="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900">
        <main className="main-content w-full pb-8 ">
          <div className="mt-4 grid grid-cols-12 gap-4 px-[var(--margin-x)] transition-all duration-[.25s] sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6">
            <div className="card col-span-12 lg:col-span-8 p-4">
              <label className="relative flex">
                <Flatpickr
                  render={({ defaultValue, value, ...props }, ref) => {
                    const today = new Date();
                    const defaultDate = `${today.getFullYear()}/${
                      today.getMonth() + 1
                    }/${today.getDate()}}`;
                    return (
                      <CustomInput defaultValue={defaultDate} inputRef={ref} />
                    );
                  }}
                />

                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition-colors duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
              </label>
            </div>
            <div className="card col-span-12 lg:col-span-4 p-4">
              <label className="block">
                <select
                  className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent"
                  onChange={(value) => setSelectTeam(value.target.value)}
                >
                  {console.log(selectTeam)}
                  <option value="php" selected>
                    PHP
                  </option>
                  <option value="js">JS</option>
                  <option value="python">Python</option>
                  <option value="java">JAVA</option>
                  <option value="designing">Designing</option>
                  <option value="hr">HR</option>
                  <option value="bd">BD</option>
                </select>
              </label>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-12 gap-4 px-[var(--margin-x)] transition-all duration-[.25s] sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6">
            {selectTeam && (
              <div className="card col-span-12 lg:col-span-3 py-4 pl-3">
                <div className="flex grow flex-col items-center px-4 pb-5 sm:px-5">
                  <div className="avatar h-20 w-20">
                    <img className="rounded-full" src={jagriti} alt="avatar" />
                  </div>
                  <h3 className="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100">
                    Jagriti Narang
                  </h3>
                  <p className="text-xs+">Senior Developer</p>
                  <div className="inline-space mt-3 flex grow flex-wrap items-start">
                    <span className="mr-2">Team :</span>
                    <a
                      href="#"
                      className="tag rounded-full bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
                    >
                      PHP
                    </a>
                  </div>
                  <div className="mt-6 grid w-full grid-cols-1 gap-2">
                    <label className="block">
                      <select className="form-select mt-1 h-8 w-full rounded-lg border border-slate-300 bg-white px-2.5 text-xs+ hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent">
                        <option>Select </option>
                        <option>Present</option>
                        <option>Absent</option>
                        <option>WFH</option>
                        <option>Half Day</option>

                      </select>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default Attendance;
