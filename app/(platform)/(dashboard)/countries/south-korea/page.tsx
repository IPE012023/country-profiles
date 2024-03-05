"use client"
// Import necessary hooks or components if needed
import React from "react";

const CountryProfilePage = () => {
  const countryName = "Tax Indexation in the Repbublic of Korea"; // You can make this dynamic
  const message = "Key Highlights of the Project"; // Example message

  return (
    <div className="flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-400 to-slate-800 w-full min-h-screen">
      {/* Full Page Header */}
      <div className="w-full p-10 text-center bg-gradient-to-r from-cyan-500 to-blue-500">
        <h1 className="text-4xl font-bold text-white">{countryName}</h1>
        <p className="text-xl text-slate-200 mt-2">{message}</p>
      </div>

      {/* Key Messages Box */}
      <div className="w-full p-10 bg-slate-700 text-white">
        <ul className="list-disc space-y-2 pl-5">
          <li>In scenario 1, ETYs of CC and HTP increase based on indices such as the Consumer Price Index (CPI), the Producer Price Index (PPI), the GDP deflator, and the wage growth - This is not sufficient to achieve the target RSP for HTPs of 8,000 Won per pack (of 20 sticks) by 2035</li>
          <li>A supplementary index premium between 0.2 to 0.9 percentage points (dependend on the used index) is needed to achieve the RSP target, as shown in Scenario 3</li>
          <li>In Scenario 3, the RSP of HTPs increases to 8,000 Won per pack (of 20 sticks) until 2035, while the ETY increases to around 5,800 Won;
for CCs, the RSP increases to around 10,500 and the ETY to around 8,100 Won per pack (of 20 sticks) until 2035</li>
          {/* Add more key messages as needed */}
        </ul>
      </div>

      {/* Grids for Charts and Tables */}
      <div className="w-full grid grid-cols-3 gap-4 p-10">
        {/* Chart 1 */}
        <div className="bg-slate-600 p-4 text-center text-white">
          <p>Add Chart Here</p>
        </div>
        
        {/* Chart 2 */}
        <div className="bg-slate-600 p-4 text-center text-white">
          <p>Add Chart Here</p>
        </div>
        
        {/* Chart 3 */}
        <div className="bg-slate-600 p-4 text-center text-white">
          <p>Add Chart Here</p>
        </div>

        {/* Table 1 */}
        <div className="bg-slate-500 p-4 text-white">
          <p>Add Table Here</p>
        </div>
        
        {/* Table 2 */}
        <div className="bg-slate-500 p-4 text-white">
          <p>Add Table Here</p>
        </div>
        
        {/* Table 3 */}
        <div className="bg-slate-500 p-4 text-white">
          <p>Add Table Here</p>
        </div>
      </div>
    </div>
  );
};

export default CountryProfilePage;
