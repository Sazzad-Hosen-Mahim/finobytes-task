import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const MerchantCustomers = () => {
  const [search, setSearch] = useState("");
  const customers = ["Mahim", "Maruf", "Sharuf", "Aayat", "Jubaer"];

  const filteredCustomers = customers.filter((c) =>
    c.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">Lookup Customer</h2>

      <div className="relative">
        <input
          type="text"
          placeholder="Search customer..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5A827E] focus:border-indigo-500 transition"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="absolute right-3 top-2.5 text-gray-400">
          <IoSearch />
        </span>
      </div>

      <ul className="divide-y divide-gray-200 rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        {filteredCustomers.length > 0 ? (
          filteredCustomers.map((c, i) => (
            <li
              key={i}
              className="px-4 py-2 hover:bg-gray-50 cursor-pointer transition"
            >
              {c}
            </li>
          ))
        ) : (
          <li className="px-4 py-2 text-gray-500">No customers found</li>
        )}
      </ul>
    </div>
  );
};

export default MerchantCustomers;
