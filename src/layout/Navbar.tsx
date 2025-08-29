import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../store/store";
import { logout } from "../store/Slice/AuthSlice";
import { MdLogout } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/"); // redirect to home after logout
  };
  return (
    <div className="w-full h-16 bg-[#5A827E] shadow-md flex justify-between items-center px-7">
      <button
        className="text-xl font-semibold text-white cursor-pointer"
        onClick={() => navigate("/")}
      >
        Finobytes
      </button>
      <div>
        {user ? (
          <button
            className="ml-4 px-4 py-2  text-white font-semibold rounded hover:bg-[#FAFFCA] hover:text-black transition"
            onClick={handleLogout}
          >
            <MdLogout />
          </button>
        ) : (
          <button
            className="ml-4 px-4 py-2 bg-[#FAFFCA] text-black font-semibold rounded hover:bg-[#FAFFCA]/80"
            onClick={() => navigate("/")}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
