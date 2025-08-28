import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { z } from "zod";
import { login } from "../store/Slice/AuthSlice";

const adminSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default function AdminLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.auth.user);

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submit clicked", form);
    const result = adminSchema.safeParse(form);
    if (!result.success) {
      setError("Invalid input");
      return;
    }

    dispatch(login({ role: "admin", ...form }));
    setError("");
  };

  useEffect(() => {
    if (auth?.role === "admin") {
      navigate("/dashboard/admin");
    }
  }, [auth, navigate]);

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold">Welcome to Admin</h1>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <form onSubmit={handleSubmit} className="w-80 space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full p-2 border rounded"
          />
          {error && <p className="text-red-500">{error}</p>}
          <button className="w-full bg-blue-600 text-white p-2 rounded cursor-pointer hover:bg-blue-700 transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
