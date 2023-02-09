import React from "react";

function CustomerStatisfactionDashboard() {
  return (
    <>
      <div className="col-span-12 lg:col-span-4">
        <div className="flex items-center justify-between">
          <h2 className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
            Overall Customer Satisfaction
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
          </div>
        </div>
        <div className="mt-3">
          <p>
            <span className="text-3xl text-slate-700 dark:text-navy-100">
              9.7
            </span>
            <span className="text-xs text-success">+2.1%</span>
          </p>
          <p className="text-xs+">Performance score</p>
        </div>
        <div className="mt-4 flex h-2 space-x-1">
          <div className="w-5/12 rounded-full bg-primary dark:bg-accent"></div>
          <div className="w-2/12 rounded-full bg-success"></div>
          <div className="w-2/12 rounded-full bg-info"></div>

          <div className="w-2/12 rounded-full bg-warning"></div>
          <div className="w-1/12 rounded-full bg-error"></div>
        </div>

        <div className="is-scrollbar-hidden mt-4 min-w-full overflow-x-auto">
          <table className="w-full font-inter">
            <tbody>
              <tr>
                <td className="whitespace-nowrap py-2">
                  <div className="flex items-center space-x-2">
                    <div className="h-3.5 w-3.5 rounded-full border-2 border-primary dark:border-accent"></div>
                    <p className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                      Exellent
                    </p>
                  </div>
                </td>
                <td className="whitespace-nowrap py-2 text-right">
                  <p className="font-medium text-slate-700 dark:text-navy-100">
                    1 029
                  </p>
                </td>
                <td className="whitespace-nowrap py-2 text-right">42%</td>
              </tr>
              <tr>
                <td className="whitespace-nowrap py-2">
                  <div className="flex items-center space-x-2">
                    <div className="h-3.5 w-3.5 rounded-full border-2 border-success"></div>
                    <p className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                      Very Good
                    </p>
                  </div>
                </td>
                <td className="whitespace-nowrap py-2 text-right">
                  <p className="font-medium text-slate-700 dark:text-navy-100">
                    426
                  </p>
                </td>
                <td className="whitespace-nowrap py-2 text-right">18%</td>
              </tr>
              <tr>
                <td className="whitespace-nowrap py-2">
                  <div className="flex items-center space-x-2">
                    <div className="h-3.5 w-3.5 rounded-full border-2 border-info"></div>
                    <p className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                      Good
                    </p>
                  </div>
                </td>
                <td className="whitespace-nowrap py-2 text-right">
                  <p className="font-medium text-slate-700 dark:text-navy-100">
                    326
                  </p>
                </td>
                <td className="whitespace-nowrap py-2 text-right">14%</td>
              </tr>
              <tr>
                <td className="whitespace-nowrap py-2">
                  <div className="flex items-center space-x-2">
                    <div className="h-3.5 w-3.5 rounded-full border-2 border-warning"></div>
                    <p className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                      Poor
                    </p>
                  </div>
                </td>
                <td className="whitespace-nowrap py-2 text-right">
                  <p className="font-medium text-slate-700 dark:text-navy-100">
                    395
                  </p>
                </td>
                <td className="whitespace-nowrap py-2 text-right">17%</td>
              </tr>
              <tr>
                <td className="whitespace-nowrap py-2">
                  <div className="flex items-center space-x-2">
                    <div className="h-3.5 w-3.5 rounded-full border-2 border-error"></div>
                    <p className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                      Very Poor
                    </p>
                  </div>
                </td>
                <td className="whitespace-nowrap py-2 text-right">
                  <p className="font-medium text-slate-700 dark:text-navy-100">
                    129
                  </p>
                </td>
                <td className="whitespace-nowrap py-2 text-right">9%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default CustomerStatisfactionDashboard;
