// src/pages/NotFound.tsx
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#5A827E] p-6">
      <h1 className="text-6xl font-bold mb-4 text-gray-800">404</h1>
      <p className="text-xl mb-6 text-gray-600">Oops! Page not found.</p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-[#FAFFCA] text-black rounded hover:bg-[#FAFFCA]/80  transition"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
