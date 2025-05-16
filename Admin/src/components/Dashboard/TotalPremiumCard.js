import React from "react";
import AdminSectionCard from "./AdminSectionCard";
import { FaMoneyBillWave } from "react-icons/fa";

const TotalPremiumCard = () => {
  const totalPremium = 120000;
  return (
    <AdminSectionCard title="Total Premium Amount">
      <div className="flex items-center space-x-3">
        <FaMoneyBillWave className="text-green-500 text-2xl" />
        <p className="text-lg font-semibold">${totalPremium.toLocaleString()}</p>
      </div>
    </AdminSectionCard>
  );
};

export default TotalPremiumCard;
