import React from "react";
import TotalPremiumCard from "./TotalPremiumCard";
import TotalCustomersCard from "./TotalCustomersCard";
import TotalClaimsCard from "./TotalClaimsCard";
import TotalPlansCard from "./TotalPlansCard";
import Charts from "./Charts";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-8 text-blue-800 text-center">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <TotalPremiumCard />
        <TotalCustomersCard />
        <TotalClaimsCard />
        <TotalPlansCard />
      </div>
      <Charts />
    </div>
  );
};

export default Dashboard;
