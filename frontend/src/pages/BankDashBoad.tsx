import React from "react";
import { ArrowDownCircle, ArrowUpCircle, Send, Banknote, Wallet } from "lucide-react";
import { useCustomer } from "../hooks/useCustomers";

 
const user = {
  name: "Hao Le",
  accountNumber: "1234 5678 9012 3456",
  balance: 12450.75,
};

const transactions = [
  { id: 1, type: "Deposit", amount: 2000, date: "2025-06-04", status: "Completed" },
  { id: 2, type: "Withdraw", amount: -300, date: "2025-06-03", status: "Completed" },
  { id: 3, type: "Transfer", amount: -500, date: "2025-06-02", status: "Pending" },
  { id: 4, type: "Deposit", amount: 1500, date: "2025-06-01", status: "Completed" },
];

const actions = [
  {
    label: "Transfer",
    icon: <Send className="w-5 h-5" />,
    color: "bg-blue-500 hover:bg-blue-600",
    onClick: () => alert("Transfer clicked!"),
  },
  {
    label: "Deposit",
    icon: <Banknote className="w-5 h-5" />,
    color: "bg-green-500 hover:bg-green-600",
    onClick: () => alert("Deposit clicked!"),
  },
  {
    label: "Withdraw",
    icon: <Wallet className="w-5 h-5" />,
    color: "bg-orange-500 hover:bg-orange-600",
    onClick: () => alert("Withdraw clicked!"),
  },
];

export default function BankDashboard() {
  // const {users, isLoading, isError} = useCustomer();
  
  // if (isLoading) return <div>Loading...</div>
  // if (isError) return <div>Failed to load</div>

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-10 px-4 flex flex-col items-center">
      {/* Card */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Welcome back, <span className="text-blue-600">{user.name}</span>!
            </h2>
            <div className="text-gray-500 text-sm mt-1">
              Account: <span className="font-mono">{user.accountNumber}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Balance</div>
            <div className="text-3xl font-bold text-green-600">
              ${user.balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </div>
          </div>
        </div>
        {/* Quick Actions */}
        <div className="flex gap-3 mt-8 justify-center">
          {actions.map((action) => (
            <button
              key={action.label}
              onClick={action.onClick}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-white shadow transition ${action.color}`}
            >
              {action.icon}
              {action.label}
            </button>
          ))}
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Recent Transactions</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-3 text-left font-medium">Date</th>
                <th className="py-2 px-3 text-left font-medium">Type</th>
                <th className="py-2 px-3 text-right font-medium">Amount</th>
                <th className="py-2 px-3 text-center font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id} className="border-b last:border-none">
                  <td className="py-2 px-3">{tx.date}</td>
                  <td className="py-2 px-3 flex items-center gap-1">
                    {tx.type === "Deposit" ? (
                      <ArrowDownCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <ArrowUpCircle className="w-4 h-4 text-orange-500" />
                    )}
                    {tx.type}
                  </td>
                  <td className={`py-2 px-3 text-right ${tx.amount > 0 ? "text-green-600" : "text-orange-600"}`}>
                    {tx.amount > 0 ? "+" : ""}
                    ${Math.abs(tx.amount).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </td>
                  <td className="py-2 px-3 text-center">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        tx.status === "Completed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
              {transactions.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center text-gray-400 py-6">
                    No transactions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
