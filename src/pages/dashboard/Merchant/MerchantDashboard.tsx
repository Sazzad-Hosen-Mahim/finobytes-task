const MerchantDashboard = () => {
  const purchases = [
    { id: 1, amount: 120 },
    { id: 2, amount: 250 },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Merchant Dashboard</h1>

      <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white">
        <div className="px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">
            Approve Purchases
          </h2>
        </div>

        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Purchase ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {purchases.map((p, idx) => (
              <tr
                key={p.id}
                className={`hover:bg-gray-50 transition ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                }`}
              >
                <td className="px-6 py-4 text-sm text-gray-900">{p.id}</td>
                <td className="px-6 py-4 text-sm text-gray-900">${p.amount}</td>
                <td className="px-6 py-4">
                  <button className="inline-flex items-center rounded-md bg-green-100 px-3 py-1 text-sm font-medium text-green-700 hover:bg-green-200 transition">
                    Approve
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MerchantDashboard;
