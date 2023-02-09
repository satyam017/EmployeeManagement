import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
function GraphDashboard() {
  const data = [
    {
      name: "Page A",
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: "Page B",
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: "Page C",
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: "Page D",
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: "Page E",
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: "Page F",
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
  ];
  return (
    <>
      <div className="col-span-12 lg:col-span-8">
        <div className="flex items-center justify-between space-x-2">
          <h2 className="text-base font-medium tracking-wide text-slate-800 line-clamp-1 dark:text-navy-100">
           Total Revenue Genrated in Financial year 2022
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-7">
          <div className="mt-4 flex shrink-0 flex-col items-center sm:items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-info"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
              />
            </svg>
            <div className="mt-4">
              <div className="flex items-center space-x-1">
                <p className="text-2xl font-semibold text-slate-700 dark:text-navy-100">
                  $6,556.55
                </p>
                <button className="btn h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-slate-400 dark:text-navy-300">
                this month
              </p>
            </div>
          </div>

          <div
            className="ax-transparent-gridline grid w-full grid-cols-1"
            style={{ minHeight: "50vh" }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                width={500}
                height={800}
                data={data}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" barSize={20} fill="#6667eb" />
                <Line type="monotone" dataKey="uv" stroke="#31b1ec" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
}

export default GraphDashboard;
