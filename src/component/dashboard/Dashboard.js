import React from "react";


import GraphDashboard from "../graph/GraphDashboard";
import GoalsDashboard from "../goalsCard/GoalsDashboard";
import ProjectListDashboard from "../projectList/ProjectListDashboard";
import CustomerStatisfactionDashboard from "../customerStatisfaction/CustomerStatisfactionDashboard";
import EmployeeBD from "../employeeCards/EmployeeBD";

function Dashboard() {
 
  return (
    <>
      <div className="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900">
        <main className="main-content w-full pb-8 ">
          <div className="mt-4 grid grid-cols-12 gap-4 px-[var(--margin-x)] transition-all duration-[.25s] sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6">
           <GraphDashboard/>
           <GoalsDashboard/>
           <ProjectListDashboard/>
           <CustomerStatisfactionDashboard/>
          </div>

          <div className="mt-4 grid grid-cols-12 gap-4 bg-slate-150 py-5 dark:bg-navy-800 sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6">
            <div className="col-span-12 flex flex-col px-[var(--margin-x)] transition-all duration-[.25s] lg:col-span-3 lg:pr-0">
              <h2 className="text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-xl">
                Top Sellers
              </h2>

              <p className="mt-3 grow">
                The top sellers is calculated based on the sales of a product
                and undergoes hourly updations.
              </p>

              <div className="mt-4">
                <p>Total Revenue Genrated </p>
                <div className="mt-1.5 flex items-center space-x-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-success/15 text-success">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 11l5-5m0 0l5 5m-5-5v12"
                      />
                    </svg>
                  </div>
                  <p className="text-base font-medium text-slate-700 dark:text-navy-100">
                    $2,225.22
                  </p>
                </div>
              </div>
            </div>
            <div className="is-scrollbar scrollbar-thin col-span-12 flex space-x-4 overflow-x-auto px-[var(--margin-x)] transition-all duration-[.25s] lg:col-span-9 lg:pl-0">
              <EmployeeBD/>
            </div>
            {/* Project list */}
          </div>
        </main>
      </div>
    </>
  );
}

export default Dashboard;
