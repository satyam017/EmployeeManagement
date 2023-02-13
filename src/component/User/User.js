import React, { useState } from "react";
import jagriti from "../../assests/img/jagriti.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddUserModal from "../modals/AddUserModal";
function User() {
  const [newUserPopup, setNewUserPopup] = useState("userPopupClose");

  return (
    <>
      <div className="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900">
        <main className="main-content w-full pb-8 ">
          <div className="flex items-center px-[var(--margin-x)] justify-between py-5 lg:py-6">
            <div className="flex items-center space-x-1">
              <h2 className="text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-50 lg:text-2xl">
                Employe List
              </h2>
              <div className="inline-flex">
                <button
                  className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  onClick={() => {
                    setNewUserPopup("userPopupOpen");
                    if (newUserPopup === "userPopupOpen") {
                      setNewUserPopup("userPopupClose");
                    }
                  }}
                >
                  {/* <FontAwesomeIcon icon="far fa-angle-down" /> */}
                </button>

                <div
                  className={`popper-root  ${
                    newUserPopup === "userPopupOpen" ? "show" : ""
                  } `}
                  style={{
                    position: "fixed",
                    inset: "0px auto auto 0px",
                    margin: "0px",
                    transform: "translate(268px, 122px)",
                  }}
                >
                  <div className="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
                    <ul>
                      <li className="cursor-pointer">
                        <a className="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mt-px h-4.5 w-4.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                          <span> New Employee</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <label className="relative hidden sm:flex">
                <input
                  className="form-input peer h-9 w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 text-xs+ placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Search users..."
                  type="text"
                />
                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition-colors duration-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3.316 13.781l.73-.171-.73.171zm0-5.457l.73.171-.73-.171zm15.473 0l.73-.171-.73.171zm0 5.457l.73.171-.73-.171zm-5.008 5.008l-.171-.73.171.73zm-5.457 0l-.171.73.171-.73zm0-15.473l-.171-.73.171.73zm5.457 0l.171-.73-.171.73zM20.47 21.53a.75.75 0 101.06-1.06l-1.06 1.06zM4.046 13.61a11.198 11.198 0 010-5.115l-1.46-.342a12.698 12.698 0 000 5.8l1.46-.343zm14.013-5.115a11.196 11.196 0 010 5.115l1.46.342a12.698 12.698 0 000-5.8l-1.46.343zm-4.45 9.564a11.196 11.196 0 01-5.114 0l-.342 1.46c1.907.448 3.892.448 5.8 0l-.343-1.46zM8.496 4.046a11.198 11.198 0 015.115 0l.342-1.46a12.698 12.698 0 00-5.8 0l.343 1.46zm0 14.013a5.97 5.97 0 01-4.45-4.45l-1.46.343a7.47 7.47 0 005.568 5.568l.342-1.46zm5.457 1.46a7.47 7.47 0 005.568-5.567l-1.46-.342a5.97 5.97 0 01-4.45 4.45l.342 1.46zM13.61 4.046a5.97 5.97 0 014.45 4.45l1.46-.343a7.47 7.47 0 00-5.568-5.567l-.342 1.46zm-5.457-1.46a7.47 7.47 0 00-5.567 5.567l1.46.342a5.97 5.97 0 014.45-4.45l-.343-1.46zm8.652 15.28l3.665 3.664 1.06-1.06-3.665-3.665-1.06 1.06z" />
                  </svg>
                </span>
              </label>
            </div>
          </div>
          <div className="px-[var(--margin-x)]">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
              <div className="card">
                <div className="flex grow flex-col items-center px-4 pb-5 sm:px-5"></div>
                <div className="flex grow flex-col items-center px-4 pb-5 sm:px-5">
                  <div className="avatar h-20 w-20">
                    <img className="rounded-full" src={jagriti} alt="avatar" />
                  </div>
                  <h3 className="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100">
                    Konnor Guzman
                  </h3>
                  <p className="text-xs+">Senior Developer</p>
                  <div className="inline-space mt-3 flex grow flex-wrap items-start">
                    <a
                      href="#"
                      className="tag rounded-full bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
                    >
                      PHP
                    </a>
                    <a
                      href="#"
                      className="tag rounded-full bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
                    >
                      Nodejs
                    </a>
                    <a
                      href="#"
                      className="tag rounded-full bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
                    >
                      ReactJS
                    </a>
                  </div>
                  <div className="mt-6 grid w-full grid-cols-1 gap-2">
                    <button className="btn space-x-2 bg-primary px-0 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeWidth="2"
                          d="M5 19.111c0-2.413 1.697-4.468 4.004-4.848l.208-.035a17.134 17.134 0 015.576 0l.208.035c2.307.38 4.004 2.435 4.004 4.848C19 20.154 18.181 21 17.172 21H6.828C5.818 21 5 20.154 5 19.111zM16.083 6.938c0 2.174-1.828 3.937-4.083 3.937S7.917 9.112 7.917 6.937C7.917 4.764 9.745 3 12 3s4.083 1.763 4.083 3.938z"
                        />
                      </svg>
                      <span>Profile</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <AddUserModal />
      </div>
    </>
  );
}

export default User;
