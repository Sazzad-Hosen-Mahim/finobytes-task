import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-16 bg-[#5A827E] shadow-md flex justify-between items-center px-7">
      {/* <h1 className="text-xl font-semibold text-white">Finobytes</h1> */}
      <button
        className="text-xl font-semibold text-white cursor-pointer"
        onClick={() => navigate("/")}
      >
        Finobytes
      </button>
      <div>
        <button className="ml-4 px-4 py-2 bg-[#FAFFCA] text-black font-semibold rounded hover:bg-[#FAFFCA]/80">
          Login
        </button>
        <button className="ml-4 px-4 py-2 bg-[#FAFFCA] text-black font-semibold rounded hover:bg-[#FAFFCA]/80">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
