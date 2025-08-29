const MerchantNotification = () => {
  const notifications = [
    "Purchase Request: Purchase 101",
    "Update Request: Updated 102",
    "Delete Request: Deleted 103",
  ];

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">Notifications</h2>
      <ul className="divide-y divide-gray-200 rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        {notifications.length > 0 ? (
          notifications.map((note, i) => (
            <li
              key={i}
              className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition"
            >
              {note}
            </li>
          ))
        ) : (
          <li className="px-4 py-3 text-gray-500">No notifications</li>
        )}
      </ul>
    </div>
  );
};

export default MerchantNotification;
