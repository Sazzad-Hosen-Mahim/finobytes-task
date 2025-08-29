const MemberDashboard = () => {
  const pointsData = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    activity: `Activity ${i + 1}`,
    points: Math.floor(Math.random() * 100),
    date: new Date(Date.now() - i * 86400000).toLocaleDateString(), // dummy dates
  }));

  return (
    <div className="p-6 h-screen space-y-6 bg-gray-50">
      <h1 className="text-2xl font-semibold text-gray-800">Points Summary</h1>
      <div className="overflow-x-auto bg-white shadow rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-gray-600 uppercase text-sm">
                Id
              </th>
              <th className="px-4 py-3 text-left text-gray-600 uppercase text-sm">
                Activity
              </th>
              <th className="px-4 py-3 text-left text-gray-600 uppercase text-sm">
                Points
              </th>
              <th className="px-4 py-3 text-left text-gray-600 uppercase text-sm">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {pointsData.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-2">{row.id}</td>
                <td className="px-4 py-2">{row.activity}</td>
                <td className="px-4 py-2 font-medium text-green-600">
                  {row.points}
                </td>
                <td className="px-4 py-2 text-gray-500">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MemberDashboard;
