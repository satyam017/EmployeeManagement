import React from 'react'
import jagriti from "../../assests/img/jagriti.png";
function ProjectListDashboard() {
  return (
    <>
        <div className="card col-span-12 lg:col-span-8">
              <div className="flex items-center justify-between py-3 px-4">
                <h2 className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                  Projects List
                </h2>
                <div className="inline-flex">
                  <button
                    x-ref="popperRef"
                    className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </button>

                  <div x-ref="popperRoot" className="popper-root">
                    <div className="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
                      <ul>
                        <li>
                          <a
                            href="#"
                            className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Action
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Another Action
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Something else
                          </a>
                        </li>
                      </ul>
                      <div className="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
                      <ul>
                        <li>
                          <a
                            href="#"
                            className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            Separated Link
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-y-4 pb-3 sm:grid-cols-3">
                <div className="flex flex-col justify-between border-4 border-transparent border-l-info px-4">
                  <div>
                    <p className="text-base font-medium text-slate-600 dark:text-navy-100">
                      Redifine India
                    </p>
                    <p className="text-xs text-slate-400 dark:text-navy-300">
                      Design Learn Management System
                    </p>
                    <div className="badge mt-2 bg-info/10 text-info dark:bg-info/15">
                      Next.js / React
                    </div>
                  </div>
                  <div>
                    <div className="mt-8">
                      <p className="font-inter">
                        <span className="text-xs">Project Started On</span>
                      </p>
                      <p className="mt-1 text-xs">June 08, 2021</p>
                    </div>
                    <div className="mt-8 flex items-center justify-between space-x-2">
                      <div className="flex -space-x-3">
                        <div className="avatar h-8 w-8 hover:z-10">
                          <img
                            className="rounded-full ring ring-white dark:ring-navy-700"
                            src={jagriti}
                            alt="avatar"
                          />
                        </div>
                        <div className="avatar h-8 w-8 hover:z-10">
                          <img
                            className="rounded-full ring ring-white dark:ring-navy-700"
                            src={jagriti}
                            alt="avatar"
                          />
                        </div>
                      </div>
                      <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between border-4 border-transparent border-l-info px-4">
                  <div>
                    <p className="text-base font-medium text-slate-600 dark:text-navy-100">
                      Redifine India
                    </p>
                    <p className="text-xs text-slate-400 dark:text-navy-300">
                      Design Learn Management System
                    </p>
                    <div className="badge mt-2 bg-info/10 text-info dark:bg-info/15">
                      Next.js / React
                    </div>
                  </div>
                  <div>
                    <div className="mt-8">
                      <p className="font-inter">
                        <span className="text-xs">Project Started On</span>
                      </p>
                      <p className="mt-1 text-xs">June 08, 2021</p>
                    </div>
                    <div className="mt-8 flex items-center justify-between space-x-2">
                      <div className="flex -space-x-3">
                        <div className="avatar h-8 w-8 hover:z-10">
                          <img
                            className="rounded-full ring ring-white dark:ring-navy-700"
                            src={jagriti}
                            alt="avatar"
                          />
                        </div>
                        <div className="avatar h-8 w-8 hover:z-10">
                          <img
                            className="rounded-full ring ring-white dark:ring-navy-700"
                            src={jagriti}
                            alt="avatar"
                          />
                        </div>
                      </div>
                      <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between border-4 border-transparent border-l-info px-4">
                  <div>
                    <p className="text-base font-medium text-slate-600 dark:text-navy-100">
                      Redifine India
                    </p>
                    <p className="text-xs text-slate-400 dark:text-navy-300">
                      Design Learn Management System
                    </p>
                    <div className="badge mt-2 bg-info/10 text-info dark:bg-info/15">
                      Next.js / React
                    </div>
                  </div>
                  <div>
                    <div className="mt-8">
                      <p className="font-inter">
                        <span className="text-xs">Project Started On</span>
                      </p>
                      <p className="mt-1 text-xs">June 08, 2021</p>
                    </div>
                    <div className="mt-8 flex items-center justify-between space-x-2">
                      <div className="flex -space-x-3">
                        <div className="avatar h-8 w-8 hover:z-10">
                          <img
                            className="rounded-full ring ring-white dark:ring-navy-700"
                            src={jagriti}
                            alt="avatar"
                          />
                        </div>
                        <div className="avatar h-8 w-8 hover:z-10">
                          <img
                            className="rounded-full ring ring-white dark:ring-navy-700"
                            src={jagriti}
                            alt="avatar"
                          />
                        </div>
                      </div>
                      <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default ProjectListDashboard