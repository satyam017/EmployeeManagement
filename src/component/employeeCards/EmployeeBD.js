import React from "react";
import jagriti from "../../assests/img/jagriti.png";
function EmployeeBD() {
  return (
    <>
      <div className="card w-72 shrink-0 space-y-9 rounded-xl p-4 sm:px-5 cursor-pointer mb-3">
        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <img className="mask is-squircle" src={jagriti} alt="image" />
            </div>
            <div>
              <p className="font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
                Jagriti Narang
              </p>
              <p className="text-xs text-slate-400 dark:text-navy-300">
                Employee
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between space-x-2">
          <div>
            <p className="text-xs+">Leads</p>
            <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
              2 348
            </p>
          </div>
          <div>
            <p className="text-xs+">Interviews</p>
            <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
              3 000
            </p>
          </div>
          <div>
            <p className="text-xs+">Projects</p>
            <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
              78
            </p>
          </div>
        </div>
        <div className="grow">
          <div className="flex w-full space-x-1">
            <div className="h-2 w-8/12 rounded-full bg-primary dark:bg-accent"></div>
            <div
              x-tooltip="'Chats Messages'"
              className="h-2 w-4/12 rounded-full bg-success"
            ></div>
          </div>
          <div className="mt-2 flex flex-wrap">
            <div className="mr-4 mb-1 inline-flex items-center space-x-2 font-inter">
              <div className="h-2 w-2 rounded-full bg-primary dark:bg-accent"></div>
              <div className="flex space-x-1 text-xs leading-6">
                <span className="font-medium text-slate-700 dark:text-navy-100">
                  Total Clients
                </span>
                <span>83%</span>
              </div>
            </div>
            <div className="mr-4 mb-1 inline-flex items-center space-x-2 font-inter">
              <div className="h-2 w-2 rounded-full bg-success"></div>
              <div className="flex space-x-1 text-xs">
                <span className="font-medium text-slate-700 dark:text-navy-100">
                  Revenue Genrated
                </span>
                <span>17%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeBD;
