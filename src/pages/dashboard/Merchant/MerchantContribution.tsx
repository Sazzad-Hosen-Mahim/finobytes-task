const MerchantContribution = () => {
  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="text-xl mb-2">Set Contribution Rate</h2>
      <form className="flex gap-2">
        <input
          type="number"
          placeholder="Rate (%)"
          className="border px-3 py-2 rounded"
        />
        <button className="bg-[#5A827E] text-white px-4 py-2 rounded cursor-pointer hover:bg-[#4e6f6a] transition">
          Save
        </button>
      </form>
    </div>
  );
};

export default MerchantContribution;
