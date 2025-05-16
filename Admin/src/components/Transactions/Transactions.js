import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const transactionsData = [
  { id: 1, user: "John Doe", amount: 150, status: "Approved" },
  { id: 2, user: "Jane Smith", amount: 200, status: "Pending" },
  { id: 3, user: "Alice Johnson", amount: 100, status: "Approved" },
  { id: 4, user: "Bob Wilson", amount: 75, status: "Pending" },
  { id: 5, user: "Eve Brown", amount: 250, status: "Approved" },
  { id: 6, user: "Charlie Davis", amount: 300, status: "Pending" },
  // ... add more transactions
];

const Transactions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5;

  const filteredTransactions = transactionsData.filter((transaction) =>
    transaction.user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = filteredTransactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const totalPages = Math.ceil(
    filteredTransactions.length / transactionsPerPage
  );

  const handleChangePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const renderPagination = () => (
    <div className="flex justify-between mt-4">
      <button
        onClick={() => handleChangePage(currentPage - 1)}
        className={`px-4 py-2 rounded ${
          currentPage === 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
        disabled={currentPage === 1}
      >
        <FaArrowLeft />
      </button>
      <span className="px-4 py-2 text-gray-700">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => handleChangePage(currentPage + 1)}
        className={`px-4 py-2 rounded ${
          currentPage === totalPages
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
        disabled={currentPage === totalPages}
      >
        <FaArrowRight />
      </button>
    </div>
  );

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Transactions</h1>
      <div className="bg-white rounded shadow p-6">
        <div className="flex items-center mb-4">
          <label htmlFor="search" className="mr-2 font-medium">
            Search by User:
          </label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded px-2 py-1"
            placeholder="Enter user name"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200 rounded">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">User</th>
                <th className="py-2 px-4 border-b">Amount ($)</th>
                <th className="py-2 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {currentTransactions.map((transaction, idx) => (
                <tr
                  key={transaction.id}
                  className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="py-2 px-4 border-b text-center">{transaction.id}</td>
                  <td className="py-2 px-4 border-b">{transaction.user}</td>
                  <td className="py-2 px-4 border-b text-right">${transaction.amount}</td>
                  <td className="py-2 px-4 border-b text-center">
                    <span
                      className={`px-2 py-1 rounded text-sm font-semibold ${
                        transaction.status === "Approved"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
              {currentTransactions.length === 0 && (
                <tr>
                  <td colSpan={4} className="py-4 text-center text-gray-500">
                    No transactions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {renderPagination()}
      </div>
    </div>
  );
};

export default Transactions;
